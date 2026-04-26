import type { Metadata } from 'next'
import Link from 'next/link'
import { SITUATIONS } from '@/lib/situations'

export const metadata: Metadata = {
  title: 'Situations We Help With — Sell Your Georgia House for Cash',
  description: 'Foreclosure, divorce, probate, tired-landlord, and tax-lien situations — VP Buys Homes pays cash and closes fast across Southeast Georgia.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/situations' },
}

export default function SituationsDirectoryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0' }} className="circle-motif">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>Situations We Help With</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '720px',
          }}>
            Real Situations, Real Cash Offers
          </h1>
          <p style={{
            fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px',
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '600px',
          }}>
            Foreclosure, divorce, inherited property, tired-landlord exits, tax-sale redemption — Southeast Georgia homeowners come to us for fast, fair cash offers when life moves faster than the traditional listing process.
          </p>
        </div>
      </section>

      {/* Situations grid */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>
            {SITUATIONS.map(s => (
              <Link
                key={s.slug}
                href={`/situations/${s.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ height: '100%', borderTop: '3px solid #F2A65A' }}>
                  <p style={{
                    fontFamily: "'Nunito Sans',sans-serif", fontSize: '11px', fontWeight: 700,
                    color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px',
                  }}>
                    {s.searchVerb}
                  </p>
                  <h2 style={{
                    fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                    fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.02em', color: '#1B365D', marginBottom: '12px', lineHeight: 1.2,
                  }}>
                    {s.label}
                  </h2>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#374151' }}>
                    {s.pillarLead}
                  </p>
                  <p style={{ marginTop: '16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', fontWeight: 700, color: '#F2A65A', letterSpacing: '0.04em' }}>
                    Read More →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', color: '#374151', marginBottom: '16px' }}>
              Not sure which situation fits? Call us. We have heard most of them.
            </p>
            <a href="tel:+19125156060" className="btn-amber">(912) 515-6060 — Call or Text</a>
          </div>
        </div>
      </section>
    </>
  )
}
