import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  tight?: boolean
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main'
}

export function Container({ children, className = '', tight = false, as: Tag = 'div' }: Props) {
  const max = tight ? 'max-w-tight' : 'max-w-container'
  return (
    <Tag className={`${max} mx-auto w-full px-[18px] sm:px-[28px] ${className}`}>
      {children}
    </Tag>
  )
}
