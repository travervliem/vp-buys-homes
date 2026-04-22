import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'amber' | 'navy'
}

export function Badge({ className, variant = 'amber', ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        variant === 'amber' && 'badge-amber',
        variant === 'navy' && 'badge-navy',
        className
      )}
      {...props}
    />
  )
}
