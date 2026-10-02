import { ReactNode } from 'react'

type Props = {
  children?: ReactNode  // form slot
}

// Homepage hero. Two-column on desktop (text + form), stacked on mobile.
export function HomeHero({ children }: Props) {
  return (
    <section
      className="ds-hero-bg overflow-hidden relative"
      style={{ paddingTop: 'clamp(56px, 9vw, 104px)', paddingBottom: 'clamp(56px, 9vw, 104px)' }}
    >
      {/* Decorative rings — only visible at md+ */}
      <span aria-hidden className="hidden md:block absolute pointer-events-none" style={{ right: -100, top: -120, width: 460, height: 460, borderRadius: '50%', border: '80px solid rgba(255,255,255,0.04)' }} />
      <span aria-hidden className="hidden md:block absolute pointer-events-none" style={{ right: 80, bottom: -160, width: 280, height: 280, borderRadius: '50%', border: '46px solid rgba(255,255,255,0.03)' }} />

      <div className="max-w-container mx-auto px-[18px] sm:px-[28px] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center relative z-[2]">

        {/* LEFT — copy */}
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
              textWrap: 'balance',
            }}
          >
            Cash in <em className="text-amber not-italic" style={{ fontStyle: 'italic', fontWeight: 600 }}>your hand</em>
          </h1>

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
            >
              48
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
              'Written cash offer within 48 hours — no obligation',
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
