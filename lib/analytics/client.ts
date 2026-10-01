'use client'

import {
  ANALYTICS_DEBUG,
  GOOGLE_ADS_CONVERSION_ID,
  GOOGLE_ADS_LEAD_LABEL,
  hasGA,
  hasGoogleAds,
  hasMetaPixel,
} from './config'
import {
  ATTRIBUTION_STORAGE_KEY,
  AttributionFields,
  EVENTS,
} from './events'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

function debug(...args: any[]) {
  if (ANALYTICS_DEBUG && typeof console !== 'undefined') {
    console.info('[analytics]', ...args)
  }
}

// First-touch attribution: capture the landing URL's UTM/click params once
// per session. We do not overwrite on later visits within the session, so the
// channel that brought the user in remains the credited source on conversion.
export function captureAttribution(): AttributionFields {
  if (typeof window === 'undefined') return {}
  const existing = readAttribution()
  if (existing.utm_source || existing.gclid || existing.fbclid) return existing

  const params = new URL(window.location.href).searchParams
  const next: AttributionFields = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
    gclid: params.get('gclid') || undefined,
    fbclid: params.get('fbclid') || undefined,
    referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
    landing_page: window.location.pathname + window.location.search,
  }

  const hasAny = Object.values(next).some(Boolean)
  if (!hasAny) return next

  try {
    sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(next))
    debug('attribution captured', next)
  } catch {}
  return next
}

export function readAttribution(): AttributionFields {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AttributionFields) : {}
  } catch {
    return {}
  }
}

// Generic event dispatcher — fans out to whichever providers are enabled.
// Meta uses the standard 'Lead' event for conversions; everything else is a
// custom event so we can keep one schema across both platforms.
export function trackEvent(name: string, params: Record<string, any> = {}) {
  debug('event', name, params)

  if (hasMetaPixel() && typeof window.fbq === 'function') {
    if (name === EVENTS.LEAD_COMPLETE) {
      window.fbq('track', 'Lead', {
        content_category: params.pageSituation || undefined,
        content_name: params.pageCity || undefined,
        value: params.value,
        currency: params.currency || 'USD',
      })
    } else {
      window.fbq('trackCustom', name, params)
    }
  }

  if (hasGA() && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }

  if (
    hasGoogleAds() &&
    typeof window.gtag === 'function' &&
    name === EVENTS.LEAD_COMPLETE
  ) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
      value: params.value || 0,
      currency: params.currency || 'USD',
    })
  }
}

export function trackPageView(path: string) {
  if (hasMetaPixel() && typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
  if (hasGA() && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    })
  }
}
