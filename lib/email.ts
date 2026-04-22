import { Resend } from 'resend'

const LEAD_EMAIL = 'traver97@gmail.com'

export async function sendLeadEmail(payload: any) {
  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f5f7fb;padding:32px">
      <div style="background:#1B365D;color:white;padding:20px 24px;border-radius:6px 6px 0 0">
        <h2 style="margin:0;font-size:20px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase">New Lead — VP Buys Homes</h2>
        ${payload.city ? `<p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px">${payload.city}, GA</p>` : ''}
      </div>
      <div style="background:white;padding:24px;border-radius:0 0 6px 6px;border:1px solid #D1DCE8">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${row('Name', payload.name)}
          ${row('Phone', `<a href="tel:${payload.phone}">${payload.phone}</a>`)}
          ${row('Email', `<a href="mailto:${payload.email}">${payload.email}</a>`)}
          ${row('Property Address', payload.address)}
          ${payload.reasonForSelling ? row('Reason for Selling', payload.reasonForSelling) : ''}
          ${payload.expectedPrice ? row('Expected Price', payload.expectedPrice) : ''}
          ${payload.roofAge ? row('Roof Age', payload.roofAge) : ''}
          ${payload.hvacAge ? row('HVAC Age', payload.hvacAge) : ''}
          ${payload.timeline ? row('Ideal Timeline', payload.timeline) : ''}
          ${payload.notes ? row('Notes', payload.notes) : ''}
          ${row('Submitted', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))}
        </table>
      </div>
    </div>
  `

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY not set — lead not emailed.')
    return { ok: false, provider: 'none' }
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'VP Buys Homes <leads@vpbuyshomes.com>',
    to: LEAD_EMAIL,
    subject: `New Lead — ${payload.name}${payload.city ? ` (${payload.city})` : ''}`,
    html,
  })

  if (error) {
    console.error('[email] Resend error:', error)
    return { ok: false, provider: 'resend', error }
  }

  return { ok: true, provider: 'resend' }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #EEF2F7;font-weight:600;color:#1B365D;width:140px;vertical-align:top">${label}</td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #EEF2F7;color:#374151">${value}</td>
    </tr>
  `
}
