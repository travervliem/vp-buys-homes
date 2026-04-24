import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — Sell Your House Fast for Cash in Southeast Georgia',
  description: 'Three simple steps to sell your house fast for cash in Statesboro, GA and surrounding Southeast Georgia. No repairs, no fees, close in 7–21 days.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/how-it-works' },
}

const STEPS = [
  {
    n: '01',
    title: 'Tell Us About Your Property',
    body: 'Fill out the short form or give us a call. Share the property address, its current condition, and your ideal timeline. No inspection needed to get started.',
    detail: 'We treat every inquiry with total discretion. Your information is never shared.',
  },
  {
    n: '02',
    title: 'Receive a Written Cash Offer',
    body: 'Within 24 hours — often the same day — we deliver a written, no-obligation cash offer. We base it on recent comparable sales in your market and the property\'s current condition.',
    detail: 'No pressure. No expiring windows. Review it at your own pace.',
  },
  {
    n: '03',
    title: 'Pick Your Closing Date',
    body: 'Accept the offer and choose a closing date that works for your life. We can close in as little as 7 days or give you up to 60 days to make arrangements.',
    detail: 'We work with a local closing attorney and handle all paperwork. You show up and sign.',
  },
]

const COMPARE = [
  { item: 'Cash offer timeline', vp: '24 hours', agent: '2–4 weeks', fsbo: '1–4 weeks' },
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
      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0' }} className="circle-motif">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>Three Simple Steps</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '680px',
          }}>
            How the Process Works
          </h1>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '560px' }}>
            From first contact to cash in hand — in as little as 7 days. No repairs, no fees, no commissions.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          {STEPS.map((step, i) => (
            <div key={step.n} style={{
              display: 'flex', gap: '32px', alignItems: 'flex-start',
              marginBottom: i < STEPS.length - 1 ? '48px' : 0,
            }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%', background: '#1B365D',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                    fontSize: '20px', fontWeight: 700, color: 'white', letterSpacing: '0.02em',
                  }}>{step.n}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: '2px', height: '40px', background: '#D1DCE8', margin: '8px auto 0' }} />
                )}
              </div>
              <div style={{ paddingTop: '12px' }}>
                <h2 style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '24px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: '#1B365D', marginBottom: '10px',
                }}>
                  {step.title}
                </h2>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.7, color: '#374151', marginBottom: '8px' }}>
                  {step.body}
                </p>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#6B7280', fontStyle: 'italic' }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="eyebrow" style={{ marginBottom: '12px' }}>Side by Side</p>
            <h2 style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.02em', color: '#1B365D',
            }}>
              VP Buys Homes vs. Traditional Sale
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: '760px', margin: '0 auto' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', borderBottom: '2px solid #D1DCE8' }} />
                  <th style={{ textAlign: 'center', padding: '12px 16px', background: '#1B365D', color: 'white', fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', borderRadius: '6px 6px 0 0' }}>VP Buys Homes</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9CA3AF', borderBottom: '2px solid #D1DCE8' }}>With an Agent</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9CA3AF', borderBottom: '2px solid #D1DCE8' }}>FSBO</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.item} style={{ background: i % 2 === 0 ? 'white' : '#F9FAFB' }}>
                    <td style={{ padding: '14px 16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#374151', borderBottom: '1px solid #F3F4F6' }}>{row.item}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', background: 'rgba(27,54,93,0.04)', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', fontWeight: 700, color: '#1B365D', borderBottom: '1px solid rgba(27,54,93,0.06)' }}>{row.vp}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', borderBottom: '1px solid #F3F4F6' }}>{row.agent}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', borderBottom: '1px solid #F3F4F6' }}>{row.fsbo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F2040', padding: '72px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', marginBottom: '16px',
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.60)', marginBottom: '28px' }}>
            Cash offer in 24 hours. No obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/sell" className="btn-amber">Get My Cash Offer</Link>
            <a href="tel:+19125156060" className="btn-outline">(912) 515-6060</a>
          </div>
        </div>
      </section>
    </>
  )
}
