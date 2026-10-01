import { ReactNode } from 'react'
import { Container } from './Container'

type Tone = 'white' | 'paper' | 'navy' | 'navy-deep' | 'light'

type Props = {
  children: ReactNode
  tone?: Tone
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  noContainer?: boolean
  tight?: boolean
}

const toneStyles: Record<Tone, string> = {
  white: 'bg-white text-ink-900',
  paper: 'bg-paper text-ink-900',
  light: 'bg-light text-ink-900',
  navy: 'bg-navy text-white',
  'navy-deep': 'bg-navy-deep text-white',
}

const pad: Record<NonNullable<Props['padding']>, string> = {
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
}

export function Section({
  children,
  tone = 'white',
  className = '',
  padding = 'lg',
  id,
  noContainer = false,
  tight = false,
}: Props) {
  return (
    <section id={id} className={`${toneStyles[tone]} ${pad[padding]} ${className}`}>
      {noContainer ? children : <Container tight={tight}>{children}</Container>}
    </section>
  )
}
