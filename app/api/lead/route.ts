import { NextResponse } from 'next/server'
import { leadSchema, partialLeadSchema } from '@/lib/validation'
import { sendLeadEmail } from '@/lib/email'
import { logLead } from '@/lib/logger'
import { logLocal } from '@/lib/loggers/local'

const CITIES = ['Statesboro','Rincon','Savannah','Metter','Springfield','Swainsboro','Claxton','Vidalia','Millen','Waynesboro','Jesup','Dublin']

function detectCity(address: string): string | null {
  const hit = CITIES.find(c => address.toLowerCase().includes(c.toLowerCase()))
  return hit ?? null
}

export async function POST(req: Request) {
  let raw: any
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

  const enriched = {
    ...payload,
    city,
    status,
    sessionId,
    source,
    userAgent: req.headers.get('user-agent'),
  }

  // Always log locally first — this is the guaranteed fallback that never fails silently.
  const localResult = await logLocal(enriched).catch((e: unknown) => {
    console.error('[lead] local log failed', e)
    return { ok: false, storage: 'local' as const }
  })

  // Partial leads go to sheets + local only — no email to avoid duplicate notifications
  // when the user completes step 2. Full leads also trigger an email.
  const tasks: Array<Promise<any>> = [logLead({ ...enriched })]
  if (!isPartial) tasks.push(sendLeadEmail({ ...enriched }))

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
      local: localResult?.ok ?? false,
      email: email?.ok ?? false,
      logged: logged?.ok ?? false,
    })
  )

  // TEMP — always include debug details while diagnosing prod failure.
  return NextResponse.json({
    ok: true,
    status,
    sessionId,
    version: 'diagnose-1',
    saved: {
      local: localResult?.ok ?? false,
      email: email?.ok ?? false,
      sheets: logged?.ok ?? false,
    },
    debug: { email, logged, localResult, sheetsUrlSet: Boolean(process.env.SHEETS_WEBHOOK_URL), resendSet: Boolean(process.env.RESEND_API_KEY) },
  })
}
