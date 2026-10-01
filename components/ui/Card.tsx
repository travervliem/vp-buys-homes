import { ReactNode } from 'react'

type Variant = 'default' | 'hover' | 'feature'
type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
  as?: 'div' | 'article' | 'a' | 'section'
  href?: string
}

const base =
  'block bg-white border border-[#D1DCE8] rounded-lg p-6 md:p-7 transition-all duration-200 ease-out'

const variants: Record<Variant, string> = {
  default: '',
  hover:
    'hover:-translate-y-0.5 hover:shadow-md hover:border-amber',
  feature:
    'shadow-md',
}

export function Card({ children, variant = 'default', className = '', as = 'div', href }: Props) {
  const cx = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={`${cx} no-underline`}>
        {children}
      </a>
    )
  }
  const Tag = as
  return <Tag className={cx}>{children}</Tag>
}
