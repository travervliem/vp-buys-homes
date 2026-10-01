import { ReactNode } from 'react'

type Tone = 'amber' | 'navy' | 'white'
type Props = {
  children: ReactNode
  tone?: Tone
  withLine?: boolean
  className?: string
}

const toneClass: Record<Tone, string> = {
  amber: 'text-amber',
  navy: 'text-navy-mid',
  white: 'text-white/70',
}

export function Eyebrow({ children, tone = 'amber', withLine = false, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-body text-[11px] font-bold uppercase tracking-[0.18em] leading-none ${toneClass[tone]} ${className}`}
    >
      {withLine && <span className="inline-block w-6 h-0.5 bg-current shrink-0" aria-hidden="true" />}
      {children}
    </span>
  )
}
