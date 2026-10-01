import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { FAQ } from '@/components/marketing/FAQ'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AREAS } from '@/lib/areas'
import { SITUATIONS, type SituationSlug } from '@/lib/situations'
import { listFilledIntersections, getIntersection } from '@/lib/situations/index'
import {
  breadcrumbJsonLd,
  intersectionServiceJsonLd,
  localBusinessAreaJsonLd,
  pageFaqJsonLd,
} from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

type Params = { city: string; situation: SituationSlug }

export async function generateStaticParams() {
  return listFilledIntersections().map(({ citySlug, situationSlug }) => ({
    city: citySlug,
    situation: situationSlug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const content = getIntersection(params.city, params.situation)
  if (!content) return { title: 'Not Found' }

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `${siteUrl}/areas/${params.city}/${params.situation}` },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${siteUrl}/areas/${params.city}/${params.situation}`,
    },
  }
}

export default function IntersectionPage({ params }: { params: Params }) {
  const area = AREAS.find(a => a.slug === params.city)
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  const content = getIntersection(params.city, params.situation)
  if (!area || !situation || !content) return notFound()

  const business = localBusinessAreaJsonLd(area.name, area.county, siteUrl, area.slug)
  const service = intersectionServiceJsonLd({
    siteUrl,
    city: area.name,
    county: area.county,
    citySlug: area.slug,
    situationSlug: situation.slug,
    situationLabel: situation.label,
    description: content.metaDescription,
  })
  const faq = pageFaqJsonLd(content.faqs)
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Areas', href: '/areas' },
      { name: `${area.name}, GA`, href: `/areas/${area.slug}` },
      { name: situation.label, href: `/areas/${area.slug}/${situation.slug}` },
    ],
    siteUrl
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <SiteHeader />

      <Hero
        eyebrow={`${area.county} · ${situation.label}`}
        headline={<>{content.h1}</>}
        sub={content.empatheticOpening[0]}
        bullets={[
          'Cash offer in 24 hours — no obligation',
          'Close before sale day when title is clear',
          'Local closing attorney in your county',
        ]}
      >
        <LeadForm source={`area-situation-${area.slug}-${situation.slug}`} context={{ city: area.slug, situation: situation.slug }} />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <nav className="mb-6 font-body text-[13px] text-ink-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
            <li><Link href="/" className="text-ink-500 hover:text-amber-dark no-underline">Home</Link></li>
            <li className="text-ink-300">/</li>
            <li><Link href="/areas" className="text-ink-500 hover:text-amber-dark no-underline">Areas</Link></li>
            <li className="text-ink-300">/</li>
            <li><Link href={`/areas/${area.slug}`} className="text-ink-500 hover:text-amber-dark no-underline">{area.name}, GA</Link></li>
            <li className="text-ink-300">/</li>
            <li className="text-ink-700">{situation.label}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <article>
            {content.empatheticOpening.slice(1).map((p, i) => (
              <p key={i} className="ds-body mb-5">{p}</p>
            ))}

            <h2 className="ds-h3 mt-10 mb-4">How {situation.label} Works in {area.county}</h2>
            {content.countyProcessSection.map((p, i) => (
              <p key={i} className="ds-body mb-5">{p}</p>
            ))}

            <h2 className="ds-h3 mt-10 mb-4">The Georgia Timeline — In Plain English</h2>
            {content.timelineSection.map((p, i) => (
              <p key={i} className="ds-body mb-5">{p}</p>
            ))}

            <div className="bg-white border border-hairline rounded-lg p-6 mt-3 mb-5">
              <p className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-ink-400 mb-3">
                Georgia Statutes Cited Here
              </p>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {situation.ocgaRefs.map(ref => (
                  <li key={ref.code} className="font-body text-[13px] text-ink-700 leading-[1.55]">
                    <span className="font-bold text-navy">{ref.code}</span> — {ref.summary}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="ds-h3 mt-10 mb-4">How VP Buys Homes Helps in This Situation</h2>
            {content.howWeHelpSection.map((p, i) => (
              <p key={i} className="ds-body mb-5">{p}</p>
            ))}
            <ul className="flex flex-col gap-3 list-none p-0 mt-3 mb-5">
              {situation.whatWeDo.map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
                  <span aria-hidden className="text-amber-dark font-bold shrink-0 mt-[2px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="ds-h3 mt-10 mb-4">Local — Not a National Wholesaler</h2>
            {content.trustSignalsSection.map((p, i) => (
              <p key={i} className="ds-body mb-5">{p}</p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 mb-5">
              <TrustCard label="Local Court" value={area.superiorCourt.name} sub={area.superiorCourt.courthouseAddress} />
              <TrustCard label="Probate Court" value={area.probateCourt.name} sub={area.probateCourt.address} />
              <TrustCard label="Legal Notices" value={area.legalNoticesPaper} sub="Foreclosure ads run here, four consecutive weeks before sale" />
            </div>

            <h2 className="ds-h3 mt-12 mb-6">Frequently Asked — {situation.label} in {area.name}</h2>
            <FAQ items={content.faqs.map(f => ({ q: f.q, a: f.a }))} defaultOpen={0} />

            {(() => {
              const filledLaterals = content.lateralCitySlugs.filter(slug => Boolean(getIntersection(slug, situation.slug)))
              if (filledLaterals.length === 0) return null
              return (
                <div className="mt-10 pt-8 border-t border-hairline">
                  <Eyebrow tone="navy">{situation.label} in Neighboring Counties</Eyebrow>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {filledLaterals.map(slug => {
                      const neighbor = AREAS.find(a => a.slug === slug)
                      if (!neighbor) return null
                      return (
                        <Link
                          key={slug}
                          href={`/areas/${slug}/${situation.slug}`}
                          className="inline-block bg-white border border-hairline rounded-pill px-3.5 py-2 font-body text-[13px] font-semibold text-navy no-underline hover:border-amber transition-colors"
                        >
                          {situation.label} in {neighbor.name}, GA →
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })()}

            <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap gap-2">
              <Link href={`/areas/${area.slug}`} className="inline-block bg-white border border-hairline rounded-pill px-3.5 py-2 font-body text-[13px] font-semibold text-navy no-underline hover:border-amber transition-colors">
                More on {area.name}, GA →
              </Link>
              <Link href={`/situations/${situation.slug}`} className="inline-block bg-white border border-hairline rounded-pill px-3.5 py-2 font-body text-[13px] font-semibold text-navy no-underline hover:border-amber transition-colors">
                {situation.label} across Georgia →
              </Link>
            </div>
          </article>

          <aside id="get-offer" className="lg:sticky lg:top-24">
            <h2 className="ds-h4 mb-2">Get your cash offer — {area.name}</h2>
            <p className="font-body text-[14px] text-ink-500 leading-[1.6] mb-3">
              Tell us about the property. Written cash offer within 24 hours. No obligation.
            </p>
            <LeadForm source={`intersection-aside-${area.slug}-${situation.slug}`} context={{ city: area.slug, situation: situation.slug }} />
          </aside>
        </div>
      </Section>

      <FinalCTA
        title={<>Cash offer in <em>{area.name}</em></>}
        sub={`We close at a local closing attorney in ${area.county}. Tell us about the property — we send a real number within 24 hours.`}
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}

function TrustCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white border border-hairline rounded-lg p-5">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-ink-400 mb-1.5">
        {label}
      </p>
      <p className="font-display text-[15px] font-bold text-navy uppercase leading-[1.3]" style={{ letterSpacing: '0.02em', marginBottom: sub ? 6 : 0 }}>
        {value}
      </p>
      {sub && <p className="font-body text-[12px] text-ink-500 leading-[1.5]">{sub}</p>}
    </div>
  )
}
