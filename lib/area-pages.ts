// Landing-page copy for /areas/[city]. Factual city/county identity lives in
// `lib/areas.ts` (the single source of truth); this file holds only the
// per-city marketing copy, keyed by the same slug.
//
// To add a city: add the Area to `lib/areas.ts`, then add an entry here and
// per-situation content in `lib/situations/<situation>-content.ts`.

export type AreaPageContent = {
  subheadline: string
  body: string[]        // intro paragraphs
  situations: string[]  // "Common situations we help with" bullets
}

export const AREA_PAGE_CONTENT: Record<string, AreaPageContent> = {
  'statesboro-ga': {
    subheadline: 'No repairs. No fees. Cash offer in 48 hours. Close in as little as 7 days.',
    body: [
      'VP Buys Homes is a local cash home buyer serving Statesboro and all of Bulloch County. If you need to sell your house fast — for any reason — we make it simple. We buy homes in any condition, as-is, with no repairs required and zero realtor commissions. Whether you are searching "sell my house fast Statesboro GA" or "cash home buyers near me," you have found the right place.',
      'Statesboro is the home of Georgia Southern University and the economic hub of Southeast Georgia. Whether your property is near campus on Fair Road, in a historic neighborhood like the Averitt Arts District, or out in the rural county, we know the Bulloch County market and can deliver a fair, written cash offer within 48 hours.',
      'We have closed on properties throughout Bulloch County — from Statesboro to Portal, Register, Brooklet, and Stilson. We also serve nearby zip codes 30460 and 30461. Our process is discreet, fast, and straightforward — no open houses, no repairs, no uncertainty about financing falling through.',
    ],
    situations: [
      'Behind on mortgage payments or at risk of foreclosure in Bulloch County',
      'Inherited a house in Statesboro you do not want to manage',
      'Rental property with problem tenants or years of deferred maintenance',
      'Going through divorce and need to sell the family home quickly',
      'Relocating for a job at Georgia Southern, a hospital, or out of state',
      'Fire or water damage and you cannot afford the repairs',
      'Owe back taxes or HOA fees and need a fast way out',
      'Downsizing or moving to assisted living and need a simple sale',
    ],
  },
  'rincon-ga': {
    subheadline: 'Effingham County cash home buyers. No repairs, no commissions. Offer in 48 hours.',
    body: [
      'VP Buys Homes buys houses for cash in Rincon and throughout Effingham County. If you need to sell your house fast in Rincon — with no repairs, no realtor, and no waiting — we are your local buyer. We make cash offers on any property in any condition, and we close on your schedule.',
      'Rincon has grown rapidly and is one of the fastest-growing communities in the Savannah metro area. We have bought homes across Rincon, including properties near Goshen Road, Jimmy Deloach Parkway, and out into the surrounding Effingham County countryside — from Springfield to Guyton and Rincon to Black Creek.',
      'There are no commissions, no inspection contingencies, and no financing that can fall through at the last minute. If you are searching "we buy houses Rincon GA" or "sell my house fast Effingham County," call us today for a no-pressure cash offer within 48 hours.',
    ],
    situations: [
      'Need to sell fast due to a job relocation to Savannah or out of state',
      'Behind on payments or facing foreclosure in Effingham County',
      'Inherited a house in Rincon you do not want to keep',
      'Property that needs a new roof, HVAC, or foundation work you cannot afford',
      'Tired of dealing with a rental property and difficult tenants',
      'Divorce requiring a quick, clean sale',
      'Military PCS move out of the Savannah area',
    ],
  },
  'savannah-ga': {
    subheadline: 'Chatham County cash home buyers. Any condition. Offer in 48 hours.',
    body: [
      'VP Buys Homes purchases houses for cash across Savannah and Chatham County. From the Historic District and Victorian District to Midtown, Southside, and West Chatham, we buy homes in any condition — no repairs required, no commissions, no waiting on bank financing.',
      'Savannah is one of the most distinctive real estate markets in Georgia, with everything from antebellum historic properties to modern suburban homes in Pooler, Bloomingdale, and Garden City. No matter what condition your property is in or what situation you are facing, we can make a fair cash offer within 48 hours.',
      'We serve all of Chatham County, including Pooler, Port Wentworth, Thunderbolt, Tybee Island, Garden City, and Bloomingdale. If you are searching "sell my house fast Savannah GA," "cash home buyers Chatham County," or "we buy ugly houses Savannah," we are the local buyer who can get it done.',
    ],
    situations: [
      'Historic property with significant deferred maintenance or code issues',
      'Facing foreclosure or seriously behind on your Savannah mortgage',
      'Settling an estate or selling an inherited home in Chatham County',
      'Relocating for HASC, the ports, or a military PCS out of Hunter Army Airfield',
      'Divorce or legal separation requiring a quick, agreed-upon sale',
      'Rental property in poor condition with bad tenants or vacancies',
      'Underwater on your mortgage and need a fast exit',
      'Flood-damaged or storm-damaged property you cannot afford to fix',
    ],
  },
  'metter-ga': {
    subheadline: 'Candler County cash home buyers. Simple, local, and fast.',
    body: [
      'VP Buys Homes buys houses for cash in Metter and across Candler County. We are a local buyer — not an out-of-state hedge fund — and we make straightforward offers with no hidden fees, no repairs required, and no drawn-out closing timelines.',
      'Metter is a small community along I-16 with a mix of residential and rural properties. We buy all types — single-family homes in town, farmhouses, and rural parcels throughout Candler County. If you need to sell a property in Metter quickly, we deliver a written cash offer within 48 hours.',
      'We also serve communities near Metter including Collins, Cobbtown, Pulaski, and surrounding Candler County areas. No real estate agent needed — no commission, no listing, no showings. Just a simple, fast cash sale.',
    ],
    situations: [
      'Inherited rural or farmhouse property you do not want to maintain',
      'Property in poor or unlivable condition',
      'Behind on property taxes or mortgage in Candler County',
      'Relocation along the I-16 corridor or out of Southeast Georgia',
      'Estate settlement requiring a fast, clean sale',
      'Rental with long-term vacancy or tenant problems',
      'Downsizing and want to sell without the hassle of listing',
    ],
  },
  'springfield-ga': {
    subheadline: 'Effingham County cash buyer. Fast, simple, local.',
    body: [
      'VP Buys Homes buys houses in Springfield and all of Effingham County. We are a local cash home buyer — we know the Effingham County market and we close fast with no repairs, no agent fees, and no uncertainty.',
      'Springfield is the county seat of Effingham County and one of the fastest-growing areas between Savannah and Augusta. We have purchased homes in Springfield, Guyton, Rincon, Clyo, Marlow, and across the county. Whether you need to "sell my house fast in Springfield GA" or just want to avoid the traditional listing process, we can help.',
      'We make a written cash offer within 48 hours and close on a schedule that works for you — as fast as 7 days or on a date you choose. No home inspection contingencies, no financing delays, no commissions.',
    ],
    situations: [
      'Inherited a property in Effingham County you do not want',
      'Job relocation and need to sell your Springfield home quickly',
      'Property that needs significant repairs you cannot fund',
      'Landlord ready to exit the rental business',
      'Behind on mortgage or facing foreclosure in Effingham County',
      'Divorce or estate situation requiring a fast resolution',
      'New construction purchase contingent on selling your current home fast',
    ],
  },
  'swainsboro-ga': {
    subheadline: 'Emanuel County cash home buyers. Fast, local, no fees.',
    body: [
      'VP Buys Homes buys houses in Swainsboro and Emanuel County. We purchase homes as-is for cash — no realtor, no repairs, no waiting on bank approval. If you want to sell your house fast in Swainsboro, we are the local buyer who can make it happen.',
      'Swainsboro is the county seat of Emanuel County and sits along the US-1 corridor in Southeast Georgia. We buy all types of residential property in the area — houses in town, older farmhouses, and rural homes throughout Emanuel County, including Twin City, Nunez, Adrian, and Oak Park.',
      'We make a written cash offer within 48 hours and work on your timeline. There are no agent commissions, no repair requirements, and no inspections you have to pass. Just a straightforward cash transaction and a closing date that works for you.',
    ],
    situations: [
      'Estate or probate property in Emanuel County',
      'Behind on payments and trying to avoid foreclosure',
      'Property with extensive deferred maintenance or structural issues',
      'Quick relocation needed for work or family',
      'Tired landlord ready to sell a long-term rental',
      'Inherited a rural or farmhouse property you do not want to keep',
      'Owe back taxes and need to sell before a tax sale',
    ],
  },
  'claxton-ga': {
    subheadline: 'Evans County cash buyer. No repairs, no fees.',
    body: [
      'VP Buys Homes buys houses in Claxton and Evans County. We are local cash home buyers who purchase properties in any condition and on any timeline — no repairs, no commissions, no listing required.',
      'Claxton is known as the Fruitcake Capital of the World and sits in the heart of Evans County. We buy residential properties throughout the area, including homes in Hagan and the surrounding Evans County countryside. If you need to sell your house fast in Claxton, GA, we can deliver a written cash offer within 48 hours.',
      'We handle all the paperwork and work with a local closing attorney to make the process smooth and fast. No open houses, no buyer financing contingencies, no repairs before closing. Just a simple cash sale on your schedule.',
    ],
    situations: [
      'Inherited property in Evans County you are not using',
      'Home that needs significant repairs or updates before it could sell on market',
      'Fast sale needed due to relocation or life change',
      'Behind on mortgage or property taxes in Claxton',
      'Estate that needs to close quickly',
      'Rental property in poor condition or with vacancy issues',
    ],
  },
  'vidalia-ga': {
    subheadline: 'Toombs County cash home buyers. Simple process, fast close.',
    body: [
      'VP Buys Homes buys houses in Vidalia and Toombs County. We are cash buyers who close fast — in as little as 7 days — with no repairs required, no real estate agent fees, and no lengthy closing timelines.',
      "Vidalia is famous for its sweet onions and sits in the heart of Southeast Georgia's agricultural corridor. We buy all residential property types throughout Toombs County, including homes in Lyons, Uvalda, and the surrounding area. If you are searching \"we buy houses Vidalia GA\" or \"sell my house fast Toombs County,\" we are the local buyer who can help.",
      'Our process is simple: you tell us about your property, we make a cash offer within 48 hours, and you pick the closing date. No contingencies, no commissions, no surprises. We buy properties in any condition — move-in ready or completely distressed.',
    ],
    situations: [
      'Estate or inherited property in Toombs County you want to sell fast',
      'Relocation out of Vidalia for work or family',
      'Property in poor condition that will not pass a traditional inspection',
      'Behind on mortgage or facing tax issues in Toombs County',
      'Landlord done with the rental business',
      'Divorce requiring a fast, agreed-upon property sale',
      'Need to sell quickly to buy another home without a contingency',
    ],
  },
}
