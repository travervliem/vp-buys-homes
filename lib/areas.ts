// Single source of truth for the service-area list. Consumers that need
// extra fields (full SEO body copy, per-page metadata, etc.) layer their
// own data on top keyed by `slug`.
//
// To add a city:
//   1. Add an Area entry here (all fields required so SEO localization stays honest)
//   2. Add the full landing-page content to `app/areas/[city]/page.tsx`
//   3. Add per-situation intersection content to `lib/situations/<situation>-content.ts`
// Sitemap, homepage, areas directory, footer, JSON-LD, and the lead-route
// city detector all pick the new entry up automatically.
//
// County-level facts (courts, tax commissioner, legal organ newspaper)
// are verified against primary sources (county .gov sites, GSCCCA,
// Georgia Press Association legal-organ list) as of 2026-04. Judge names
// are intentionally NOT stored here because they rotate and stale data
// is worse than no data.

export type SuperiorCourt = {
  name: string
  courthouseAddress: string
  judicialCircuit: string
}

export type ProbateCourt = {
  name: string
  address: string
}

export type TaxCommissioner = {
  officeAddress: string
  salePattern: string  // human-readable description, citation-safe
}

export type Area = {
  name: string                    // e.g. 'Statesboro'
  county: string                  // e.g. 'Bulloch County'
  slug: string                    // e.g. 'statesboro-ga'
  state: string                   // e.g. 'GA'
  primary?: boolean               // marked on the home market
  shortCopy?: string              // one-liner used by the areas directory + homepage grid
  superiorCourt: SuperiorCourt
  probateCourt: ProbateCourt
  taxCommissioner: TaxCommissioner
  legalNoticesPaper: string       // designated organ for legal notices
  extraNeighborhoods: string[]    // additional named communities NOT already in /areas/[city] body
  procedureNote: string           // material per-county procedural quirk for situation pages
}

export const AREAS: Area[] = [
  {
    name: 'Statesboro',
    county: 'Bulloch County',
    slug: 'statesboro-ga',
    state: 'GA',
    primary: true,
    shortCopy: 'Our home market. We buy across all of Bulloch County — any condition, any timeline.',
    superiorCourt: {
      name: 'Bulloch County Superior Court',
      courthouseAddress: '20 Siebald Street, Statesboro, GA 30458',
      judicialCircuit: 'Ogeechee Judicial Circuit',
    },
    probateCourt: {
      name: 'Bulloch County Probate Court',
      address: '2 North Main Street, Statesboro, GA 30458',
    },
    taxCommissioner: {
      officeAddress: '113 N. Main Street, Suite 101, Statesboro, GA 30458',
      salePattern: 'scheduled tax sales held a few times per year at the Bulloch County Annex, advertised four consecutive weeks in the Statesboro Herald',
    },
    legalNoticesPaper: 'Statesboro Herald',
    extraNeighborhoods: ['Hopeulikit', 'Nevils', 'Leefield', 'Adabelle', 'Denmark'],
    procedureNote: 'Bulloch County does not run a strict first-Tuesday tax sale. Sales are scheduled by the tax commissioner a few times per year and advertised four consecutive weeks in the Statesboro Herald before sale day.',
  },
  {
    name: 'Rincon',
    county: 'Effingham County',
    slug: 'rincon-ga',
    state: 'GA',
    shortCopy: 'Fast cash offers for Effingham County sellers. No showings, no repairs.',
    superiorCourt: {
      name: 'Effingham County Superior Court',
      courthouseAddress: '700 N. Pine Street, Suite 110, Springfield, GA 31329',
      judicialCircuit: 'Ogeechee Judicial Circuit',
    },
    probateCourt: {
      name: 'Effingham County Probate Court',
      address: '700 N. Pine Street, Springfield, GA 31329',
    },
    taxCommissioner: {
      officeAddress: '802 S. Laurel Street, Springfield, GA 31329',
      salePattern: 'scheduled tax sales conducted by the Effingham County Tax Commissioner (case-by-case, not on a strict monthly cadence)',
    },
    legalNoticesPaper: 'Effingham Herald',
    extraNeighborhoods: ['Pineora', 'Eden', 'Meldrim', 'Faulkville'],
    procedureNote: 'Rincon sellers file matters at the Effingham County courthouse in Springfield, the county seat. Foreclosure ads run four consecutive weeks in the Effingham Herald.',
  },
  {
    name: 'Savannah',
    county: 'Chatham County',
    slug: 'savannah-ga',
    state: 'GA',
    shortCopy: 'From the Historic District to West Chatham — we buy houses in any condition.',
    superiorCourt: {
      name: 'Chatham County Superior Court',
      courthouseAddress: '133 Montgomery Street, Savannah, GA 31401',
      judicialCircuit: 'Eastern Judicial Circuit',
    },
    probateCourt: {
      name: 'Chatham County Probate Court',
      address: '133 Montgomery Street, Room 509, Savannah, GA 31401',
    },
    taxCommissioner: {
      officeAddress: '222 W. Oglethorpe Avenue, Suite 107, Savannah, GA 31401',
      salePattern: 'first-Tuesday tax sales held 10 AM at the Savannah Civic Center, Bryan Meeting Room, 301 W. Oglethorpe Avenue — not on the courthouse steps. Online bidder registration is required.',
    },
    legalNoticesPaper: 'Savannah Morning News',
    extraNeighborhoods: ['Wilmington Island', 'Skidaway Island', 'Isle of Hope', 'Whitemarsh Island', 'Vernonburg', 'Pin Point'],
    procedureNote: 'Chatham is one of the few Georgia counties whose tax sales are held at the Savannah Civic Center rather than on the courthouse steps, with online bidder registration introduced in 2022.',
  },
  {
    name: 'Metter',
    county: 'Candler County',
    slug: 'metter-ga',
    state: 'GA',
    shortCopy: 'Simple, local cash offers for Candler County homeowners.',
    superiorCourt: {
      name: 'Candler County Superior Court',
      courthouseAddress: '35 SW Broad Street, Metter, GA 30439',
      judicialCircuit: 'Middle Judicial Circuit',
    },
    probateCourt: {
      name: 'Candler County Probate Court',
      address: '35 SW Broad Street, Metter, GA 30439',
    },
    taxCommissioner: {
      officeAddress: '25 W. Daniel Street, Suite A, Metter, GA 30439',
      salePattern: 'an annual tax sale held on the first Tuesday in October at the Candler County courthouse door in Metter',
    },
    legalNoticesPaper: 'Metter Advertiser',
    extraNeighborhoods: ['Excelsior', 'Aline'],
    procedureNote: 'Candler County typically holds only one tax sale per year — the first Tuesday in October — at the courthouse door in Metter. That gives delinquent owners a long but firm runway.',
  },
  {
    name: 'Springfield',
    county: 'Effingham County',
    slug: 'springfield-ga',
    state: 'GA',
    shortCopy: 'Fast close, no hassle. We know the Effingham market.',
    superiorCourt: {
      name: 'Effingham County Superior Court',
      courthouseAddress: '700 N. Pine Street, Suite 110, Springfield, GA 31329',
      judicialCircuit: 'Ogeechee Judicial Circuit',
    },
    probateCourt: {
      name: 'Effingham County Probate Court',
      address: '700 N. Pine Street, Springfield, GA 31329',
    },
    taxCommissioner: {
      officeAddress: '802 S. Laurel Street, Springfield, GA 31329',
      salePattern: 'scheduled tax sales conducted by the Effingham County Tax Commissioner (case-by-case, not on a strict monthly cadence)',
    },
    legalNoticesPaper: 'Effingham Herald',
    extraNeighborhoods: ['Egypt', 'Shawnee'],
    procedureNote: 'Springfield is the Effingham County seat — the courthouse on N. Pine Street is where divorce petitions, probate filings, and foreclosure deeds are recorded for the entire county.',
  },
  {
    name: 'Swainsboro',
    county: 'Emanuel County',
    slug: 'swainsboro-ga',
    state: 'GA',
    shortCopy: 'Cash buyers in Emanuel County. Written offer within 24 hours.',
    superiorCourt: {
      name: 'Emanuel County Superior Court',
      courthouseAddress: '125 S. Main Street, Swainsboro, GA 30401',
      judicialCircuit: 'Middle Judicial Circuit',
    },
    probateCourt: {
      name: 'Emanuel County Probate Court',
      address: '125 S. Main Street, Swainsboro, GA 30401',
    },
    taxCommissioner: {
      officeAddress: '223 W. Moring Street, Suite 136, Swainsboro, GA 30401',
      salePattern: 'scheduled Tuesday tax sales held 10 AM on the courthouse steps in Swainsboro (irregular cadence)',
    },
    legalNoticesPaper: 'Forest-Blade',
    extraNeighborhoods: ['Garfield', 'Stillmore', 'Summertown', 'Norristown', 'Canoochee', 'Modoc'],
    procedureNote: 'Emanuel County Superior Court convenes most Wednesdays at 10 AM except the second and fifth Wednesday of the month — worth knowing for divorce or foreclosure timing in this county.',
  },
  {
    name: 'Claxton',
    county: 'Evans County',
    slug: 'claxton-ga',
    state: 'GA',
    shortCopy: 'Evans County cash buyer — no fees, no commissions.',
    superiorCourt: {
      name: 'Evans County Superior Court',
      courthouseAddress: '123 West Main Street, Claxton, GA 30417',
      judicialCircuit: 'Atlantic Judicial Circuit',
    },
    probateCourt: {
      name: 'Evans County Probate Court',
      address: '201 Freeman Street, Suite 9, Claxton, GA 30417',
    },
    taxCommissioner: {
      officeAddress: '3 Freeman Street, Suite 4, Claxton, GA 30417',
      salePattern: 'scheduled tax sales advertised in the Claxton Enterprise (case-by-case, not on a strict monthly cadence)',
    },
    legalNoticesPaper: 'Claxton Enterprise',
    extraNeighborhoods: ['Bellville', 'Daisy', 'Manassas'],
    procedureNote: 'Evans County is part of the six-county Atlantic Judicial Circuit. Superior Court judges rotate among the circuit, and some hearings affecting Claxton residents are heard at the larger Liberty County courthouse in Hinesville.',
  },
  {
    name: 'Vidalia',
    county: 'Toombs County',
    slug: 'vidalia-ga',
    state: 'GA',
    shortCopy: 'Toombs County cash home buyers. Close fast on your schedule.',
    superiorCourt: {
      name: 'Toombs County Superior Court',
      courthouseAddress: '100 Courthouse Square, Lyons, GA 30436',
      judicialCircuit: 'Middle Judicial Circuit',
    },
    probateCourt: {
      name: 'Toombs County Probate Court',
      address: '100 Courthouse Square, Suite 353, Lyons, GA 30436',
    },
    taxCommissioner: {
      officeAddress: '100 Courthouse Square, Suite 169, Lyons, GA 30436',
      salePattern: 'scheduled Tuesday tax sales held 10 AM on the Toombs County courthouse steps in Lyons',
    },
    legalNoticesPaper: 'The Advance',
    extraNeighborhoods: ['Cedar Crossing', 'Ohoopee', 'Santa Claus', 'Normantown'],
    procedureNote: 'Toombs County publishes its delinquent tax-sale list "in-office only" rather than online — homeowners and buyers wanting to view it must visit the tax commissioner office at the Lyons courthouse.',
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
