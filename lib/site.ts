// Single source of truth for business identity and contact details.
// Import from here instead of typing the phone number, email, or domain into
// a page — they were previously copied into 17+ files.

export const SITE = {
  name: 'VP Buys Homes',
  legalName: 'VP Equities LLC',

  // Canonical origin, no trailing slash. The fallback is the production host
  // so a missing env var can never publish a localhost URL in metadata,
  // sitemap, or structured data.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com',

  phoneDisplay: '(912) 515-6060',
  phoneE164: '+19125156060',
  phoneHref: 'tel:+19125156060',

  email: 'leads@vpbuyshomes.com',
  emailHref: 'mailto:leads@vpbuyshomes.com',
} as const

// Absolute URL for a site path, e.g. absoluteUrl('/sell').
export function absoluteUrl(path: string): string {
  return `${SITE.url}${path}`
}
