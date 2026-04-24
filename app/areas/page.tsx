import type { Metadata } from 'next'
import Link from 'next/link'
import { AREAS, areaHref } from '@/lib/areas'

export const metadata: Metadata = {
  title: 'Areas We Serve — Southeast Georgia Cash Home Buyers',
  description: 'VP Buys Homes buys houses for cash across Southeast Georgia — Statesboro, Rincon, Savannah, Metter, Springfield, and more. No repairs, no fees, cash offer in 24 hours.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/areas' },
}

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0' }} className="circle-motif">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>Coverage Map</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '680px',
          }}>
            We Buy Houses Across Southeast Georgia
          </h1>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '560px' }}>
            Local cash buyers covering Bulloch, Effingham, Chatham, Candler, Emanuel, Evans, and Toombs counties — and surrounding areas.
          </p>
        </div>
      </section>

      {/* Areas grid */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>
            {AREAS.map(area => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ height: '100%', borderTop: area.primary ? '3px solid #F2A65A' : '3px solid #1B365D' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h2 style={{
                      fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                      fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.02em', color: '#1B365D',
                    }}>
                      {area.name}, {area.state}
                    </h2>
                    {area.primary && <span className="badge-amber">Primary</span>}
                  </div>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                    {area.county}
                  </p>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#374151' }}>
                    {area.shortCopy}
                  </p>
                  <p style={{ marginTop: '16px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', fontWeight: 700, color: '#F2A65A', letterSpacing: '0.04em' }}>
                    Get My Cash Offer →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', color: '#374151', marginBottom: '16px' }}>
              Don't see your city? We likely buy there too — call or text us.
            </p>
            <a href="tel:+19125156060" className="btn-amber">(912) 515-6060 — Call or Text</a>
          </div>
        </div>
      </section>
    </>
  )
}
