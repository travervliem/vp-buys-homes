import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroKinetic } from '@/components/HeroKinetic'
import { FaqAccordion } from '@/components/FaqAccordion'
import { LeadForm } from '@/components/LeadForm'
import { AREAS, areaHref } from '@/lib/areas'

export const metadata: Metadata = {
  title: 'We Buy Houses for Cash in Statesboro, GA | VP Buys Homes',
  description: 'We buy houses for cash in Statesboro, GA and surrounding Southeast Georgia. No repairs, no fees, no commissions. Cash offer in 24 hours. Close in as little as 7 days.',
  alternates: { canonical: 'https://www.vpbuyshomes.com' },
}

const STEPS = [
  {
    n: '01',
    title: 'Tell Us About the Property',
    body: 'Share the address, condition, and your timing. No inspection required to get started.',
  },
  {
    n: '02',
    title: 'Receive Your Cash Offer',
    body: 'We review comparable sales and property condition, then deliver a written cash offer within 24 hours.',
  },
  {
    n: '03',
    title: 'Pick Your Closing Date',
    body: 'Accept and choose a date that works for you — as fast as 7 days or up to 60. We handle the paperwork.',
  },
]

const SITUATIONS = [
  {
    title: 'Facing Foreclosure',
    body: 'A quick sale can stop the process before auction. Contact us immediately — timing is everything.',
  },
  {
    title: 'Inherited Property',
    body: 'We purchase estate and probate properties as-is, working directly with your attorney if needed.',
  },
  {
    title: 'Tired Landlord',
    body: 'Problem tenants, deferred maintenance, or just done with landlording. We buy occupied properties.',
  },
  {
    title: 'Major Repairs Needed',
    body: 'Foundation issues, fire damage, outdated systems — we buy it as-is. You do not lift a finger.',
  },
  {
    title: 'Relocating Fast',
    body: 'Job transfer or life change requiring a quick move. Close on your schedule without showings or open houses.',
  },
  {
    title: 'Divorce or Estate',
    body: 'A private, fast sale that lets both parties move forward. We keep it simple and confidential.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'I needed to sell my mom\'s house after she passed. VP called the same day, made a fair offer, and closed in 11 days. I didn\'t have to fix a thing.',
    name: 'Donna R.',
    city: 'Statesboro, GA',
  },
  {
    quote: 'Was two months behind on payments and didn\'t know what to do. They got me out of the house before foreclosure hit my credit. Saved me.',
    name: 'Marcus T.',
    city: 'Rincon, GA',
  },
  {
    quote: 'My rental had a bad tenant and needed a new roof. They bought it without me lifting a finger. Straight offer, no games, closed fast.',
    name: 'Patricia L.',
    city: 'Savannah, GA',
  },
]

function SectionHeader({ eyebrow, title, subtitle, white = false }: { eyebrow: string; title: string; subtitle?: string; white?: boolean }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
      <p className="eyebrow" style={{ marginBottom: '12px', color: white ? 'rgba(255,255,255,0.50)' : '#F2A65A' }}>{eyebrow}</p>
      <h2 className="sec-h" style={{ color: white ? 'white' : '#1B365D', marginBottom: subtitle ? '16px' : 0 }}>{title}</h2>
      {subtitle && (
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.65, color: white ? 'rgba(255,255,255,0.60)' : '#374151', marginTop: '12px' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroKinetic />

      {/* Trust bar */}
      <div style={{ background: '#1B365D', padding: '0' }}>
        <div className="wrap">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {['50+ Closings Completed', 'Cash Offer in 24 Hours', 'Close in 7 Days', 'No Repairs Required', 'No Fees or Commissions'].map((item, i) => (
              <div
                key={item}
                style={{
                  padding: '20px 32px',
                  borderRight: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                <span style={{ color: '#F2A65A', fontWeight: 700, fontSize: '16px' }}>✓</span>
                <span style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.70)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section style={{ background: '#EEF2F7', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Three steps from first contact to cash in hand. No showings, no negotiations, no surprises."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {STEPS.map(step => (
              <div key={step.n} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '32px',
                boxShadow: '0 2px 6px rgba(13,27,42,0.06)',
                borderTop: '3px solid #1B365D',
                position: 'relative',
              }}>
                <span style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '56px', fontWeight: 800, lineHeight: 1,
                  color: '#EEF2F7', position: 'absolute', top: '16px', right: '20px',
                  letterSpacing: '-0.02em',
                }}>
                  {step.n}
                </span>
                <h3 style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: '#1B365D', marginBottom: '12px', lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#374151' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/how-it-works" className="btn-navy">See the Full Process</Link>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader
            eyebrow="We Can Help"
            title="Common Situations We Handle"
            subtitle="Life moves fast. We buy houses from homeowners facing all kinds of circumstances — quickly and without judgment."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {SITUATIONS.map(s => (
              <div key={s.title} className="card" style={{ borderTop: '2px solid #F2A65A' }}>
                <h3 style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '18px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: '#1B365D', marginBottom: '10px',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.7, color: '#374151' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve — navy */}
      <section style={{ background: '#1B365D', padding: '96px 0' }} className="circle-motif">
        <div className="wrap">
          <SectionHeader
            eyebrow="Southeast Georgia"
            title="Areas We Serve"
            subtitle="We know the local market. We buy houses across Southeast Georgia — in any condition, on any timeline."
            white
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', maxWidth: '800px', margin: '0 auto 40px' }}>
            {AREAS.map(area => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="area-card-link"
                style={{
                  display: 'block',
                  background: area.primary ? 'rgba(242,166,90,0.12)' : 'rgba(255,255,255,0.06)',
                  border: area.primary ? '1px solid rgba(242,166,90,0.30)' : '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                }}
              >
                <p style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '17px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.03em', color: area.primary ? '#F2A65A' : 'white', marginBottom: '3px',
                }}>
                  {area.name}
                </p>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
                  {area.county}
                </p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/areas" className="btn-outline">View All Service Areas</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#EEF2F7', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader
            eyebrow="From Sellers Like You"
            title="What Homeowners Say"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '28px',
                boxShadow: '0 2px 6px rgba(13,27,42,0.06)',
                position: 'relative',
              }}>
                <span style={{ fontSize: '40px', lineHeight: 1, color: '#F2A65A', fontFamily: 'Georgia, serif', display: 'block', marginBottom: '12px' }}>&ldquo;</span>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#374151', marginBottom: '20px', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid #D1DCE8', paddingTop: '16px' }}>
                  <p style={{ fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '15px', fontWeight: 700, color: '#1B365D', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#9CA3AF' }}>{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div className="wrap">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked"
          />
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA — full lead form */}
      <section style={{ background: '#0F2040', padding: '96px 0' }} id="get-offer">
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '12px' }}>No Obligation · Confidential</p>
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: 'white', marginBottom: '12px', lineHeight: 1.05,
              }}>
                Get Your Cash Offer Today
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.65, color: 'rgba(255,255,255,0.60)' }}>
                Fill out the form below. We review the property and respond within 24 hours — often the same day.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
