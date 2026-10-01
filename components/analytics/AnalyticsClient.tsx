'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { anyAnalyticsEnabled } from '@/lib/analytics/config'
import { captureAttribution, trackEvent, trackPageView } from '@/lib/analytics/client'
import { EVENTS } from '@/lib/analytics/events'

// Mounted once in the root layout. Responsibilities:
//  - Capture first-touch attribution (UTMs / gclid / fbclid) into sessionStorage
//  - Fire PageView to gtag + fbq on every App Router navigation (neither
//    auto-fires on client-side route changes)
//  - Listen globally for tel: link clicks → fire phone_click event so call
//    tracking covers every phone link without per-link wiring
export function AnalyticsClient() {
  const pathname = usePathname()

  useEffect(() => {
    if (!anyAnalyticsEnabled()) return
    captureAttribution()
  }, [])

  useEffect(() => {
    if (!anyAnalyticsEnabled()) return
    if (!pathname) return
    const search = typeof window !== 'undefined' ? window.location.search : ''
    trackPageView(pathname + search)
    if (
      pathname.startsWith('/situations/') ||
      /^\/areas\/[^/]+\/[^/]+/.test(pathname)
    ) {
      trackEvent(EVENTS.VIEW_SITUATION, { path: pathname })
    }
  }, [pathname])

  useEffect(() => {
    if (!anyAnalyticsEnabled()) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!anchor) return
      trackEvent(EVENTS.PHONE_CLICK, {
        phone: anchor.getAttribute('href')?.replace('tel:', '') || '',
        label: anchor.textContent?.trim() || '',
        path: window.location.pathname,
      })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return null
}
