import { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type Variant = 'amber' | 'navy' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ className, variant = 'amber', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        variant === 'amber' && 'btn-amber',
        variant === 'navy' && 'btn-navy',
        variant === 'outline' && 'btn-outline',
        className
      )}
      {...props}
    />
  )
}
