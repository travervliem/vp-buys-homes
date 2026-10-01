import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  sub?: ReactNode
  primaryHref?: string
  primaryLabel?: string
  phone?: string
}

export function FinalCTA({
  eyebrow = 'Ready when you are',
  title,
  sub,
  primaryHref = '/sell',
  primaryLabel = 'Get My Cash Offer',
  phone = '(912) 515-6060',
}: Props) {
  return (
    <section className="ds-hero-bg" style={{ paddingBlock: 96 }}>
      <div className="max-w-container mx-auto px-[18px] sm:px-[28px] text-center relative z-[1]">
        <div className="inline-flex items-center gap-2.5 font-body text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-5">
          <span aria-hidden className="inline-block w-6 h-0.5 bg-amber" />
          {eyebrow}
          <span aria-hidden className="inline-block w-6 h-0.5 bg-amber" />
        </div>
        <h2
          className="font-display text-white font-bold m-0 mb-5 mx-auto"
          style={{
            fontSize: 'clamp(32px,5vw,52px)',
            lineHeight: 1.06,
            letterSpacing: '0.005em',
            textWrap: 'balance' as any,
            maxWidth: 880,
          }}
        >
          {title}
        </h2>
        {sub && (
          <p
            className="font-body mx-auto m-0 mb-8"
            style={{
              fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: 620,
            }}
          >
            {sub}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-7 py-[15px] bg-amber text-white font-body text-[13px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline shadow-amber transition-all duration-150 hover:bg-amber-dark hover:-translate-y-px"
          >
            {primaryLabel} →
          </Link>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-[13px] border-[1.5px] border-white/30 text-white font-body text-[13px] font-bold tracking-[0.16em] uppercase rounded-sm no-underline transition-colors duration-150 hover:bg-white/[0.06] hover:border-white"
          >
            Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
