import { NextResponse } from 'next/server'
import { leadSchema, partialLeadSchema, type EnrichedLead } from '@/lib/validation'
import { sendLeadEmail } from '@/lib/email'
import { logToGoogleSheets } from '@/lib/loggers/googleSheets'
import { logLocal } from '@/lib/loggers/local'
import { RECOGNIZED_CITIES } from '@/lib/areas'
import { parseFbCookies, sendMetaCapiEvent } from '@/lib/analytics/meta-capi'

function detectCity(address: string): string | null {
  const lower = address.toLowerCase()
  return RECOGNIZED_CITIES.find(c => lower.includes(c.toLowerCase())) ?? null
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/)
  if (parts.length < 2) return { first: parts[0] || '', last: '' }
  return { first: parts[0], last: parts.slice(1).join(' ') }
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid JSON' }, { status: 400 })
  }

  const isPartial = Boolean(raw?.partial)
  const sessionId: string = typeof raw?.sessionId === 'string' ? raw.sessionId : ''
  const source: string = typeof raw?.source === 'string' ? raw.source : 'website'

  const parsed = isPartial
    ? partialLeadSchema.safeParse(raw)
    : leadSchema.safeParse(raw)

  if (!parsed.success) {
    // Even when validation fails on a partial, capture whatever we got locally —
    // losing a lead because of validation is the opposite of what we want.
    if (isPartial) {
      await logLocal({
        ...raw,
        status: 'partial-invalid',
        sessionId,
        source,
        userAgent: req.headers.get('user-agent'),
      }).catch(() => null)
    }
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const payload = parsed.data
  const city = detectCity(payload.address)
  const status = isPartial ? 'partial' : 'complete'

  const attribution = payload.attribution || {}
  const eventId = payload.eventId || ''

  const enriched: EnrichedLead = {
    ...payload,
    city,
    status,
    sessionId,
    source,
    eventId,
    utmSource: attribution.utm_source || '',
    utmMedium: attribution.utm_medium || '',
    utmCampaign: attribution.utm_campaign || '',
    utmTerm: attribution.utm_term || '',
    utmContent: attribution.utm_content || '',
    gclid: attribution.gclid || '',
    fbclid: attribution.fbclid || '',
    referrer: attribution.referrer || '',
    landingPage: attribution.landing_page || '',
    userAgent: req.headers.get('user-agent'),
  }

  // Photo blobs go to email only — strip them out of the sheets/local rows
  // so we don't push megabytes of base64 into the spreadsheet.
  const { photos, ...enrichedNoPhotos } = enriched
  const photoCount = photos?.length ?? 0
  const sheetsRow = { ...enrichedNoPhotos, photoCount }

  // Always log locally first — this is the guaranteed fallback that never fails silently.
  const localResult = await logLocal(sheetsRow).catch((e: unknown) => {
    console.error('[lead] local log failed', e)
    return { ok: false, storage: 'local' as const }
  })

  // Partial leads go to sheets + local only — no email to avoid duplicate notifications
  // when the user completes step 2. Full leads also trigger an email + Meta CAPI.
  const tasks: Array<Promise<any>> = [logToGoogleSheets(sheetsRow)]
  if (!isPartial) {
    tasks.push(sendLeadEmail(enriched))

    // Server-side Meta Conversion API. Same eventId as the browser pixel
    // for dedupe. No-ops if META_CONVERSION_API_TOKEN is unset.
    const fb = parseFbCookies(req.headers.get('cookie'))
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined
    const { first, last } = splitName(payload.name)
    const sourceUrl = attribution.landing_page
      ? `${process.env.NEXT_PUBLIC_SITE_URL || ''}${attribution.landing_page}`
      : undefined
    sendMetaCapiEvent({
      email: payload.email || undefined,
      phone: payload.phone,
      firstName: first,
      lastName: last,
      city: payload.pageCity || city || undefined,
      state: 'GA',
      country: 'US',
      eventName: 'Lead',
      eventId: eventId || `${sessionId}_complete`,
      sourceUrl,
      ipAddress: ip,
      userAgent: req.headers.get('user-agent') || undefined,
      fbp: fb.fbp,
      fbc: fb.fbc,
    }).catch(() => null)
  }

  const results = await Promise.allSettled(tasks)

  const logged =
    results[0].status === 'fulfilled'
      ? results[0].value
      : { ok: false, via: 'error' }
  const email = isPartial
    ? { ok: true, provider: 'skipped-partial' }
    : results[1] && results[1].status === 'fulfilled'
      ? results[1].value
      : { ok: false, provider: 'error', error: results[1] && 'reason' in results[1] ? String((results[1] as PromiseRejectedResult).reason) : 'unknown' }

  console.info(
    '[lead]',
    JSON.stringify({
      status,
      sessionId,
      source,
      city,
      pageCity: payload.pageCity || null,
      pageSituation: payload.pageSituation || null,
      local: localResult?.ok ?? false,
      email: email?.ok ?? false,
      logged: logged?.ok ?? false,
    })
  )

  return NextResponse.json({
    ok: true,
    status,
    sessionId,
    saved: {
      local: localResult?.ok ?? false,
      email: email?.ok ?? false,
      sheets: logged?.ok ?? false,
    },
  })
}
