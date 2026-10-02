import { Resend } from 'resend'
import { SITE } from './site'
import type { EnrichedLead } from './validation'

const LEAD_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'traver97@gmail.com'

// Preferred from-address (requires vpbuyshomes.com to be verified in Resend).
// Resend's sandbox from-address works without domain verification and can be
// used to confirm delivery end-to-end before DNS is configured.
const PREFERRED_FROM = `${SITE.name} <${SITE.email}>`
const FALLBACK_FROM = `${SITE.name} <onboarding@resend.dev>`

export async function sendLeadEmail(payload: EnrichedLead) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY not set — lead email skipped. Set it in Vercel → Settings → Environment Variables.')
    return { ok: false, provider: 'none', reason: 'missing-resend-api-key' }
  }

  const html = buildHtml(payload)
  const subject = `New Lead — ${payload.name}${payload.city ? ` (${payload.city})` : ''}`

  const resend = new Resend(apiKey)

  // Attempt preferred from-address first. If domain isn't verified yet, fall
  // back to the Resend sandbox so leads still reach the inbox during setup.
  // Only pass replyTo when it parses as a plausible email. A malformed one
  // causes Resend to reject the whole send.
  const replyTo = isPlausibleEmail(payload.email) ? payload.email : undefined

  // Photo attachments — payload.photos is [{ name, type, base64 }] from the
  // browser (client-resized + base64-encoded, no data: prefix).
  const attachments = (payload.photos ?? [])
    .filter(p => p.base64.length > 0)
    .slice(0, 6)
    .map((p, i) => ({
      filename: (p.name || `photo-${i + 1}.jpg`).replace(/[^a-zA-Z0-9._-]/g, '_'),
      content: p.base64,
    }))

  const firstAttempt = await resend.emails.send({
    from: PREFERRED_FROM,
    to: LEAD_EMAIL,
    replyTo,
    subject,
    html,
    attachments: attachments.length > 0 ? attachments : undefined,
  }).catch(err => ({ error: err }))

  if (!('error' in firstAttempt) || !firstAttempt.error) {
    return { ok: true, provider: 'resend', from: PREFERRED_FROM }
  }

  const errMsg = String(firstAttempt.error?.message || firstAttempt.error || '')
  const errName = String((firstAttempt.error as { name?: string } | null)?.name || '')
  const looksLikeDomainIssue =
    /domain|verify|not.?verified|from|identity/i.test(errMsg) ||
    errName === 'validation_error'
  console.warn('[email] preferred-from failed:', errName, '|', errMsg, '— trying fallback from-address')

  if (!looksLikeDomainIssue) {
    return { ok: false, provider: 'resend', from: PREFERRED_FROM, error: errMsg }
  }

  const second = await resend.emails.send({
    from: FALLBACK_FROM,
    to: LEAD_EMAIL,
    replyTo,
    subject: `[UNVERIFIED DOMAIN] ${subject}`,
    html: `
      <div style="background:#FFF8E6;border:1px solid #F2A65A;padding:12px 16px;border-radius:6px;margin-bottom:16px;font-family:sans-serif;font-size:13px;color:#1B365D">
        <strong>Note:</strong> Sent from Resend sandbox because <code>vpbuyshomes.com</code> is not yet verified. Configure DNS in Resend to remove this header.
      </div>
      ${html}
    `,
    attachments: attachments.length > 0 ? attachments : undefined,
  }).catch(err => ({ error: err }))

  if (!('error' in second) || !second.error) {
    return { ok: true, provider: 'resend', from: FALLBACK_FROM, warning: 'domain-not-verified' }
  }

  const secondErr = String(second.error?.message || second.error || '')
  console.error('[email] both attempts failed:', errMsg, '|', secondErr)
  return { ok: false, provider: 'resend', error: secondErr }
}

function buildHtml(payload: EnrichedLead) {
  const statusBanner =
    payload.status === 'partial'
      ? `<div style="background:#FEF3C7;border-left:4px solid #F2A65A;padding:10px 14px;margin-bottom:16px;font-family:sans-serif;font-size:13px;color:#92400E">
           <strong>Partial Lead:</strong> Submitted step 1 only — email + property details missing. Session: ${escapeHtml(payload.sessionId || 'unknown')}
         </div>`
      : ''

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f5f7fb;padding:32px">
      ${statusBanner}
      <div style="background:#1B365D;color:white;padding:20px 24px;border-radius:6px 6px 0 0">
        <h2 style="margin:0;font-size:20px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase">New Lead — VP Buys Homes</h2>
        ${payload.city ? `<p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px">${escapeHtml(payload.city)}, GA</p>` : ''}
      </div>
      <div style="background:white;padding:24px;border-radius:0 0 6px 6px;border:1px solid #D1DCE8">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${row('Name', escapeHtml(payload.name))}
          ${row('Phone', `<a href="tel:${escapeHtml(payload.phone)}">${escapeHtml(payload.phone)}</a>`)}
          ${payload.email ? row('Email', `<a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a>`) : ''}
          ${row('Property Address', escapeHtml(payload.address))}
          ${payload.reasonForSelling ? row('Reason for Selling', escapeHtml(payload.reasonForSelling)) : ''}
          ${payload.expectedPrice ? row('Expected Price', escapeHtml(payload.expectedPrice)) : ''}
          ${payload.roofAge ? row('Roof Age', escapeHtml(payload.roofAge)) : ''}
          ${payload.hvacAge ? row('HVAC Age', escapeHtml(payload.hvacAge)) : ''}
          ${payload.timeline ? row('Ideal Timeline', escapeHtml(payload.timeline)) : ''}
          ${payload.notes ? row('Notes', escapeHtml(payload.notes)) : ''}
          ${payload.source ? row('Source', escapeHtml(payload.source)) : ''}
          ${payload.pageCity ? row('Landing Page (City)', escapeHtml(payload.pageCity)) : ''}
          ${payload.pageSituation ? row('Landing Page (Situation)', escapeHtml(payload.pageSituation)) : ''}
          ${row('Submitted', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))}
        </table>
      </div>
    </div>
  `
}

// Every submitter-controlled value is escaped before it goes into the HTML email.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isPlausibleEmail(s: unknown): s is string {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

// `value` must already be HTML-safe (escape it with escapeHtml).
function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #EEF2F7;font-weight:600;color:#1B365D;width:140px;vertical-align:top">${label}</td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #EEF2F7;color:#374151">${value}</td>
    </tr>
  `
}
