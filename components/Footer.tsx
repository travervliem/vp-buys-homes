import Link from 'next/link'

const AREAS = [
  { name: 'Statesboro, GA', href: '/areas/statesboro-ga' },
  { name: 'Rincon, GA', href: '/areas/rincon-ga' },
  { name: 'Savannah, GA', href: '/areas/savannah-ga' },
  { name: 'Metter, GA', href: '/areas/metter-ga' },
  { name: 'Springfield, GA', href: '/areas/springfield-ga' },
  { name: 'Swainsboro, GA', href: '/areas/swainsboro-ga' },
  { name: 'Claxton, GA', href: '/areas/claxton-ga' },
  { name: 'Vidalia, GA', href: '/areas/vidalia-ga' },
]

const LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/areas', label: 'Areas We Serve' },
  { href: '/sell', label: 'Get Your Offer' },
  { href: '/blog', label: 'Resources' },
]

function FooterLogo() {
  return (
    <svg viewBox="0 0 200 60" width="160" height="48" xmlns="http://www.w3.org/2000/svg" aria-label="VP Buys Homes">
      <text x="0" y="52" fontFamily="'Barlow Semi Condensed','Arial Narrow',sans-serif" fontSize="56" fontWeight="700" fill="white" letterSpacing="1">VP</text>
      <polygon points="88,4 110,18 110,56 66,56 66,18" fill="white" />
      <rect x="78" y="36" width="22" height="20" rx="2" fill="#1B365D" />
      <line x1="122" y1="12" x2="122" y2="52" stroke="white" strokeWidth="2" opacity="0.20" />
      <text x="132" y="36" fontFamily="'Barlow Semi Condensed','Arial Narrow',sans-serif" fontSize="22" fontWeight="700" fill="white" letterSpacing="3">VP EQUITIES</text>
      <text x="133" y="52" fontFamily="'Nunito Sans','Helvetica Neue',sans-serif" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.40)" letterSpacing="3">VPBUYSHOMES.COM</text>
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#0F2040', color: 'white' }}>
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <FooterLogo />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: '1.7', fontFamily: "'Nunito Sans',sans-serif" }}>
              VP Equities LLC buys houses for cash across Southeast Georgia. No repairs. No fees. Close in days.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:+19125156060" style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>
                P (912) 515-6060
              </a>
              <a href="mailto:leads@vpbuyshomes.com" style={{ color: 'rgba(255,255,255,0.70)', fontSize: '14px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>
                W vpbuyshomes.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow eyebrow-white mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="eyebrow eyebrow-white mb-4">Areas We Serve</p>
            <ul className="flex flex-col gap-2">
              {AREAS.map(a => (
                <li key={a.href}>
                  <Link href={a.href} className="footer-link">{a.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA col */}
          <div>
            <p className="eyebrow eyebrow-white mb-4">Ready to Sell?</p>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '14px', lineHeight: '1.65', fontFamily: "'Nunito Sans',sans-serif", marginBottom: '16px' }}>
              Get a no-obligation cash offer in 24 hours. We buy houses as-is across Southeast Georgia.
            </p>
            <Link href="/sell" className="btn-amber">Get My Cash Offer</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)', marginTop: '48px', paddingTop: '24px' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontFamily: "'Nunito Sans',sans-serif" }}>
            © {year} VP Equities LLC dba VP Buys Homes · Statesboro, GA · All rights reserved
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontFamily: "'Nunito Sans',sans-serif" }}>
            We are not real estate agents. We are direct cash buyers.
          </p>
        </div>
      </div>
    </footer>
  )
}
