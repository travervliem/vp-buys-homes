// Pull top 100 indexed/impressed URLs from the last 90 days — used to
// identify the complete set of old URLs we need to redirect.
import { google } from 'googleapis'
const { GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN, GSC_SITE_URL } = process.env
const oauth2 = new google.auth.OAuth2(GSC_CLIENT_ID, GSC_CLIENT_SECRET)
oauth2.setCredentials({ refresh_token: GSC_REFRESH_TOKEN })
const sc = google.searchconsole({ version: 'v1', auth: oauth2 })

const end = new Date()
const start = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
const fmt = d => d.toISOString().slice(0, 10)

const { data } = await sc.searchanalytics.query({
  siteUrl: GSC_SITE_URL,
  requestBody: {
    startDate: fmt(start),
    endDate: fmt(end),
    dimensions: ['page'],
    rowLimit: 100,
  },
})

console.log(`\nPages with impressions in last 90 days (${fmt(start)} → ${fmt(end)}):`)
console.log(`Total: ${(data.rows || []).length}\n`)
for (const r of data.rows || []) {
  console.log(`${r.keys[0]}  impr=${r.impressions}  clicks=${r.clicks}  pos=${r.position.toFixed(1)}`)
}

console.log('\n--- Also fetching the old www sitemap if still published ---')
try {
  const resp = await fetch('https://www.vpbuyshomes.com/sitemap.xml').catch(() => null)
  if (resp && resp.ok) {
    const text = await resp.text()
    const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
    console.log(`Old www sitemap still live — ${urls.length} URLs:`)
    urls.forEach(u => console.log(`  ${u}`))
  } else {
    console.log('(old www sitemap no longer fetchable)')
  }
} catch (e) {
  console.log(`(error fetching old sitemap: ${e.message})`)
}
