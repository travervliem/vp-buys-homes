import Link from 'next/link'
import { LeadFormQuick } from './LeadFormQuick'

export function HeroKinetic() {
  return (
    <section
      style={{ background: '#1B365D', minHeight: 'calc(100vh - 72px)', position: 'relative', overflow: 'hidden' }}
      className="circle-motif"
    >
      {/* Decorative grid lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

      <div className="wrap relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-0" style={{ minHeight: 'calc(100vh - 72px)' }}>

        {/* Left — headline */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="eyebrow mb-5 animate-fade-up" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2em' }}>
            STATESBORO · RINCON · SAVANNAH · SOUTHEAST GEORGIA
          </p>

          <h1 className="hero-h animate-fade-up-1 mb-6" style={{ lineHeight: 1.06 }}>
            <span className="block mb-2">CASH OFFER WITHIN</span>
            <span className="flex items-end gap-4">
              <span
                style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: 'clamp(100px, 18vw, 180px)',
                  fontWeight: 800,
                  lineHeight: 0.88,
                  color: '#F2A65A',
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}
              >
                48
              </span>
              <span style={{ paddingBottom: '12px' }}>HOURS</span>
            </span>
          </h1>

          <p className="animate-fade-up-3" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', fontFamily: "'Nunito Sans',sans-serif", lineHeight: 1.65, maxWidth: '480px', marginBottom: '28px' }}>
            We buy houses as-is across Southeast Georgia. No repairs, no fees, no commissions. Pick your closing date.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up-3">
            <Link href="/sell" className="btn-amber">Get My Cash Offer</Link>
            <Link href="/how-it-works" className="btn-outline">See How It Works</Link>
          </div>

          {/* Trust micro-row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 animate-fade-up-3">
            {['No repairs required', 'No fees or commissions', 'You pick the close date'].map(t => (
              <span key={t} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#F2A65A', fontWeight: 700 }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — lead form card */}
        <div className="w-full lg:w-[420px] shrink-0 animate-scale-in">
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <div className="mb-1">
              <span className="badge-amber">Free · No Obligation</span>
            </div>
            <h2 style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.02em', color: '#1B365D', marginBottom: '4px', marginTop: '10px'
            }}>
              Get Your Cash Offer
            </h2>
            <p style={{ color: '#6B7280', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", marginBottom: '20px' }}>
              Share the basics — we'll respond within 48 hours.
            </p>
            <LeadFormQuick />
          </div>
        </div>
      </div>
    </section>
  )
}
