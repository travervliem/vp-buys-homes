'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// Client-side gate that hides the legacy Footer on routes which render
// their own (e.g. the /design-system preview).
export function FooterGate({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/design-system')) return null
  return <>{children}</>
}
