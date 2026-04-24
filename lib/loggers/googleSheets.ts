// Lead log backed by a Google Apps Script web app webhook.
//
// Deployment quirk: a successful POST to /exec returns 302 → /macros/echo
// on script.googleusercontent.com. In Vercel's Node 20 runtime, `fetch` is
// Web-Fetch-spec-compliant, which means `redirect: 'manual'` yields an
// opaque response (status 0). So we use `redirect: 'follow'`: fetch will
// downgrade POST→GET on the 302 and return whatever googleusercontent.com
// serves. That final response is typically 200 (Workspace-gated HTML body)
// regardless of whether doPost ran — but by the time we see that final
// 200, the original POST has already been processed by Apps Script and
// the row is written to the sheet. So: treat any non-5xx final status as
// "Google accepted the POST" and report ok.

export async function logToGoogleSheets(row: Record<string, any>) {
  const url = process.env.SHEETS_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'missing-env' }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
      redirect: 'follow',
    })

    if (res.status < 500) return { ok: true, status: res.status }

    const text = await res.text().catch(() => '')
    console.error('[sheets-webhook] upstream 5xx', res.status, text.slice(0, 200))
    return { ok: false, reason: 'upstream-5xx', status: res.status }
  } catch (err) {
    console.error('[sheets-webhook] fetch failed', err)
    return { ok: false, reason: 'fetch-failed', error: String(err) }
  }
}
