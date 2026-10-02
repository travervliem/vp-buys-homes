import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SITE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sell Your House Fast for Cash in Southeast Georgia',
  description: 'Get a no-obligation cash offer for your house in Statesboro, Savannah, Rincon, Metter, or Springfield, GA. No repairs, no fees, close in 7 days.',
  alternates: { canonical: absoluteUrl('/sell') },
}

const BENEFITS = [
  { title: 'No Repairs Required', body: 'We buy houses as-is — fire damage, foundation issues, outdated systems, full of belongings. Leave it exactly as-is.' },
  { title: 'No Fees or Commissions', body: 'Zero realtor fees, zero commissions, zero hidden costs. We typically cover standard closing costs as well.' },
  { title: 'Close on Your Schedule', body: 'As fast as 7 days or up to 60 days. You pick the date that works for your life.' },
  { title: 'Written Cash Offer in 48 Hours', body: 'No wasted time. We review the property and get you a clear, written offer within 48 hours.' },
]

export default function SellPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="No obligation · Confidential"
        headline={<>Sell Your House Fast — <em>The Simple Way</em></>}
        sub={<>We purchase houses as-is in Statesboro, Savannah, Rincon, Metter, Springfield, and surrounding Southeast Georgia. Pick your closing date.</>}
        bullets={[
          'A real written cash offer within 48 hours',
          'Close in 7 days, or 70 — your call',
          'As-is. No showings. No surprises.',
        ]}
      >
        <LeadForm source="sell-page" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <Eyebrow>Why VP Buys Homes</Eyebrow>
            <h2 className="ds-h2 mt-3 mb-7">No repairs. No fees. <em>Close in days.</em></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {BENEFITS.map(b => (
                <Card key={b.title} className="border-l-[3px] border-l-amber">
                  <h3 className="ds-h4 mb-2">{b.title}</h3>
                  <p className="ds-body m-0">{b.body}</p>
                </Card>
              ))}
            </div>

            <div className="bg-navy text-white rounded-lg p-7">
              <h3 className="font-display text-[20px] font-bold mb-1.5" style={{ color: 'white' }}>Questions? Call or text.</h3>
              <p className="font-body text-[15px] mb-4" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                We answer promptly and speak plainly. No sales pressure.
              </p>
              <Button href={SITE.phoneHref} variant="amber" size="lg">
                {SITE.phoneDisplay}
              </Button>
            </div>
          </div>

          <aside>
            <h2 className="ds-h3 mb-4">Get Your Cash Offer</h2>
            <LeadForm source="sell-page-aside" variant="card" />
          </aside>
        </div>
      </Section>

      <FinalCTA
        title={<>Ready when you are</>}
        sub="Send us the address. We'll send back a written cash offer within 48 hours."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
