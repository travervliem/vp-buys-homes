import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Areas We Serve — Southeast Georgia Cash Home Buyers',
  description: 'VP Buys Homes buys houses for cash across Southeast Georgia — Statesboro, Rincon, Savannah, Metter, Springfield, and more. No repairs, no fees, cash offer in 24 hours.',
  alternates: { canonical: 'https://vpbuyshomes.com/areas' },
}

const AREAS = [
  { city: 'Statesboro', county: 'Bulloch County', slug: 'statesboro-ga', primary: true, copy: 'Our home market. We buy across all of Bulloch County — any condition, any timeline.' },
  { city: 'Rincon', county: 'Effingham County', slug: 'rincon-ga', copy: 'Fast cash offers for Effingham County sellers. No showings, no repairs.' },
  { city: 'Savannah', county: 'Chatham County', slug: 'savannah-ga', copy: 'From the Historic District to West Chatham — we buy houses in any condition.' },
  { city: 'Metter', county: 'Candler County', slug: 'metter-ga', copy: 'Simple, local cash offers for Candler County homeowners.' },
  { city: 'Springfield', county: 'Effingham County', slug: 'springfield-ga', copy: 'Fast close, no hassle. We know the Effingham market.' },
  { city: 'Swainsboro', county: 'Emanuel County', slug: 'swainsboro-ga', copy: 'Cash buyers in Emanuel County. Written offer within 24 hours.' },
  { city: 'Claxton', county: 'Evans County', slug: 'claxton-ga', copy: 'Evans County cash buyer — no fees, no commissions.' },
  { city: 'Vidalia', county: 'Toombs County', slug: 'vidalia-ga', copy: 'Toombs County cash home buyers. Close fast on your schedule.' },
]

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
                href={`/areas/${area.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ height: '100%', borderTop: area.primary ? '3px solid #F2A65A' : '3px solid #1B365D' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h2 style={{
                      fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                      fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.02em', color: '#1B365D',
                    }}>
                      {area.city}, GA
                    </h2>
                    {area.primary && <span className="badge-amber">Primary</span>}
                  </div>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                    {area.county}
                  </p>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#374151' }}>
                    {area.copy}
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
