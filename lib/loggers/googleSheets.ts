// Lead log backed by a Google Apps Script web app webhook.
// Previously used google-spreadsheet + a service-account JSON key, but the
// current Google Workspace org policy disables service-account key creation
// (iam.disableServiceAccountKeyCreation). The webhook approach sidesteps the
// policy entirely and requires only one env var: SHEETS_WEBHOOK_URL.
//
// Deployment quirk: Workspace-owned Apps Script web apps return a 302 to
// script.googleusercontent.com/macros/echo on successful POSTs. The body of
// that echo URL is gated behind the org's auth domain, so anonymous callers
// (like Vercel serverless functions) can't read the JSON response. But the
// POST itself is processed and a row is written. We therefore treat any 2xx
// or 302 response as success and do not attempt to read the body.

export async function logToGoogleSheets(row: Record<string, any>) {
  const url = process.env.SHEETS_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'missing-env' }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
      redirect: 'manual',
    })

    const ok = res.status === 302 || (res.status >= 200 && res.status < 300)
    if (ok) return { ok: true }

    const text = await res.text().catch(() => '')
    console.error('[sheets-webhook] non-ok response', res.status, text.slice(0, 200))
    return { ok: false, reason: 'bad-status', status: res.status }
  } catch (err) {
    console.error('[sheets-webhook] fetch failed', err)
    return { ok: false, reason: 'fetch-failed', error: String(err) }
  }
}
