// One-time Google OAuth helper for a Desktop OAuth client.
// Exchanges browser consent for a long-lived refresh token and prints the
// env-file block you should paste into `.env.local`.
//
// Usage:
//   node scripts/gsc-auth.mjs /path/to/oauth-client.json
// or set GSC_OAUTH_CLIENT_FILE env var instead of passing the path.

import http from 'node:http'
import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { google } from 'googleapis'

const clientFile =
  process.argv[2] ||
  process.env.GSC_OAUTH_CLIENT_FILE ||
  path.join(os.homedir(), '.config/vpbuyshomes/oauth-client.json')

if (!fs.existsSync(clientFile)) {
  console.error(`[gsc-auth] Client credentials JSON not found at: ${clientFile}`)
  console.error('Pass the path as the first arg, e.g.:')
  console.error('  node scripts/gsc-auth.mjs ~/.config/vpbuyshomes/oauth-client.json')
  process.exit(1)
}

const raw = JSON.parse(fs.readFileSync(clientFile, 'utf8'))
const installed = raw.installed || raw.web
if (!installed?.client_id || !installed?.client_secret) {
  console.error('[gsc-auth] JSON does not look like a Google OAuth client file.')
  console.error('Expected top-level key `installed` (Desktop app) or `web` (Web app).')
  process.exit(1)
}

const { client_id, client_secret } = installed

const PORT = 53682
const REDIRECT = `http://localhost:${PORT}`

const oauth2 = new google.auth.OAuth2(client_id, client_secret, REDIRECT)
const authUrl = oauth2.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
})

const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, REDIRECT)
    const code = u.searchParams.get('code')
    const err = u.searchParams.get('error')
    if (err) {
      res.writeHead(400, { 'Content-Type': 'text/plain' }).end(`Auth error: ${err}`)
      console.error(`[gsc-auth] OAuth consent returned error: ${err}`)
      server.close()
      process.exit(1)
    }
    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' }).end('Missing ?code')
      return
    }
    const { tokens } = await oauth2.getToken(code)
    res.writeHead(200, { 'Content-Type': 'text/html' }).end(
      '<html><body style="font-family:sans-serif;padding:40px;max-width:520px;margin:0 auto"><h2>Auth complete.</h2><p>You can close this tab and return to your terminal.</p></body></html>'
    )
    if (!tokens.refresh_token) {
      console.error('\n[gsc-auth] Google did not return a refresh_token.')
      console.error('This usually means you already consented with this client before.')
      console.error('Revoke at https://myaccount.google.com/permissions, then rerun.')
      server.close()
      process.exit(1)
    }
    console.log('\n================ SAVE THIS IN .env.local ================')
    console.log(`GSC_CLIENT_ID=${client_id}`)
    console.log(`GSC_CLIENT_SECRET=${client_secret}`)
    console.log(`GSC_REFRESH_TOKEN=${tokens.refresh_token}`)
    console.log('# Set the property URL exactly as it appears in Search Console.')
    console.log('# Domain property:      sc-domain:vpbuyshomes.com')
    console.log('# URL-prefix property:  https://vpbuyshomes.com/')
    console.log('GSC_SITE_URL=https://vpbuyshomes.com/')
    console.log('=========================================================\n')
    server.close()
    process.exit(0)
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' }).end(String(e))
    console.error('[gsc-auth] token exchange failed:', e)
    server.close()
    process.exit(1)
  }
})

server.listen(PORT, () => {
  console.log(`[gsc-auth] listening on ${REDIRECT}`)
  console.log('[gsc-auth] opening browser for Google consent...')
  console.log(`[gsc-auth] if it does not open, paste this into your browser:\n  ${authUrl}\n`)
  exec(`open "${authUrl}"`)
})
