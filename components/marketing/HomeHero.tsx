'use client'

import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children?: ReactNode  // form slot
}

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
    const handle = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(handle)
  }, [from, to, durationMs])
  return value
}

// Homepage hero. Two-column on desktop (text + form), stacked on mobile.
// Kinetic counters animate days (30 → 7) and hours (48 → 24). Numbers are
// baseline-aligned with their captions so the big number sits on the same
// typographic baseline as "days guaranteed" — fixes the prior "7 too low" bug.
export function HomeHero({ children }: Props) {
  const days = useCounter(30, 7, 1400)
  const hours = useCounter(48, 24, 1600)

  return (
    <section
      className="ds-hero-bg overflow-hidden relative"
      style={{ paddingTop: 'clamp(56px, 9vw, 104px)', paddingBottom: 'clamp(56px, 9vw, 104px)' }}
    >
      {/* Decorative rings — only visible at md+ */}
      <span aria-hidden className="hidden md:block absolute pointer-events-none" style={{ right: -100, top: -120, width: 460, height: 460, borderRadius: '50%', border: '80px solid rgba(255,255,255,0.04)' }} />
      <span aria-hidden className="hidden md:block absolute pointer-events-none" style={{ right: 80, bottom: -160, width: 280, height: 280, borderRadius: '50%', border: '46px solid rgba(255,255,255,0.03)' }} />

      <div className="max-w-container mx-auto px-[18px] sm:px-[28px] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center relative z-[2]">

        {/* LEFT — copy + countdown */}
        <div>
          <div className="inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-[0.22em] text-amber mb-7">
            <span className="inline-block w-7 h-0.5 bg-amber shrink-0" aria-hidden />
            Statesboro · Savannah · Southeast Georgia · Since 2021
          </div>

          <h1
            className="font-display font-bold m-0 text-white"
            style={{
              fontSize: 'clamp(44px, 6vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '0.005em',
              textWrap: 'balance' as any,
            }}
          >
            Cash in <em className="text-amber not-italic" style={{ fontStyle: 'italic', fontWeight: 600 }}>your hand</em>
          </h1>

          {/* Countdown — all on one baseline-aligned line. "days" and
              "guaranteed" share size so they read as one phrase tail-ending
              the big number. */}
          <div className="mt-5 flex items-baseline gap-x-4 gap-y-2 flex-wrap">
            <span
              className="font-display font-bold text-amber tabular-nums"
              style={{
                fontSize: 'clamp(96px, 12.5vw, 132px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                fontFeatureSettings: '"lnum" 1, "tnum" 1',
              }}
              aria-label={`${days} days`}
            >
              {days}
            </span>
            <span
              className="font-display font-bold text-white"
              style={{
                fontSize: 'clamp(34px, 4.4vw, 48px)',
                lineHeight: 1,
                letterSpacing: '0.005em',
              }}
            >
              days
            </span>
            <span
              className="font-display italic font-semibold text-white/85"
              style={{
                fontSize: 'clamp(34px, 4.4vw, 48px)',
                lineHeight: 1,
                letterSpacing: '0.005em',
              }}
            >
              guaranteed
            </span>
          </div>

          {/* Hours callout — sizes to content */}
          <div
            className="inline-flex items-center gap-4 mt-6 px-6 py-5 rounded-lg"
            style={{
              background: 'rgba(242,166,90,0.12)',
              border: '1px solid rgba(242,166,90,0.30)',
            }}
          >
            <span className="font-body text-[12.5px] font-bold uppercase tracking-[0.20em] text-amber whitespace-nowrap">
              Cash offer in
            </span>
            <span
              className="font-display font-bold text-white tabular-nums"
              style={{ fontSize: 'clamp(40px, 5vw, 52px)', lineHeight: 1, letterSpacing: '-0.01em', fontFeatureSettings: '"lnum" 1, "tnum" 1' }}
              aria-label={`${hours} hours`}
            >
              {hours}
            </span>
            <span
              className="font-display italic font-semibold text-amber"
              style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', lineHeight: 1 }}
            >
              hours
            </span>
          </div>

          <p
            className="font-body m-0 mt-7 mb-7"
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.74)',
              lineHeight: 1.65,
              maxWidth: 540,
            }}
          >
            We buy houses for cash in Statesboro, Savannah, Rincon, Metter, Springfield — and all across Southeast Georgia. No repairs. No agent fees. Pick your closing date.
          </p>

          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {[
              'Written cash offer within 24 hours — no obligation',
              'Close in as little as 7 days, or on your timeline',
              'Any condition. Any situation. No showings.',
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-[14.5px]" style={{ color: 'rgba(255,255,255,0.86)' }}>
                <span aria-hidden className="inline-flex items-center justify-center shrink-0 mt-0.5" style={{ width: 18, height: 18, borderRadius: '50%', background: '#F2A65A', color: '#fff', fontSize: 11, fontWeight: 900, lineHeight: 1 }}>
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — form */}
        <div className="lg:pl-2">
          {children}
        </div>
      </div>
    </section>
  )
}
