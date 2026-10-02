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
import { AREAS } from '@/lib/areas'
import { SITUATIONS, type SituationSlug, SITUATION_SLUGS, listFilledIntersections } from '@/lib/situations'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, localBusinessSituationJsonLd } from '@/lib/seo'
import { SITE, absoluteUrl } from '@/lib/site'


type Params = { situation: SituationSlug }

export async function generateStaticParams() {
  return SITUATION_SLUGS.map(slug => ({ situation: slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  if (!situation) return { title: 'Not Found' }

  const title = `${situation.shortLabel} in Georgia — Cash Home Buyers`
  const description = `${situation.pillarLead} VP Buys Homes pays cash for houses across Southeast Georgia in any condition.`.slice(0, 155)

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/situations/${situation.slug}`) },
    openGraph: {
      title: `${title} | VP Buys Homes`,
      description,
      url: absoluteUrl(`/situations/${situation.slug}`),
    },
  }
}

export default function SituationPillarPage({ params }: { params: Params }) {
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  if (!situation) return notFound()

  const filledForThisSituation = new Set(
    listFilledIntersections()
      .filter(i => i.situationSlug === situation.slug)
      .map(i => i.citySlug)
  )

  const business = localBusinessSituationJsonLd({
    situationSlug: situation.slug,
    situationLabel: situation.label,
  })
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Situations', href: '/situations' },
      { name: situation.label, href: `/situations/${situation.slug}` },
    ]
  )

  return (
    <>
      <JsonLd data={business} />
      <JsonLd data={breadcrumbs} />

      <SiteHeader />

      <Hero
        eyebrow={`Southeast Georgia · ${situation.label}`}
        headline={<>{situation.searchVerb} <em>{situation.label}</em> — Sell Your House for Cash</>}
        sub={situation.pillarLead}
        bullets={[
          'Cash offer in 48 hours — no obligation',
          'Statute-aware closings (OCGA citations below)',
          'Local closing attorney in your county',
        ]}
      >
        <LeadForm source={`situation-${situation.slug}`} context={{ situation: situation.slug }} />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <nav className="mb-6 font-body text-[13px] text-ink-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
            <li><Link href="/" className="text-ink-500 hover:text-amber-dark no-underline">Home</Link></li>
            <li className="text-ink-300">/</li>
            <li><Link href="/situations" className="text-ink-500 hover:text-amber-dark no-underline">Situations</Link></li>
            <li className="text-ink-300">/</li>
            <li className="text-ink-700">{situation.label}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <article>
            {situation.pillarBody.map((p, i) => (
              <p key={i} className="ds-body mb-5" style={{ fontSize: 16.5 }}>
                {p}
              </p>
            ))}

            <h2 className="ds-h3 mt-10 mb-4">The Georgia Statutes That Govern This Situation</h2>
            <p className="ds-body mb-4">
              Below are the Georgia code sections most often relevant when a homeowner sells under {situation.label.toLowerCase()} circumstances. This is educational only — talk to a Georgia attorney for advice on your specific case.
            </p>
            <div className="bg-white border border-hairline rounded-lg p-6 mb-5">
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {situation.ocgaRefs.map(ref => (
                  <li key={ref.code} className="font-body text-[14px] text-ink-700 leading-[1.6]">
                    <span className="font-bold text-navy">{ref.code}</span> — {ref.summary}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="ds-h3 mt-10 mb-4">What Sellers in This Situation Are Often Feeling</h2>
            <ul className="flex flex-col gap-3 list-none p-0 mb-5">
              {situation.triggers.map(t => (
                <li key={t} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
                  <span aria-hidden className="text-amber-dark font-bold shrink-0 mt-[2px]">✓</span>
                  {t}
                </li>
              ))}
            </ul>

            <h2 className="ds-h3 mt-10 mb-4">Red Flags to Watch For With Cash Buyers</h2>
            <ul className="flex flex-col gap-3 list-none p-0 mb-5">
              {situation.objections.map(o => (
                <li key={o} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
                  <span aria-hidden className="text-danger font-bold shrink-0 mt-[2px]">!</span>
                  {o}
                </li>
              ))}
            </ul>

            <h2 className="ds-h3 mt-10 mb-4">What VP Buys Homes Does in This Situation</h2>
            <ul className="flex flex-col gap-3 list-none p-0 mb-5">
              {situation.whatWeDo.map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
                  <span aria-hidden className="text-amber-dark font-bold shrink-0 mt-[2px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="ds-h3 mt-10 mb-4">Cities Where We Help With {situation.label}</h2>
            {filledForThisSituation.size === 0 ? (
              <p className="ds-body">
                Detailed city-by-city information for this situation is being added — meanwhile, call {SITE.phoneDisplay} or use the form to get a cash offer for your property anywhere in Southeast Georgia.
              </p>
            ) : (
              <p className="ds-body">
                Click any city to see how {situation.label.toLowerCase()} works in that specific county — including the local courthouse, legal-organ newspaper, and how we help homeowners there.
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 mb-5">
              {AREAS.map(area => {
                const isFilled = filledForThisSituation.has(area.slug)
                const inner = (
                  <div
                    className={`bg-white rounded-lg p-5 h-full ${isFilled ? 'border border-hairline' : 'border border-dashed border-hairline'}`}
                    style={{ opacity: isFilled ? 1 : 0.55 }}
                  >
                    <p className="font-display text-[18px] font-bold text-navy leading-[1.2]">
                      {area.name}, GA
                    </p>
                    <p className="font-body text-[12px] text-ink-500 mt-1">{area.county}</p>
                    <p className={`font-body text-[12px] font-bold mt-2 tracking-[0.04em] ${isFilled ? 'text-amber-dark' : 'text-ink-400'}`}>
                      {isFilled ? `${situation.label} in ${area.name} →` : 'Coming soon'}
                    </p>
                  </div>
                )
                return isFilled ? (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}/${situation.slug}`}
                    className="no-underline"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={area.slug}>{inner}</div>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap gap-2">
              {SITUATIONS.filter(s => s.slug !== situation.slug).map(other => (
                <Link
                  key={other.slug}
                  href={`/situations/${other.slug}`}
                  className="inline-block bg-white border border-hairline rounded-pill px-3.5 py-2 font-body text-[13px] font-semibold text-navy no-underline hover:border-amber transition-colors"
                >
                  {other.label} →
                </Link>
              ))}
            </div>
          </article>

          <aside id="get-offer" className="lg:sticky lg:top-24">
            <h2 className="ds-h4 mb-2">Get your cash offer</h2>
            <p className="font-body text-[14px] text-ink-500 leading-[1.6] mb-3">
              Tell us about the property. Written cash offer within 48 hours. No obligation.
            </p>
            <LeadForm source={`situation-aside-${situation.slug}`} context={{ situation: situation.slug }} />
          </aside>
        </div>
      </Section>

      <FinalCTA
        title={<><em>{situation.searchVerb}</em> {situation.label.toLowerCase()} the smart way</>}
        sub="One call. One real number. No pressure, no hidden fees."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
