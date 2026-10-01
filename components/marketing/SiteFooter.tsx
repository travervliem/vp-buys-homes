import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { AREAS, areaHref } from '@/lib/areas'

const SITEMAP = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/situations', label: 'Situations' },
  { href: '/areas', label: 'Areas we serve' },
  { href: '/sell', label: 'Get your offer' },
  { href: '/blog', label: 'Resources' },
]

const COMPANY = [
  { href: '/how-it-works', label: 'About VP Equities' },
  { href: '/sell', label: 'Privacy' },
  { href: '/sell', label: 'Terms' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-deep text-white" style={{ background: '#0F2040' }}>
      <div className="max-w-container mx-auto px-[18px] sm:px-[28px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo size="md" reversed withDba />
            <p className="font-body text-[13px] mt-4" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Cash for houses across Southeast Georgia. Direct buyer — not agents. No repairs. No fees. Close in days.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="tel:+19125156060"
                className="font-body text-[14px] no-underline transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="text-amber mr-1 font-display font-bold">P</span>(912) 515-6060
              </a>
              <a
                href="mailto:leads@vpbuyshomes.com"
                className="font-body text-[14px] no-underline transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="text-amber mr-1 font-display font-bold">E</span>leads@vpbuyshomes.com
              </a>
            </div>
          </div>

          <div>
            <FooterEyebrow>Sitemap</FooterEyebrow>
            <ul className="flex flex-col gap-2 mt-4">
              {SITEMAP.map(l => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterEyebrow>Areas we serve</FooterEyebrow>
            <ul className="flex flex-col gap-2 mt-4">
              {AREAS.map(a => (
                <li key={a.slug}>
                  <Link href={areaHref(a.slug)} className="footer-link">{a.name}, {a.state}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterEyebrow>Ready to sell?</FooterEyebrow>
            <p className="font-body text-[14px] mt-4 mb-4" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
              Get a no-obligation cash offer in 48 hours. We buy houses as-is across Southeast Georgia.
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-[22px] py-3 bg-amber text-white font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline transition-colors duration-150 hover:bg-amber-dark"
            >
              Get My Cash Offer
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <p className="font-body text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {year} VP Equities LLC dba VP Buys Homes · Southeast Georgia · Since 2021
          </p>
          <p className="font-body text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            We are not real estate agents. We are direct cash buyers.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body text-[11px] font-bold uppercase"
      style={{ letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)' }}
    >
      {children}
    </p>
  )
}
