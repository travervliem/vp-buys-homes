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
import { SITUATIONS, situationHref } from '@/lib/situations'
import { SITE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Situations We Help With — Sell Your Georgia House for Cash',
  description: 'Foreclosure, divorce, probate, tired-landlord, and tax-lien situations — VP Buys Homes pays cash and closes fast across Southeast Georgia.',
  alternates: { canonical: absoluteUrl('/situations') },
}

export default function SituationsDirectoryPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Situations we help with"
        headline={<>Real situations, <em>real cash offers</em></>}
        sub="Foreclosure, divorce, inherited property, tired-landlord exits, tax-sale redemption — Southeast Georgia homeowners come to us for fast, fair cash offers when life moves faster than the traditional listing process."
        bullets={[
          'Foreclosure · 30-day window before sale day',
          'Probate · all heirs aligned, court-approved',
          'Divorce · decree-matched closings',
        ]}
      >
        <LeadForm source="situations-index" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITUATIONS.map(s => (
            <Link
              key={s.slug}
              href={situationHref(s.slug)}
              className="group block bg-white border border-hairline rounded-lg p-7 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber border-t-[3px] border-t-amber"
            >
              <p className="font-body text-[11px] font-bold uppercase tracking-[0.12em] text-ink-400 mb-2">
                {s.searchVerb}
              </p>
              <h2 className="font-display text-[24px] font-bold text-navy mb-3 transition-colors duration-200 group-hover:text-amber-dark" style={{ lineHeight: 1.15 }}>
                {s.label}
              </h2>
              <p className="font-body text-[14.5px] text-ink-700 leading-[1.7] m-0">
                {s.pillarLead}
              </p>
              <p className="mt-5 font-body text-[12px] font-bold uppercase tracking-[0.14em] text-amber-dark group-hover:text-amber transition-colors">
                Read More →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="ds-body mb-4">Not sure which situation fits? Call us. We have heard most of them.</p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-white font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline shadow-amber hover:bg-amber-dark transition-colors"
          >
            {SITE.phoneDisplay} — Call or Text
          </a>
        </div>
      </Section>

      <FinalCTA
        title={<>Whatever the <em>situation</em> — we listen first</>}
        sub="Send us the address and a bit of context. We follow up with a real number, not a sales script."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
