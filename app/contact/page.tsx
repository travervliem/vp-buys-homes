import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AREAS } from '@/lib/areas'
import { SITE, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Cash Offer for Your House',
  description: `Call ${SITE.phoneDisplay}, email ${SITE.email}, or send your property details for a no-obligation cash offer within 48 hours.`,
  alternates: { canonical: absoluteUrl('/contact') },
}

const cardClass = 'bg-white border border-hairline rounded-lg p-7 shadow-sm'
const labelClass = 'font-body text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500 mb-2'
const valueClass = 'font-display text-[22px] font-bold text-navy no-underline hover:text-amber-dark transition-colors break-words'

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Contact"
        headline={<>Contact <em>VP Buys Homes</em></>}
        sub="Call, email, or send your property details. We respond within 48 hours."
      >
        <LeadForm source="contact" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="ds-h2 mt-3">Ways to reach us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-5 max-w-[960px] mx-auto">
          <div className={cardClass}>
            <p className={labelClass}>Phone</p>
            <a href={SITE.phoneHref} className={valueClass}>{SITE.phoneDisplay}</a>
            <p className="font-body text-[13px] text-ink-500 mt-2">Call or text.</p>
          </div>
          <div className={cardClass}>
            <p className={labelClass}>Email</p>
            <a href={SITE.emailHref} className={valueClass}>{SITE.email}</a>
          </div>
          <div className={cardClass}>
            <p className={labelClass}>Where we buy</p>
            <p className="font-body text-[14.5px] text-ink-700 leading-[1.7] m-0">
              We are based in Statesboro, Georgia, and buy houses in {AREAS.map(a => a.name).join(', ')}, and the surrounding area.
            </p>
          </div>
        </div>
      </Section>

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
