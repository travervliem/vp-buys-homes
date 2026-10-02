import type { Metadata } from 'next'
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
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How It Works — Sell Your House Fast for Cash in Southeast Georgia',
  description: 'Three simple steps to sell your house fast for cash in Statesboro, GA and surrounding Southeast Georgia. No repairs, no fees, close in 7–21 days.',
  alternates: { canonical: absoluteUrl('/how-it-works') },
}

const STEPS = [
  {
    title: 'Tell Us About Your Property',
    body: (
      <>
        Fill out the short form or give us a call. Share the property address, its current condition, and your ideal timeline. No inspection needed to get started.
        <br /><br />
        <em className="text-ink-500 not-italic text-[13px]">We treat every inquiry with total discretion. Your information is never shared.</em>
      </>
    ),
  },
  {
    title: 'Receive a Written Cash Offer',
    body: (
      <>
        Within 48 hours we deliver a written, no-obligation cash offer. We base it on recent comparable sales in your market and the property&apos;s current condition.
        <br /><br />
        <em className="text-ink-500 not-italic text-[13px]">No pressure. No expiring windows. Review it at your own pace.</em>
      </>
    ),
  },
  {
    title: 'Pick Your Closing Date',
    body: (
      <>
        Accept the offer and choose a closing date that works for your life. We can close in as little as 7 days or give you up to 60 days to make arrangements.
        <br /><br />
        <em className="text-ink-500 not-italic text-[13px]">We work with a local closing attorney and handle all paperwork. You show up and sign.</em>
      </>
    ),
  },
]

const COMPARE = [
  { item: 'Cash offer timeline', vp: '48 hours', agent: '2–4 weeks', fsbo: '1–4 weeks' },
  { item: 'Repairs required', vp: 'None', agent: 'Often yes', fsbo: 'Often yes' },
  { item: 'Commissions / fees', vp: 'None', agent: '5–6%', fsbo: 'Some costs' },
  { item: 'Showings and open houses', vp: 'None', agent: 'Many', fsbo: 'Many' },
  { item: 'Closing timeline', vp: '7–21 days', agent: '30–90 days', fsbo: '30–90 days' },
  { item: 'Financing contingencies', vp: 'None', agent: 'Common', fsbo: 'Common' },
  { item: 'Certainty of sale', vp: 'Guaranteed', agent: 'Not guaranteed', fsbo: 'Not guaranteed' },
]

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Three simple steps"
        headline={<>How the <em>Process</em> Works</>}
        sub="From first contact to cash in hand — in as little as 7 days. No repairs, no fees, no commissions."
        bullets={[
          'Step 1 — Tell us about the property',
          'Step 2 — Get a written cash offer in 48 hours',
          'Step 3 — Pick your closing date',
        ]}
      >
        <LeadForm source="how-it-works" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Three simple steps</Eyebrow>
          <h2 className="ds-h2 mt-3">How the process works</h2>
        </div>
        <ProcessSteps steps={STEPS} />
      </Section>

      <Section tone="white" padding="lg">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Side by side</Eyebrow>
          <h2 className="ds-h2 mt-3">VP Buys Homes vs. Traditional Sale</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse max-w-[820px] mx-auto">
            <thead>
              <tr>
                <th className="text-left p-4 font-body text-[12px] font-bold uppercase tracking-[0.08em] text-ink-400 border-b-2 border-hairline" />
                <th className="text-center p-4 bg-navy text-white font-display text-[15px] font-bold uppercase tracking-[0.04em] rounded-t-md">VP Buys Homes</th>
                <th className="text-center p-4 font-body text-[12px] font-bold uppercase tracking-[0.06em] text-ink-400 border-b-2 border-hairline">With an Agent</th>
                <th className="text-center p-4 font-body text-[12px] font-bold uppercase tracking-[0.06em] text-ink-400 border-b-2 border-hairline">FSBO</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-paper'}>
                  <td className="p-4 font-body text-[14px] text-ink-700 border-b border-hairline">{row.item}</td>
                  <td className="p-4 text-center font-body text-[14px] font-bold text-navy border-b border-navy/10" style={{ background: 'rgba(27,54,93,0.04)' }}>{row.vp}</td>
                  <td className="p-4 text-center font-body text-[14px] text-ink-500 border-b border-hairline">{row.agent}</td>
                  <td className="p-4 text-center font-body text-[14px] text-ink-500 border-b border-hairline">{row.fsbo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FinalCTA
        title={<>Ready to <em>get started?</em></>}
        sub="Cash offer in 48 hours. No obligation, no pressure."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
