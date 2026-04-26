import type { SituationContent } from './types'

// Per-pairing content for the Tax Liens / Tax Sale situation.
// Voice rules:
// - 7th-8th grade reading level
// - No legal/tax advice — educate, redirect to attorney
// - Distinguish mortgage foreclosure (§ 44-14-162) from tax-sale foreclosure (§ 48-4)
// - Use verified statutes: § 48-4-40 (12-month redemption), § 48-4-42 (premium), § 48-4-45 (barment)
// - Per-county tax-sale schedules vary widely — see lib/areas.ts taxCommissioner.salePattern
// - No predatory urgency, no fabricated stats

export const TAX_LIENS_CONTENT: SituationContent = {
  'statesboro-ga': {
    title: 'Resolve a Bulloch Tax Lien — Sell Your Statesboro House',
    metaDescription: 'Bulloch County tax lien on your Statesboro home? Inside redemption window? VP Buys Homes pays cash and clears the lien at closing. No fees.',
    h1: 'Selling a Statesboro House With a Bulloch County Tax Lien',

    empatheticOpening: [
      'Property tax problems in Bulloch County are quieter than mortgage foreclosures. There is no Statesboro Herald ad running every week, no first-Tuesday courthouse sale on the calendar. Instead, a tax-sale list shows up a few times a year, and most homeowners learn they are on it from a letter — sometimes with a short window to do anything about it.',
      'The Bulloch County Tax Commissioner schedules tax sales on the commissioner\'s own calendar, not on a strict monthly cadence like some counties. That can be a relief — there is more time than a mortgage foreclosure usually allows — or it can be a problem, because the timeline is harder to predict without checking with the tax commissioner directly.',
    ],

    countyProcessSection: [
      'Bulloch County tax sales work differently from mortgage foreclosure. The Tax Commissioner issues a fi.fa. (fieri facias / tax execution) for unpaid property taxes. After the property is levied on and the legal advertising runs, it is sold at a tax sale held a few times per year at the Bulloch County Annex on N. Main Street, advertised four consecutive weeks in the Statesboro Herald.',
      'Even after the sale, the original homeowner usually still has rights. Under OCGA § 48-4-40, the owner — or any interest holder — can redeem the property within 12 months of the tax sale by paying the redemption price. The redemption price (OCGA § 48-4-42) equals the tax-sale amount plus a 20% premium for the first year, with later subsequent taxes and costs added on.',
      'After 12 months, the tax-sale purchaser can begin the barment process under OCGA § 48-4-45 — serving notice on the owner of record, occupant, and recorded interest holders, and publishing in the Statesboro Herald for four consecutive weeks. After the barment notice expires, the right to redeem ends and the tax-deed buyer\'s title ripens.',
    ],

    timelineSection: [
      'Here is what the Bulloch tax-lien clock often looks like:',
      'Year 1 — Property taxes go unpaid. The Bulloch County Tax Commissioner sends notices. Penalties and interest start accruing under Georgia law.',
      'Sometime later — A fi.fa. issues, the property is levied, and the tax sale gets advertised in the Statesboro Herald for four weeks before the scheduled sale date.',
      'Tax sale day — The property sells at the Bulloch County Annex by public outcry. A tax deed issues to the buyer. This is not fee-simple title yet.',
      '12 months after the sale — The owner\'s right to redeem under OCGA § 48-4-40 ends, unless extended by certain interest holders.',
      'After 12 months — The tax-deed buyer can serve barment notice (OCGA § 48-4-45) and publish for four weeks. Once the barment notice deadline passes, the redemption right ends permanently and the buyer\'s title ripens.',
      'A pre-tax-sale closing pays off the tax bill and ends the process. A redemption-period closing pays off the tax-deed buyer at the redemption price plus the mortgage payoff, leaving the homeowner with clear title.',
    ],

    howWeHelpSection: [
      'A Bulloch tax-lien situation has its own logistics. Here is what we do.',
      'We figure out where you are in the process. Pre-tax-sale, post-sale within the 12-month redemption window, or post-barment is a different conversation each. The first call usually starts with reading whatever letter you received.',
      'We get the actual numbers. The Bulloch County Tax Commissioner\'s office at 113 N. Main Street can confirm exactly how much is owed and when the next tax sale is. If a sale already happened, the tax-deed buyer\'s redemption price (sale price plus 20% first-year premium per § 48-4-42) is the number that matters.',
      'We close clean. The taxes get paid, any tax-deed buyer gets paid the redemption price plus premium, and any mortgage gets paid off — all from the closing proceeds. The seller walks away with clear title and whatever equity remains.',
      'We pay standard closing costs. No commissions, no listing fees. The Bulloch tax-related sale closes at a local closing attorney.',
      'We refer to a real-estate attorney before contracting. Tax-deed redemption math has nuances that are worth a brief professional consultation. Many Bulloch attorneys offer flat-fee initial consultations.',
    ],

    trustSignalsSection: [
      'A real Bulloch operator knows the Tax Commissioner is at 113 N. Main Street, knows the Statesboro Herald is the legal organ, and knows that Bulloch tax sales happen a few times a year — not strictly monthly. They know the difference between a mortgage foreclosure (controlled by OCGA § 44-14-162) and a tax sale (controlled by OCGA § 48-4). Out-of-state buyers do not.',
      'We have closed Bulloch tax-lien sales involving properties from the Averitt Arts District and Fair Road to Brooklet, Portal, Stilson, Register, and the smaller communities like Hopeulikit, Nevils, Leefield, and Adabelle. Some were pre-sale rescues, some were redemption-period buyouts. Each one had different math; we worked the actual numbers.',
    ],

    faqs: [
      {
        q: 'My Bulloch County tax sale already happened. Do I still own my Statesboro house?',
        a: 'For 12 months after the tax sale, you usually still have the right to redeem under OCGA § 48-4-40 — meaning you (or someone with an interest in the property) can pay the tax-deed buyer the redemption price (OCGA § 48-4-42) and recover the property. Until that right is barred, you keep an ownership interest. Talk to a Georgia real-estate attorney soon — the timeline matters.',
      },
      {
        q: 'What is the redemption price and how is it calculated?',
        a: 'Under OCGA § 48-4-42, the redemption price equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after. Subsequent property taxes paid by the tax-deed buyer and certain costs also get added on. The Bulloch Tax Commissioner\'s office can confirm the exact current figure for a specific property.',
      },
      {
        q: 'Can I sell my Statesboro house if there is a tax lien but no tax sale yet?',
        a: 'Often yes. As long as the tax bill (plus penalties and interest) is paid at closing, the lien gets released and the buyer takes clear title. We coordinate with the Bulloch County Tax Commissioner\'s office to get the exact payoff. The taxes get paid out of the closing proceeds — the seller does not need to come up with the money separately.',
      },
      {
        q: 'What is the barment process and when does it start?',
        a: 'After the 12-month redemption period, the tax-deed buyer can begin barment under OCGA § 48-4-45 — serving notice on the owner of record, occupant, and lienholders, and publishing in the Statesboro Herald for four consecutive weeks. After the barment notice deadline passes, the right of redemption ends. The tax-deed buyer\'s title then ripens to fee-simple.',
      },
      {
        q: 'I am in the redemption period and there is also a mortgage. How does that work at closing?',
        a: 'Both the tax-deed buyer and the mortgage holder have to be paid off at closing for clear title to transfer. The redemption price (sale price plus premium under § 48-4-42) goes to the tax-deed buyer. The mortgage payoff goes to the lender. We coordinate both payments at closing and confirm both amounts before contracting. A real-estate attorney can review the specific calculations.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'springfield-ga'],
  },

  'rincon-ga': {
    title: 'Resolve a Tax Lien on Your Rincon, GA Home — Cash Buyer',
    metaDescription: 'Effingham tax lien on your Rincon house? VP Buys Homes pays cash, clears tax liens at closing, redeems if you are in the 12-month window.',
    h1: 'Selling a Rincon Home With an Effingham County Tax Lien',

    empatheticOpening: [
      'Rincon residents who fall behind on property taxes often discover the issue from a letter — sometimes after the tax bill\'s payment deadline, sometimes after a fi.fa. has issued. The Effingham County Tax Commissioner\'s office is in Springfield, and the tax-related paperwork moves through that office on its own timeline.',
      'Tax-lien situations move slower than mortgage foreclosures, and the rules give homeowners real time to act. But the math gets harder the longer it goes — penalties, interest, and (after a tax sale) a 20% redemption premium add up. Acting earlier is almost always less expensive than acting later.',
    ],

    countyProcessSection: [
      'Effingham County tax sales work differently from mortgage foreclosure. The Tax Commissioner issues a fi.fa. for unpaid property taxes, levies on the property, and advertises a tax sale in the Effingham Herald for four consecutive weeks. The sale itself happens at the Effingham courthouse area on whatever date the Tax Commissioner has scheduled.',
      'After the sale, the original homeowner still has the right to redeem under OCGA § 48-4-40 within 12 months. The redemption price under OCGA § 48-4-42 equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after, plus subsequent taxes paid by the tax-deed buyer and certain costs.',
      'After 12 months, the tax-deed buyer can begin the barment process under OCGA § 48-4-45 — serving notice on the owner of record, occupant, and lienholders, and publishing in the Effingham Herald for four consecutive weeks. Once the barment deadline passes, the right of redemption ends.',
    ],

    timelineSection: [
      'Here is what the Effingham tax-lien clock often looks like for a Rincon homeowner:',
      'Year 1 — Property taxes unpaid. The Effingham County Tax Commissioner sends notices, and penalties and interest start accruing.',
      'A fi.fa. issues. The property is levied. The tax sale gets advertised in the Effingham Herald for four weeks before sale day.',
      'Tax sale day — The property sells. A tax deed issues to the buyer. The original owner still has a right to redeem.',
      '12 months after the sale — Redemption rights under OCGA § 48-4-40 end (with limited exceptions for certain interest holders).',
      'After 12 months — The tax-deed buyer can serve barment notice (OCGA § 48-4-45) and publish for four weeks. Once the barment notice expires, redemption ends permanently.',
      'A pre-sale closing simply pays the back taxes and ends the process. A redemption-period closing pays off the tax-deed buyer plus any mortgage and clears title.',
    ],

    howWeHelpSection: [
      'An Effingham tax-lien situation in Rincon needs a buyer who can navigate Springfield-based paperwork.',
      'We figure out where you stand. Pre-tax-sale, inside the 12-month redemption window, or post-barment all need different handling. The first call typically starts by reading the letter you received.',
      'We get the numbers from the Effingham County Tax Commissioner at 802 S. Laurel Street, Springfield. The exact tax payoff or redemption price is what determines the cash math.',
      'We close clean. Taxes paid, any tax-deed buyer paid the § 48-4-42 redemption price, mortgage paid off — all from the closing proceeds. The Rincon seller walks away with clear title and whatever equity remains.',
      'We pay standard closing costs. No commissions, no listing fees. The Effingham closing attorney handles the recording at 700 N. Pine.',
      'We refer to a real-estate attorney before contracting. Some redemption math gets tricky — for example, when liens are stacked or when the tax-deed buyer\'s notice provisions are imperfect.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows the Tax Commissioner is on S. Laurel Street in Springfield, knows the Effingham Herald is the legal organ, and knows the difference between a mortgage foreclosure and a tax-sale foreclosure. Out-of-state buyers conflate them constantly. The two have different statutes, different timelines, and different math at closing.',
      'We have closed Effingham tax-lien sales across the southern half of the county — Rincon proper, Pineora, Eden, Meldrim, and Faulkville. Some Rincon homeowners had stacked liens (mortgage plus tax). Some were pre-sale rescues. Some were redemption-period buyouts. We worked the actual numbers each time.',
    ],

    faqs: [
      {
        q: 'My Rincon property already went to tax sale. Can I still keep it?',
        a: 'Possibly. Within 12 months of the tax sale, you can redeem the property under OCGA § 48-4-40 by paying the redemption price (sale amount plus 20% first-year premium under § 48-4-42, plus later additions). After 12 months and barment, redemption ends. Talk to a Georgia real-estate attorney about the specific timeline for your sale.',
      },
      {
        q: 'I cannot afford to pay the redemption myself. Can I sell to you so the tax-deed buyer gets paid out of closing?',
        a: 'Yes. Many Rincon redemption-period sellers cannot pay the redemption price out of pocket — but a closing where the buyer (us) pays the tax-deed buyer plus any mortgage works for everyone. The seller walks away with clear title and whatever equity remains. A real-estate attorney can review the specific math.',
      },
      {
        q: 'What if my Effingham tax-deed buyer is hard to reach?',
        a: 'It happens. Some tax-deed buyers are individual investors, some are LLCs, and some are based out of state. The closing attorney can usually locate them through the Effingham County clerk\'s office records. Once located, the attorney coordinates the redemption-price calculation and payoff at closing.',
      },
      {
        q: 'Are property tax sales the same as mortgage foreclosures?',
        a: 'No. Property tax sales (OCGA § 48-4) are run by the County Tax Commissioner for unpaid taxes. Mortgage foreclosures (OCGA § 44-14-162) are run by the lender\'s attorney for unpaid mortgage. Different statutes, different timelines, different paperwork. The two can happen simultaneously on the same property — and both have to be addressed for clear title.',
      },
      {
        q: 'What if the tax-deed buyer has already started the barment process?',
        a: 'You may still be able to redeem before the barment notice deadline expires — that is the entire point of the barment-notice publication. The notice gives you a final window. Once it expires, the right of redemption ends. A Georgia real-estate attorney can read your specific notice and tell you exactly when the deadline falls.',
      },
    ],

    lateralCitySlugs: ['savannah-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'savannah-ga': {
    title: 'Resolve a Tax Lien on Your Savannah, GA Home — Cash Buyer',
    metaDescription: 'Chatham County tax sale at the Savannah Civic Center? Inside the 12-month redemption? VP Buys Homes pays cash and clears the lien at closing.',
    h1: 'Selling a Savannah Home With a Chatham County Tax Lien',

    empatheticOpening: [
      'Chatham County tax sales are different from most Georgia counties. They happen on first Tuesdays at the Savannah Civic Center, not on the courthouse steps. Online registration is required. The system was modernized in 2022 — and many homeowners and even some out-of-state investors are still catching up to the new process.',
      'For a Savannah homeowner with delinquent property taxes, the modernization is mostly about how the sale runs — not what happens before or after. The fi.fa. process, the four-week advertising in the Savannah Morning News, and the 12-month redemption period under OCGA § 48-4-40 all follow the same Georgia rules used statewide.',
    ],

    countyProcessSection: [
      'Chatham County tax sales work differently from mortgage foreclosures. The Tax Commissioner at 222 W. Oglethorpe Avenue issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in the Savannah Morning News for four consecutive weeks. The sale itself runs first Tuesdays from 10 AM at the Savannah Civic Center, Bryan Meeting Room, 301 W. Oglethorpe Avenue. Online bidder registration is required.',
      'After the sale, the original homeowner still has rights. OCGA § 48-4-40 gives a 12-month redemption period. The redemption price under § 48-4-42 equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after, plus any subsequent taxes paid by the tax-deed buyer and certain costs.',
      'After 12 months, the tax-deed buyer can begin barment under § 48-4-45 — serving notice and publishing for four consecutive weeks in the Savannah Morning News. After the barment deadline expires, the right of redemption ends and the tax-deed buyer\'s title ripens.',
      'Note that Chatham\'s mortgage foreclosure sales are still held on the courthouse steps at 133 Montgomery Street — not at the Civic Center. Two different sale types, two different addresses. If you have received a sale notice, read it carefully or take it to a real-estate attorney.',
    ],

    timelineSection: [
      'Here is what the Chatham tax-lien clock often looks like:',
      'Year 1 — Taxes unpaid. The Chatham Tax Commissioner sends notices. Penalties and interest start accruing.',
      'A fi.fa. issues. The property is levied. The tax sale is advertised in the Savannah Morning News for four weeks.',
      'First-Tuesday tax sale day — The property sells at the Savannah Civic Center, Bryan Meeting Room, 10 AM. A tax deed issues to the high bidder. Online bidder registration was required.',
      '12 months after the sale — The redemption right under OCGA § 48-4-40 ends, with limited exceptions.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. Once the barment deadline passes, redemption ends permanently.',
      'A pre-sale closing pays the tax bill and ends the process. A redemption-period closing pays the tax-deed buyer the § 48-4-42 redemption price plus any mortgage payoff — leaving clear title with the seller.',
    ],

    howWeHelpSection: [
      'A Chatham tax-lien situation has its own complications. Here is what we do.',
      'We figure out where you are. Pre-sale, inside the 12-month redemption window, or post-barment is a different math each. The first call typically starts with reading the letter you received.',
      'We get the actual numbers. The Chatham County Tax Commissioner at 222 W. Oglethorpe Avenue can confirm exact tax payoff. The closing attorney can run a title search to identify any tax-deed buyer and the current redemption-price calculation under § 48-4-42.',
      'We close clean. Taxes paid, tax-deed buyer paid the redemption price, mortgage paid off — all from closing proceeds. The Savannah seller walks away with clear title and whatever equity remains.',
      'We handle Historic-District code issues, flood-zone insurance, and complicated chain-of-title situations that often come with Savannah tax-lien properties. We do not back out at the last minute.',
      'We pay standard closing costs. No commissions, no listing fees. We refer to a real-estate attorney for any nuanced redemption-math review.',
    ],

    trustSignalsSection: [
      'A real Chatham operator knows the Tax Commissioner is at 222 W. Oglethorpe Avenue, knows tax sales run at the Savannah Civic Center (not the courthouse), and knows that online bidder registration is required for the tax sale. They know the Savannah Morning News is the legal organ. They know mortgage foreclosure sales are still held at the courthouse on Montgomery Street. Out-of-state buyers conflate the two constantly.',
      'We have closed Chatham tax-lien sales across the county — Historic District, Victorian District, Ardsley Park, Midtown, Pooler, Bloomingdale, Garden City, Wilmington Island, Skidaway Island, Whitemarsh Island, Isle of Hope, Vernonburg, and Pin Point. Some were pre-sale rescues. Some were redemption buyouts on Historic-District properties with code issues that scared off other buyers. We worked the numbers each time.',
    ],

    faqs: [
      {
        q: 'My Savannah property went to a Chatham County tax sale. Do I still own it?',
        a: 'For 12 months after the sale, you usually still have the right to redeem under OCGA § 48-4-40 by paying the tax-deed buyer the redemption price (sale amount plus 20% first-year premium under § 48-4-42, plus subsequent taxes and costs). Until that right is barred, you keep an ownership interest. Talk to a Georgia real-estate attorney as soon as possible.',
      },
      {
        q: 'Is the Chatham tax sale held at the Civic Center the same as a mortgage foreclosure?',
        a: 'No. Tax sales (OCGA § 48-4) are held at the Savannah Civic Center, Bryan Meeting Room, by the County Tax Commissioner. Mortgage foreclosure sales (OCGA § 44-14-162) are held on the courthouse steps at 133 Montgomery Street by the lender\'s attorney. Two different processes, two different statutes, two different addresses — and both can happen on the same property.',
      },
      {
        q: 'What is the redemption price for a Chatham tax-deed property?',
        a: 'Under OCGA § 48-4-42, the redemption price equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after. Subsequent property taxes paid by the tax-deed buyer plus certain costs also get added. The Chatham County Tax Commissioner\'s office and the closing attorney can confirm the current figure.',
      },
      {
        q: 'My Savannah Historic-District property is in tax delinquency and needs major code work. Can you still buy?',
        a: 'Yes. We buy historic homes with deferred maintenance, code violations, outstanding facade-review items, and tax-lien complications. The offer accounts for the actual cost to bring the property current — both code-wise and tax-wise. We do not back out when the title work surfaces unexpected complications.',
      },
      {
        q: 'I rented my Savannah property and the tenant has been paying. Does that affect the tax-sale situation?',
        a: 'The tenant\'s lease may survive both a tax sale and a sale to a cash buyer. Under federal law and Georgia practice, a tenant generally has rights to remain through the lease term in many cases, depending on circumstances. The unpaid tax bill, however, is the property owner\'s responsibility, not the tenant\'s. A real-estate attorney can review the specific facts of the lease and the tax-sale paperwork.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'metter-ga': {
    title: 'Resolve a Tax Lien on Your Metter, GA Home — Cash Buyer',
    metaDescription: 'Candler County tax issues? The annual Metter tax sale runs first Tuesday of October. VP Buys Homes pays cash and clears the lien at closing.',
    h1: 'Selling a Metter Home With a Candler County Tax Lien',

    empatheticOpening: [
      'Candler County does property taxes on its own annual rhythm. The Metter Advertiser publishes notices through the year, but the actual tax sale itself runs once per year — the first Tuesday in October at the Metter courthouse door. That predictability is unusual statewide. It also means the timeline before a Metter homeowner gets to a tax-sale day is longer and more predictable than in counties that schedule sales irregularly.',
      'For a Metter homeowner with unpaid taxes, the calendar is the friend. Most Candler tax issues can be addressed before the October sale if action gets taken in the spring or summer. Once the sale happens, the 12-month redemption period begins.',
    ],

    countyProcessSection: [
      'Candler County tax sales work differently from mortgage foreclosure. The Tax Commissioner issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in the Metter Advertiser for four consecutive weeks. The sale itself happens once a year — the first Tuesday in October — at the Candler County courthouse door, 35 SW Broad Street, between 10 AM and 4 PM.',
      'After the sale, the original homeowner still has rights. OCGA § 48-4-40 gives a 12-month redemption period. The redemption price under § 48-4-42 equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after, plus subsequent taxes paid by the tax-deed buyer and certain costs.',
      'After 12 months, the tax-deed buyer can begin the barment process under § 48-4-45 — serving notice and publishing in the Metter Advertiser for four weeks. After the barment deadline passes, the redemption right ends.',
      'For a Metter homeowner, the once-yearly tax-sale schedule is actually helpful. It gives a predictable runway. If you know your taxes are behind and we are in February, you have several months before the next sale runs.',
    ],

    timelineSection: [
      'A Candler tax-lien clock typically runs like this:',
      'Property taxes go unpaid in the prior tax year. The Candler Tax Commissioner sends notices and assesses penalties and interest.',
      'In the months before October, a fi.fa. issues, the property is levied, and the tax sale gets advertised in the Metter Advertiser for four consecutive weeks before the first Tuesday in October.',
      'October tax sale day — The property sells at the courthouse door in Metter. A tax deed issues. The homeowner still has a 12-month redemption right.',
      '12 months after the sale (the next October) — The redemption right under OCGA § 48-4-40 ends.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. After the barment deadline expires, the right of redemption ends permanently.',
      'A pre-sale closing pays the tax bill and ends the process. A redemption-period closing pays the tax-deed buyer the redemption price plus any mortgage payoff — leaving the seller with clear title.',
    ],

    howWeHelpSection: [
      'A Metter tax-lien situation benefits from a buyer who knows Candler\'s annual schedule.',
      'We figure out where you are in the calendar. Pre-October-sale, post-sale within the 12-month window, or post-barment all have different math.',
      'We get the numbers from the Candler County Tax Commissioner at 25 W. Daniel Street. The exact payoff or redemption price drives the offer math.',
      'We close clean. Taxes paid, tax-deed buyer paid the § 48-4-42 redemption price, any mortgage paid off. The Metter seller walks away with clear title.',
      'We pay standard closing costs. No commissions, no listing fees.',
      'We refer to a real-estate attorney before contracting on redemption-period sales. The math sometimes has wrinkles — for example, if there are stacked liens or interest holders with extended redemption rights.',
    ],

    trustSignalsSection: [
      'A real Candler operator knows the tax sale is once a year — first Tuesday in October at the courthouse door — knows the Metter Advertiser is the legal organ, and knows the Tax Commissioner is on W. Daniel Street. They know the difference between Candler\'s once-yearly tax sales and the more frequent mortgage foreclosure sales. Out-of-state buyers do not.',
      'We work across Candler and the surrounding counties — Bulloch, Emanuel, Toombs, Evans. That gives us a comp set rooted in this rural Southeast Georgia stretch. A Metter tax-lien sale gets priced against actual recent Candler sales — including farmhouses, in-town homes, and rural acreage.',
    ],

    faqs: [
      {
        q: 'When is the Candler County tax sale?',
        a: 'It runs once a year, on the first Tuesday in October, at the courthouse door in Metter — between 10 AM and 4 PM. The sale is advertised in the Metter Advertiser for four consecutive weeks before the date. Other Georgia counties run more frequent tax sales; Candler\'s once-yearly schedule is a local quirk.',
      },
      {
        q: 'My Metter property already went to the October tax sale. Can I still keep it?',
        a: 'Possibly. Within 12 months of the sale, you can redeem under OCGA § 48-4-40 by paying the redemption price (sale amount plus 20% first-year premium under § 48-4-42, plus subsequent taxes and costs). After 12 months and barment, the redemption right ends. Talk to a Georgia real-estate attorney before the deadline.',
      },
      {
        q: 'I cannot afford to pay the redemption myself. Can I sell to you?',
        a: 'Yes. Many Metter redemption-period homeowners cannot pay the redemption price out of pocket — but a closing where we pay the tax-deed buyer plus any mortgage works for everyone. The seller walks away with clear title and whatever equity remains. We need an accurate redemption-price calculation to make the offer.',
      },
      {
        q: 'My taxes are behind but the October sale has not happened yet. Can you help?',
        a: 'Yes — a pre-sale closing that pays the tax bill before the October auction stops the entire process. The taxes get paid out of closing proceeds. The fi.fa. is satisfied, and no tax sale runs. This is generally less expensive for the seller than waiting for the sale and then redeeming.',
      },
      {
        q: 'Can a Candler tax sale happen on a property even if the mortgage is current?',
        a: 'Yes. Property tax delinquency is independent of the mortgage. Even with the mortgage current, unpaid property taxes can lead to a tax sale. Many lenders escrow taxes specifically to prevent this — but if your loan does not escrow, the responsibility falls directly on you. Check with your lender if you are unsure.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'springfield-ga': {
    title: 'Resolve a Tax Lien on Your Springfield, GA Home — Cash Buyer',
    metaDescription: 'Effingham County tax lien on your Springfield home? VP Buys Homes pays cash and clears the lien at closing. Local Effingham buyer.',
    h1: 'Selling a Springfield Home With an Effingham County Tax Lien',

    empatheticOpening: [
      'For Springfield residents, the Effingham County Tax Commissioner is on S. Laurel Street — a few minutes from downtown. The proximity makes the tax-related paperwork a little more visible than it is in counties where the tax office is far from where most residents live. It also makes it easier to walk in and ask questions when a letter arrives.',
      'Most Springfield tax-lien situations start with a fi.fa. notice and a payment deadline. The Tax Commissioner schedules sales as needed rather than on a strict monthly cadence, which gives the homeowner a slightly more flexible timeline than mortgage foreclosure usually allows.',
    ],

    countyProcessSection: [
      'Effingham County tax sales work differently from mortgage foreclosures. The Tax Commissioner at 802 S. Laurel Street issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in the Effingham Herald for four consecutive weeks. The sale runs at the Effingham courthouse area on whatever date the Tax Commissioner has scheduled.',
      'After the sale, the original homeowner still has rights. OCGA § 48-4-40 gives a 12-month redemption window. The redemption price under OCGA § 48-4-42 equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after, plus subsequent taxes and costs.',
      'After 12 months, the tax-deed buyer can begin barment under OCGA § 48-4-45 — serving notice and publishing in the Effingham Herald for four consecutive weeks. After the barment notice deadline passes, the right of redemption ends.',
    ],

    timelineSection: [
      'A typical Effingham tax-lien clock for a Springfield homeowner:',
      'Property taxes go unpaid. The Tax Commissioner sends notices. Penalties and interest accrue.',
      'A fi.fa. issues. The property gets levied. The tax sale is advertised in the Effingham Herald for four consecutive weeks.',
      'Tax sale day — The property sells at the Effingham courthouse area. A tax deed issues to the high bidder.',
      '12 months after the sale — The redemption right under OCGA § 48-4-40 ends.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. Once the barment deadline expires, redemption ends permanently.',
      'A pre-sale closing pays the tax bill. A redemption-period closing pays the tax-deed buyer plus any mortgage. Both result in clear title for the seller.',
    ],

    howWeHelpSection: [
      'A Springfield tax-lien situation benefits from a buyer who can walk to the Tax Commissioner\'s office.',
      'We figure out where you stand. Pre-sale, in the redemption window, or post-barment is a different math each time. The first call usually starts with reading the letter.',
      'We get the numbers. The Effingham County Tax Commissioner at 802 S. Laurel can confirm exact payoff. A title search through the closing attorney can identify any tax-deed buyer and the redemption price.',
      'We close in Springfield. The deed records at 700 N. Pine — a few blocks from the Tax Commissioner. Local recording is fast.',
      'We pay all back taxes and any tax-deed buyer\'s redemption price plus the mortgage at closing — all from the closing proceeds. The Springfield seller walks away with clear title.',
      'We refer to a real-estate attorney before contracting. Some redemption math has wrinkles worth professional review.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows the Tax Commissioner is on S. Laurel Street, knows the Effingham Herald is the legal organ, and knows the difference between mortgage foreclosure (OCGA § 44-14-162) and tax-sale foreclosure (OCGA § 48-4). They have walked into 802 S. Laurel and asked specific questions about specific files. Out-of-state buyers have not.',
      'We have closed Effingham tax-lien sales across the county — in Springfield itself and in Rincon and the surrounding communities like Egypt and Shawnee. Some Springfield tax-lien sellers had stacked liens. Some had redemption windows running. We worked the actual numbers each time.',
    ],

    faqs: [
      {
        q: 'My Springfield property got a fi.fa. for unpaid taxes. What does that mean?',
        a: 'A fi.fa. (fieri facias / tax execution) is the Tax Commissioner\'s formal step that allows a tax sale to be set up. It does not mean the sale is imminent — but the clock is now running. Penalties, interest, and tax-sale advertising costs continue to accrue. Talk to the Effingham Tax Commissioner\'s office or a real-estate attorney about the specific timeline.',
      },
      {
        q: 'Can I sell my Springfield house if there is a tax lien but no tax sale yet?',
        a: 'Often yes. As long as the tax bill (plus penalties and interest) is paid at closing, the lien is released and the buyer takes clear title. The closing attorney coordinates with the Tax Commissioner\'s office to get the exact payoff. The taxes are paid from the closing proceeds.',
      },
      {
        q: 'My Springfield tax sale already happened. What now?',
        a: 'Within 12 months of the sale, you usually have the right to redeem under OCGA § 48-4-40. The redemption price (OCGA § 48-4-42) equals the sale amount plus a 20% first-year premium plus subsequent additions. Talk to a Georgia real-estate attorney about the specific timeline and cost for your case — the deadline matters.',
      },
      {
        q: 'I am behind on property taxes and the mortgage. How do both get handled?',
        a: 'Both have to be paid at closing for clear title. The taxes go to the Effingham Tax Commissioner. The mortgage payoff goes to the lender. We coordinate both during the contract period. A real-estate attorney can help if either situation has additional complications.',
      },
      {
        q: 'How is barment different from foreclosure?',
        a: 'Barment is the second step of a tax-sale process — it is what the tax-deed buyer does after the 12-month redemption window has closed. The tax-deed buyer serves notice on the original owner and any lienholders, publishes in the Effingham Herald for four weeks, and after the notice deadline, the right of redemption ends. Foreclosure (OCGA § 44-14-162) is a separate process for mortgage default.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'savannah-ga', 'statesboro-ga'],
  },

  'swainsboro-ga': {
    title: 'Resolve a Tax Lien on Your Swainsboro Home — Cash Buyer',
    metaDescription: 'Emanuel County tax lien on your Swainsboro home? VP Buys Homes pays cash and clears the lien at closing. Local Emanuel buyer.',
    h1: 'Selling a Swainsboro Home With an Emanuel County Tax Lien',

    empatheticOpening: [
      'Emanuel County\'s tax sales tend to happen on irregular Tuesdays at the courthouse steps in Swainsboro — recent sales have included dates in March and November. The Tax Commissioner schedules them as needed rather than on a strict monthly calendar. The Forest-Blade publishes the legal notices.',
      'For a Swainsboro homeowner, the irregular-Tuesday schedule means the timeline is harder to predict without checking with the Tax Commissioner directly. Acting before a sale is set up is usually less expensive than acting after — a redemption-period closing comes with a 20% first-year premium that adds up.',
    ],

    countyProcessSection: [
      'Emanuel County tax sales follow Georgia\'s statewide framework. The Tax Commissioner issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in the Forest-Blade for four consecutive weeks. The sale runs on a scheduled Tuesday at 10 AM on the courthouse steps at 125 S. Main Street, Swainsboro.',
      'After the sale, the original homeowner has 12 months to redeem under OCGA § 48-4-40. The redemption price under § 48-4-42 equals the tax-sale amount plus a 20% premium for the first year and 10% for each year after, plus subsequent taxes paid by the tax-deed buyer and certain costs.',
      'After 12 months, the tax-deed buyer can begin barment under § 48-4-45 — serving notice and publishing in the Forest-Blade for four consecutive weeks. After the barment notice deadline expires, the redemption right ends and the tax-deed buyer\'s title ripens to fee-simple.',
    ],

    timelineSection: [
      'An Emanuel tax-lien clock typically runs like this:',
      'Property taxes unpaid. The Tax Commissioner sends notices, assesses penalties and interest.',
      'A fi.fa. issues. Levy. The tax sale is advertised in the Forest-Blade for four weeks before the scheduled Tuesday.',
      'Tax sale day — The property sells on the courthouse steps in Swainsboro. A tax deed issues. The original owner still has 12 months to redeem.',
      '12 months after the sale — The redemption right under OCGA § 48-4-40 ends.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. After the barment deadline, the redemption right ends permanently.',
      'A pre-sale closing pays the tax bill and stops the process. A redemption-period closing pays the tax-deed buyer plus any mortgage and clears title.',
    ],

    howWeHelpSection: [
      'A Swainsboro tax-lien situation benefits from a buyer who can navigate Emanuel\'s irregular-sale calendar.',
      'We figure out where you are in the timeline. Pre-sale, mid-redemption, or post-barment all need different paperwork.',
      'We get the numbers from the Emanuel County Tax Commissioner at 223 W. Moring Street. The exact tax payoff or redemption price drives the offer math.',
      'We close in Swainsboro. The deed records at the Emanuel County clerk\'s office at 125 S. Main. Local recording is fast.',
      'We pay back taxes and any tax-deed buyer\'s redemption price plus the mortgage — all out of closing proceeds. The Swainsboro seller walks away with clear title.',
      'We refer to a real-estate attorney before contracting. Tax-sale math sometimes has wrinkles worth a quick professional review.',
    ],

    trustSignalsSection: [
      'A real Emanuel operator knows the Tax Commissioner is at 223 W. Moring Street, knows the Forest-Blade is the legal organ, and knows that Emanuel tax sales run on irregular Tuesdays rather than strict first-Tuesdays. They know the difference between mortgage foreclosure and tax-sale foreclosure. Out-of-state buyers do not.',
      'We work across Emanuel and the surrounding Middle Judicial Circuit counties — Candler, Toombs, Jefferson, Treutlen, Washington — and into Bulloch and Effingham. That gives us a rural Southeast Georgia comp set. A Swainsboro tax-lien sale gets priced against actual Emanuel comparables.',
    ],

    faqs: [
      {
        q: 'How do I find out when the next Emanuel tax sale is scheduled?',
        a: 'Call the Emanuel County Tax Commissioner\'s office at 223 W. Moring Street, Swainsboro. Sales are scheduled as needed on Tuesdays at 10 AM and advertised in the Forest-Blade for four consecutive weeks before the date. Recent Emanuel sales have included dates in March and November — there is no fixed monthly schedule.',
      },
      {
        q: 'My Swainsboro property already went to a tax sale. Can I still keep it?',
        a: 'Possibly. Within 12 months of the sale, you can redeem under OCGA § 48-4-40 by paying the redemption price under OCGA § 48-4-42. After 12 months and the barment process, the right ends. Talk to a Georgia real-estate attorney about the specific timeline for your case.',
      },
      {
        q: 'I cannot afford to redeem myself. Can I sell so the tax-deed buyer gets paid out of closing?',
        a: 'Yes. Many Emanuel redemption-period sellers cannot pay the redemption price out of pocket — but a closing where we pay the tax-deed buyer plus any mortgage works for everyone. The seller walks away with clear title and whatever equity remains. We need an accurate redemption-price calculation before contracting.',
      },
      {
        q: 'Are property tax sales the same thing as mortgage foreclosures?',
        a: 'No. Property tax sales (OCGA § 48-4) are run by the Emanuel Tax Commissioner. Mortgage foreclosures (OCGA § 44-14-162) are run by the lender\'s attorney. Different statutes, different timelines, different math at closing. Both can happen on the same property — and both have to be addressed for clear title.',
      },
      {
        q: 'My Swainsboro property has a USDA Rural Development mortgage. Does that affect tax-sale handling?',
        a: 'It can. Some federal-loan programs have specific procedures and protections for borrowers facing tax issues. The USDA servicer is sometimes willing to advance funds to pay back taxes when foreclosure looks imminent. A USDA-experienced attorney or the USDA RD office can advise on your specific loan.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'metter-ga'],
  },

  'claxton-ga': {
    title: 'Resolve a Tax Lien on Your Claxton, GA Home — Cash Buyer',
    metaDescription: 'Evans County tax delinquency? VP Buys Homes pays cash and clears the lien at closing. Local Atlantic Circuit cash buyer.',
    h1: 'Selling a Claxton Home With an Evans County Tax Lien',

    empatheticOpening: [
      'Evans County is small enough that the Tax Commissioner\'s office, the courthouse, and the local closing attorney are usually within a few blocks of each other in Claxton. That makes navigating tax-lien situations more direct than in larger counties — but it also means the buyer pool is small and informal solutions can stall easily.',
      'Most Claxton tax-lien situations come down to a single question: when is the next sale, and what is the actual payoff. The Evans Tax Commissioner does not publish the schedule online — the schedule has to be confirmed in person or by phone. That is the first call.',
    ],

    countyProcessSection: [
      'Evans County tax sales follow Georgia\'s statewide framework. The Tax Commissioner issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in the Claxton Enterprise for four consecutive weeks. The sale runs on a scheduled date at the Evans County Superior Court courthouse, 123 West Main Street, Claxton.',
      'After the tax-sale gavel falls, the Claxton homeowner is not necessarily out. OCGA § 48-4-40 gives a 12-month right to redeem the property by paying the tax-deed buyer the redemption price. That price is set by OCGA § 48-4-42 — the original sale amount, plus 20% for the first year and 10% per year thereafter, plus any later taxes the buyer has paid and certain costs.',
      'After 12 months, the tax-deed buyer can begin barment under § 48-4-45 — serving notice and publishing in the Claxton Enterprise for four consecutive weeks. After the barment notice expires, the redemption right ends.',
    ],

    timelineSection: [
      'An Evans County tax-lien clock typically runs like this:',
      'Property taxes unpaid. The Tax Commissioner at 3 Freeman Street, Suite 4 sends notices. Penalties and interest accrue.',
      'A fi.fa. issues. The property is levied. The tax sale is advertised in the Claxton Enterprise for four consecutive weeks.',
      'Tax sale day — The property sells at the Evans Superior Court courthouse. A tax deed issues to the buyer.',
      '12 months after the sale — The redemption right under OCGA § 48-4-40 ends.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. After the barment deadline expires, the redemption right ends permanently.',
      'A closing that happens before the Evans tax sale just pays the tax bill out of proceeds. A closing during the redemption window pays both the tax-deed buyer\'s redemption price and any mortgage. Either way, the Claxton seller walks away with clear title.',
    ],

    howWeHelpSection: [
      'A Claxton tax-lien situation benefits from a buyer who can pick up the phone with the Evans Tax Commissioner.',
      'We figure out where you are. Pre-sale, redemption window, or post-barment all need different paperwork. The first call usually starts with reading the letter you received.',
      'We get the numbers. The Evans Tax Commissioner at 3 Freeman Street can confirm exact tax payoff. The closing attorney runs a title search to identify any tax-deed buyer and the redemption price.',
      'We close in Claxton. The deed records locally. The closing attorney handles the trip to whichever courthouse address handles the recording.',
      'We pay back taxes plus any tax-deed buyer\'s redemption price plus mortgage payoff — all from closing proceeds. The Claxton seller walks away with clear title.',
      'We refer to a real-estate attorney before contracting. Some Atlantic Circuit recording quirks are worth a brief professional review.',
    ],

    trustSignalsSection: [
      'A real Evans operator knows the Tax Commissioner is at 3 Freeman Street, Suite 4, knows the Claxton Enterprise is the legal organ, and knows that Evans tax-sale schedules are not posted online — they have to be confirmed by phone or in person. Out-of-state buyers learn that after they have already lost time looking online for a schedule that does not exist there.',
      'We have closed tax-lien sales across Evans County — in Claxton, Hagan, Bellville, Daisy, and Manassas. We also work the surrounding counties. A Claxton tax-lien sale gets priced against actual Evans comparables, including rural and farmhouse properties that most metro-area buyers would not know how to evaluate.',
    ],

    faqs: [
      {
        q: 'How do I find out when the next Evans County tax sale is?',
        a: 'Call the Evans County Tax Commissioner\'s office at 3 Freeman Street, Suite 4, Claxton. The schedule is not posted online — it has to be confirmed by phone or by walking in. Sales get advertised in the Claxton Enterprise for four consecutive weeks before the scheduled date.',
      },
      {
        q: 'My Claxton property already went to tax sale. Can I still keep it?',
        a: 'Possibly. Within 12 months of the sale, you can redeem under OCGA § 48-4-40 by paying the redemption price under § 48-4-42. After 12 months and barment, the right ends. The exact deadline depends on your specific tax-sale date. Talk to a Georgia real-estate attorney about the timeline.',
      },
      {
        q: 'My Evans County property is rural with agricultural acreage. Does that matter for tax-lien purposes?',
        a: 'The tax-sale process applies the same way regardless of property type — but the redemption math, comp set, and offer all account for the actual property. Some agricultural properties have specific tax-assessment categories (covenant programs) that affect the underlying tax bill. A real-estate attorney can advise on specific facts.',
      },
      {
        q: 'I have not paid property tax in three years. Is the redemption process even available now?',
        a: 'It depends. If a tax sale has already happened more than 12 months ago and barment has been completed, the right of redemption may have ended. If the tax sale is more recent, redemption may still be possible. The exact answer requires looking at the specific Evans County records. A real-estate attorney can run a title search and confirm.',
      },
      {
        q: 'Are property tax sales the same as mortgage foreclosures?',
        a: 'No. Tax sales (OCGA § 48-4) are run by the Evans Tax Commissioner for unpaid property taxes. Mortgage foreclosures (OCGA § 44-14-162) are run by the lender\'s attorney for unpaid mortgage. Different statutes, different timelines. Both can run on the same property and both have to be cleared for title to transfer.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'vidalia-ga': {
    title: 'Resolve a Tax Lien on Your Vidalia Home — Toombs Cash',
    metaDescription: 'Toombs County tax issues? Delinquent list is in-office only at the Lyons courthouse. VP Buys Homes pays cash and clears liens at closing.',
    h1: 'Selling a Vidalia Home With a Toombs County Tax Lien',

    empatheticOpening: [
      'Toombs County does property taxes a little differently than most Georgia counties. The delinquent tax-sale list is published "in office only" — homeowners and buyers wanting to see what is on the upcoming list have to walk into the Tax Commissioner\'s office at the courthouse in Lyons. There is no online list.',
      'For a Vidalia homeowner, that means the only reliable way to know whether your property is on a coming sale is to ask in person or by phone. It is also a quirk most out-of-state cash-buying outfits learn about only after they realize their normal online research methods do not apply here.',
    ],

    countyProcessSection: [
      'Toombs County tax sales follow Georgia\'s statewide framework. The Tax Commissioner at 100 Courthouse Square, Suite 169, Lyons issues a fi.fa. for unpaid property taxes, levies on the property, and advertises the tax sale in The Advance for four consecutive weeks. The sale runs on a scheduled Tuesday at 10 AM on the Toombs County courthouse steps in Lyons.',
      'For 12 months after a Toombs tax sale, the original Vidalia or Lyons owner can still redeem the property under OCGA § 48-4-40 — and OCGA § 48-4-42 sets the math. Redemption requires paying the tax-deed buyer the original bid plus a 20% premium in year one (10% per year after that), plus any taxes the buyer has since paid and the related costs.',
      'After 12 months, the tax-deed buyer can begin barment under § 48-4-45 — serving notice and publishing in The Advance for four consecutive weeks. After the barment notice expires, the redemption right ends.',
      'The "in-office only" list is a Toombs-specific quirk: many other Georgia counties post delinquent lists online. Toombs does not. A homeowner who wants to confirm whether their property is on an upcoming sale list has to call or visit the Lyons office.',
    ],

    timelineSection: [
      'A Toombs County tax-lien clock typically runs like this:',
      'Property taxes unpaid. The Toombs Tax Commissioner sends notices. Penalties and interest accrue.',
      'A fi.fa. issues. The property is levied. The tax sale is advertised in The Advance for four consecutive weeks. The list of properties for the upcoming sale is published "in office only" at the Lyons courthouse.',
      'Tax sale day — The property sells on the courthouse steps in Lyons. A tax deed issues to the high bidder.',
      '12 months after the sale — The redemption right under OCGA § 48-4-40 ends.',
      'After 12 months — The tax-deed buyer can serve barment notice (§ 48-4-45) and publish for four weeks. After the barment deadline, the right of redemption ends permanently.',
      'A pre-sale closing pays the tax bill. A redemption-period closing pays the tax-deed buyer plus any mortgage. Both leave the seller with clear title.',
    ],

    howWeHelpSection: [
      'A Vidalia tax-lien situation benefits from a buyer who is willing to walk into the Lyons courthouse.',
      'We figure out where you stand. Pre-sale, redemption-window, or post-barment is a different math each.',
      'We get the in-office-only numbers. We call or visit the Toombs County Tax Commissioner at 100 Courthouse Square, Suite 169, Lyons. The exact tax payoff or redemption price drives the offer.',
      'We close at a Lyons closing attorney. The deed records at the Toombs County clerk\'s office at 100 Courthouse Square. Local recording is fast.',
      'We pay back taxes plus any tax-deed buyer\'s redemption price plus mortgage payoff — all from closing proceeds. The Vidalia seller walks away with clear title.',
      'We refer to a real-estate attorney before contracting on redemption-period sales. The math sometimes has wrinkles worth a brief professional consultation.',
    ],

    trustSignalsSection: [
      'A real Toombs operator knows that the delinquent tax-sale list is in-office only at the Lyons courthouse — not posted online. They know the courthouse is in Lyons, not Vidalia. They know The Advance is the legal organ. They know the difference between mortgage foreclosure and tax-sale foreclosure. Out-of-state buyers learn the in-office-only rule only after spending days searching for a list online.',
      'We work across Toombs and the surrounding counties — Emanuel (Swainsboro), Candler (Metter), Evans (Claxton). That gives us a comp set rooted in this stretch of Southeast Georgia, capturing in-town, rural, and agricultural property economics. A Vidalia tax-lien sale gets priced against actual Toombs comparables.',
    ],

    faqs: [
      {
        q: 'Where can I see the Toombs County delinquent tax-sale list?',
        a: 'It is published "in office only" at the Toombs County Tax Commissioner\'s office at 100 Courthouse Square, Suite 169, Lyons. There is no online list. Homeowners or buyers who want to see whether their property (or a property of interest) is on an upcoming list have to call the office or visit in person. This is a Toombs-specific practice.',
      },
      {
        q: 'My Vidalia property already went to tax sale. Can I still keep it?',
        a: 'Possibly. Within 12 months of the sale, you have a right to redeem under OCGA § 48-4-40 by paying the redemption price under § 48-4-42. After 12 months and barment under § 48-4-45, the right ends. Talk to a Georgia real-estate attorney about the timeline for your specific case.',
      },
      {
        q: 'I cannot pay the redemption price myself. Can I sell to you?',
        a: 'Yes. Many redemption-period sellers cannot pay the redemption price out of pocket — but a closing where we pay the tax-deed buyer plus any mortgage works for both sides. The seller walks away with clear title and whatever equity remains. We need an accurate redemption-price calculation, which requires the Tax Commissioner\'s office and the closing attorney\'s title search.',
      },
      {
        q: 'My Vidalia property includes onion-farming acreage. Does that affect the tax-lien process?',
        a: 'The tax-sale process applies the same way regardless of property type. Some agricultural properties qualify for specific tax-assessment categories (covenant programs) that affect the underlying tax bill. The Toombs Tax Commissioner can confirm what category your property falls under. A real-estate attorney can advise on related issues.',
      },
      {
        q: 'My back property tax bill includes prior years and current year. Will all of it be paid at closing?',
        a: 'Yes — for clear title to transfer, all back taxes that constitute liens on the property have to be paid at closing. The Toombs Tax Commissioner\'s office provides an exact payoff figure that includes all past-due years, penalties, and interest. The taxes are paid out of closing proceeds.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'claxton-ga'],
  },
}
