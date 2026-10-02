import type { Metadata } from 'next'
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
import { AREAS, areaHref } from '@/lib/areas'
import { SITE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Areas We Serve — Southeast Georgia Cash Home Buyers',
  description: 'VP Buys Homes buys houses for cash across Southeast Georgia — Statesboro, Savannah, Rincon, Metter, Springfield, and more. No repairs, no fees, cash offer in 48 hours.',
  alternates: { canonical: absoluteUrl('/areas') },
}

export default function AreasPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Coverage map"
        headline={<>We buy houses across <em>Southeast Georgia</em></>}
        sub="Local cash buyers covering Bulloch, Effingham, Chatham, Candler, Emanuel, Evans, and Toombs counties — and surrounding areas."
        bullets={[
          '8 cities · 7 counties',
          'Local closing attorney in every market',
          'Same offer terms, same fast close',
        ]}
      >
        <LeadForm source="areas-index" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map(area => (
            <Link
              key={area.slug}
              href={areaHref(area.slug)}
              className="group block bg-white border border-hairline rounded-lg p-7 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber"
              style={{ borderTopWidth: 3, borderTopColor: '#1B365D' }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="font-display text-[24px] font-bold text-navy transition-colors duration-200 group-hover:text-amber-dark" style={{ lineHeight: 1.15 }}>
                  {area.name}, {area.state}
                </h2>
              </div>
              <p className="font-body text-[11px] uppercase tracking-[0.12em] text-ink-400 mb-3">
                {area.county}
              </p>
              <p className="font-body text-[14.5px] text-ink-700 leading-[1.7] m-0">
                {area.shortCopy}
              </p>
              <p className="mt-5 font-body text-[12px] font-bold uppercase tracking-[0.14em] text-amber-dark group-hover:text-amber transition-colors">
                Get My Cash Offer →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="ds-body mb-4">Don't see your city? We likely buy there too — call or text us.</p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-white font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline shadow-amber hover:bg-amber-dark transition-colors"
          >
            {SITE.phoneDisplay} — Call or Text
          </a>
        </div>
      </Section>

      <FinalCTA
        title={<>One offer. <em>Real number.</em> 48 hours.</>}
        sub="No matter which Southeast Georgia city you're in — same fast process, same fair offer."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
