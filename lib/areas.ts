// Single source of truth for the service-area list. Consumers that need
// extra fields (full SEO body copy, per-page metadata, etc.) layer their
// own data on top keyed by `slug`.
//
// To add a city:
//   1. Add an Area entry here
//   2. Add the full landing-page content to `app/areas/[city]/page.tsx`
// Sitemap, homepage, areas directory, footer, JSON-LD, and the lead-route
// city detector all pick the new entry up automatically.

export type Area = {
  name: string        // e.g. 'Statesboro'
  county: string      // e.g. 'Bulloch County'
  slug: string        // e.g. 'statesboro-ga'
  state: string       // e.g. 'GA'
  primary?: boolean   // marked on the home market
  shortCopy?: string  // one-liner used by the areas directory + homepage grid
}

export const AREAS: Area[] = [
  {
    name: 'Statesboro',
    county: 'Bulloch County',
    slug: 'statesboro-ga',
    state: 'GA',
    primary: true,
    shortCopy: 'Our home market. We buy across all of Bulloch County — any condition, any timeline.',
  },
  {
    name: 'Rincon',
    county: 'Effingham County',
    slug: 'rincon-ga',
    state: 'GA',
    shortCopy: 'Fast cash offers for Effingham County sellers. No showings, no repairs.',
  },
  {
    name: 'Savannah',
    county: 'Chatham County',
    slug: 'savannah-ga',
    state: 'GA',
    shortCopy: 'From the Historic District to West Chatham — we buy houses in any condition.',
  },
  {
    name: 'Metter',
    county: 'Candler County',
    slug: 'metter-ga',
    state: 'GA',
    shortCopy: 'Simple, local cash offers for Candler County homeowners.',
  },
  {
    name: 'Springfield',
    county: 'Effingham County',
    slug: 'springfield-ga',
    state: 'GA',
    shortCopy: 'Fast close, no hassle. We know the Effingham market.',
  },
  {
    name: 'Swainsboro',
    county: 'Emanuel County',
    slug: 'swainsboro-ga',
    state: 'GA',
    shortCopy: 'Cash buyers in Emanuel County. Written offer within 24 hours.',
  },
  {
    name: 'Claxton',
    county: 'Evans County',
    slug: 'claxton-ga',
    state: 'GA',
    shortCopy: 'Evans County cash buyer — no fees, no commissions.',
  },
  {
    name: 'Vidalia',
    county: 'Toombs County',
    slug: 'vidalia-ga',
    state: 'GA',
    shortCopy: 'Toombs County cash home buyers. Close fast on your schedule.',
  },
]

export function areaHref(slug: string) {
  return `/areas/${slug}`
}

// Additional cities the lead-route recognizes when parsing an address
// string, even though they don't have dedicated landing pages yet.
export const SECONDARY_CITIES = ['Millen', 'Waynesboro', 'Jesup', 'Dublin'] as const

// Every city we recognize — used by `detectCity` in the lead route.
export const RECOGNIZED_CITIES: readonly string[] = [
  ...AREAS.map(a => a.name),
  ...SECONDARY_CITIES,
]
