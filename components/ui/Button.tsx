import Link from 'next/link'
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'amber' | 'ghost' | 'navy' | 'link'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  fullWidth?: boolean
}

type AsButton = CommonProps & {
  href?: undefined
} & ButtonHTMLAttributes<HTMLButtonElement>

type AsLink = CommonProps & {
  href: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

type Props = AsButton | AsLink

const baseClass =
  'inline-flex items-center justify-center gap-2 font-body font-bold uppercase ' +
  'transition-all duration-150 ease-standard cursor-pointer no-underline whitespace-nowrap ' +
  'disabled:opacity-50 disabled:cursor-not-allowed'

const variantClass: Record<Variant, string> = {
  amber:
    'bg-amber text-white hover:bg-amber-dark hover:text-white hover:-translate-y-px shadow-amber',
  navy:
    'bg-navy text-white hover:bg-navy-deep hover:text-white',
  ghost:
    'bg-transparent text-white border-[1.5px] border-white/30 hover:border-white hover:bg-white/[0.06] hover:text-white',
  link:
    'bg-transparent text-navy hover:text-amber-dark p-0 normal-case tracking-normal',
}

const sizeClass: Record<Size, string> = {
  sm: 'text-[11px] tracking-[0.14em] px-4 py-2 rounded-sm',
  md: 'text-[12px] tracking-[0.16em] px-[22px] py-3 rounded-sm',
  lg: 'text-[13px] tracking-[0.16em] px-[26px] py-[14px] rounded-sm',
}

export function Button(props: Props) {
  const {
    children,
    variant = 'amber',
    size = 'md',
    className = '',
    fullWidth = false,
  } = props

  const linkSizeOverride = variant === 'link' ? '' : sizeClass[size]
  const cx = `${baseClass} ${variantClass[variant]} ${linkSizeOverride} ${fullWidth ? 'w-full' : ''} ${className}`

  if ('href' in props && props.href) {
    const { href, children: _c, variant: _v, size: _s, className: _cl, fullWidth: _f, ...rest } = props
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <a href={href} className={cx} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cx} {...rest}>
        {children}
      </Link>
    )
  }

  const { children: _c, variant: _v, size: _s, className: _cl, fullWidth: _f, href: _h, ...rest } = props as AsButton
  return (
    <button className={cx} {...rest}>
      {children}
    </button>
  )
}
