import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { ProcessSteps } from '@/components/marketing/ProcessSteps'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AREAS, areaHref } from '@/lib/areas'
import { SITUATIONS, situationHref } from '@/lib/situations'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us — Cash Home Buyers in Southeast Georgia',
  description: 'VP Buys Homes is the trade name of VP Equities LLC, a direct cash home buyer based in Statesboro, GA. Learn how we buy houses across Southeast Georgia.',
  alternates: { canonical: absoluteUrl('/about') },
}

const STEPS = [
  {
    title: 'Tell us about the house',
    body: 'Fill out the short form or give us a call. Share the property address, its current condition, and your ideal timeline.',
  },
  {
    title: 'Get a written cash offer',
    body: 'We review recent comparable sales and the property\'s condition, then send a no-obligation written offer within 48 hours.',
  },
  {
    title: 'Pick your closing date',
    body: 'If you accept, you choose the closing date. We close through a local closing attorney, who handles the title search and paperwork.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="About"
        headline={<>About <em>VP Buys Homes</em></>}
        sub="VP Equities LLC, doing business as VP Buys Homes, buys houses directly for cash in Statesboro and across Southeast Georgia."
      >
        <LeadForm source="about" />
      </Hero>

      <UrgencyStrip />

      <Section tone="white" padding="lg" tight>
        <Eyebrow>Who we are</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-6">Direct cash buyers, not agents</h2>
        <div className="flex flex-col gap-4">
          <p className="ds-body">
            We are direct cash buyers, not real estate agents. When you sell to us there are no agent commissions or listing fees, and you do not need to repair or clean the house — we buy as-is.
          </p>
          <p className="ds-body">
            We close with our own funds through a local closing attorney — no bank, no appraisal, no financing contingency. We are a Georgia LLC; you can verify our registration with the Georgia Secretary of State.
          </p>
          <p className="ds-body">
            Our offer is based on comparable recent sales in your market, your property&rsquo;s current condition, and our estimated cost to bring it to retail-sellable condition. Cash offers are below retail because we take on the cost of repairs, holding time, and certainty of close. There is no obligation to accept an offer.
          </p>
          <p className="ds-body">
            We are based in Statesboro, Georgia, and buy houses in the cities listed below.
          </p>
        </div>
      </Section>

      <Section tone="paper" padding="lg">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Simple process</Eyebrow>
          <h2 className="ds-h2 mt-3">How a sale works</h2>
        </div>
        <ProcessSteps steps={STEPS} />
      </Section>

      <Section tone="white" padding="lg">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Southeast Georgia</Eyebrow>
          <h2 className="ds-h2 mt-3">Where we buy</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[800px] mx-auto">
          {AREAS.map(area => (
            <Link
              key={area.slug}
              href={areaHref(area.slug)}
              className="group block rounded-lg p-4 no-underline bg-paper border border-hairline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber"
            >
              <p className="font-display font-bold text-navy mb-1 transition-colors duration-200 group-hover:text-amber-dark" style={{ fontSize: 17, letterSpacing: '0.005em' }}>
                {area.name}, {area.state}
              </p>
              <p className="font-body text-ink-500" style={{ fontSize: 12 }}>{area.county}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="paper" padding="lg" tight>
        <Eyebrow>We can help</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-5">Situations we help with</h2>
        <p className="ds-body mb-6">
          Every sale starts with a different reason. These guides explain how a cash sale works in each situation under Georgia law.
        </p>
        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {SITUATIONS.map(s => (
            <li key={s.slug}>
              <Link href={situationHref(s.slug)} className="font-body text-[16px] font-bold text-navy underline underline-offset-4 hover:text-amber-dark">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCTA
        title={<>Ready to <em>talk?</em></>}
        sub="Tell us about your house and get a no-obligation cash offer within 48 hours."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
