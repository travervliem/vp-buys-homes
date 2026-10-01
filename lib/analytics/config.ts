// Public analytics config — safe to import on client or server.
// Server-only secrets (Meta CAPI token) live in lib/analytics/meta-capi.ts
// so they never leak into the client bundle.

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || ''
export const GOOGLE_ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || ''
export const ANALYTICS_DEBUG = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true'

export const hasMetaPixel = () => META_PIXEL_ID.length > 0
export const hasGA = () => GA_MEASUREMENT_ID.length > 0
export const hasGoogleAds = () =>
  GOOGLE_ADS_CONVERSION_ID.length > 0 && GOOGLE_ADS_LEAD_LABEL.length > 0
export const anyAnalyticsEnabled = () => hasMetaPixel() || hasGA() || hasGoogleAds()
