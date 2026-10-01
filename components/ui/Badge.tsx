import { ReactNode } from 'react'

type Tone = 'amber' | 'navy' | 'success' | 'neutral'
type Props = {
  children: ReactNode
  tone?: Tone
  withDot?: boolean
  className?: string
}

const toneClass: Record<Tone, string> = {
  amber: 'bg-amber/15 text-amber-dark border border-amber/30',
  navy: 'bg-navy/10 text-navy border border-navy/20',
  success: 'bg-success/15 text-success-dark border border-success/30',
  neutral: 'bg-ink-100 text-ink-700 border border-hairline',
}

const dotColor: Record<Tone, string> = {
  amber: 'bg-amber',
  navy: 'bg-navy',
  success: 'bg-success',
  neutral: 'bg-ink-400',
}

export function Badge({ children, tone = 'amber', withDot = false, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill font-body text-[11px] font-bold uppercase tracking-[0.12em] ${toneClass[tone]} ${className}`}
    >
      {withDot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor[tone]}`} aria-hidden="true" />}
      {children}
    </span>
  )
}
