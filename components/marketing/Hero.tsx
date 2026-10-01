import { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  headline: ReactNode
  sub?: ReactNode
  bullets?: string[]
  children?: ReactNode  // form slot
  rightAside?: ReactNode  // alternate to children
}

export function Hero({ eyebrow, headline, sub, bullets, children, rightAside }: Props) {
  return (
    <section className="ds-hero-bg overflow-hidden" style={{ paddingBlock: '84px' }}>
      <div className="max-w-container mx-auto px-[18px] sm:px-[28px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center relative z-[1]">
        {/* Decorative rings, only visible at md+ */}
        <span
          aria-hidden
          className="hidden md:block absolute pointer-events-none"
          style={{
            right: -80, top: -100, width: 420, height: 420, borderRadius: '50%',
            border: '72px solid rgba(255,255,255,0.04)',
          }}
        />
        <span
          aria-hidden
          className="hidden md:block absolute pointer-events-none"
          style={{
            right: 60, bottom: -120, width: 240, height: 240, borderRadius: '50%',
            border: '40px solid rgba(255,255,255,0.03)',
          }}
        />

        <div className="relative z-[2]">
          {eyebrow && (
            <div
              className="inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-[18px]"
            >
              <span className="inline-block w-6 h-0.5 bg-amber shrink-0" aria-hidden />
              {eyebrow}
            </div>
          )}
          <h1
            className="font-display font-bold m-0 mb-6 text-white"
            style={{
              fontSize: 'clamp(40px, 6.5vw, 64px)',
              lineHeight: 1.04,
              letterSpacing: '0.005em',
              textWrap: 'balance',
            }}
          >
            {headline}
          </h1>
          {sub && (
            <p
              className="font-body text-[17px] m-0 mb-7"
              style={{
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.65,
                maxWidth: 520,
              }}
            >
              {sub}
            </p>
          )}
          {bullets && bullets.length > 0 && (
            <ul className="list-none p-0 m-0 mb-8 flex flex-col gap-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-[14px]" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center shrink-0 mt-[3px]"
                    style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: '#F2A65A', color: '#fff',
                      fontSize: 11, fontWeight: 900, lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative z-[2]">
          {children ?? rightAside}
        </div>
      </div>
    </section>
  )
}
