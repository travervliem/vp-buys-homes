// Search Console health check. Reads GSC_* env vars and prints site
// verification, sitemap status, index coverage, and the top 10 queries
// + pages from the last 7 days.
//
// Usage:
//   npm run gsc:check
// Expects .env.local to contain:
//   GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN, GSC_SITE_URL

import { google } from 'googleapis'

const { GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN, GSC_SITE_URL } = process.env

if (!GSC_CLIENT_ID || !GSC_CLIENT_SECRET || !GSC_REFRESH_TOKEN) {
  console.error('[gsc-check] Missing GSC_CLIENT_ID / GSC_CLIENT_SECRET / GSC_REFRESH_TOKEN.')
  console.error('Run `npm run gsc:auth` first and paste the output into .env.local.')
  process.exit(1)
}

const oauth2 = new google.auth.OAuth2(GSC_CLIENT_ID, GSC_CLIENT_SECRET)
oauth2.setCredentials({ refresh_token: GSC_REFRESH_TOKEN })
const sc = google.searchconsole({ version: 'v1', auth: oauth2 })

async function resolveSite() {
  if (GSC_SITE_URL) return GSC_SITE_URL
  const { data } = await sc.sites.list()
  const verified = (data.siteEntry || []).filter(
    s => s.permissionLevel && s.permissionLevel !== 'siteUnverifiedUser'
  )
  const match = verified.find(s => /vpbuyshomes/i.test(s.siteUrl || ''))
  if (!match) {
    console.error('[gsc-check] No vpbuyshomes.com property on this account. Verified sites:')
    verified.forEach(s => console.error(`  ${s.siteUrl}  (${s.permissionLevel})`))
    process.exit(1)
  }
  return match.siteUrl
}

function fmtDate(d) {
  return d.toISOString().slice(0, 10)
}

function pad(s, n) {
  s = String(s)
  return s.length >= n ? s : s + ' '.repeat(n - s.length)
}

const site = await resolveSite()
console.log(`\nProperty: ${site}`)

const { data: siteInfo } = await sc.sites.get({ siteUrl: site })
console.log(`Permission: ${siteInfo.permissionLevel}\n`)

const { data: sitemaps } = await sc.sitemaps.list({ siteUrl: site })
const list = sitemaps.sitemap || []
console.log(`Sitemaps (${list.length}):`)
if (list.length === 0) {
  console.log('  (none submitted — submit https://vpbuyshomes.com/sitemap.xml in Search Console)')
}
for (const s of list) {
  const submitted = (s.contents || []).reduce((n, c) => n + (parseInt(c.submitted, 10) || 0), 0)
  const indexed = (s.contents || []).reduce((n, c) => n + (parseInt(c.indexed, 10) || 0), 0)
  console.log(`  ${s.path}`)
  console.log(`    last submitted:  ${s.lastSubmitted || 'n/a'}`)
  console.log(`    last downloaded: ${s.lastDownloaded || 'n/a'}`)
  console.log(`    urls: submitted=${submitted} indexed=${indexed}`)
  console.log(`    errors=${s.errors ?? 0} warnings=${s.warnings ?? 0}`)
}

const end = new Date()
const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

const q = await sc.searchanalytics.query({
  siteUrl: site,
  requestBody: {
    startDate: fmtDate(start),
    endDate: fmtDate(end),
    dimensions: ['query'],
    rowLimit: 10,
  },
})
console.log(`\nTop 10 queries (${fmtDate(start)} → ${fmtDate(end)}):`)
if (!q.data.rows || q.data.rows.length === 0) {
  console.log('  (no data — property may be newly verified, or had no impressions this week)')
} else {
  for (const r of q.data.rows) {
    console.log(
      `  ${pad(r.keys[0], 48)} clicks=${pad(r.clicks, 4)} impr=${pad(r.impressions, 6)} ctr=${(r.ctr * 100).toFixed(1)}% pos=${r.position.toFixed(1)}`
    )
  }
}

const p = await sc.searchanalytics.query({
  siteUrl: site,
  requestBody: {
    startDate: fmtDate(start),
    endDate: fmtDate(end),
    dimensions: ['page'],
    rowLimit: 10,
  },
})
console.log(`\nTop 10 pages (${fmtDate(start)} → ${fmtDate(end)}):`)
if (!p.data.rows || p.data.rows.length === 0) {
  console.log('  (no data yet)')
} else {
  for (const r of p.data.rows) {
    console.log(`  ${r.keys[0]}`)
    console.log(`    clicks=${r.clicks} impr=${r.impressions} pos=${r.position.toFixed(1)}`)
  }
}

console.log('\nSearch Console API integration: working.\n')
