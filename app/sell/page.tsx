import type { Metadata } from 'next'
import { LeadForm } from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Sell Your House Fast for Cash in Southeast Georgia | VP Buys Homes',
  description: 'Get a no-obligation cash offer for your house in Statesboro, Rincon, Savannah, Metter, or Springfield, GA. No repairs, no fees, close in 7 days.',
  alternates: { canonical: 'https://vpbuyshomes.com/sell' },
}

const BENEFITS = [
  { title: 'No Repairs Required', body: 'We buy houses as-is — fire damage, foundation issues, outdated systems, full of belongings. Leave it exactly as-is.' },
  { title: 'No Fees or Commissions', body: 'Zero realtor fees, zero commissions, zero hidden costs. We typically cover standard closing costs as well.' },
  { title: 'Close on Your Schedule', body: 'As fast as 7 days or up to 60 days. You pick the date that works for your life.' },
  { title: 'Written Cash Offer in 24 Hours', body: 'No wasted time. We review the property and get you a clear, written offer the same day or next business day.' },
]

export default function SellPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0' }} className="circle-motif">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>No Obligation · Confidential</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '680px',
          }}>
            Sell Your House Fast — The Simple Way
          </h1>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '560px' }}>
            We purchase houses as-is in Statesboro, Rincon, Savannah, Metter, Springfield, and surrounding Southeast Georgia. Pick your closing date.
          </p>
        </div>
      </section>

      {/* Form + benefits */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }} className="lg:grid-cols-[1fr_420px]">

            {/* Benefits */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '14px' }}>Why VP Buys Homes</p>
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: '#1B365D', marginBottom: '28px', lineHeight: 1.1,
              }}>
                No Repairs. No Fees. Close in Days.
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '16px', marginBottom: '32px' }}>
                {BENEFITS.map(b => (
                  <div key={b.title} style={{
                    background: 'white', borderRadius: '8px', padding: '20px',
                    border: '1px solid #D1DCE8', borderLeft: '3px solid #F2A65A',
                    boxShadow: '0 2px 6px rgba(13,27,42,0.05)',
                  }}>
                    <h3 style={{
                      fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                      fontSize: '16px', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.02em', color: '#1B365D', marginBottom: '8px',
                    }}>
                      {b.title}
                    </h3>
                    <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#374151' }}>
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ background: '#1B365D', borderRadius: '8px', padding: '24px' }}>
                <p style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '18px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: 'white', marginBottom: '6px',
                }}>
                  Questions? Call or Text Us.
                </p>
                <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  We answer promptly and speak plainly. No sales pressure.
                </p>
                <a href="tel:+19125156060" className="btn-amber">(912) 515-6060</a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: '#1B365D', marginBottom: '16px',
              }}>
                Get Your Cash Offer
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
