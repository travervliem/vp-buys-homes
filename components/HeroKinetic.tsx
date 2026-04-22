'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LeadFormQuick } from './LeadFormQuick'

function useCounter(from: number, to: number, durationMs: number) {
  const [value, setValue] = useState(from)
  useEffect(() => {
    const start = performance.now()
    function tick(now: number) {
      const t = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(from - (from - to) * eased))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [from, to, durationMs])
  return value
}

const TICKER_ITEMS = [
  'CLOSED · STATESBORO · 9 DAYS',
  'CLOSED · RINCON · 11 DAYS',
  'CLOSED · SAVANNAH · 14 DAYS',
  'CLOSED · METTER · 8 DAYS',
  'CLOSED · SPRINGFIELD · 12 DAYS',
  'CLOSED · STATESBORO · 7 DAYS',
  'CLOSED · SWAINSBORO · 10 DAYS',
  'CLOSED · CLAXTON · 13 DAYS',
]

export function HeroKinetic() {
  const days = useCounter(30, 7, 1400)

  return (
    <section
      style={{ background: '#1B365D', minHeight: 'calc(100vh - 72px)', position: 'relative', overflow: 'hidden' }}
      className="circle-motif"
    >
      {/* Decorative grid lines */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

      <div className="wrap relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-0" style={{ minHeight: 'calc(100vh - 72px)' }}>

        {/* Left — headline + counter */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="eyebrow mb-5 animate-fade-up" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.2em' }}>
            STATESBORO · RINCON · SAVANNAH · SOUTHEAST GEORGIA
          </p>

          <h1 className="hero-h animate-fade-up-1 mb-2" style={{ lineHeight: 1.06 }}>
            CASH IN YOUR
          </h1>
          <div className="flex items-end gap-4 mb-2 animate-fade-up-1">
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
              aria-label={`${days} days`}
            >
              {days}
            </span>
            <span className="hero-h" style={{ paddingBottom: '12px' }}>DAYS</span>
          </div>
          <h1 className="hero-h animate-fade-up-2 mb-6">
            GUARANTEED
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
              Share the basics — we'll respond within 24 hours.
            </p>
            <LeadFormQuick />
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: '#F2A65A',
        overflow: 'hidden',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="ticker-track flex items-center whitespace-nowrap" style={{ gap: 0 }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#0D1B2A',
                padding: '0 32px',
                display: 'inline-block',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
