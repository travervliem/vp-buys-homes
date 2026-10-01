// Server-side Meta Conversion API sender.
// Designed to never throw — silently no-ops if not configured. Failures are
// logged but never propagate up to the lead-handling code path.

import crypto from 'node:crypto'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
const META_CAPI_TOKEN = process.env.META_CONVERSION_API_TOKEN || ''
const META_CAPI_TEST_CODE = process.env.META_CONVERSION_API_TEST_CODE || ''
const META_GRAPH_VERSION = 'v19.0'

function sha256(input: string): string {
  return crypto.createHash('sha256').update(input.trim().toLowerCase()).digest('hex')
}

function normalizePhoneE164(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  // US default: 10 digits → prepend country code 1.
  if (digits.length === 10) return '1' + digits
  return digits
}

export type CapiLeadPayload = {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  eventName?: string
  eventId?: string
  sourceUrl?: string
  ipAddress?: string
  userAgent?: string
  fbp?: string
  fbc?: string
  value?: number
  currency?: string
}

export async function sendMetaCapiEvent(
  payload: CapiLeadPayload
): Promise<{ ok: boolean; reason?: string }> {
  if (!META_PIXEL_ID || !META_CAPI_TOKEN) {
    return { ok: false, reason: 'not-configured' }
  }

  const userData: Record<string, string | string[]> = {}
  if (payload.email) userData.em = sha256(payload.email)
  if (payload.phone) userData.ph = sha256(normalizePhoneE164(payload.phone))
  if (payload.firstName) userData.fn = sha256(payload.firstName)
  if (payload.lastName) userData.ln = sha256(payload.lastName)
  if (payload.city) userData.ct = sha256(payload.city.replace(/\s+/g, ''))
  if (payload.state) userData.st = sha256(payload.state)
  if (payload.zip) userData.zp = sha256(payload.zip)
  if (payload.country) userData.country = sha256(payload.country.toLowerCase())
  if (payload.ipAddress) userData.client_ip_address = payload.ipAddress
  if (payload.userAgent) userData.client_user_agent = payload.userAgent
  if (payload.fbp) userData.fbp = payload.fbp
  if (payload.fbc) userData.fbc = payload.fbc

  const event: Record<string, any> = {
    event_name: payload.eventName || 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: userData,
  }
  if (payload.eventId) event.event_id = payload.eventId
  if (payload.sourceUrl) event.event_source_url = payload.sourceUrl
  if (payload.value) {
    event.custom_data = { value: payload.value, currency: payload.currency || 'USD' }
  }

  const body: Record<string, any> = { data: [event] }
  if (META_CAPI_TEST_CODE) body.test_event_code = META_CAPI_TEST_CODE

  const url = `https://graph.facebook.com/${META_GRAPH_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(META_CAPI_TOKEN)}`

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('[meta-capi] non-2xx', res.status, text.slice(0, 300))
      return { ok: false, reason: `http-${res.status}` }
    }
    return { ok: true }
  } catch (e) {
    console.error('[meta-capi] fetch failed', e)
    return { ok: false, reason: 'fetch-failed' }
  }
}

// _fbp and _fbc cookies are set by the browser-side Meta Pixel and are needed
// to dedupe pixel + CAPI events for the same user.
export function parseFbCookies(cookieHeader: string | null): { fbp?: string; fbc?: string } {
  if (!cookieHeader) return {}
  const out: { fbp?: string; fbc?: string } = {}
  for (const part of cookieHeader.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === '_fbp') out.fbp = v.join('=')
    if (k === '_fbc') out.fbc = v.join('=')
  }
  return out
}
