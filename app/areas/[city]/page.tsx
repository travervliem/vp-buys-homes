import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/JsonLd'
import { AREAS } from '@/lib/areas'
import { AREA_PAGE_CONTENT } from '@/lib/area-pages'
import { breadcrumbJsonLd, localBusinessAreaJsonLd } from '@/lib/seo'
import { absoluteUrl } from '@/lib/site'
import { SITUATIONS, getIntersection } from '@/lib/situations'

export async function generateStaticParams() {
  return AREAS.map(a => ({ city: a.slug }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const area = AREAS.find(a => a.slug === params.city)
  if (!area) return { title: 'Area Not Found' }

  const title = `Sell My House Fast ${area.name}, GA — Cash Home Buyers`
  const description = `We buy houses for cash in ${area.name}, GA (${area.county}). No repairs, no fees, no commissions. Cash offer within 48 hours. Close in as little as 7 days.`

  return {
    title,
    description,
    keywords: [
      `sell my house fast ${area.name} GA`,
      `cash home buyers ${area.name} GA`,
      `we buy houses ${area.name} GA`,
      `cash for houses ${area.county}`,
      `sell house as is ${area.name}`,
      `sell my house without a realtor ${area.name}`,
      `buy my house fast ${area.name} Georgia`,
      `cash offer for home ${area.name} GA`,
      `sell inherited house ${area.name}`,
      `stop foreclosure ${area.name} GA`,
      `sell house in divorce ${area.county}`,
      `we buy ugly houses ${area.name} GA`,
      `sell house as is no repairs ${area.county}`,
      `fast home sale ${area.name} Georgia`,
    ],
    alternates: { canonical: absoluteUrl(`/areas/${area.slug}`) },
    openGraph: {
      title: `${title} | VP Buys Homes`,
      description,
      url: absoluteUrl(`/areas/${area.slug}`),
    },
  }
}

export default function AreaPage({ params }: { params: { city: string } }) {
  const area = AREAS.find(a => a.slug === params.city)
  const copy = AREA_PAGE_CONTENT[params.city]
  if (!area || !copy) return notFound()

  const schema = localBusinessAreaJsonLd(area.name, area.county, area.slug)
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Areas', href: '/areas' },
      { name: `${area.name}, GA`, href: `/areas/${area.slug}` },
    ]
  )

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />

      <SiteHeader />

      <Hero
        eyebrow={`${area.county} · Southeast Georgia`}
        headline={
          <>
            We Buy Houses for <em>Cash</em> in {area.name}, GA
          </>
        }
        sub={copy.subheadline}
        bullets={[
          'Cash offer in 48 hours — no obligation',
          'Close in 7 days or on your schedule',
          'Any condition. Any situation.',
        ]}
      >
        <LeadForm source={`area-${area.slug}`} context={{ city: area.slug }} />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <nav className="mb-6 font-body text-[13px] text-ink-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
            <li><Link href="/" className="text-ink-500 hover:text-amber-dark no-underline">Home</Link></li>
            <li className="text-ink-300">/</li>
            <li><Link href="/areas" className="text-ink-500 hover:text-amber-dark no-underline">Areas</Link></li>
            <li className="text-ink-300">/</li>
            <li className="text-ink-700">{area.name}, GA</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            {copy.body.map((para, i) => (
              <p key={i} className="ds-body mb-5">
                {para}
              </p>
            ))}

            <h2 className="ds-h3 mt-10 mb-5">Common situations we help with in {area.name}</h2>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {copy.situations.map(s => (
                <li key={s} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
                  <span aria-hidden className="text-amber-dark font-bold shrink-0 mt-[2px]">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Offer in', value: '48 hours' },
                { label: 'Close in as fast as', value: '7 days' },
                { label: 'Fees', value: 'None' },
                { label: 'Repairs required', value: 'None' },
              ].map(item => (
                <div key={item.label} className="bg-white border border-hairline rounded-lg p-5 text-center">
                  <p className="font-body text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-1">{item.label}</p>
                  <p className="font-display text-[24px] font-bold text-navy">{item.value}</p>
                </div>
              ))}
            </div>

            <h2 className="ds-h3 mt-12 mb-2">Deeper guides — {area.name} situations</h2>
            <p className="font-body text-[14px] text-ink-500 leading-[1.6] mb-5">
              How specific situations work in {area.county} — including the local courthouse, legal-organ newspaper, and how we help homeowners through each.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SITUATIONS.map(s => {
                const filled = Boolean(getIntersection(area.slug, s.slug))
                const inner = (
                  <div
                    className={`bg-white rounded-lg p-4 h-full ${filled ? 'border border-hairline' : 'border border-dashed border-hairline'}`}
                    style={{ opacity: filled ? 1 : 0.55 }}
                  >
                    <p className="font-display text-[18px] font-bold text-navy leading-[1.2] mb-1">
                      {s.label}
                    </p>
                    <p className={`font-body text-[12px] font-bold tracking-[0.04em] ${filled ? 'text-amber-dark' : 'text-ink-400'}`}>
                      {filled ? `${s.label} in ${area.name} →` : 'Coming soon'}
                    </p>
                  </div>
                )
                return filled ? (
                  <Link key={s.slug} href={`/areas/${area.slug}/${s.slug}`} className="no-underline">
                    {inner}
                  </Link>
                ) : (
                  <div key={s.slug}>{inner}</div>
                )
              })}
            </div>
          </div>

          <aside id="get-offer" className="lg:sticky lg:top-24">
            <h2 className="ds-h4 mb-3">Get your cash offer — {area.name}</h2>
            <LeadForm source={`area-aside-${area.slug}`} context={{ city: area.slug }} />
          </aside>
        </div>
      </Section>

      <FinalCTA
        title={<>Get a real cash offer in <em>{area.name}</em></>}
        sub={`We close at a local closing attorney in ${area.county}. No fees, no repairs, no surprises.`}
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
