import type { SituationContent } from './types'

// Per-pairing content for the Probate / inherited-property situation.
// Voice rules:
// - 7th-8th grade reading level
// - No legal/tax advice — educate, redirect to attorney/CPA
// - No probate-judge names (rotate with elections; user direction)
// - No promised probate timelines (judge-driven, varies)
// - No fabricated stats, case studies, or testimonials
// - Distinguish between letters testamentary, letters of admin, year's support, and § 53-2-40

export const PROBATE_CONTENT: SituationContent = {
  'statesboro-ga': {
    title: 'Sell an Inherited House in Statesboro, GA — Cash Buyer',
    metaDescription: 'Inherited a Bulloch County house? VP Buys Homes works with the probate attorney, waits for letters, and closes clean. No fees, no repairs.',
    h1: 'Selling an Inherited House Through Bulloch County Probate',

    empatheticOpening: [
      'Most Bulloch County inheritance sales begin with a phone call from someone who is grieving and overwhelmed. A parent passed. A grandparent passed. The house is still full of belongings. Nobody wants to think about title work or probate court yet — but the property tax bill, the homeowner\'s insurance carrier, and the lender (if there is still a mortgage) all keep their own calendars.',
      'The Bulloch County Probate Court at 2 North Main Street handles wills, estate administration, year\'s support, and small-estate matters. The probate process does not have to be long or expensive in every case. But it does have to be done — or one of its lawful alternatives has to be used — before the house can be sold cleanly.',
    ],

    countyProcessSection: [
      'Bulloch County probate filings happen at 2 North Main Street, Statesboro — the Probate Court is on the first floor. The process for selling an inherited Bulloch home depends on what paperwork the deceased owner left behind.',
      'If there is a will and the named executor wants to administer the estate, the executor petitions for solemn-form probate. With all heirs assenting, OCGA § 53-5-21 lets letters testamentary issue without a long delay. Without assents, the heirs get personally served and have at least 10 days before letters can issue.',
      'If there is no will, an administrator petitions for letters of administration. If the estate has no debts and the heirs have agreed on the division, OCGA § 53-2-40 allows a "no administration necessary" order — which often skips a full probate. A surviving spouse or minor children can also petition for year\'s support under OCGA § 53-3-1, which transfers the home directly. The year\'s support petition has to be filed within two years of the date of death (OCGA § 53-3-5).',
      'Each path has its own paperwork, its own waiting period, and its own cost. A Statesboro probate attorney can usually tell you within an initial consultation which one fits your situation.',
    ],

    timelineSection: [
      'Here is what the practical Bulloch inheritance-sale clock can look like:',
      'Date of death. Funeral, family gathering, immediate decisions about house contents and security.',
      'Within the first weeks, identify whether there is a will, who the heirs are, what debts the estate has, and whether anyone disputes the situation.',
      'File at the Bulloch County Probate Court — solemn-form petition, application for letters of administration, year\'s support petition, or § 53-2-40 petition, depending on the facts.',
      'Letters issue (or the relevant order issues). Some cases — especially solemn-form with all heirs assenting — move quickly. Contested or complex estates take longer. The Probate Court controls the calendar.',
      'Once authority to sell is established, the property can be listed or sold to a cash buyer. Title companies require the matching paperwork — letters, year\'s support order, or no-administration order — at closing.',
      'The sale closes. Proceeds get distributed under the will, the year\'s support order, or the heirs\' agreement.',
    ],

    howWeHelpSection: [
      'A Bulloch inheritance sale is different from a foreclosure or a divorce sale. Here is how we work it.',
      'We coordinate with the probate attorney. The probate attorney is who drives the timeline. We do not pressure the probate court; we adapt to it.',
      'We carry holding costs longer than most cash buyers. Probate sometimes takes months. We accept extended due-diligence and closing periods so the executor or administrator does not feel rushed.',
      'We make the offer to the estate or the heirs collectively. Not to one heir, not behind another\'s back. The estate is what holds the property, and the estate is who we negotiate with.',
      'We pay standard closing costs. No commissions, no listing fees. The estate or the heirs receive the agreed amount at closing.',
      'We refer to a probate attorney if there is not one yet. Bulloch County has experienced probate attorneys. A first consultation is usually inexpensive or free, and getting one early often saves time later.',
    ],

    trustSignalsSection: [
      'A real Statesboro operator knows the Probate Court is at 2 North Main Street, knows the difference between solemn-form probate and letters of administration, and knows that year\'s support is a uniquely Georgia mechanism. Out-of-state buyers learn these distinctions only when a closing falls apart because the wrong paperwork was used.',
      'We have closed Bulloch inheritance sales involving houses in the Averitt Arts District and along Fair Road, farmhouses in Brooklet, Portal, and Stilson, and rural properties in Register and the smaller communities like Hopeulikit, Nevils, Leefield, and Adabelle. Bulloch probate attorneys know us. That matters when an estate sale needs a buyer who will wait for the right paperwork rather than push around it.',
    ],

    faqs: [
      {
        q: 'Do we have to wait for full probate before we can sell our parent\'s Statesboro house?',
        a: 'Not always. Several paths can transfer authority to sell without full probate: a no-administration-necessary order under OCGA § 53-2-40 (when the estate has no debts and heirs agree), a year\'s support petition under OCGA § 53-3-1 (for a surviving spouse or minor children), or solemn-form probate with all heirs assenting under OCGA § 53-5-21. A Bulloch probate attorney can tell you which fits.',
      },
      {
        q: 'Can the executor sell the Bulloch house without all the heirs\' permission?',
        a: 'Usually yes, once letters testamentary have been issued. The will and the letters give the executor authority to sell. The executor still has fiduciary duties to the heirs and has to account for the proceeds. If a will is silent on real estate or there is a dispute, the probate attorney can advise.',
      },
      {
        q: 'What is "year\'s support" and how does it affect a Statesboro probate sale?',
        a: 'Year\'s support is a Georgia-only protection (OCGA § 53-3-1) that lets a surviving spouse or minor children take property — usually including the family home — for 12 months of support. The petition has to be filed within 2 years of the date of death (OCGA § 53-3-5). Once granted, it transfers title cleanly. It can priority over most creditors. Talk to a probate attorney.',
      },
      {
        q: 'My siblings and I cannot agree on whether to sell our Bulloch family home. What happens?',
        a: 'If the will leaves the property to multiple heirs, each heir typically owns an undivided share. One heir cannot force the others to sell informally. A petition for partition in superior court can sometimes resolve disputed real estate. A probate or real-estate attorney can explain the options. We do not pressure any heir to sign.',
      },
      {
        q: 'The estate has more debt than the house is worth. Can we still sell?',
        a: 'Sometimes — through a short-sale arrangement coordinated by the probate attorney, the estate\'s creditors, and the lender. Estate creditors generally have to be paid in priority order before heirs receive anything. If there is a mortgage that exceeds value, the estate may have to negotiate a short payoff. Talk to the probate attorney about the estate\'s specific creditors and assets.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'springfield-ga'],
  },

  'rincon-ga': {
    title: 'Sell Inherited House in Rincon, GA — Effingham Cash Buyer',
    metaDescription: 'Inherited an Effingham County house? Probate filings happen in Springfield. We coordinate with the probate attorney and close clean.',
    h1: 'Selling an Inherited Rincon Home Through Effingham Probate',

    empatheticOpening: [
      'Effingham County has grown faster than its housing stock would suggest, but inherited Rincon homes are often older properties that have been in the family for decades. The mortgage may have been paid off long ago. The taxes and insurance keep coming. The grass keeps growing.',
      'Probate in Effingham County happens in Springfield, fifteen minutes from Rincon. For Rincon families, that distance becomes the first surprise of the process — every probate filing, every order, every signature happens in a different town.',
    ],

    countyProcessSection: [
      'Effingham County probate matters are handled at the Effingham County Probate Court, 700 N. Pine Street, Springfield. Solemn-form probate, letters of administration, year\'s support petitions, and § 53-2-40 no-administration petitions all file there.',
      'When there is a will and the executor proceeds with solemn-form probate, OCGA § 53-5-21 allows letters testamentary to issue without further delay if all heirs file an assent. Without assents, heirs are served personally with at least 10 days\' notice before letters can issue.',
      'When there is no will, the family can petition for letters of administration. If the estate has no debts and the heirs agree on the division, the no-administration-necessary path under OCGA § 53-2-40 sometimes lets the heirs avoid full probate altogether. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, which has a 2-year filing deadline (OCGA § 53-3-5).',
    ],

    timelineSection: [
      'A Rincon inheritance-sale timeline can run on this clock:',
      'Date of death. Funeral, family decisions, securing the house and any belongings.',
      'Within the first weeks, gather the will (if any), identify heirs, list known debts, and identify whether the home has any liens beyond the mortgage.',
      'File at the Effingham County Probate Court in Springfield. Choose the appropriate path — solemn-form, letters of administration, year\'s support, or § 53-2-40.',
      'The Probate Court reviews the petition. Notice may need to be served on heirs. A hearing may be required. The schedule depends on the specific judge and case.',
      'The order or letters issue. The estate now has the legal authority to sell.',
      'A buyer is contracted. The closing happens at an Effingham closing attorney with the matching probate paperwork attached. The deed records at the Effingham County clerk\'s office in Springfield.',
    ],

    howWeHelpSection: [
      'A Rincon probate sale benefits from a buyer who knows the Effingham process.',
      'We coordinate with the probate attorney. Letters or the relevant order has to be in hand before closing. We follow that timeline rather than rush it.',
      'We carry the property through the probate process. Insurance, utilities, basic upkeep — we can sometimes work with extended due diligence so the estate does not feel pressured.',
      'We make the offer to the estate. Not to one heir privately. The executor, administrator, or year\'s support petitioner is who we contract with.',
      'We close in Springfield. The deed records at 700 N. Pine. Local recording is the same day or the next day in most cases.',
      'We cover standard closing costs. No commissions, no listing fees. The Effingham estate receives the agreed cash amount in a single Springfield closing wire.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows that the Probate Court is in Springfield, that the legal organ is the Effingham Herald, and that solemn-form probate without assents requires at least 10 days\' service before letters issue. They know the difference between letters testamentary (with a will) and letters of administration (without a will). Out-of-state buyers do not.',
      'We have bought inherited homes across south Effingham — in Rincon proper and in the smaller surrounding communities like Pineora, Eden, Meldrim, and Faulkville. Many Rincon inheritance properties are older builds with paid-off mortgages and decades of family belongings. We give the estate the time to handle that side, then close cleanly when the paperwork is ready.',
    ],

    faqs: [
      {
        q: 'My parent left a will and named me executor of the Rincon house. Can I sell it now?',
        a: 'Not yet. You need letters testamentary issued by the Effingham County Probate Court in Springfield. With all heirs filing an assent, OCGA § 53-5-21 lets letters issue without a long delay. Once you have the letters, you have authority to sell. Contracting before letters issue can cause title problems at closing.',
      },
      {
        q: 'There is no will. Who has authority to sell our parent\'s Rincon house?',
        a: 'Generally an administrator appointed by the Effingham County Probate Court, after a petition for letters of administration is filed. If the estate has no debts and all heirs agree on the division, a no-administration-necessary order under OCGA § 53-2-40 may be a faster path. A probate attorney can review the specific facts.',
      },
      {
        q: 'Can a Rincon inheritance sale close while probate is still pending?',
        a: 'Sometimes — depending on what stage probate is in and what authority has been granted. Some closings happen with letters testamentary in hand even before final estate accounting. Some have to wait. The probate attorney and the closing attorney coordinate timing.',
      },
      {
        q: 'Will the inheritance sale create a tax bill for the heirs?',
        a: 'Possibly. The sale price, the date-of-death basis, capital-gains treatment for inherited property, and any depreciation if the house was rented all factor into tax outcomes. A CPA can review your specific facts. The IRS treats inherited property differently than purchased property — that often helps with tax basis.',
      },
      {
        q: 'The Rincon house is full of belongings nobody wants to clear. Does that affect the sale?',
        a: 'Not the legal sale, no. We buy houses as-is, with belongings still in place. The estate takes what the family wants, and we deal with the rest after closing. No estate-sale auction or charity-pickup logistics required.',
      },
    ],

    lateralCitySlugs: ['savannah-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'savannah-ga': {
    title: 'Sell an Inherited House in Savannah, GA — Cash Buyer',
    metaDescription: 'Inherited a Chatham County home? Historic, suburban, or coastal — VP Buys Homes works with the probate attorney and closes as-is. No fees.',
    h1: 'Selling an Inherited Savannah Home Through Chatham Probate',

    empatheticOpening: [
      'Savannah inheritances are often layered. A Historic-District property that has been in the family for generations. A grandparent\'s home on Wilmington Island. A coastal cottage on Tybee. A Pooler subdivision house from the 1990s that was the parents\' last move. The legal process is the same; the property profiles are very different.',
      'The Chatham County Probate Court at 133 Montgomery Street, Room 509, processes a steady volume of estate cases. Some Savannah probates move quickly because the will is clean and heirs are aligned. Others stall because of property-condition disputes, tax issues, or contested wills. The route through probate determines what kind of sale becomes possible — and when.',
    ],

    countyProcessSection: [
      'Chatham County probate filings happen at 133 Montgomery Street, Room 509, Savannah. The Probate Court handles wills, letters testamentary, letters of administration, year\'s support, and small-estate orders.',
      'A solemn-form probate with all heirs assenting (OCGA § 53-5-21) usually moves through the Probate Court more quickly than a contested case. Without assents, heirs receive personal service and at least 10 days pass before letters issue. Letters of administration (when there is no will) follow a different path — interested parties have a chance to object to who gets appointed administrator.',
      'A year\'s support petition (OCGA § 53-3-1) lets a surviving spouse or minor children claim 12 months of support from the estate, often including the family home. The 2-year filing deadline (OCGA § 53-3-5) applies. For estates with no debts and heir agreement, OCGA § 53-2-40 can sometimes skip full probate via a no-administration-necessary order.',
      'Savannah\'s historic-district properties bring extra layers — Historic Review Board jurisdiction, façade easements, and code-compliance issues that can affect what a buyer is willing to pay. None of these block probate, but all of them affect the sale economics.',
    ],

    timelineSection: [
      'A Chatham inheritance-sale timeline tends to look like this:',
      'Date of death. Funeral, immediate family decisions, securing the property and any vehicles or valuables.',
      'In the first weeks, gather the will, identify heirs, secure the house, list known debts, and identify special property issues (Historic District, flood zone, lien on the property).',
      'File at the Chatham County Probate Court — solemn-form, letters of administration, year\'s support, or § 53-2-40.',
      'The Probate Court reviews. Notice may need to issue. A hearing may be required.',
      'Letters or the relevant order issues. Authority to sell is established.',
      'A buyer is contracted, with the matching probate paperwork attached to the closing package. The deed records at the Chatham County clerk\'s office downtown.',
    ],

    howWeHelpSection: [
      'A Chatham inheritance sale benefits from a buyer who can handle Savannah-specific property issues.',
      'We coordinate with the probate attorney. We do not pressure the Probate Court calendar — we wait for letters or the relevant order before closing.',
      'We handle Historic-District properties, flood-zone houses, and properties with deferred storm-damage repair without backing out at the last minute. The offer accounts for the actual property and the actual code rules.',
      'We make the offer to the estate, the year\'s support petitioner, or the appointed administrator — whoever has authority. Not to one heir behind the others.',
      'We carry the holding costs through extended due diligence when probate takes time. Insurance, taxes, basic upkeep on a vacant Historic-District property are real expenses; we factor them into our offer rather than asking the estate to.',
      'We cover standard closing costs. No commissions, no listing fees. The Chatham estate receives the full agreed amount, with no surprise deductions at the closing table.',
    ],

    trustSignalsSection: [
      'A real Chatham operator knows the Probate Court is in Room 509 at 133 Montgomery Street, knows the difference between letters testamentary and letters of administration, and knows that Savannah Historic-District properties have code rules that affect what every buyer can do after closing. Out-of-state cash-buying outfits do not. Many of them back out of Savannah inheritance contracts after the title work surfaces something they did not expect.',
      'We have closed Chatham inheritance sales across the county — Historic and Victorian Districts, Ardsley Park, Midtown, Pooler, Bloomingdale, Garden City, Wilmington Island, Skidaway Island, Whitemarsh Island, Isle of Hope, Vernonburg, and Pin Point. Each neighborhood has its own market and its own complications. We do not pretend they are interchangeable.',
    ],

    faqs: [
      {
        q: 'Our Savannah Historic-District inherited property has code violations. Can you still buy?',
        a: 'Yes. We buy historic homes with deferred maintenance, code-violation notices, and unfinished restoration projects. The offer accounts for what it would actually take to bring the property into compliance — including any Historic Review Board approvals required for repairs. A coastal-Georgia real-estate attorney can advise on the historic-district side.',
      },
      {
        q: 'My parent\'s Wilmington Island house has a flood-zone designation. Does that matter for inheritance?',
        a: 'It affects insurance and resale economics, but not probate itself. Flood-zone properties usually require flood insurance the estate must maintain during probate. Our offer factors in flood-zone designation, current flood-insurance premiums, and any FEMA flood map changes. A Chatham real-estate attorney can review specific designations.',
      },
      {
        q: 'The inherited Pooler house has a reverse mortgage. How does that work in probate?',
        a: 'Reverse mortgages typically come due upon the borrower\'s death. The estate generally has a period (often a year or so, with extensions in some cases) to pay off the loan or sell the property. We have closed reverse-mortgage payoffs at probate sales — coordination with the reverse-mortgage servicer is required. A probate attorney can advise on the specific timeline for your loan.',
      },
      {
        q: 'How long does Chatham County probate typically take?',
        a: 'It depends entirely on the case. Solemn-form probate with all heirs assenting can be relatively fast. Contested probate, complex estates with multiple properties or business interests, or year\'s support disputes can take many months. The Chatham Probate Court is busier than most rural-county probate courts, which sometimes means longer scheduling. Talk to a probate attorney for an estimate.',
      },
      {
        q: 'Can you handle estates with multiple Chatham properties?',
        a: 'Yes. Estates that include a primary home, rental property, and vacation cottage are common in Chatham County. We can offer on individual properties, on packages of properties, or on a portfolio. The offer math is per property — each one priced on its own facts.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'metter-ga': {
    title: 'Sell Inherited House in Metter, GA — Candler Cash Buyer',
    metaDescription: 'Inherited a Candler County home? Probate at 35 SW Broad Street, Metter. We work with the probate attorney and close as-is. No fees.',
    h1: 'Selling an Inherited Metter Home Through Candler Probate',

    empatheticOpening: [
      'Many Candler County inheritance sales involve a multigenerational family farm, a small in-town home that has been paid off for decades, or a rural parcel with a single small house and outbuildings. The estate may have very little debt — and a property that has not been listed for sale in fifty years.',
      'The Candler County Probate Court at 35 SW Broad Street, Metter, handles these estates with the small-county pace. The probate attorney, the family, and the property\'s actual condition determine how quickly a sale becomes possible.',
    ],

    countyProcessSection: [
      'Candler County probate filings happen at 35 SW Broad Street, Metter — the same building as the Superior Court. The Probate Court handles wills, letters testamentary, letters of administration, year\'s support, and small-estate matters.',
      'For an estate with a will and an executor, solemn-form probate with all heirs assenting (OCGA § 53-5-21) is generally the fastest path to letters testamentary. Without assents, heirs are personally served and at least 10 days pass before letters issue.',
      'For an estate with no will, letters of administration follow a petition with notice to interested parties. Many smaller Candler estates qualify for the no-administration-necessary order under OCGA § 53-2-40 — when there are no estate debts and all heirs agree on the division. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, with the 2-year filing deadline of OCGA § 53-3-5.',
      'Many Candler probate cases involve farmland, manufactured homes on permanent foundations, or rural parcels with outbuildings. These add specific title-work steps but are routine for local probate attorneys.',
    ],

    timelineSection: [
      'A Metter inheritance-sale timeline often looks like this:',
      'Date of death. Funeral, family conversations, securing the property and any agricultural equipment.',
      'Within the first weeks, gather the will (if any), identify heirs, list any debts, and assess the property\'s condition.',
      'File at the Candler County Probate Court — solemn-form, letters of administration, year\'s support, or no-administration-necessary, depending on the estate facts.',
      'The Probate Court reviews. Smaller-county docket sometimes means quicker processing of clean cases.',
      'Letters or the relevant order issues. Authority to sell is established.',
      'A buyer is contracted, with the probate paperwork attached. The deed records at the Candler County clerk\'s office at 35 SW Broad.',
    ],

    howWeHelpSection: [
      'A Metter inheritance sale benefits from local logistics.',
      'We coordinate with the probate attorney. The probate attorney drives the timeline; we follow it.',
      'We buy farmland, manufactured homes on permanent foundations, rural parcels with outbuildings, and in-town houses. The offer accounts for the actual property — well, septic, fencing, agricultural use, deferred maintenance.',
      'We make the offer to the estate or to the heirs collectively. Not to one heir privately.',
      'We close in Metter. The deed records at 35 SW Broad. Local recording is fast.',
      'We cover standard closing costs. No commissions, no listing fees. The Candler estate or year\'s support petitioner receives the full agreed cash amount.',
    ],

    trustSignalsSection: [
      'A real Candler County operator knows that the Probate Court is on SW Broad Street, that Candler is part of the Middle Judicial Circuit, and that many Candler estates involve agricultural or rural property. They know the difference between letters testamentary and letters of administration. Out-of-state buyers do not — and a wholesale-style outfit can stall a probate sale by trying to skip the right paperwork.',
      'We work across Candler and the surrounding rural counties — Bulloch, Emanuel, Toombs, Evans. That gives us a comp set rooted in this corner of Southeast Georgia, including farmhouses, manufactured homes, and rural acreage. A Metter inheritance home is priced against actual recent Candler sales, not against metro-Atlanta or Savannah-coastal pricing.',
    ],

    faqs: [
      {
        q: 'Our Candler County family farm is in the estate. Can you buy farmland during probate?',
        a: 'Yes. We buy farmland with or without a residence on it, including parcels with outbuildings, well, septic, or active agricultural use. The offer accounts for the actual acreage and improvements. Some agricultural properties have specific easements or government program participation that the closing attorney needs to review — a Candler real-estate attorney can clarify.',
      },
      {
        q: 'Can the year\'s support petition transfer our parent\'s Metter house faster than full probate?',
        a: 'Sometimes. Year\'s support (OCGA § 53-3-1) lets a surviving spouse or minor children claim 12 months of support from the estate, often including the family home. The petition has to be filed within 2 years of the date of death (OCGA § 53-3-5). It can transfer title cleanly without full probate. A Candler probate attorney can confirm whether year\'s support fits your situation.',
      },
      {
        q: 'There is a manufactured home on the inherited Candler property. Does that complicate the sale?',
        a: 'It adds a title-work step. Manufactured homes that are titled to the land (real-property treatment) close like other houses. Manufactured homes still on a separate motor-vehicle title need an extra title transfer. The closing attorney handles the conversion or coordinates the two transfers.',
      },
      {
        q: 'My siblings and I inherited the Metter house equally. Can one of us sell our share?',
        a: 'A single heir can sometimes sell their undivided interest, but that creates a co-ownership situation with the buyer and the other siblings — usually not what anyone wants. A more common path is for all heirs to agree to sell the whole property and split the proceeds. If the heirs cannot agree, a partition action may be available. A real-estate attorney can advise.',
      },
      {
        q: 'The estate owes back taxes to Candler County. Will that affect the sale?',
        a: 'Yes — back property taxes are a lien on the property and have to be paid at closing for clear title. We coordinate with the Candler County Tax Commissioner\'s office to get the exact payoff figure and pay it as part of the closing. Estate creditors generally have priority, but property tax liens follow the land.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'springfield-ga': {
    title: 'Sell Inherited House in Springfield, GA — Effingham Cash',
    metaDescription: 'Inherited a Springfield, GA home? Probate filings happen here at 700 N. Pine Street. We work with the attorney and close clean. No fees.',
    h1: 'Selling an Inherited Springfield Home Through Effingham Probate',

    empatheticOpening: [
      'For Springfield families, the Probate Court is the same building as the Superior Court — 700 N. Pine Street, three blocks from downtown. That makes the legal side of an inheritance feel less abstract than it does in counties where the courthouse is a long drive away.',
      'Many Springfield inheritance sales involve homes that have been in the same family for decades. The mortgage may have been paid off in the 1990s. The taxes, insurance, and routine upkeep have continued. The decisions about what to do with the property fall to the next generation, often during a difficult time.',
    ],

    countyProcessSection: [
      'Effingham County probate matters file at the Effingham County Probate Court, 700 N. Pine Street, Springfield. The Probate Court handles solemn-form probate, letters of administration, year\'s support, and small-estate matters.',
      'When a Springfield homeowner dies with a will and a named executor, the executor petitions for solemn-form probate. With all heirs filing an assent, OCGA § 53-5-21 allows letters testamentary to issue without further delay. Without assents, heirs are personally served and at least 10 days pass before letters issue.',
      'When there is no will, the family petitions for letters of administration. If the estate has no debts and heirs agree on the division, OCGA § 53-2-40 allows a no-administration-necessary order, which often skips full probate. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, subject to the 2-year filing deadline of OCGA § 53-3-5.',
      'Each path requires specific paperwork. The Springfield Probate Court staff are experienced in answering general procedural questions, but they cannot give legal advice. A probate attorney is generally worth the consultation fee — many Springfield-experienced attorneys charge a flat amount for an initial assessment.',
    ],

    timelineSection: [
      'A Springfield inheritance-sale timeline tends to run on this clock:',
      'Date of death. Funeral, family decisions, securing the property.',
      'In the first weeks, gather the will, identify the heirs, secure the house, list known debts, and review any liens against the property.',
      'File at the Effingham County Probate Court at 700 N. Pine. Choose the appropriate path — solemn-form, letters of administration, year\'s support, or no-administration-necessary.',
      'The Probate Court reviews the petition. Notice may need to issue. A hearing may be required.',
      'Letters or the relevant order issues. The estate now has authority to sell.',
      'A buyer is contracted. The closing happens at an Effingham closing attorney with the probate paperwork attached. The deed records at the same 700 N. Pine address.',
    ],

    howWeHelpSection: [
      'A Springfield inheritance sale benefits from a buyer who can work with a local probate attorney without rushing the Probate Court.',
      'We coordinate with the probate attorney from the first call. Letters or the relevant order has to be in hand before closing — we wait for that, even if it takes longer than a typical sale.',
      'We carry holding costs through the wait. Insurance, taxes, and basic upkeep on a vacant Springfield home all add up over months of probate. We factor those costs into the offer rather than asking the estate to absorb extended carrying.',
      'We make the offer to the estate or to the heirs collectively. The executor, administrator, or year\'s support petitioner is who we contract with.',
      'We close at a Springfield closing attorney\'s office. The deed records at the same Effingham courthouse. Local recording is fast.',
      'We pay standard closing costs. No commissions, no listing fees. The estate receives the agreed amount.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows the Probate Court is in Springfield, that the legal organ is the Effingham Herald, and that solemn-form probate with all heirs assenting can issue letters testamentary much faster than contested probate. They know the year\'s support deadline is 2 years from the date of death. Out-of-state cash-buying outfits do not.',
      'We have bought inherited homes across Effingham County — in Springfield itself and in Rincon and the smaller surrounding communities like Egypt and Shawnee. Many Springfield inheritance properties are mid-century or earlier builds with paid-off mortgages and decades of family history. We give the estate the time to handle that side, then close cleanly when the paperwork is ready.',
    ],

    faqs: [
      {
        q: 'How long does an Effingham probate take if all heirs agree?',
        a: 'A solemn-form probate with all heirs filing an assent under OCGA § 53-5-21 can issue letters testamentary relatively quickly — without the standard service-and-waiting period that applies when assents are missing. Exact timing depends on the Probate Court\'s schedule. A Springfield probate attorney can give you a current estimate.',
      },
      {
        q: 'My parent\'s Springfield house has back property taxes owing. How does that work in probate?',
        a: 'Back property taxes are a lien against the property and have to be paid at closing for the buyer to receive clear title. The Effingham County Tax Commissioner\'s office at 802 S. Laurel can provide an exact payoff. We coordinate with the tax commissioner and pay back taxes at the closing as part of the purchase. The estate does not need to come up with the money separately.',
      },
      {
        q: 'Can year\'s support transfer the Springfield home to my surviving mother without full probate?',
        a: 'Sometimes — that is the intended use of OCGA § 53-3-1 year\'s support. A petition has to be filed at the Effingham Probate Court within 2 years of the date of death (OCGA § 53-3-5). Once granted, year\'s support transfers title to the surviving spouse cleanly, often skipping full probate. A Springfield probate attorney can confirm whether your facts qualify.',
      },
      {
        q: 'What if our parent\'s will leaves the Springfield house to multiple children, but we cannot agree on what to do?',
        a: 'Each named beneficiary takes their share under the will. If the will leaves the property jointly, all beneficiaries usually have to agree to a sale. If they cannot agree, a petition for partition in superior court can sometimes resolve the dispute. A real-estate attorney can advise on the specific options.',
      },
      {
        q: 'Can we sell the Springfield inherited home before opening probate?',
        a: 'Generally no, because no one yet has legal authority to convey title. A few exceptions exist — for example, joint-tenancy property with right of survivorship transfers automatically to the surviving owner without probate, and some properties held in revocable trusts pass without probate. Most other situations require some Probate Court action first. A probate attorney can clarify your specific situation.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'savannah-ga', 'statesboro-ga'],
  },

  'swainsboro-ga': {
    title: 'Sell Inherited House in Swainsboro, GA — Cash Buyer',
    metaDescription: 'Inherited an Emanuel County home? Probate at 125 S. Main, Swainsboro. We coordinate with the probate attorney and close clean. No fees.',
    h1: 'Selling an Inherited Swainsboro Home Through Emanuel Probate',

    empatheticOpening: [
      'Many Emanuel County inheritance sales involve homes that have been in the family for two or three generations — small in-town houses near downtown Swainsboro, manufactured homes on permanent foundations in the surrounding communities, or rural parcels with one main residence and a few outbuildings.',
      'The Emanuel County Probate Court at 125 S. Main Street, Swainsboro, handles these estates with the small-county pace. Most of the time, the heirs know each other well — sometimes too well. The probate attorney, the family\'s alignment (or lack of it), and the property\'s actual condition shape the timeline.',
    ],

    countyProcessSection: [
      'Emanuel County probate filings happen at 125 S. Main Street, Swainsboro — the same building as the Superior Court. The Probate Court handles solemn-form probate, letters of administration, year\'s support, and small-estate matters.',
      'For estates with a will and a willing executor, solemn-form probate with all heirs assenting (OCGA § 53-5-21) usually moves through the Probate Court more quickly than a contested case. Without assents, heirs are personally served and at least 10 days pass before letters can issue.',
      'For estates without a will, letters of administration follow a petition with notice to interested parties. Many smaller Emanuel estates qualify for the no-administration-necessary path under OCGA § 53-2-40 — where there are no estate debts and all heirs agree. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, with the 2-year filing deadline of OCGA § 53-3-5.',
      'Many Emanuel probate cases involve manufactured homes on permanent foundations or rural parcels. These add specific title-work steps but are routine for local probate attorneys.',
    ],

    timelineSection: [
      'A Swainsboro inheritance-sale timeline can run like this:',
      'Date of death. Funeral, family decisions, securing the property and any vehicles or equipment.',
      'Within the first weeks, locate the will, identify heirs, list any debts, and assess the property.',
      'File at the Emanuel County Probate Court — solemn-form, letters of administration, year\'s support, or no-administration, depending on the facts.',
      'The Probate Court reviews. Smaller-county docket sometimes processes clean cases more quickly.',
      'Letters or the relevant order issues. The estate has authority to sell.',
      'A buyer is contracted. The closing matches the probate paperwork. The deed records at the Emanuel County clerk\'s office in Swainsboro.',
    ],

    howWeHelpSection: [
      'An Emanuel inheritance sale benefits from a buyer who knows the local property mix.',
      'We coordinate with the probate attorney. The attorney drives the timeline; we follow it.',
      'We buy in-town homes, manufactured homes on permanent foundations, rural parcels, and properties with outbuildings. The offer accounts for the actual property — including well, septic, fence, and agricultural use.',
      'We make the offer to the estate or the heirs collectively. We do not negotiate with one heir behind the others.',
      'We close in Swainsboro. The deed records at 125 S. Main. Local recording is generally same-day or next-day.',
      'We pay standard closing costs. No commissions, no listing fees. The estate or year\'s support petitioner receives the agreed amount.',
    ],

    trustSignalsSection: [
      'A real Emanuel operator knows the Probate Court is on S. Main Street, knows the legal organ is the Forest-Blade, and knows that many Emanuel inheritance properties are manufactured homes that need specific title-conversion handling at closing. They know the difference between solemn-form probate, letters of administration, year\'s support, and a no-administration-necessary order. Out-of-state buyers do not.',
      'We work across Emanuel and the surrounding Middle Judicial Circuit counties — Candler, Toombs, Jefferson, Treutlen, Washington — and into Bulloch and Effingham. That gives us a comp set rooted in this part of Southeast Georgia, capturing the in-town, rural, and manufactured-home mix that many Emanuel estates involve.',
    ],

    faqs: [
      {
        q: 'Our parent\'s Swainsboro home is a manufactured home on a permanent foundation. Does that complicate the inheritance sale?',
        a: 'It adds a title-work step. Manufactured homes titled to the land (real-property treatment) close like other houses. Manufactured homes still on a separate motor-vehicle title need an extra step — converting the title or coordinating two transfers. The closing attorney handles the title work as part of the closing package.',
      },
      {
        q: 'My siblings and I have not agreed on whether to sell the Swainsboro house. What can we do?',
        a: 'If all heirs hold undivided interests under a will or intestacy, no single heir can force the others to sell informally. Some siblings buy out the others. Some petition for partition in superior court. Some negotiate based on contributions to upkeep, taxes, or family history. A real-estate or probate attorney can outline the options.',
      },
      {
        q: 'Can the no-administration-necessary order work for our parent\'s Swainsboro estate?',
        a: 'Sometimes. OCGA § 53-2-40 allows a no-administration-necessary order when the decedent died intestate (without a will), no personal representative has been appointed, the estate has no debts (or all creditors consent), and the heirs have agreed on division. If those conditions fit your facts, the petition can sometimes skip the full administration process. A Swainsboro probate attorney can review.',
      },
      {
        q: 'The Swainsboro inherited property has unpaid Emanuel County property taxes. How does that work?',
        a: 'Unpaid property taxes are a lien on the property and have to be paid at closing for the buyer to receive clear title. We coordinate with the Emanuel County Tax Commissioner at 223 W. Moring Street to get the exact payoff figure. The taxes get paid out of the closing proceeds. The estate does not need to come up with the money separately.',
      },
      {
        q: 'Is there a deadline for filing year\'s support in Emanuel County?',
        a: 'Yes. Year\'s support petitions must be filed within two years of the decedent\'s date of death (OCGA § 53-3-5). After that deadline, year\'s support is no longer available, and the estate generally has to go through full administration. If you are within the 2-year window, a Swainsboro probate attorney can advise on whether to file.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'metter-ga'],
  },

  'claxton-ga': {
    title: 'Sell Inherited House in Claxton, GA — Evans Cash Buyer',
    metaDescription: 'Inherited an Evans County home? Probate at 201 Freeman Street, Claxton. We work with the probate attorney and close cleanly. No fees.',
    h1: 'Selling an Inherited Claxton Home Through Evans County Probate',

    empatheticOpening: [
      'Evans County is small enough that the probate attorney, the closing attorney, and the tax commissioner often know each other personally. That can make an inheritance sale move smoothly when everyone is aligned. It also means there are not many cash buyers locally who actually know the Evans probate process.',
      'Most Claxton inheritance sales involve homes that have been in the family for decades — small in-town houses, rural farmhouses, or modest properties on the outskirts of town. The probate process, the property condition, and the heir alignment determine when a sale becomes possible.',
    ],

    countyProcessSection: [
      'Evans County probate filings happen at the Evans County Probate Court, 201 Freeman Street, Suite 9, Claxton. The Probate Court handles wills, letters testamentary, letters of administration, year\'s support, and small-estate matters.',
      'When a Claxton homeowner dies with a will, the named executor petitions for solemn-form probate. With all heirs filing an assent, OCGA § 53-5-21 allows letters testamentary to issue without further delay. Without assents, heirs are personally served and at least 10 days pass before letters issue.',
      'When there is no will, the family petitions for letters of administration. Many smaller Evans estates with no debts and heir agreement qualify for the no-administration-necessary order under OCGA § 53-2-40. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, with the 2-year filing deadline (OCGA § 53-3-5).',
    ],

    timelineSection: [
      'An Evans County inheritance-sale clock often runs like this:',
      'Date of death. Funeral, family decisions, securing the property and any agricultural equipment.',
      'In the first weeks, gather the will, identify heirs, list known debts, and review the property\'s condition.',
      'File at the Evans County Probate Court at 201 Freeman Street — solemn-form, letters of administration, year\'s support, or no-administration-necessary, based on the estate facts.',
      'The Probate Court reviews. Notice may need to issue. A hearing may be scheduled.',
      'Letters or the relevant order issues. The estate now has authority to sell.',
      'A buyer is contracted, with the probate paperwork attached. The deed records at the Evans County clerk\'s office in Claxton.',
    ],

    howWeHelpSection: [
      'A Claxton inheritance sale benefits from a buyer with Atlantic Circuit familiarity.',
      'We coordinate with the probate attorney. We do not pressure the Probate Court calendar. Letters or the relevant order has to be in hand before closing.',
      'We buy in-town homes, rural farmhouses, manufactured homes on permanent foundations, and properties with outbuildings. The offer accounts for the actual property and the actual condition.',
      'We make the offer to the estate or the heirs collectively. Not to a single heir behind the others.',
      'We close in Claxton. The deed records locally. The closing attorney handles the trip to the Evans courthouse if it is at a different building.',
      'We cover standard closing costs. No commissions, no listing fees. The Evans estate receives the agreed cash amount, paid out at the local closing.',
    ],

    trustSignalsSection: [
      'A real Evans County operator knows the Probate Court is at 201 Freeman Street, Suite 9, knows the difference between letters testamentary and letters of administration, and knows that Evans is part of the Atlantic Judicial Circuit. They know the Claxton Enterprise is the county\'s legal organ. Out-of-state buyers do not.',
      'We have bought inherited homes across Evans County — in Claxton, Hagan, Bellville, Daisy, and Manassas. We also work in the surrounding counties. That gives us a comp set rooted in this stretch of Southeast Georgia. A Claxton inheritance home is priced against actual recent Evans sales, not metro-Atlanta or coastal-Savannah pricing.',
    ],

    faqs: [
      {
        q: 'Our parent left a will and named me executor of the Claxton house. What is my first step?',
        a: 'File the will at the Evans County Probate Court at 201 Freeman Street and petition for solemn-form probate. With all heirs filing an assent, OCGA § 53-5-21 lets letters testamentary issue without a long waiting period. Once you have letters, you can act on behalf of the estate, including listing or selling the property. A Claxton probate attorney can walk you through the petition.',
      },
      {
        q: 'There is no will. Who can sell our parent\'s Claxton house?',
        a: 'Generally an administrator appointed by the Evans County Probate Court, after a petition for letters of administration is filed and any contests resolved. If the estate has no debts and all heirs agree on the division, OCGA § 53-2-40 may allow a no-administration-necessary order — a faster path. A probate attorney can review the specific situation.',
      },
      {
        q: 'Can year\'s support transfer the Claxton home to our surviving parent without full probate?',
        a: 'Sometimes. Year\'s support (OCGA § 53-3-1) lets a surviving spouse or minor children claim 12 months of support from the estate, often including the family home. The petition has to be filed within 2 years of date of death (OCGA § 53-3-5). It can transfer title cleanly without full probate. A Claxton probate attorney can confirm whether year\'s support fits your situation.',
      },
      {
        q: 'The Claxton inherited property has rural acreage and a barn. Can you still buy?',
        a: 'Yes. We buy properties with rural acreage, outbuildings, well, septic, and active or former agricultural use. The offer accounts for the actual property — including any easements or government program participation. Some agricultural properties have specific recording quirks that the closing attorney addresses.',
      },
      {
        q: 'Atlantic Circuit hearings sometimes happen in Hinesville. Does that affect probate?',
        a: 'Probate matters are heard at the Evans County Probate Court in Claxton, regardless of the Atlantic Circuit Superior Court rotation. The Atlantic Circuit rotation affects Superior Court matters (divorce, foreclosure, civil suits), not probate. Your Probate Court hearing stays in Claxton.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'vidalia-ga': {
    title: 'Sell Inherited House in Vidalia, GA — Toombs Cash Buyer',
    metaDescription: 'Inherited a Toombs County home? Probate at 100 Courthouse Square, Lyons. We coordinate with the probate attorney and close clean.',
    h1: 'Selling an Inherited Vidalia Home Through Toombs County Probate',

    empatheticOpening: [
      'A Vidalia inheritance sale runs through Lyons. The Toombs County Probate Court, the deed recording, the will\'s probate — all of it happens at the courthouse on Courthouse Square. For Vidalia families, that means the legal end of an estate is handled in a different town than where the house actually sits.',
      'Many Toombs inheritance sales involve homes connected to the agricultural economy — small properties on the outskirts of Vidalia, in Lyons proper, in Uvalda, or in the rural communities around Cedar Crossing and Ohoopee. The probate paperwork is the same as in any Georgia county; the local context is what varies.',
    ],

    countyProcessSection: [
      'Toombs County probate filings happen at the Toombs County Probate Court, 100 Courthouse Square, Suite 353, Lyons. The Probate Court handles wills, letters testamentary, letters of administration, year\'s support, and small-estate matters.',
      'For estates with a will and a willing executor, solemn-form probate with all heirs assenting (OCGA § 53-5-21) is the fastest path to letters testamentary. Without assents, heirs are personally served and at least 10 days pass before letters issue.',
      'For estates without a will, letters of administration follow a petition with notice. Many smaller Toombs estates qualify for the no-administration-necessary order under OCGA § 53-2-40. A surviving spouse or minor children can also pursue year\'s support under OCGA § 53-3-1, subject to the 2-year filing deadline (OCGA § 53-3-5).',
      'Toombs probate cases often involve agricultural acreage, manufactured homes on permanent foundations, or rural parcels. These add specific title-work steps but are routine for Toombs probate attorneys.',
    ],

    timelineSection: [
      'A Vidalia inheritance-sale timeline often follows this clock:',
      'Date of death. Funeral, family decisions, securing the property and any farm equipment or agricultural assets.',
      'Within the first weeks, locate the will, identify heirs, list known debts, and assess the property\'s condition.',
      'File at the Toombs County Probate Court in Lyons — solemn-form, letters of administration, year\'s support, or no-administration-necessary.',
      'The Toombs Probate Court reviews. Notice may issue to interested heirs. A hearing may be scheduled depending on the case.',
      'Letters or the relevant order issues. The estate has authority to sell.',
      'A buyer is contracted. The closing happens at a Toombs closing attorney with the probate paperwork attached. The deed records at the Toombs County clerk\'s office at 100 Courthouse Square.',
    ],

    howWeHelpSection: [
      'A Vidalia inheritance sale benefits from a buyer who can travel between Vidalia and Lyons without flinching.',
      'We coordinate with the probate attorney. The attorney drives the timeline; we follow. Letters or the relevant order has to be in hand before closing.',
      'We buy farmland, in-town homes, manufactured homes on permanent foundations, and rural parcels with outbuildings. The offer accounts for the actual property — including any agricultural use, well, septic, and outbuildings.',
      'We make the offer to the estate, the year\'s support petitioner, or all heirs collectively — not to one heir privately.',
      'We close at a Lyons-based closing attorney. The deed records at 100 Courthouse Square. Local recording is fast.',
      'We pay standard closing costs. No commissions, no listing fees. The estate receives the agreed amount at closing.',
    ],

    trustSignalsSection: [
      'A real Toombs operator knows the Probate Court is in Lyons (not Vidalia), knows the legal organ is The Advance, and knows that many Toombs inheritance properties are farmland or rural parcels that need specific title-work handling. They know the difference between letters testamentary, letters of administration, year\'s support, and no-administration-necessary. Out-of-state buyers do not.',
      'We work across Toombs and the surrounding counties — Emanuel (Swainsboro), Candler (Metter), Evans (Claxton). That gives us a comp set rooted in this part of Southeast Georgia, capturing the agricultural and rural-property mix that many Toombs estates involve. A Vidalia inheritance home is priced against actual recent Toombs sales.',
    ],

    faqs: [
      {
        q: 'I live in Vidalia but my probate paperwork says Lyons. Is that a mistake?',
        a: 'No. Lyons is the Toombs County seat, and all Toombs County probate filings happen at the Probate Court at 100 Courthouse Square in Lyons. Vidalia is the larger city, but the legal infrastructure is in Lyons. Your inheritance papers are correct.',
      },
      {
        q: 'Our parent\'s Vidalia farm has been in the family since the 1950s. Can year\'s support transfer it cleanly?',
        a: 'Possibly, depending on the facts. Year\'s support (OCGA § 53-3-1) generally favors the surviving spouse or minor children and can transfer the family home. Whether it covers significant agricultural acreage depends on the specific case and the value of the rest of the estate. A Toombs probate attorney can review.',
      },
      {
        q: 'The inherited property has Vidalia onion-farming land. Are there special considerations?',
        a: 'Sometimes. Some agricultural properties have USDA program enrollments, conservation easements, or specific designations that affect what a buyer can do after closing. The closing attorney reviews these as part of the title work. We have closed agricultural-property sales before — the offer accounts for the actual land use.',
      },
      {
        q: 'My siblings live out of state. Can they handle their part of the Vidalia probate remotely?',
        a: 'Generally yes. Heirs\' assents can be signed remotely with proper notarization. Some siblings sign at a notary in their state and overnight the papers to the Toombs probate attorney. Some use power of attorney. The Probate Court generally accepts remote-signed documents that are properly executed.',
      },
      {
        q: 'There are unpaid Toombs County taxes on our parent\'s Vidalia home. How does that work in probate?',
        a: 'Unpaid property taxes are a lien on the property and have to be paid at closing for the buyer to receive clear title. We coordinate with the Toombs County Tax Commissioner at 100 Courthouse Square to get the exact payoff. The taxes are paid from the closing proceeds. The estate does not need to come up with the money separately.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'claxton-ga'],
  },
}
