import { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  bullets: string[]
  imageSlot?: ReactNode  // optional left visual; if omitted, renders a navy decorative panel
  reversed?: boolean
}

export function BenefitsBlock({ eyebrow, title, body, bullets, imageSlot, reversed = false }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center ${reversed ? 'md:[grid-template-columns:1fr_1.1fr]' : ''}`}>
      <div className={`${reversed ? 'md:order-2' : ''}`}>
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            minHeight: 340,
            background: imageSlot
              ? undefined
              : 'linear-gradient(160deg,#1B365D 0%,#0F2040 100%)',
          }}
        >
          {imageSlot ?? (
            <>
              <span
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  top: -60, right: -60, width: 280, height: 280, borderRadius: '50%',
                  border: '40px solid rgba(255,255,255,0.05)',
                }}
              />
              <div className="absolute left-6 bottom-6 right-6">
                <span className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-amber">
                  Local · Direct · Fast
                </span>
                <p
                  className="font-display text-white mt-2 m-0"
                  style={{ fontSize: 28, lineHeight: 1.1, fontWeight: 700 }}
                >
                  Built for Southeast Georgia homeowners.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={`${reversed ? 'md:order-1' : ''}`}>
        {eyebrow && (
          <div className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-3">
            {eyebrow}
          </div>
        )}
        <h2
          className="font-display font-bold text-navy m-0 mb-4"
          style={{ fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.08, textWrap: 'balance' }}
        >
          {title}
        </h2>
        {body && (
          <div className="font-body text-[15.5px] text-ink-700 leading-[1.7] mb-6">
            {body}
          </div>
        )}
        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 font-body text-[15px] text-ink-700">
              <span
                aria-hidden
                className="inline-flex items-center justify-center shrink-0 mt-[2px]"
                style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(242,166,90,0.18)', color: '#D4862E',
                  fontSize: 13, fontWeight: 900, lineHeight: 1,
                }}
              >
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
