import type { Metadata } from 'next'
import Link from 'next/link'
import { HomeHero } from '@/components/marketing/HomeHero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { ProcessSteps } from '@/components/marketing/ProcessSteps'
import { SituationGrid } from '@/components/marketing/SituationGrid'
import { FAQ } from '@/components/marketing/FAQ'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { AREAS, areaHref } from '@/lib/areas'
import { SITUATIONS, intersectionHref, situationHref } from '@/lib/situations'
import { faqJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'We Buy Houses for Cash in Statesboro, GA | VP Buys Homes',
  description: 'We buy houses for cash in Statesboro, GA and surrounding Southeast Georgia. No repairs, no fees, no commissions. Cash offer in 24 hours. Close in as little as 7 days.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/' },
}

const STEPS = [
  {
    title: 'Tell Us About the Property',
    body: 'Share the address, condition, and your timing. No inspection required to get started.',
  },
  {
    title: 'Receive Your Cash Offer',
    body: 'We review comparable sales and property condition, then deliver a written cash offer within 24 hours.',
  },
  {
    title: 'Pick Your Closing Date',
    body: 'Accept and choose a date that works for you — as fast as 7 days or up to 60. We handle the paperwork.',
  },
]

const SITUATIONS_DEMO = [
  {
    href: situationHref('foreclosure'),
    tag: 'Foreclosure',
    title: 'Facing Foreclosure',
    body: 'A quick sale can stop the process before auction. Contact us immediately — timing is everything.',
  },
  {
    href: situationHref('probate'),
    tag: 'Probate',
    title: 'Inherited Property',
    body: 'We purchase estate and probate properties as-is, working directly with your attorney if needed.',
  },
  {
    href: situationHref('tired-landlord'),
    tag: 'Landlord',
    title: 'Tired Landlord',
    body: 'Problem tenants, deferred maintenance, or just done with landlording. We buy occupied properties.',
  },
  {
    href: situationHref('tax-liens'),
    tag: 'Tax Liens',
    title: 'Major Repairs Needed',
    body: 'Foundation issues, fire damage, outdated systems — we buy it as-is. You do not lift a finger.',
  },
  {
    href: '/sell',
    tag: 'Relocating',
    title: 'Relocating Fast',
    body: 'Job transfer or life change requiring a quick move. Close on your schedule without showings or open houses.',
  },
  {
    href: situationHref('divorce'),
    tag: 'Divorce',
    title: 'Divorce or Estate',
    body: 'A private, fast sale that lets both parties move forward. We keep it simple and confidential.',
  },
]

const TESTIMONIALS = [
  {
    quote: "I needed to sell my mom's house after she passed. VP called the same day, made a fair offer, and closed in 11 days. I didn't have to fix a thing.",
    name: 'Donna R.',
    city: 'Statesboro, GA',
  },
  {
    quote: "Was two months behind on payments and didn't know what to do. They got me out of the house before foreclosure hit my credit. Saved me.",
    name: 'Marcus T.',
    city: 'Rincon, GA',
  },
  {
    quote: 'My rental had a bad tenant and needed a new roof. They bought it without me lifting a finger. Straight offer, no games, closed fast.',
    name: 'Patricia L.',
    city: 'Savannah, GA',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Are you really cash buyers, or do you wholesale to someone else?',
    a: 'We close with our own funds through a local closing attorney. No bank, no appraisal, no financing contingency. We are a Georgia LLC; you can verify our registration with the Georgia Secretary of State.',
  },
  {
    q: 'How fast can you actually close?',
    a: 'As fast as 7 days when title is clean. Most closings happen in 2–4 weeks. We move on your timeline — fast or patient, your call.',
  },
  {
    q: 'Do I need to make any repairs or clean the property?',
    a: 'No. We buy as-is. Don\'t fix anything. Don\'t clean. Leave whatever you don\'t want — we handle it.',
  },
  {
    q: 'What if I owe more on the mortgage than the house is worth?',
    a: 'It is worth a conversation. We may still be able to negotiate a short payoff with your lender, or work out a creative structure that pays off the mortgage at closing.',
  },
  {
    q: 'Will my offer be lower than the market value?',
    a: 'Yes. Cash offers are below retail because we take on the cost of repairs, holding time, and certainty of close. The tradeoff is no repairs, no fees, no waiting, no failed financing.',
  },
  {
    q: 'How is your offer determined?',
    a: 'Comparable recent sales in your specific market, your property\'s current condition, and our estimated cost to bring it to retail-sellable condition. We show our math if you ask.',
  },
]

export default function HomePage() {
  const faq = faqJsonLd()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <SiteHeader />

      <HomeHero>
        <LeadForm source="hero-form" />
      </HomeHero>

      <UrgencyStrip
        items={[
          '50+ closings completed',
          'Cash offer in 24 hours',
          'Close in 7 days',
          'No repairs required',
          'No fees or commissions',
        ]}
      />

      {/* How It Works */}
      <Section tone="paper" padding="lg" id="how">
        <div className="text-center max-w-[920px] mx-auto mb-14">
          <span className="font-body text-[13px] font-bold uppercase tracking-[0.22em] text-amber">
            Simple Process
          </span>
          <h2
            className="font-display font-bold text-navy m-0 mt-4 mb-5"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              textWrap: 'balance' as any,
            }}
          >
            How It Works
          </h2>
          <p className="font-body text-ink-700 mx-auto" style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', lineHeight: 1.6, textWrap: 'balance' as any }}>
            Three steps from first contact to cash in hand. No showings, no negotiations, no surprises.
          </p>
        </div>
        <ProcessSteps steps={STEPS} />
        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline hover:bg-navy-deep transition-colors"
          >
            See the Full Process
          </Link>
        </div>
      </Section>

      {/* Common Situations */}
      <Section tone="white" padding="lg" id="situations">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>We Can Help</Eyebrow>
          <h2 className="ds-h2 mt-3 mb-4">Common Situations We Handle</h2>
          <p className="ds-body">
            Life moves fast. We buy houses from homeowners facing all kinds of circumstances — quickly and without judgment.
          </p>
        </div>
        <SituationGrid items={SITUATIONS_DEMO} />
      </Section>

      {/* Areas We Serve — navy */}
      <Section tone="navy" padding="lg" id="areas" className="relative overflow-hidden">
        <span aria-hidden className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: '50%', border: '72px solid rgba(255,255,255,0.03)', top: -180, right: -150 }} />
        <span aria-hidden className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: '50%', border: '56px solid rgba(255,255,255,0.025)', top: -60, right: -40 }} />
        <div className="text-center max-w-[640px] mx-auto mb-12 relative z-[1]">
          <Eyebrow tone="white">Southeast Georgia</Eyebrow>
          <h2 className="ds-h2 text-white mt-3 mb-4" style={{ color: 'white' }}>Areas We Serve</h2>
          <p className="font-body text-[15px]" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            We know the local market. We buy houses across Southeast Georgia — in any condition, on any timeline.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[800px] mx-auto mb-10 relative z-[1]">
          {AREAS.map(area => (
            <Link
              key={area.slug}
              href={areaHref(area.slug)}
              className="group block rounded-lg p-4 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/[0.10] hover:border-amber/40"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <p
                className="font-display font-bold mb-1 text-white transition-colors duration-200 group-hover:text-amber"
                style={{ fontSize: 17, letterSpacing: '0.005em' }}
              >
                {area.name}
              </p>
              <p className="font-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                {area.county}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center relative z-[1]">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 px-7 py-3 border-[1.5px] border-white/30 text-white font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline hover:bg-white/[0.06] hover:border-white transition-colors"
          >
            View All Service Areas
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="paper" padding="lg" id="testimonials">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>From Sellers Like You</Eyebrow>
          <h2 className="ds-h2 mt-3">What Homeowners Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {TESTIMONIALS.map(t => (
            <article key={t.name} className="bg-white rounded-lg p-7 border border-hairline shadow-sm relative">
              <span className="block font-display text-amber" style={{ fontSize: 48, lineHeight: 1, marginBottom: 12 }}>&ldquo;</span>
              <p className="font-body text-[15px] text-ink-700 italic mb-5" style={{ lineHeight: 1.7 }}>
                {t.quote}
              </p>
              <div className="border-t border-hairline pt-4">
                <p className="font-display text-[16px] font-bold text-navy">
                  {t.name}
                </p>
                <p className="font-body text-[12px] text-ink-400 mt-0.5">{t.city}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" padding="lg" id="faq">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="ds-h2 mt-3">Frequently Asked</h2>
        </div>
        <FAQ items={FAQ_ITEMS} />
      </Section>

      {/* Bottom-of-page lead capture — second-chance conversion for visitors who scroll */}
      <Section tone="navy" padding="lg" id="get-offer" className="relative overflow-hidden">
        <span aria-hidden className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: '50%', border: '72px solid rgba(255,255,255,0.03)', top: -180, right: -150 }} />
        <span aria-hidden className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: '50%', border: '56px solid rgba(255,255,255,0.025)', top: -60, right: -40 }} />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-start relative z-[1]">
          <div>
            <Eyebrow tone="white">No obligation · Confidential</Eyebrow>
            <h2 className="ds-h2 mt-3 mb-5 text-white" style={{ color: 'white' }}>
              Get your <em className="text-amber not-italic" style={{ fontStyle: 'italic', fontWeight: 600 }}>cash offer</em> today
            </h2>
            <p className="font-body text-[16px] mb-7" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 520 }}>
              Send us the address and a few details. Written cash offer within 24 hours — often the same day. Add a few photos for a sharper, faster number.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-7">
              {[
                'Cash offer in 24 hours — no obligation',
                'Close in 7 days, or on your timeline',
                'Optional photo upload — auto-resized, no app needed',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-[14.5px]" style={{ color: 'rgba(255,255,255,0.86)' }}>
                  <span aria-hidden className="inline-flex items-center justify-center shrink-0 mt-0.5" style={{ width: 18, height: 18, borderRadius: '50%', background: '#F2A65A', color: '#fff', fontSize: 11, fontWeight: 900, lineHeight: 1 }}>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 font-body text-[13px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span className="text-amber font-display font-bold">P</span>
              Or call <a href="tel:+19125156060" className="text-white font-semibold no-underline hover:text-amber">(912) 515-6060</a>
            </div>
          </div>
          <div>
            <LeadForm source="bottom-of-page" />
          </div>
        </div>
      </Section>

      <FinalCTA
        eyebrow="No obligation · Confidential"
        title={<>Whatever the situation — <em>we listen first</em></>}
        sub="Three minutes to fill out. 24 hours to respond. No pressure, no hidden fees."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
