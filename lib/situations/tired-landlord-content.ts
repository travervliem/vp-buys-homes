import type { SituationContent } from './types'

// Per-pairing content for the Tired Landlord situation.
// Voice rules:
// - 7th-8th grade reading level
// - No legal/tax advice — educate, redirect to attorney/CPA
// - No specific cap-gains rates (varies; IRS rates change)
// - 1031 timing: 45-day identification, 180-day close (verified IRS Pub 8824)
// - GA dispossessory: §§ 44-7-50/53/55, security deposit § 44-7-34
// - No fabricated stats, case studies, or testimonials
// - No predatory urgency

export const TIRED_LANDLORD_CONTENT: SituationContent = {
  'statesboro-ga': {
    title: 'Sell Your Statesboro Rental — Tired-Landlord Cash Buyer',
    metaDescription: 'Done with your Statesboro rental? GSU student-rental burnout? VP Buys Homes pays cash, buys with tenants in place. No fees, no repairs.',
    h1: 'Selling Your Bulloch County Rental — With or Without the Tenant',

    empatheticOpening: [
      'Most Statesboro tired-landlord calls come from owners of Georgia Southern University student rentals — Fair Road, Burkhalter, the streets near campus, the older houses turned into multi-bedroom shares. The student-rental cycle is hard. Move-out cleaning, tenant turnover every May and August, late rent during finals, the property tax bill that arrives the same month a new HVAC dies.',
      'Some Bulloch landlords have been at it for fifteen years and are simply done. Others inherited a rental they never wanted. Either way, the question is the same: how do you exit without spending six months listing a property that needs work between tenants?',
    ],

    countyProcessSection: [
      'A Bulloch County rental sale has a few extra moving parts compared to a primary-residence sale. First, the tenant. Most Statesboro leases survive a sale — the new owner steps into the landlord\'s shoes. If the buyer wants vacant possession, the seller may have to wait for the lease to end or run a Georgia dispossessory if there is a valid cause.',
      'Georgia\'s dispossessory process, governed by OCGA §§ 44-7-50 through 44-7-55, runs through the magistrate court. After demanding possession, the landlord files an affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). Even when everything goes smoothly, the process takes weeks — not days.',
      'Then there is the security-deposit clock. Under OCGA § 44-7-34, the landlord must return the deposit (less itemized lawful deductions) within 30 days after obtaining possession. If you sell with a tenant in place, the deposit usually transfers to the buyer at closing. If you sell with the property vacant, you handle the deposit return yourself.',
    ],

    timelineSection: [
      'Here is what a typical Bulloch tired-landlord exit can look like:',
      'You contact a buyer. Most cash buyers, including us, can run an offer based on a brief property description without a tenant disturbance.',
      'Due diligence and contract. The contract specifies tenant-in-place vs. vacant possession. If tenant-in-place, the lease and any tenant ledger get reviewed.',
      'Inspection (if done). We typically buy as-is, but tenant access may need a few days\' notice per Georgia law and the lease.',
      'Closing. Standard Bulloch closing through a local closing attorney. Lease assignment (if tenant in place) and security-deposit transfer happen at closing.',
      'Post-closing. The buyer becomes the new landlord. Tenants get a notice with the new owner\'s contact information. The seller is out — for good.',
    ],

    howWeHelpSection: [
      'A Statesboro tired-landlord sale has its own logistics. Here is what we do.',
      'We buy with the tenant in place. No eviction required, no vacant-possession requirement at closing. The lease assigns to us. The tenant keeps living there. We become the new landlord.',
      'We handle the security deposit transfer. The deposit ledger gets settled at closing — either credited to us as the new landlord, or returned to the tenant if the lease ends. The seller does not have to chase this paperwork.',
      'We close around your 1031 timing if you have set up a qualified intermediary. The IRS rules — 45 days to identify a replacement property and 180 days to close on it (Treas. Reg. § 1.1031(k)-1) — are firm. We adapt to that timeline rather than against it.',
      'We pay standard closing costs. No commissions, no listing fees. Selling a rental should not cost you out of pocket.',
      'We refer to a CPA before contracting. Capital gains, depreciation recapture, and any 1031 strategy depend on facts a CPA needs to review. The IRC § 121 home-sale exclusion usually does not apply to rental property.',
    ],

    trustSignalsSection: [
      'A real Bulloch operator knows the GSU student-rental market — what a typical 4-bedroom share house rents for, why the August lease cycle is brutal, and which streets have HOA-style restrictions that affect rentals. They know the dispossessory process runs through the Bulloch magistrate court. Out-of-state buyers learn these details from forum posts and YouTube videos. We learned them from buying.',
      'We have closed Bulloch rental sales across Statesboro and the surrounding county — from GSU-adjacent streets to single-family rentals in Brooklet, Portal, Stilson, Register, and the smaller communities like Hopeulikit, Nevils, Leefield, and Adabelle. Each sub-market has its own rent and value math. We do not pretend they are interchangeable.',
    ],

    faqs: [
      {
        q: 'Can I sell my Statesboro rental with the tenant still living there?',
        a: 'Yes. Most Georgia leases survive a sale — the new owner becomes the new landlord. The tenant\'s rights under the lease continue. We buy occupied rentals regularly. The lease and tenant ledger transfer at closing.',
      },
      {
        q: 'My GSU student rental is between tenants and needs work. Do you still buy?',
        a: 'Yes. We buy student rentals in any condition — between tenants, mid-renovation, or with deferred maintenance. The offer accounts for the actual property and what it would take to make it rent-ready or list-ready. No repairs required from you.',
      },
      {
        q: 'How does a 1031 exchange work with a Statesboro rental sale?',
        a: 'A § 1031 exchange lets you defer capital gains by rolling proceeds into another investment property. You have 45 days from closing to identify a replacement property in writing, and 180 days to close on it (or your tax-return due date including extensions, whichever is earlier). A qualified intermediary must be set up before the closing on the relinquished property. Talk to a CPA and a 1031 intermediary before signing a contract.',
      },
      {
        q: 'I have a problem tenant who is months behind on rent. Can you still buy?',
        a: 'Often yes. We have bought rentals with seriously delinquent tenants. Sometimes we run the dispossessory ourselves after closing, and sometimes the seller runs it before closing depending on the timeline and the contract terms. The Georgia dispossessory process under OCGA §§ 44-7-50/53/55 takes weeks; we plan around that.',
      },
      {
        q: 'Will I owe taxes on the sale of my Statesboro rental?',
        a: 'Probably yes — capital gains plus depreciation recapture on the years you owned and rented the property. The IRC § 121 primary-residence exclusion usually does not apply to a rental. A 1031 exchange can defer the tax. Talk to a CPA about your specific basis, depreciation history, and whether 1031 fits your facts.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'springfield-ga'],
  },

  'rincon-ga': {
    title: 'Sell Your Rincon, GA Rental — Tired-Landlord Cash Buyer',
    metaDescription: 'Effingham County rental exit? Done renting your Rincon house? VP Buys Homes pays cash, buys with tenants in place. No fees, fast close.',
    h1: 'Selling Your Rincon Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Rincon has more accidental landlords than many counties. A homeowner moves to Pooler for work and rents the Rincon house instead of selling it. Then five years go by, the property has had three sets of tenants, and the math is no longer as good as it sounded the first month.',
      'Other Rincon tired-landlord calls come from professional rental owners with portfolios of newer-build subdivisions in southern Effingham — properties that were bought during a hot market and have since become more work than they are worth. The exit options are narrow if the property is occupied or needs work.',
    ],

    countyProcessSection: [
      'A Rincon rental sale runs through the same Georgia framework as any other rental. Most leases survive the sale — the new owner becomes the new landlord. If vacant possession is required, the lease has to end naturally or the landlord has to use Georgia\'s dispossessory process under OCGA §§ 44-7-50 through 44-7-55, which runs through the Effingham County magistrate court.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). Even a smooth dispossessory takes weeks. Effingham\'s magistrate court is in Springfield, the same building as the Superior Court.',
      'Security-deposit handling under OCGA § 44-7-34 requires the deposit (less lawful deductions) to be returned within 30 days after the landlord obtains possession. With a tenant-in-place sale, the deposit usually transfers to the buyer at closing. With a vacant-possession sale, the seller handles the return.',
    ],

    timelineSection: [
      'A Rincon tired-landlord exit usually moves like this:',
      'You reach out to a buyer. We can offer based on a brief property description, a recent rent roll, and a few photos.',
      'Contract terms get worked out — tenant-in-place vs. vacant, security deposit handling, any 1031 timing.',
      'Due diligence. Lease and tenant ledger review. Possible drive-by or interior inspection (with proper notice to the tenant).',
      'Closing at an Effingham closing attorney. Lease assignment, deposit transfer, and recording at the Springfield clerk\'s office.',
      'Post-closing. The buyer is now the landlord. The seller is out — done with mid-night maintenance calls and August move-out cleaning.',
    ],

    howWeHelpSection: [
      'A Rincon tired-landlord sale benefits from a buyer who actually wants to keep renting the property.',
      'We buy with the tenant in place. The lease assigns to us. We become the landlord. The tenant\'s situation does not change — they keep the same lease, the same lease term, the same protections.',
      'We accept properties between tenants or with current vacancies. The offer accounts for the actual property and the lost-rent-window cost.',
      'We close around your 1031 timing if a qualified intermediary is in place. The IRS\'s 45-day identification and 180-day close rules (Treas. Reg. § 1.1031(k)-1) are firm; we adapt to them.',
      'We pay standard closing costs. No commissions, no listing fees. The Effingham closing happens in Springfield.',
      'We refer to a CPA. Capital gains, depreciation recapture, and 1031 timing all need professional review. The IRC § 121 home-sale exclusion usually does not apply to rentals.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows that Rincon rentals span newer-build subdivisions, older in-town houses, and accidental-landlord former primary residences. They know the dispossessory process happens at the Springfield magistrate court. They know the Effingham Herald is the legal organ. Out-of-state buyers do not.',
      'We have bought rentals across south Effingham — Rincon proper, Pineora, Eden, Meldrim, and Faulkville — and we work in nearby Savannah and Statesboro. That gives us a comp set that captures both the Rincon-as-Savannah-bedroom-community math and the Rincon-as-its-own-market math. They are not the same comp set.',
    ],

    faqs: [
      {
        q: 'I moved to Pooler and have been renting my Rincon house for five years. Can you buy it?',
        a: 'Yes. We buy rentals from accidental landlords regularly — owners who moved away and never sold. The offer accounts for current condition, current rent, and any deferred maintenance. The IRC § 121 home-sale exclusion may not apply if you have not lived in the property for 2 of the last 5 years; talk to a CPA before closing about your specific tax situation.',
      },
      {
        q: 'My Rincon tenant has been a good tenant. Will they have to move when you buy?',
        a: 'Usually no. If we buy with the tenant in place, the existing lease assigns to us. The tenant continues living there under the same lease terms. Their security deposit transfers from you to us. They get a notice with our contact information after closing — that is generally the only change in their day-to-day.',
      },
      {
        q: 'My Rincon rental needs a roof and HVAC work. Can you still buy?',
        a: 'Yes. We buy properties with deferred maintenance — roof, HVAC, plumbing, foundation — without asking the seller to fund repairs. The offer accounts for what the work would actually cost. No "repair credit" deductions at closing.',
      },
      {
        q: 'What about depreciation recapture if I sell my Effingham rental?',
        a: 'When you sell a property you have been depreciating, the IRS requires depreciation recapture — taxed at a rate up to 25%. That is in addition to capital gains on the appreciation. A § 1031 exchange can defer both. Specifics depend on your basis, depreciation history, and individual tax situation. Talk to a CPA before contracting.',
      },
      {
        q: 'My Rincon HOA has restrictions on rentals. Does that affect a sale?',
        a: 'Sometimes. Some HOAs require new owners to live in the property as a primary residence. Some cap the percentage of rentals in the subdivision. The HOA documents and any active rental waitlist need to be reviewed during due diligence. We look at HOA rules as part of every Rincon rental closing.',
      },
    ],

    lateralCitySlugs: ['savannah-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'savannah-ga': {
    title: 'Sell Your Savannah Rental — Tired-Landlord Cash Buyer',
    metaDescription: 'Done with your Chatham County rental? Tourism, military, or historic? VP Buys Homes buys with tenants in place. No fees, no repairs.',
    h1: 'Selling Your Savannah Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Savannah has more flavors of tired landlord than most cities. Long-term rentals in Pooler with one set of tenants for a decade. Historic-District properties that double as short-term-rentals when the owner is out of town. Hunter Army Airfield military rentals where the owner-landlord is also active duty. Tourism-economy rentals that have not recovered the way the owner expected.',
      'Each profile has its own exit math. Most Savannah tired-landlord sales we work involve owners who have done the spreadsheet and concluded that the cap rate is not what it used to be — and that listing the property traditionally would mean either evicting tenants or accepting lower offers because of the tenant-in-place reality.',
    ],

    countyProcessSection: [
      'A Chatham County rental sale runs through Georgia\'s landlord-tenant framework. Most Savannah leases survive a sale; the new owner becomes the new landlord. Vacant-possession sales typically require the lease to end naturally or the landlord to run a dispossessory under OCGA §§ 44-7-50 through 44-7-55 in the Chatham magistrate court.',
      'Chatham\'s dispossessory volume is high. After demanding possession, the landlord files an affidavit. The tenant has seven days from service to answer (§ 44-7-53). A writ of possession becomes effective seven days after judgment (§ 44-7-55). Even a smooth dispossessory in a busy Chatham court takes weeks.',
      'Some Savannah rentals add complications. Historic-district properties have code rules that affect what a buyer can do. Short-term-rental properties may have city Vacation Rental Unit licensing and zoning constraints. Flood-zone properties carry insurance issues. Hunter AAF military rentals may have specific lease protections under the Servicemembers Civil Relief Act. None of these block a sale, but all of them affect the offer math.',
    ],

    timelineSection: [
      'A Chatham tired-landlord exit can run on this clock:',
      'You contact a buyer. Initial offer based on property description, recent rent roll, and condition.',
      'Contract negotiated. Tenant status (in place or vacated), short-term-rental license status, historic-district considerations all spelled out.',
      'Due diligence. Lease review, deposit ledger, HOA rules, code-compliance review for historic-district properties.',
      'Closing at a Chatham closing attorney. Lease assignment, security deposit transfer, recording at the Chatham County clerk\'s office downtown.',
      'Post-closing. The buyer becomes the landlord. The seller is out, with the wire from the closing.',
    ],

    howWeHelpSection: [
      'A Savannah tired-landlord sale has its own complications and we work through each.',
      'We buy with tenants in place — long-term, short-term, or military. The lease assigns to us. The tenant keeps their housing. We become the landlord.',
      'We handle Historic-District code rules, flood-zone insurance, short-term rental licensing, and Hunter AAF military-tenant logistics without backing out at the last minute. The offer accounts for actual property facts.',
      'We close around 1031 timing. If you have a qualified intermediary in place, the IRS\'s 45-day identification and 180-day close timing (Treas. Reg. § 1.1031(k)-1) gets respected.',
      'We pay standard closing costs. No commissions, no listing fees. The Chatham closing happens at a downtown closing attorney.',
      'We refer to a CPA before contracting. Savannah rentals often involve cost-segregation studies, accelerated depreciation, and Historic Tax Credit considerations that require CPA review.',
    ],

    trustSignalsSection: [
      'A real Chatham operator knows the difference between a Vacation Rental Unit license and a long-term lease, knows what flood-zone designation A versus X means for insurance, and knows that historic-district facade rules can swing a property\'s renovation cost by tens of thousands. They know the magistrate court is at 133 Montgomery and that the dispossessory volume is heavy. Out-of-state buyers do not.',
      'We have bought rentals across Chatham — Historic District, Victorian District, Ardsley Park, Midtown, Pooler, Bloomingdale, Garden City, Wilmington Island, Skidaway Island, Whitemarsh Island, Isle of Hope, and Pin Point. Each sub-market has its own renter base and its own value math. A Savannah rental gets priced against the actual sub-market — not a citywide average.',
    ],

    faqs: [
      {
        q: 'My Savannah Vacation Rental Unit produces seasonal income. Can you buy and keep it as a short-term rental?',
        a: 'Possibly. The City of Savannah\'s Vacation Rental Unit licensing has specific rules about who qualifies and where the licenses can transfer. We review the license status during due diligence and structure the closing accordingly. If a license cannot transfer, we may buy the property as a long-term rental or as an owner-occupied property — whichever fits.',
      },
      {
        q: 'My military tenant has SCRA protections. Does that affect a sale?',
        a: 'It affects how a tenant can be removed if vacant possession is required, but not the sale itself. A military tenant generally cannot be evicted while on active-duty deployment without a court order, even if rent is unpaid. We typically buy with the lease intact and let the tenant remain. A real-estate attorney or military-legal-aid office can advise the tenant on their rights.',
      },
      {
        q: 'My Savannah Historic-District rental has code violations. Can you still buy?',
        a: 'Yes. We buy historic homes with deferred maintenance, code violations, and outstanding facade-review issues. The offer accounts for what it would take to bring the property into compliance — including any Historic Review Board approvals required. We do not back out when the Historic District side surfaces.',
      },
      {
        q: 'I have used 1031 exchanges before. Can you accommodate the timing?',
        a: 'Yes. As long as your qualified intermediary is set up before we close on your relinquished property, the 45-day identification and 180-day close (Treas. Reg. § 1.1031(k)-1) timing works. Tell us early so the contract can be structured properly. We have closed dozens of 1031-driven sales.',
      },
      {
        q: 'My Pooler rental is in an HOA that just changed its rental policy. Does that affect the sale?',
        a: 'It can. Some HOAs cap rental percentages or require new owners to live in the property as a primary residence. The HOA rules and any waitlist get reviewed during due diligence. We adjust the offer based on what the HOA permits at the time of contracting.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'metter-ga': {
    title: 'Sell Your Metter Rental — Candler Tired-Landlord Cash Buyer',
    metaDescription: 'Done with your Candler County rental? VP Buys Homes pays cash, buys with tenants in place. Local buyer, no fees, written offer in 24 hours.',
    h1: 'Selling Your Metter Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Metter rentals tend to be smaller-scale operations — a duplex on a side street, an inherited farmhouse rented to a family member, a single-family home that was the owner\'s primary residence before they remarried and moved. Candler County does not have a big rental market, but the rentals that exist often have long histories with the same tenants.',
      'When a small-county landlord decides to exit, the options are narrow. The local buyer pool for occupied rentals is small. Listing traditionally means either evicting or accepting a lower offer that reflects the tenant-in-place reality. A cash sale to a buyer who actually wants the income property removes that constraint.',
    ],

    countyProcessSection: [
      'A Candler County rental sale runs through Georgia\'s landlord-tenant framework. Most Metter leases survive a sale; the new owner becomes the new landlord. If the buyer requires vacant possession, Georgia\'s dispossessory process under OCGA §§ 44-7-50 through 44-7-55 runs through the Candler magistrate court at 35 SW Broad Street, Metter.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). In a smaller county like Candler, the process can sometimes move slightly faster than in busier urban courts — but it still takes weeks, not days.',
      'OCGA § 44-7-34 requires landlords to return security deposits (less itemized lawful deductions) within 30 days after obtaining possession. Tenant-in-place sales transfer the deposit at closing. Vacant-possession sales handle the return separately.',
    ],

    timelineSection: [
      'A Metter tired-landlord exit usually goes:',
      'You contact a buyer. Cash offer based on property description, current rent, and condition.',
      'Contract terms — tenant-in-place vs. vacant, security deposit handling, any 1031 timing.',
      'Due diligence. Lease and ledger review, drive-by or interior inspection with proper tenant notice.',
      'Closing in Metter. Standard small-county closing through a local closing attorney. Lease assignment and deposit transfer at closing.',
      'Post-closing. The buyer is the new landlord. The seller is out — and the property keeps producing income (for the buyer).',
    ],

    howWeHelpSection: [
      'A Metter tired-landlord sale benefits from a buyer who actually wants the rental.',
      'We buy with the tenant in place. The lease assigns to us. The tenant keeps the same lease term and rent. The deposit transfers at closing.',
      'We accept properties between tenants or with deferred maintenance. A small-county rental often has years of small things piled up; we factor those into the offer.',
      'We accommodate 1031 timing if you have set up a qualified intermediary. The IRS\'s 45-day identification and 180-day close (Treas. Reg. § 1.1031(k)-1) deadlines apply.',
      'We pay standard closing costs. No commissions, no listing fees.',
      'We refer to a CPA before contracting. Capital gains, depreciation recapture, and any 1031 strategy require professional tax review.',
    ],

    trustSignalsSection: [
      'A real Candler operator knows the local rental market is thin, knows the dispossessory court is at 35 SW Broad Street, and knows that Metter Advertiser is the legal-notices paper. They know that many Candler rentals are duplexes, older in-town houses, or rural farmhouses with long-time tenants. Out-of-state buyers Googling "Candler County rental properties" learn none of this.',
      'We work across Candler and the surrounding rural counties — Bulloch, Emanuel, Toombs, Evans. That gives us a comp set rooted in this corner of Southeast Georgia. A Metter rental gets priced on actual recent Candler comparables — not on metro-Atlanta cap rates that would not apply here.',
    ],

    faqs: [
      {
        q: 'My Metter rental has been with the same tenant family for 15 years. Will they have to move when you buy?',
        a: 'Generally no. If we buy with the tenant in place, the existing lease assigns to us and the tenants stay. The lease terms continue. Long-term Candler tenants are valuable to us — turnover is expensive in any rental market. We have no reason to remove a paying long-term tenant.',
      },
      {
        q: 'I inherited a Candler farmhouse and have been renting it informally without a written lease. Does that complicate the sale?',
        a: 'It can — informal tenancies in Georgia are usually treated as month-to-month tenancies-at-will. Either side can typically terminate with proper notice. We can still buy occupied properties on month-to-month tenancies, but the closing terms will reflect the lack of a written lease. A real-estate attorney can advise on the specific facts.',
      },
      {
        q: 'My Metter rental needs significant work. Can you buy as-is?',
        a: 'Yes. We buy properties with deferred maintenance — roof, HVAC, plumbing, foundation — without asking sellers to fund repairs. The offer accounts for what the work would actually cost. No "repair credit" deductions at the table.',
      },
      {
        q: 'I have done multiple 1031 exchanges with rural Georgia rentals. Can you accommodate the timing?',
        a: 'Yes. As long as your qualified intermediary is set up before closing on the relinquished property, we can work with the IRS\'s 45-day identification and 180-day close timing. Tell us early so the contract is structured correctly.',
      },
      {
        q: 'My Candler tenant has been late on rent for several months. Can you buy and let me skip the dispossessory?',
        a: 'Often yes. We buy occupied properties with delinquent rent histories. Sometimes we run the dispossessory ourselves after closing; sometimes the seller pursues collection through other means after closing; sometimes the contract terms include a rent-roll buyout. The exact structure depends on the facts.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'springfield-ga': {
    title: 'Sell Your Springfield Rental — Effingham Cash Buyer',
    metaDescription: 'Done renting your Springfield, GA house? VP Buys Homes pays cash, buys with tenants in place. Local Effingham buyer, no fees.',
    h1: 'Selling Your Springfield Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Springfield rental owners often hold smaller portfolios — a single house or two near downtown, a property that was a parent\'s home and is now rented out, an inherited rental that came with the will. The Effingham County seat does not have a large investor pool, so the exit options for a tired Springfield landlord are typically thin.',
      'Most Springfield tired-landlord conversations we have are with owners who have been at it for a decade or more, are tired of late-rent calls, and want a simple cash exit without listing the property and waiting for the right buyer to appear. A vacant-possession requirement only adds time.',
    ],

    countyProcessSection: [
      'A Springfield rental sale runs through Georgia\'s standard landlord-tenant framework. Most leases survive a sale — the new owner becomes the new landlord. If vacant possession is required, the dispossessory process under OCGA §§ 44-7-50 through 44-7-55 runs through the Effingham magistrate court at 700 N. Pine Street.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). The full process — even when smooth — takes several weeks.',
      'Security deposits under OCGA § 44-7-34 must be returned within 30 days after the landlord obtains possession, less any lawful itemized deductions. Tenant-in-place sales transfer the deposit; vacant-possession sales handle the return separately.',
    ],

    timelineSection: [
      'A Springfield tired-landlord exit can run on this clock:',
      'You contact a buyer. Initial offer based on property description, rent roll, and condition.',
      'Contract terms — tenant-in-place vs. vacant, security deposit handling, 1031 timing if applicable.',
      'Due diligence — lease review, ledger review, possible inspection.',
      'Closing in Springfield at a local closing attorney. Lease assignment and deposit transfer at closing.',
      'Post-closing. The buyer is now the landlord. The seller is out, with the closing wire and no more tenant calls.',
    ],

    howWeHelpSection: [
      'A Springfield tired-landlord sale runs cleanly when the local logistics are right.',
      'We buy with the tenant in place. The lease assigns to us. The tenant continues their lease term. We become the new landlord.',
      'We close in Springfield at a local closing attorney. The deed records at the Effingham clerk\'s office at 700 N. Pine. Local recording is fast.',
      'We accept properties with deferred maintenance, vacant tenancies, or month-to-month arrangements. The offer accounts for the actual condition.',
      'We accommodate 1031 timing. If a qualified intermediary is set up, the IRS\'s 45-day and 180-day deadlines (Treas. Reg. § 1.1031(k)-1) apply.',
      'We pay standard closing costs. No commissions, no listing fees. We refer to a CPA on the tax side before contracting.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows the dispossessory court is at 700 N. Pine, that the Effingham Herald is the legal organ, and that Springfield rentals often involve long-time tenants and modest rents. Out-of-state buyers learn the courthouse address from web searches and the rental dynamics by trial-and-error after they have already signed contracts.',
      'We have bought rentals across Effingham County — in Springfield itself, in Rincon, and in the smaller surrounding communities like Egypt and Shawnee. Springfield rentals are different from Rincon rentals — typically older builds, smaller portfolios, and longer-tenured tenants. We price on the actual local data.',
    ],

    faqs: [
      {
        q: 'My Springfield tenant has lived in my rental for 12 years on a month-to-month basis. Does that complicate the sale?',
        a: 'Not significantly. Long-term month-to-month tenancies under Georgia law are tenancies-at-will — either party can terminate with proper notice. We can buy with the tenant in place under the existing month-to-month arrangement. The buyer becomes the landlord, the tenant keeps their housing, and the deposit transfers at closing.',
      },
      {
        q: 'I have not raised rent on my Springfield rental in years. Will the new owner raise it?',
        a: 'That is a decision the buyer makes after closing, not something tied to the sale itself. Georgia does not have rent control. A new landlord can typically adjust rent at the next renewal or with proper month-to-month notice. We do not promise sellers what the future rent will be — that is between the new landlord and the tenant.',
      },
      {
        q: 'My Springfield rental is in a part of town where home values have not changed much in years. Will your offer reflect the rental income?',
        a: 'Yes — partly. We look at both the property\'s rental income and its underlying value as a residence. In small markets where home values are flat, a producing rental may carry value above what a vacant-property comp would suggest. The offer math accounts for both.',
      },
      {
        q: 'I want to use the proceeds to buy another Springfield-area rental. Does that work with 1031?',
        a: 'It can. A § 1031 exchange lets you defer capital gains by rolling proceeds into a like-kind investment property. The new property has to be identified within 45 days and closed within 180 days. A qualified intermediary must be set up before closing on the sale. Talk to a CPA about whether 1031 fits your specific facts.',
      },
      {
        q: 'My Springfield rental has back property taxes from a year I forgot to pay. How does that affect the sale?',
        a: 'Back property taxes are a lien against the property. They have to be paid at closing for the buyer to receive clear title. We coordinate with the Effingham County Tax Commissioner at 802 S. Laurel to get the exact payoff figure. The taxes are paid out of the closing proceeds.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'savannah-ga', 'statesboro-ga'],
  },

  'swainsboro-ga': {
    title: 'Sell Your Swainsboro Rental — Emanuel Cash Buyer',
    metaDescription: 'Tired of being a Swainsboro landlord? VP Buys Homes pays cash for Emanuel County rentals — tenants in place, manufactured homes, rural parcels.',
    h1: 'Selling Your Swainsboro Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Swainsboro rentals often look different from urban rentals. Manufactured homes on permanent foundations, rural single-family rentals, USDA-financed properties, in-town houses near downtown that have been rented to the same families for years. The owners are sometimes first-generation rental investors who got into the business because a parent\'s home became available, or because a Swainsboro friend talked up the cap rates.',
      'When the math stops working — usually because of accumulated deferred maintenance, problem tenants, or the owner aging out of property management — the exit options in Emanuel County are thin. The local buyer pool for occupied rentals is small. A cash sale to a buyer who actually keeps the property as a rental removes that constraint.',
    ],

    countyProcessSection: [
      'An Emanuel County rental sale runs through Georgia\'s standard landlord-tenant rules. Most leases survive a sale — the new owner becomes the new landlord. If vacant possession is required, Georgia\'s dispossessory process under OCGA §§ 44-7-50 through 44-7-55 runs through the Emanuel magistrate court at 125 S. Main Street, Swainsboro.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). Even a smooth Emanuel dispossessory takes weeks.',
      'Security-deposit handling under OCGA § 44-7-34 — return within 30 days, less itemized lawful deductions — applies to all Georgia rentals. Tenant-in-place sales transfer the deposit at closing. Manufactured-home rentals add a title-step at closing if the home is on a separate motor-vehicle title rather than titled to the land.',
    ],

    timelineSection: [
      'A Swainsboro tired-landlord exit usually goes like this:',
      'You contact a buyer. Cash offer based on property description, rent roll, and condition.',
      'Contract terms negotiated — tenant-in-place vs. vacant, manufactured-home title status, security deposit handling.',
      'Due diligence — lease and ledger review, manufactured-home title verification, possible inspection with proper tenant notice.',
      'Closing in Swainsboro at a local closing attorney. Lease assignment, deposit transfer, and any manufactured-home title conversion at closing.',
      'Post-closing. The buyer is the landlord. The tenant has the same housing. The seller is out.',
    ],

    howWeHelpSection: [
      'An Emanuel tired-landlord sale benefits from a buyer who actually understands the property mix.',
      'We buy with the tenant in place. The lease assigns to us. The tenant keeps the same lease and rent.',
      'We buy manufactured homes — both those titled to the land (real-property treatment) and those on separate motor-vehicle titles. The closing attorney handles the title conversion when needed.',
      'We accept rural rentals, USDA-financed properties, and properties with deferred maintenance. The offer accounts for the actual property.',
      'We accommodate 1031 timing if a qualified intermediary is in place — the IRS\'s 45-day and 180-day deadlines (Treas. Reg. § 1.1031(k)-1) apply.',
      'We pay standard closing costs. No commissions, no listing fees. CPA referral provided before contracting.',
    ],

    trustSignalsSection: [
      'A real Emanuel operator knows that many Swainsboro rentals are manufactured homes on permanent foundations, knows the dispossessory court is at 125 S. Main, and knows that the Forest-Blade is the legal organ. They know the difference between titling a manufactured home as real property versus keeping it on a motor-vehicle title — and they handle both at closing. Out-of-state buyers do not.',
      'We work across Emanuel and the surrounding Middle Judicial Circuit counties — Candler, Toombs, Jefferson, Treutlen, Washington — and into Bulloch and Effingham. That gives us a comp set rooted in the rural Southeast Georgia rental market, including manufactured-home and USDA-financed properties.',
    ],

    faqs: [
      {
        q: 'My Swainsboro rental is a manufactured home on a permanent foundation. Can you still buy?',
        a: 'Yes. Manufactured homes that are titled to the land (real-property treatment) close like other rentals. Manufactured homes still on a separate motor-vehicle title need an extra step at closing — converting the title or coordinating two transfers. We handle both regularly.',
      },
      {
        q: 'My Emanuel rental has a USDA Rural Development loan on it. Does that affect the sale?',
        a: 'It can. USDA RD loans on rentals have specific assumption and payoff procedures. Some loans require lender approval for transfer. We coordinate with the USDA RD servicer during due diligence to confirm payoff or assumption terms. A USDA-experienced closing attorney can clarify your specific loan.',
      },
      {
        q: 'I have a problem tenant who is several months behind on rent. Can you buy?',
        a: 'Often yes. We have bought rentals with delinquent tenants. Sometimes we run the dispossessory ourselves after closing, sometimes the contract terms include a partial rent-roll reckoning, and sometimes the seller pursues collection separately. The Georgia dispossessory process under OCGA §§ 44-7-50/53/55 takes weeks; we plan around it.',
      },
      {
        q: 'My Swainsboro rental is in a flood-prone area near a creek. Does that affect a sale?',
        a: 'It affects the offer math but does not block a sale. Flood-zone designation, flood insurance requirements, and any FEMA flood-map changes get reviewed during due diligence. The offer accounts for actual flood-zone facts. We have closed flood-zone rental sales before.',
      },
      {
        q: 'I want to use the proceeds to buy another rental and defer the gain. Does that work?',
        a: 'It can work as a § 1031 exchange — IRS rules for like-kind exchanges of investment property. You have 45 days from closing to identify a replacement and 180 days to close on it. A qualified intermediary must be set up before closing on the relinquished property. Talk to a CPA about whether your specific facts qualify.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'metter-ga'],
  },

  'claxton-ga': {
    title: 'Sell Your Claxton Rental — Evans County Cash Buyer',
    metaDescription: 'Tired of your Claxton, GA rental? Evans County cash buyer pays cash with tenants in place. No fees, no repairs, written offer in 24 hours.',
    h1: 'Selling Your Claxton Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Claxton rentals are often inherited or accidentally acquired — a parent\'s former home, a property held back when the family moved across town, a small portfolio assembled over the years. Evans County\'s rental market is small, and the buyer pool for occupied rentals is smaller still.',
      'When a Claxton landlord decides to exit, the choices typically are: list traditionally and absorb a tenant-in-place discount; evict and lose months of income while the dispossessory plays out; or sell to a cash buyer who keeps the rental. The first two are common defaults. The third is what we do.',
    ],

    countyProcessSection: [
      'An Evans County rental sale runs through Georgia\'s landlord-tenant rules. Most leases survive a sale — the new owner becomes the new landlord. If vacant possession is required, Georgia\'s dispossessory process under OCGA §§ 44-7-50 through 44-7-55 runs through the Evans magistrate court in Claxton.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). The Evans magistrate court is small but follows the same statewide procedure.',
      'Security-deposit handling under OCGA § 44-7-34 requires return within 30 days after the landlord obtains possession, less any lawful itemized deductions. Tenant-in-place sales transfer the deposit at closing. Many Evans rentals are rural properties where the deposit history needs careful documentation at closing.',
    ],

    timelineSection: [
      'A Claxton tired-landlord exit can run on this clock:',
      'You contact a buyer. Initial cash offer based on property description, rent roll, and condition.',
      'Contract terms get worked out — keep the tenant or empty the property, how to handle the existing security deposit, and any 1031-exchange deadlines you need to hit.',
      'Due diligence — lease and ledger review, drive-by or interior inspection.',
      'Closing in Claxton at a local closing attorney. Lease assignment and deposit transfer at closing.',
      'Post-closing. The buyer is now the landlord. The seller has the closing wire and no more property-management headaches.',
    ],

    howWeHelpSection: [
      'A Claxton tired-landlord sale benefits from a buyer who knows Evans County rentals.',
      'We keep the tenant. The lease assigns directly to us at closing — same rent, same term, same deposit. The tenant gets a notice with our contact info and continues their housing without disruption.',
      'We buy rural rentals, smaller in-town houses, manufactured homes on permanent foundations, and inherited income properties. The offer accounts for the actual property and the actual rent.',
      'We accommodate 1031 timing. If a qualified intermediary is in place, the IRS\'s 45-day and 180-day rules (Treas. Reg. § 1.1031(k)-1) apply.',
      'We pay standard closing costs. No commissions, no listing fees.',
      'We refer to a CPA. Capital gains, depreciation recapture, and any 1031 strategy require professional review for your specific facts.',
    ],

    trustSignalsSection: [
      'A real Evans operator knows the dispossessory court is in Claxton, knows the Claxton Enterprise is the legal organ, and knows that Evans rentals span in-town houses, rural properties, and manufactured homes. They know that Evans is part of the Atlantic Judicial Circuit. Out-of-state buyers do not.',
      'We have bought rentals across Evans County — in Claxton, Hagan, Bellville, Daisy, and Manassas. We also work across the surrounding counties. That gives us a comp set rooted in this stretch of Southeast Georgia. A Claxton rental gets priced against actual recent Evans sales.',
    ],

    faqs: [
      {
        q: 'My Claxton rental has been with the same tenant for years. Will they stay?',
        a: 'Generally yes. If we buy with the tenant in place, the lease assigns to us. The tenants continue their housing. Long-term tenants in any small Georgia market are valuable — turnover costs add up. We have no reason to displace a paying long-term tenant.',
      },
      {
        q: 'My Evans rental needs a new roof and HVAC. Can you buy as-is?',
        a: 'Yes. We buy properties with deferred maintenance and outdated systems. The offer accounts for what the work would actually cost. No "repair credit" deductions at closing. The seller does not fund repairs.',
      },
      {
        q: 'I inherited the rental from my parents and have not been a great landlord. Does that affect the sale?',
        a: 'Not significantly. Many Evans rentals come from inheritance situations where the owner is not professionally trained as a landlord. We buy regardless of whether your records are perfect — we adjust the contract terms to match the actual paperwork available.',
      },
      {
        q: 'My Claxton rental is in a USDA-financed loan. Does that affect the sale?',
        a: 'It can. USDA loans on rentals have specific payoff or assumption procedures. Some loans require lender approval for transfer. We coordinate with the USDA servicer during due diligence to confirm payoff or assumption terms. A USDA-experienced closing attorney can clarify your specific loan.',
      },
      {
        q: 'I want to use the proceeds for retirement. Are there tax considerations?',
        a: 'Yes. Selling a long-held rental triggers capital gains and depreciation recapture, which a 1031 exchange can defer if you reinvest. Whether reinvestment versus paying the tax fits your retirement plans depends on your specific situation. Talk to a CPA before contracting — that conversation often saves more than the cost of the consultation.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'vidalia-ga': {
    title: 'Sell Your Vidalia Rental — Toombs Tired-Landlord Cash',
    metaDescription: 'Done with your Toombs County rental? VP Buys Homes pays cash for Vidalia rentals — tenants in place, agricultural use, rural parcels.',
    h1: 'Selling Your Vidalia Rental Without Eviction or Repairs',

    empatheticOpening: [
      'Vidalia rentals often have an agricultural connection. A property near onion-packing operations rented to seasonal workers. A house on the outskirts of town rented to a farm family. An inherited rural parcel that came with the family land. Toombs County\'s rental economy reflects the agricultural cycle in ways that urban rental markets do not.',
      'When a Toombs landlord decides to exit, the local buyer pool is small. A traditional listing requires either evicting tenants (which is uncommon in close-knit small communities) or selling at a tenant-in-place discount. A cash sale to a buyer who keeps the rental is often the cleanest exit.',
    ],

    countyProcessSection: [
      'A Toombs County rental sale runs through Georgia\'s landlord-tenant framework. Most leases survive a sale — the new owner becomes the new landlord. If vacant possession is required, Georgia\'s dispossessory process under OCGA §§ 44-7-50 through 44-7-55 runs through the Toombs magistrate court at 100 Courthouse Square, Lyons.',
      'After demanding possession, the landlord files a dispossessory affidavit. The tenant has seven days from service to answer (§ 44-7-53). After judgment, a writ of possession becomes effective seven days later (§ 44-7-55). The full process — even smooth ones — takes weeks.',
      'Security-deposit handling under OCGA § 44-7-34 — return within 30 days, less itemized lawful deductions — applies in Toombs as in any Georgia county. Many Vidalia rentals are rural or agricultural-area properties where lease and deposit records may be informal; we work with whatever records you have.',
    ],

    timelineSection: [
      'A Vidalia tired-landlord exit usually moves like this:',
      'You contact a buyer. Cash offer based on property description, rent roll (if any), and condition.',
      'Contract terms — tenant-in-place vs. vacant, security deposit handling, 1031 timing.',
      'Due diligence — lease review, ledger review, possible drive-by or interior inspection.',
      'Closing in Lyons at a local closing attorney. The deed records at the Toombs County clerk\'s office at 100 Courthouse Square.',
      'Post-closing. The buyer is the new landlord. The seller is out, with the closing wire and no more late-rent calls.',
    ],

    howWeHelpSection: [
      'A Vidalia tired-landlord sale benefits from a buyer who understands the agricultural-area rental mix.',
      'We buy with the tenant in place. The lease assigns to us. The tenant continues their housing.',
      'We buy in-town rentals, rural agricultural-area properties, and properties on smaller acreage with outbuildings. The offer accounts for the actual property and any agricultural use.',
      'We accommodate 1031 timing if a qualified intermediary is in place. The IRS\'s 45-day identification and 180-day close (Treas. Reg. § 1.1031(k)-1) deadlines apply.',
      'We pay standard closing costs. No commissions, no listing fees. The Lyons closing attorney handles the title work.',
      'We refer to a CPA before contracting. Capital gains, depreciation recapture, and any agricultural-use tax considerations require professional review.',
    ],

    trustSignalsSection: [
      'A real Toombs operator knows the magistrate court is in Lyons (not Vidalia), knows The Advance is the legal organ, and knows that many Toombs rentals are connected to the agricultural economy in ways that affect both seasonal vacancy and seasonal income. Out-of-state buyers learn these dynamics only after they have signed contracts that did not anticipate them.',
      'We work across Toombs and the surrounding counties — Emanuel (Swainsboro), Candler (Metter), Evans (Claxton). That gives us a comp set rooted in this stretch of Southeast Georgia, capturing rural and agricultural rental economics. A Vidalia rental is priced against actual Toombs comparables.',
    ],

    faqs: [
      {
        q: 'My Vidalia rental has agricultural acreage attached. Can you buy it as a rental?',
        a: 'Yes. We buy properties with attached acreage, including parcels with active agricultural use. The offer accounts for the residence, the acreage, and any outbuildings or agricultural equipment included with the sale. Some agricultural properties have specific easements or program participation that the closing attorney reviews.',
      },
      {
        q: 'My Toombs rental is on a USDA-financed loan. Does that affect the sale?',
        a: 'It can. USDA loans on rental properties have specific assumption or payoff procedures. Some loans require lender approval for any transfer. We coordinate with the USDA servicer during due diligence to confirm the specific terms for your loan. A Toombs real-estate attorney can clarify.',
      },
      {
        q: 'My Vidalia tenant is a long-term seasonal-worker family. Will they have to move?',
        a: 'Generally no. If we buy with the tenant in place, the lease assigns to us. The tenants continue their housing. We have bought rentals with long-term seasonal-worker tenants and have no reason to displace them — turnover in agricultural-area rentals is expensive.',
      },
      {
        q: 'My Vidalia rental needs significant repairs. Can you buy as-is?',
        a: 'Yes. We buy properties with deferred maintenance — roof, HVAC, plumbing, foundation, well, septic, structural. The offer accounts for what the work would actually cost. No "repair credit" deductions at closing.',
      },
      {
        q: 'I want to defer the gain on my Vidalia rental. Does that work with 1031?',
        a: 'It can. A § 1031 exchange lets you defer capital gains by rolling proceeds into another investment property. You have 45 days from closing to identify a replacement and 180 days to close on it. A qualified intermediary must be set up before closing on the relinquished property. Talk to a CPA about whether 1031 fits your specific facts.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'claxton-ga'],
  },
}
