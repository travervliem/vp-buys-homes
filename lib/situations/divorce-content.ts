import type { SituationContent } from './types'

// Per-pairing content for the Divorce situation.
// Voice rules:
// - 7th-8th grade reading level
// - No legal/tax advice — educate, redirect to attorney
// - No "community property" language (Georgia is equitable distribution)
// - No specific timelines like "31-day uncontested" (UNVERIFIED in Phase 0)
// - No predatory urgency, no fabricated stats or testimonials

export const DIVORCE_CONTENT: SituationContent = {
  'statesboro-ga': {
    title: 'Sell Your House During Divorce in Statesboro, GA',
    metaDescription: 'Bulloch County divorce sale? VP Buys Homes works with both spouses\' attorneys, funds clean payoffs, and closes around your court calendar. No fees.',
    h1: 'Selling the Marital Home Through a Bulloch County Divorce',

    empatheticOpening: [
      'Selling a house during a divorce is rarely about the house. It is about getting two people to a place where each can move forward without the property tying them together for another year.',
      'Most Statesboro divorces involve a marital home that is owned by both spouses, financed jointly, and tied up in a settlement that nobody has finished writing yet. The legal process at the Bulloch County Superior Court works the same whether you are amicable or contested. The trick is timing the sale to whatever the court order says — and not before.',
    ],

    countyProcessSection: [
      'Bulloch County divorces are filed at the Bulloch County Superior Court at 20 Siebald Street, Statesboro. Bulloch is part of the Ogeechee Judicial Circuit, which also covers Effingham, Jenkins, and Screven counties. The four-judge bench rotates among those counties, so a Bulloch case may be assigned to any judge in the circuit.',
      'Georgia is an equitable distribution state. That is different from "community property" — equitable distribution means the marital home is divided fairly based on each spouse\'s contributions, conduct, and needs. Fair does not always mean fifty-fifty. The judge or the settlement agreement decides.',
      'The marital home is usually treated as marital property even if only one spouse is on the deed. Statesboro title companies almost always require both spouses to sign at closing. If the divorce is pending, the temporary order or any standing order issued by the Superior Court may also limit how the property can be sold. Read the order before signing a contract — or have your divorce attorney read it.',
    ],

    timelineSection: [
      'The divorce-and-house timeline in Bulloch County usually moves like this:',
      'A petition is filed at 20 Siebald Street. Georgia\'s six-month residency requirement (OCGA § 19-5-2) has to be met by at least one spouse before filing.',
      'The other spouse is served. They have 30 days to file an answer.',
      'A temporary hearing may set rules for the marital home — who lives there, who pays the mortgage, whether either spouse can sell or mortgage the property while the case is pending.',
      'Discovery, mediation, or trial follows. Most Bulloch contested cases settle before trial. The pace varies by judge calendar and case complexity.',
      'A final divorce decree gets entered. The decree controls how the marital home is divided — sale, refinance, deed transfer, or one spouse buying the other out.',
      'When the decree says "sell the house," the closing has to match the decree language. The proceeds get split as the decree directs.',
    ],

    howWeHelpSection: [
      'A Bulloch divorce sale is a different kind of transaction than a traditional listing. Here is what we do.',
      'We work with both attorneys. The decree, settlement agreement, or temporary order has to authorize the sale. We confirm with both sides\' family-law counsel before we sign a contract — not after.',
      'We fund a clean mortgage payoff. Neither spouse should walk away from a divorce still owing on the marital home. We pay off the existing mortgage at closing so the housing debt ends with the marriage.',
      'We coordinate with the closing attorney on signature logistics. Both spouses can sign in person, separately by appointment, or remotely with a power of attorney. We arrange whichever fits.',
      'We pay standard closing costs. No commissions, no listing fees. The proceeds get split as the decree directs — we do not interfere with that math.',
      'We do not take sides. We work with whoever has authority under the decree or order. If one spouse wants to sell and the other does not, that is a fight to have with the divorce attorney, not with us.',
    ],

    trustSignalsSection: [
      'A real Statesboro operator knows that Bulloch divorces are filed at 20 Siebald Street, that Bulloch is part of the Ogeechee Judicial Circuit, and that any sale during a pending case has to be authorized by the court. Out-of-state cash-buying outfits rarely understand the difference between a temporary order, a settlement agreement, and a final decree — until they have already signed a contract that none of them allows.',
      'We have closed Bulloch divorce sales involving properties from the Averitt Arts District and Fair Road to Brooklet, Portal, Stilson, Register, and the smaller communities like Hopeulikit, Nevils, and Leefield. Family-law attorneys in Statesboro know us. That matters when the closing has to fit a court-ordered timeline.',
    ],

    faqs: [
      {
        q: 'Can my spouse block the sale of our Statesboro house?',
        a: 'Sometimes, depending on the divorce status. Even when only one spouse is on the deed, Georgia title companies usually require both spouses to sign at closing if the marriage is intact or the case is pending. If the final decree assigns sole authority to one spouse, that spouse can usually sign alone — but the decree language has to be clear. Ask your divorce attorney before listing.',
      },
      {
        q: 'How are sale proceeds split after a Bulloch County divorce?',
        a: 'Georgia uses equitable distribution, which is fair — not necessarily fifty-fifty. The settlement agreement or final decree controls how the closing check is divided. Some splits depend on contributions, conduct during the marriage, or specific assets each spouse already has. Your divorce attorney instructs the closing attorney on how to write the checks.',
      },
      {
        q: 'We are not divorced yet. Can we still sell the marital home?',
        a: 'Often yes, with both spouses\' consent and within whatever the temporary court order or standing order allows. Some Bulloch judges include language in pre-trial orders that restricts how marital assets can be sold or mortgaged. A divorce attorney can read your specific order and tell you what is permitted.',
      },
      {
        q: 'What if one spouse refuses to cooperate with the sale?',
        a: 'That is a divorce-court issue, not a closing-table issue. A non-cooperating spouse can sometimes be compelled by court order to sign or to allow a sale. Sometimes a final decree assigns the property to one spouse with authority to sell. We do not pressure either spouse — that is what divorce attorneys are for.',
      },
      {
        q: 'Will a sale during my Bulloch County divorce affect alimony or child support?',
        a: 'Possibly. Sale proceeds counted as marital assets get distributed under the decree. The act of selling may also affect future support calculations or asset-division arguments. Talk to your divorce attorney before selling. We focus on the sale itself; the divorce-finance implications are between you and your lawyer.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'springfield-ga'],
  },

  'rincon-ga': {
    title: 'Sell House During Divorce in Rincon, GA — Cash Buyer',
    metaDescription: 'Effingham County divorce sale? Rincon residents file at the Springfield courthouse. We work with both attorneys, close clean. No fees, no repairs.',
    h1: 'Selling Your Rincon Marital Home Through Effingham Divorce',

    empatheticOpening: [
      'Most Rincon divorces involve a household that was built around two paychecks, a Savannah commute, and a mortgage that fit the math at the time. When the math changes, the house often becomes the asset that has to be sold first.',
      'The legal process happens at the Effingham County Superior Court in Springfield — fifteen minutes north of Rincon. That distance is the first thing many Rincon couples discover during a divorce: the courthouse where everything gets filed and recorded is not in their hometown.',
    ],

    countyProcessSection: [
      'Effingham County divorces file at 700 N. Pine Street, Springfield — the Effingham County seat. Effingham is part of the Ogeechee Judicial Circuit, the same four-judge bench that hears Bulloch, Jenkins, and Screven cases. A Rincon couple\'s case can be assigned to any of those judges.',
      'Georgia is an equitable distribution state. The marital home gets divided fairly based on each spouse\'s contributions, conduct, and need — fair, not always equal. The decree or settlement agreement spells out exactly what happens to the house and the proceeds.',
      'Rincon couples often discover that an Effingham marital home is treated as marital property even when only one spouse is on the deed. Most title companies require both spouses to sign at closing while the marriage is intact or the case is pending. A standing order or temporary order from the Springfield Superior Court can also limit what either spouse can do with the house mid-case.',
    ],

    timelineSection: [
      'A Rincon divorce-and-house timeline tends to go this way:',
      'A divorce petition is filed in Springfield. Georgia\'s six-month residency requirement (OCGA § 19-5-2) has to be met. Many Rincon recent-arrivals from Florida or out of state need to wait this requirement out before filing here.',
      'The other spouse is served. They have 30 days to file an answer.',
      'A temporary hearing may set ground rules — who lives in the Rincon home, who pays the mortgage, whether either spouse can sell or refinance during the case.',
      'The case proceeds through discovery, mediation, or contested hearings. Most settle without a full trial.',
      'A final decree is entered. The decree controls the marital home — sell, refinance, deed transfer, or buyout.',
      'When the decree says "sell," the closing has to match the decree exactly. Proceeds split per the decree.',
    ],

    howWeHelpSection: [
      'A Rincon divorce sale has its own logistics. Here is how we approach it.',
      'We coordinate with both attorneys. The decree or settlement agreement has to authorize the sale. We confirm with the family-law counsel for both sides before signing a contract.',
      'We close in Springfield. The recording of the deed happens at the Effingham County clerk\'s office, 700 N. Pine. Our closing attorney works there regularly enough to know the recording desk turnaround.',
      'We fund a clean mortgage payoff so neither spouse keeps housing debt after the divorce.',
      'We arrange remote signing if one spouse has already moved out of Rincon for work or school. Effingham allows mail-away closings with proper notarization.',
      'We pay standard closing costs. No commissions, no listing fees. The split between spouses is whatever the decree says — we do not get involved in that.',
    ],

    trustSignalsSection: [
      'The way to spot a real Effingham operator is to ask where the courthouse is. The answer is Springfield, not Rincon. Ask which paper the divorce-related legal notices run in (when they are public notices) — the Effingham Herald. Ask which judicial circuit Effingham belongs to — the Ogeechee.',
      'We have bought houses across south Effingham County, including Rincon proper, Pineora, Eden, Meldrim, and Faulkville. We also work in nearby Savannah and Statesboro, which gives us perspective on whether a Rincon home should be priced as a Savannah-bedroom-community property or as a standalone Rincon property. Those are different markets, and a decree-driven sale needs the right comp set.',
    ],

    faqs: [
      {
        q: 'Why does my Rincon divorce paperwork mention Springfield?',
        a: 'Because the Effingham County courthouse is in Springfield, the county seat. All Effingham divorce filings, deed transfers, and probate matters go through 700 N. Pine Street. Rincon is the county\'s population center, but Springfield is where the Superior Court sits. That is normal — not an error in the paperwork.',
      },
      {
        q: 'My spouse has moved to Pooler. Can the sale still close in Effingham?',
        a: 'Yes. The closing happens where the property is — in Effingham County. The spouse in Pooler can sign at the closing attorney\'s Effingham office, sign at a Chatham notary and have papers couriered, or use a power of attorney. We work with whichever option fits the spouse\'s schedule.',
      },
      {
        q: 'We just bought our Rincon house two years ago. Is there equity to split after a sale?',
        a: 'Possibly, but it depends. After the mortgage payoff, closing costs, and any liens are paid, what is left is the equity. Many recent Effingham buyers have less equity than they expect because of points paid, escrows, and the speed of price changes. We share the math before any contract gets signed.',
      },
      {
        q: 'What happens to the children\'s school district if we sell during the school year?',
        a: 'That is a custody and parenting-plan question, not a real-estate question. Effingham County Schools have specific transfer rules. The divorce parenting plan usually addresses where each child goes to school. A family-law attorney is the right person to ask before timing the sale.',
      },
      {
        q: 'My spouse is military and stationed at Hunter Army Airfield. Does that change the divorce timeline?',
        a: 'It can. Military spouses have specific protections under federal law (Servicemembers Civil Relief Act) that can pause certain proceedings. Georgia\'s six-month residency rule may also be different for active-duty spouses. A military-divorce attorney in Savannah or Statesboro can advise on the specific timing.',
      },
    ],

    lateralCitySlugs: ['savannah-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'savannah-ga': {
    title: 'Sell Your House During Divorce in Savannah, GA',
    metaDescription: 'Chatham County divorce sale? VP Buys Homes coordinates with both attorneys, handles military and historic-property cases. Cash close, no fees.',
    h1: 'Selling the Marital Home Through a Chatham County Divorce',

    empatheticOpening: [
      'A divorce in Chatham County rarely happens in isolation. There is often a job, a base, a tourism business, or a multi-generational property in the picture. The marital home tends to carry more than one decision at once.',
      'Whether your file involves a historic-district property with deferred maintenance, a Hunter Army Airfield military divorce, or a Pooler subdivision with a stretch mortgage, the legal process at the Chatham County Superior Court works the same. The sale logistics — who can sign, when the closing fits the court calendar, how the proceeds get split — are what differ from a normal listing.',
    ],

    countyProcessSection: [
      'Chatham County divorces file at the Chatham County Superior Court, 133 Montgomery Street, Savannah. Chatham is part of the Eastern Judicial Circuit, served by a six-judge bench that takes a heavier divorce caseload than most Southeast Georgia counties.',
      'Georgia is an equitable distribution state. The marital home — including most Savannah Historic-District properties even when one spouse owned them before marriage — usually gets treated as marital property if marital funds went into mortgage payments, repairs, or improvements. The court divides fairly, not always fifty-fifty.',
      'Most Chatham divorces include a temporary order from the Superior Court that addresses who lives in the marital home, who pays the mortgage, and whether either spouse can sell or refinance during the case. Some judges issue standing orders that automatically restrict asset transfers in pending cases. Read your order — or have your divorce attorney read it — before signing a sale contract.',
    ],

    timelineSection: [
      'A typical Chatham divorce-and-house timeline looks like this:',
      'A petition is filed at 133 Montgomery Street. Georgia\'s six-month residency (OCGA § 19-5-2) applies to Chatham filings.',
      'The other spouse is served. They have 30 days to answer the petition.',
      'A temporary hearing — often within a few weeks — sets the rules for the marital home and any minor children.',
      'Discovery and mediation usually run for several months. Many Chatham contested cases mediate before reaching trial.',
      'A final decree is entered. The decree spells out what happens to the marital home: sale, refinance, deed transfer, or buyout.',
      'If the decree says sell, the closing must match the decree language. Proceeds split per the decree.',
    ],

    howWeHelpSection: [
      'Chatham divorces vary widely — historic property, suburban Pooler new-build, Hunter AAF military families, tourism-business households. Here is what stays the same about how we work them.',
      'We coordinate with both attorneys before contracting. Your divorce attorney and your spouse\'s attorney both have to be comfortable that the proposed closing matches the decree, settlement, or temporary order. We do not skip that step.',
      'We handle Savannah-specific complications. Historic-district code restrictions, flood-zone insurance, easements, deferred storm-damage repair — none of those break a divorce sale, but all of them affect the cash math. We price honestly.',
      'We fund a clean mortgage payoff. The marital debt ends at closing. Neither spouse keeps a Chatham mortgage tied to the other.',
      'We accommodate remote and military signing. PCS deployments, out-of-state moves, and notary logistics across multiple counties happen often in Chatham divorces. Power of attorney, mail-away closings, and remote-online notarization all work.',
      'We pay standard closing costs. No commissions, no listing fees. The decree controls how the proceeds get split — that is between you, your spouse, and the court.',
    ],

    trustSignalsSection: [
      'A real Chatham County operator knows the courthouse is at 133 Montgomery Street, that the Eastern Judicial Circuit has a six-judge bench, and that historic-district property rules can swing a Savannah home\'s value. Out-of-state buyers find these things out only after a sale slows or breaks.',
      'We have closed Chatham divorce sales on properties across the county — Historic District, Victorian District, Ardsley Park, Midtown, Pooler, Bloomingdale, Garden City, Wilmington Island, Skidaway Island, Whitemarsh Island, Isle of Hope, Vernonburg, and Pin Point. Different neighborhoods, different price math, different code considerations. We do not pretend they are interchangeable.',
    ],

    faqs: [
      {
        q: 'My Savannah marital home is in the Historic District. Does that complicate a divorce sale?',
        a: 'It can. Historic-district properties have additional restoration and code requirements that affect what a buyer can change after closing. Some buyers — especially out-of-state cash operations — pull out when they realize what historic-district code work involves. We do not. The offer accounts for the actual property and the actual code rules.',
      },
      {
        q: 'My spouse is on a military PCS to a different base. Can we still close on time?',
        a: 'Yes. Hunter Army Airfield divorces often involve a deploying or transferring spouse. Powers of attorney, mail-away closings, and remote-online notarization all work in Georgia. We coordinate with both attorneys and the closing attorney to match the spouse\'s availability.',
      },
      {
        q: 'We are still in mediation. Can we agree to sell now and split the proceeds at the decree?',
        a: 'Sometimes. Some couples authorize an interim sale via the temporary order or via a written agreement filed with the court, with proceeds held in escrow until the final decree. That requires both attorneys and the judge to be on the same page. Talk to your divorce attorney before contracting.',
      },
      {
        q: 'How does the Chatham County Superior Court treat a marital home one spouse inherited?',
        a: 'Inherited property generally starts as the receiving spouse\'s separate property under OCGA § 19-3-9. But marital funds spent on the mortgage, taxes, or improvements can convert part of the value into marital property — what attorneys call "transmutation." A divorce attorney with Chatham trial experience can assess your specific facts.',
      },
      {
        q: 'Will a divorce sale show up on Chatham County public records?',
        a: 'The deed transfer is public — Chatham County records are searchable through the clerk\'s office. The divorce decree itself becomes part of the court file at 133 Montgomery, which is also generally public unless sealed. A foreclosure ad does not run for divorce sales. The sale closes quietly.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'metter-ga': {
    title: 'Sell House Through Divorce in Metter, GA — Cash Buyer',
    metaDescription: 'Candler County divorce sale? Quiet, fast cash close in Metter. We coordinate with both attorneys and respect the privacy of small-town divorces.',
    h1: 'Selling the Marital Home Through a Candler County Divorce',

    empatheticOpening: [
      'Metter is a small town. A divorce here is rarely private the way a Savannah divorce can be — neighbors notice when one car stops parking in the driveway. Most Metter couples we work with want the sale of the marital home handled quickly and quietly.',
      'The legal process at the Candler County Superior Court is the same as in any Georgia county. The local pace is not. Smaller dockets sometimes mean faster final hearings. Smaller communities also mean the marital home itself often carries family history beyond the marriage. We respect that.',
    ],

    countyProcessSection: [
      'Candler County divorces file at the Candler County Superior Court, 35 SW Broad Street, Metter. Candler is part of the Middle Judicial Circuit, which also covers Emanuel, Jefferson, Toombs, Treutlen, and Washington counties. The same chief judge presides across the circuit, so Candler cases are heard alongside other rural Southeast Georgia matters.',
      'Georgia is an equitable distribution state. The marital home gets divided fairly based on contributions, conduct, and need. Smaller Candler cases — especially uncontested ones — often resolve faster than urban-county divorces, but the timeline depends on the judge and the specific facts.',
      'Most Candler title companies require both spouses to sign at closing if the marriage is intact or the case is pending. A temporary order from the Superior Court can also limit how the property gets sold or financed during the case. The decree at the end spells out exactly how the marital home gets handled.',
    ],

    timelineSection: [
      'The Candler County divorce-and-house timeline tends to look like:',
      'A petition is filed at 35 SW Broad Street, Metter. Georgia\'s six-month residency (OCGA § 19-5-2) applies.',
      'The other spouse is served and has 30 days to answer.',
      'A temporary hearing — often quickly scheduled in smaller-county courts — addresses possession of the marital home and ongoing payments.',
      'Discovery and any mediation. Smaller-county dockets sometimes move faster between hearings. Many Candler cases settle without a trial.',
      'A final decree is entered. The decree controls everything: sale, refinance, deed transfer, or buyout.',
      'If the decree directs a sale, the closing has to match the decree. Proceeds get split per the decree.',
    ],

    howWeHelpSection: [
      'A Metter divorce sale benefits from a buyer who understands small-town logistics.',
      'We work directly with both attorneys. The decree or temporary order has to authorize the sale. We confirm with both sides before signing a contract.',
      'We close in Metter. The recording happens at the Candler County clerk\'s office at 35 SW Broad Street. Local recording is faster than out-of-county.',
      'We fund the mortgage payoff. Neither spouse should keep marital housing debt after the divorce. We pay off the existing loan at closing.',
      'We respect the privacy. We do not put marketing signs on Metter divorce-sale properties. Closings happen at the closing attorney\'s office, not on the front porch.',
      'We pay standard closing costs. No commissions, no listing fees. Proceeds split per the decree.',
    ],

    trustSignalsSection: [
      'A real Candler County operator knows the courthouse is in Metter on SW Broad Street, that Candler is part of the Middle Judicial Circuit, and that the legal organ for Candler is the Metter Advertiser. Out-of-state buyers do not. They also do not know that small-town divorce sales need to be handled with discretion — many Metter sellers are still attending the same church and shopping at the same grocery store as their soon-to-be ex.',
      'We work across Candler County and the surrounding rural counties — Bulloch, Emanuel, Toombs, Evans. That gives us a comp set rooted in this part of Southeast Georgia. A Metter farmhouse and a Metter ranch in town are not the same property, and we do not price them like they are.',
    ],

    faqs: [
      {
        q: 'How quickly can a Candler County divorce sale close?',
        a: 'Most Candler divorce closings take seven to twenty days from contract — depending on the lender\'s payoff turnaround and a clean title search. The divorce decree or temporary order needs to authorize the sale before contracting. A Candler County family-law attorney can confirm what your specific order allows.',
      },
      {
        q: 'My spouse and I both inherited part of our Candler family land. Does that make the divorce harder?',
        a: 'Inherited property is usually separate property under OCGA § 19-3-9 — it starts as the receiving spouse\'s. If marital funds were used on taxes, fence repair, or improvements, part of the value can shift to marital property. A Georgia family-law attorney with rural-property experience can assess your specific facts.',
      },
      {
        q: 'Can the Candler County Probate Court help with anything during a divorce?',
        a: 'Generally no. The Probate Court handles wills, estates, and certain mental-health and marriage-license matters. Divorce is a Superior Court matter — your case stays at 35 SW Broad with the Superior Court division.',
      },
      {
        q: 'Do we both have to be in Metter to close?',
        a: 'No. One spouse can sign in person and the other can sign by mail-away or power of attorney. Some divorce sales in Candler involve one spouse already moved out — across town, or out of state. We accommodate the logistics on whichever side needs it.',
      },
      {
        q: 'Will the divorce sale affect either of our farm or business loans?',
        a: 'Possibly. Some agricultural and small-business loans have provisions tied to the borrower\'s residence or marital status. Selling the marital home does not automatically default those loans, but you should review the loan documents with your attorney and CPA before contracting.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'springfield-ga': {
    title: 'Sell House During Divorce in Springfield, GA',
    metaDescription: 'Effingham County divorce sale? Springfield is the county seat — the courthouse where everything files is your hometown. Local cash buyer.',
    h1: 'Selling the Marital Home Through an Effingham County Divorce',

    empatheticOpening: [
      'For a Springfield resident, a divorce involves the courthouse three blocks from the post office. Filings, hearings, deed recording — all of it happens at 700 N. Pine. The proximity makes the process more visible than it is for couples who live thirty minutes from their county seat.',
      'Springfield divorces tend to involve households tied to local government, schools, and county-seat employers. The marital home is often older than the marriage, and the equity is often what funds both sides\' next chapter. The legal process is straight Georgia statute. The local rhythm is what matters in practice.',
    ],

    countyProcessSection: [
      'Effingham County divorces file at the Effingham County Superior Court, 700 N. Pine Street, Springfield — the county seat. Effingham is part of the Ogeechee Judicial Circuit, sharing a four-judge bench with Bulloch, Jenkins, and Screven counties. Springfield cases are handled at the Springfield courthouse.',
      'Georgia is an equitable distribution state, not a community-property state. The marital home is divided fairly based on each spouse\'s contributions, conduct, and need. Effingham courts treat older marital homes — especially homes one spouse owned before marriage — by looking at how marital funds, labor, or maintenance affected the property\'s value.',
      'A Springfield marital home almost always requires both spouses to sign at closing while the divorce is pending or the marriage is intact. The Effingham Superior Court may also issue temporary orders or standing orders that limit how property is sold or financed during the case. Your divorce attorney should review the specific orders that apply to your case.',
    ],

    timelineSection: [
      'A Springfield divorce-and-house timeline usually looks like this:',
      'A petition is filed at 700 N. Pine. Georgia\'s six-month residency (OCGA § 19-5-2) applies.',
      'Service on the other spouse, with 30 days to answer.',
      'A temporary hearing addresses who lives in the marital home, who pays the mortgage, and what either spouse can or cannot do with the property during the case.',
      'Discovery and any mediation. The Ogeechee Circuit\'s rotating-judge schedule means Springfield cases get assigned to a specific judge for the duration.',
      'A final decree gets entered. The decree controls the marital home — sell, refinance, deed transfer, or buyout.',
      'If the decree directs a sale, the closing matches the decree exactly. Proceeds get split per the decree.',
    ],

    howWeHelpSection: [
      'A Springfield divorce sale has its own pace.',
      'We coordinate with both family-law attorneys before contracting. A clean closing requires that the decree, settlement, or temporary order authorize the sale.',
      'We close at 700 N. Pine. The recording happens at the Effingham County clerk\'s office, the same building where the divorce was filed. Local recording is fast.',
      'We pay off the existing mortgage at closing so the marital debt ends with the marriage. No Effingham housing loan stays attached to either spouse after the closing wire clears.',
      'We work with the timing of the Springfield court calendar. If your final hearing is two weeks out, we can sometimes time a closing immediately afterward — which avoids paying mortgage on a house that is about to be sold per court order.',
      'We cover standard closing costs. No commissions, no listing fees. The proceeds get divided exactly as your final Effingham decree directs.',
    ],

    trustSignalsSection: [
      'A real Effingham operator knows the courthouse is in Springfield, knows which judges sit in the Ogeechee Circuit, and knows that the legal organ is the Effingham Herald. They have stood at the recording desk on N. Pine. They have seen which spouse signs first and which signs last in a Effingham divorce closing.',
      'We have bought houses across Effingham — in Springfield itself and in Rincon and the smaller surrounding communities like Egypt and Shawnee. The Springfield housing market is different from the Rincon market. Most Springfield divorce homes are older builds with established equity, not stretch loans on recent construction. We price on that reality.',
    ],

    faqs: [
      {
        q: 'How long does an uncontested divorce take in Springfield?',
        a: 'Uncontested cases generally finalize faster than contested ones, but the exact timeline depends on the assigned Ogeechee Circuit judge\'s calendar and any waiting periods built into the case. Talk to a Springfield-experienced family-law attorney for an estimate based on the current court calendar.',
      },
      {
        q: 'Can I sell my Springfield marital home before the final divorce decree?',
        a: 'Sometimes — with both spouses\' consent and within whatever the temporary order or any standing order allows. Some Effingham judges include language that restricts asset transfers during the case. The proceeds may need to be held in escrow until the final decree, depending on the order.',
      },
      {
        q: 'What if my Springfield marital home was inherited from a parent?',
        a: 'Inherited property starts as separate property under OCGA § 19-3-9 — your spouse generally has no automatic claim. But if marital funds went toward mortgage payments, taxes, or improvements, part of the value can shift to marital property. A Georgia family-law attorney can review your specific facts.',
      },
      {
        q: 'Both of us work for Effingham County. Will the courthouse handle our divorce normally?',
        a: 'Yes. The Superior Court treats county-employee divorces the same as any other case. Some judges may recuse if there is a personal or professional conflict, but those cases get reassigned within the circuit. Your divorce attorney will let you know if any recusal applies.',
      },
      {
        q: 'Will our school-district eligibility change if we sell the Springfield home?',
        a: 'Effingham County Schools have specific transfer rules. Selling the home and moving may affect each child\'s school assignment. The parenting plan in the divorce will specify residence and schooling. A family-law attorney is the right person to coordinate that with the timing of the sale.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'savannah-ga', 'statesboro-ga'],
  },

  'swainsboro-ga': {
    title: 'Sell House During Divorce in Swainsboro, GA',
    metaDescription: 'Emanuel County divorce sale? VP Buys Homes coordinates with both attorneys around Emanuel\'s Wednesday court calendar. Cash close, no fees.',
    h1: 'Selling the Marital Home Through an Emanuel County Divorce',

    empatheticOpening: [
      'Swainsboro divorces happen in a small-town setting where everyone seems to know what is going on. The marital home sale often becomes the visible step that signals the change, even when the actual divorce is still working its way through the court calendar.',
      'Emanuel County\'s Superior Court has its own scheduling rhythm. The marital-home sale, the closing logistics, and the timing of when the proceeds clear all depend on getting the divorce paperwork in order with that calendar — not against it.',
    ],

    countyProcessSection: [
      'Emanuel County divorces file at the Emanuel County Superior Court, 125 S. Main Street, Swainsboro. Emanuel is part of the Middle Judicial Circuit, sharing the bench with Candler, Jefferson, Toombs, Treutlen, and Washington counties.',
      'A practical detail about Emanuel: the Superior Court convenes most Wednesdays at 10 AM, except the second and fifth Wednesday of the month. That cadence affects how quickly motions get heard. A Swainsboro divorce that needs urgent court attention — for example, a motion to authorize an interim home sale — may need to wait for the next available Wednesday session.',
      'Georgia is an equitable distribution state. The marital home is divided fairly based on contributions, conduct, and need. Most Swainsboro title companies require both spouses to sign at closing while the marriage is intact or pending. A temporary order from the Superior Court can also limit how the property is sold or financed during the case.',
    ],

    timelineSection: [
      'An Emanuel County divorce-and-house timeline tends to look like this:',
      'A petition is filed at 125 S. Main Street. Georgia\'s six-month residency (OCGA § 19-5-2) applies.',
      'The other spouse is served. They have 30 days to answer.',
      'A temporary hearing — scheduled for a Wednesday session at the Emanuel courthouse — sets the rules for the marital home and any minor children.',
      'Discovery and mediation. Most Swainsboro divorces settle before contested trial; the smaller docket sometimes means a quicker path to settlement.',
      'A final decree is entered. The decree controls what happens to the marital home.',
      'If the decree calls for a sale, the closing has to match the decree language. Proceeds split per the decree.',
    ],

    howWeHelpSection: [
      'A Swainsboro divorce sale typically benefits from a few practical adjustments.',
      'We work with both attorneys on the timing. If a final hearing is on a Wednesday two weeks from now, we can usually schedule the closing for the following Friday — clean alignment with the decree.',
      'We coordinate the recording in Swainsboro. The Emanuel County clerk\'s office at 125 S. Main is the recording desk for the deed. Local closings record faster than out-of-county ones.',
      'We fund a clean mortgage payoff. Neither spouse should keep Emanuel housing debt after the divorce.',
      'We accommodate manufactured-home transfers, rural-property recording quirks, and the occasional dual-property file (in-town home plus rural parcel). Emanuel divorces sometimes involve more than one piece of real estate.',
      'We cover standard closing costs. No commissions, no listing fees. The Emanuel County decree controls the split — we follow that, period.',
    ],

    trustSignalsSection: [
      'A real Emanuel County operator knows the Superior Court convenes on Wednesdays except the second and fifth, knows the courthouse is on S. Main, and knows the Forest-Blade is the legal organ. They know that some Emanuel divorces involve manufactured homes on permanent foundations, where the title work has an extra step. Out-of-state wholesalers learn these details only when something delays a closing.',
      'We work across Emanuel and the surrounding Middle Judicial Circuit counties — Candler, Toombs, Jefferson, Treutlen, Washington — and into Bulloch and Effingham. That comp set captures rural Southeast Georgia pricing, not metro pricing. We bring that to a Swainsboro decree-driven sale.',
    ],

    faqs: [
      {
        q: 'My spouse filed for divorce on a Wednesday and I have not heard anything. Why is that?',
        a: 'Emanuel\'s Wednesday court calendar covers most weeks except the second and fifth Wednesday of the month. Filings are processed and scheduled around that calendar. After service, the other spouse generally has 30 days to file an answer regardless of which Wednesday. A Swainsboro family-law attorney can check the specific docket.',
      },
      {
        q: 'Our marital home is a manufactured home on a permanent foundation. Does that change the divorce sale?',
        a: 'It changes the title-work step. Manufactured homes that are titled to the land (real-property treatment) close like other houses. Manufactured homes still on a separate motor-vehicle title need an extra step at closing — converting the title or coordinating two transfers. We handle both, with the closing attorney guiding the process.',
      },
      {
        q: 'Can we sell our Swainsboro home before the final divorce hearing?',
        a: 'Sometimes — with both spouses\' consent and within whatever the temporary order allows. Some Emanuel judges include language in pre-trial orders that restricts asset sales. The decree at the end spells out exactly what happens to the proceeds. Talk to your divorce attorney first.',
      },
      {
        q: 'I am behind on the mortgage. Does that affect the divorce sale?',
        a: 'It can — if you fall far enough behind, the lender may start foreclosure regardless of the divorce status. A divorce sale completed before any foreclosure sale stops the foreclosure clock by paying off the lender. If both situations are happening, both have to be coordinated. A real-estate attorney experienced in Emanuel County can help.',
      },
      {
        q: 'Can both spouses\' Swainsboro divorce attorneys handle the closing logistics with you?',
        a: 'Yes — and we generally insist they do. The decree, settlement agreement, or temporary order authorizes the sale. We confirm with both sides\' family-law counsel before we sign a contract, not after. That is how a Swainsboro divorce sale actually closes on schedule.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'metter-ga'],
  },

  'claxton-ga': {
    title: 'Sell House During Divorce in Claxton, GA — Cash Buyer',
    metaDescription: 'Evans County divorce sale? Atlantic Circuit hearings sometimes in Hinesville. We coordinate with both attorneys, close in Claxton. No fees.',
    h1: 'Selling the Marital Home Through an Evans County Divorce',

    empatheticOpening: [
      'A divorce in Claxton works through a court system that is actually larger than the county itself. The Atlantic Judicial Circuit covers six counties — Evans, Bryan, Liberty, Long, McIntosh, and Tattnall — and the judges rotate. Some hearings end up in Hinesville rather than Claxton, depending on the schedule.',
      'For Evans County couples, the marital home sale and the divorce decree have to line up. The legal process is the same Georgia process used statewide; the practical experience is shaped by the rotating-judge schedule and the local Claxton recording office.',
    ],

    countyProcessSection: [
      'Evans County divorces file at the Evans County Superior Court, 123 West Main Street, Claxton. Evans is part of the Atlantic Judicial Circuit, alongside Bryan, Liberty, Long, McIntosh, and Tattnall counties. The judicial bench rotates among those counties, so an Evans case can be assigned to any judge and certain hearings may be heard at the larger Liberty County courthouse in Hinesville.',
      'Georgia is an equitable distribution state. The marital home gets divided fairly based on each spouse\'s contributions, conduct, and need — not always equal. Inherited property generally remains separate (OCGA § 19-3-9) unless marital funds materially affected its value.',
      'Evans County title companies usually require both spouses to sign at closing while the marriage is intact or the case is pending. A temporary order or any standing order from the Atlantic Circuit Superior Court can also limit how the marital home is sold or refinanced during the case.',
    ],

    timelineSection: [
      'An Evans County divorce-and-house timeline tends to look like:',
      'A petition is filed at 123 West Main Street, Claxton. Georgia\'s six-month residency requirement (OCGA § 19-5-2) applies.',
      'The other spouse is served and has 30 days to answer.',
      'A temporary hearing may be scheduled at the Claxton courthouse or at the Liberty County courthouse in Hinesville, depending on the assigned judge.',
      'Discovery and any mediation. Atlantic Circuit cases sometimes take longer between hearings than denser-circuit cases because of the rotating-judge schedule.',
      'A final decree is entered. The decree controls the marital home.',
      'If the decree directs a sale, the closing has to match the decree. Proceeds split per the decree.',
    ],

    howWeHelpSection: [
      'A Claxton divorce sale benefits from a buyer who understands the Atlantic Circuit\'s scheduling rhythm.',
      'We work with both attorneys on timing. The decree, settlement agreement, or temporary order has to authorize the sale. We confirm with both family-law attorneys before contracting.',
      'We close in Claxton. The Evans County clerk\'s office handles the recording locally. The closing happens at the closing attorney\'s office — quietly, without putting the sale on a sign in front of the house.',
      'We fund a clean mortgage payoff. The marital housing debt ends with the marriage.',
      'We accommodate Atlantic-Circuit timing. If a contested hearing has been pushed to a later session at the Hinesville courthouse, we can usually wait for the resulting order before scheduling the closing.',
      'We cover standard closing costs. No commissions, no listing fees. The Evans County decree governs the split, and the closing attorney executes the proceeds accordingly.',
    ],

    trustSignalsSection: [
      'A real Evans County operator knows that Evans is in the Atlantic Judicial Circuit, that some hearings happen in Hinesville, and that the courthouse for filings and recording is at 123 West Main in Claxton. They know the Claxton Enterprise is the legal organ. Out-of-state buyers do not.',
      'We have bought houses across Evans County — in Claxton, Hagan, Bellville, Daisy, and Manassas. We also work in the surrounding counties. That gives us a comp set rooted in this corner of Southeast Georgia, not in metro pricing or coastal Savannah pricing. A Claxton divorce home is priced against actual recent Claxton sales.',
    ],

    faqs: [
      {
        q: 'My Claxton divorce hearing is scheduled in Hinesville. Why?',
        a: 'Evans is part of the Atlantic Judicial Circuit, and Liberty County\'s courthouse in Hinesville is the larger venue for the circuit. Some hearings get scheduled there based on the assigned judge\'s calendar and the type of motion. Your Atlantic Circuit family-law attorney can confirm the specific reason for your case.',
      },
      {
        q: 'Can a Claxton divorce sale close before the final decree is entered?',
        a: 'Sometimes — with both spouses\' consent and within whatever the temporary order allows. Some judges allow interim sales with proceeds held in escrow until the final decree spells out the split. A divorce attorney can read your specific order.',
      },
      {
        q: 'Our Claxton marital home includes rural acreage. Does that complicate the sale?',
        a: 'Not usually. We buy houses on small in-town lots and on rural acreage with outbuildings. The offer accounts for the actual property — including any wells, septic, fencing, and outbuildings. The deed records the same way at the Evans County clerk\'s office.',
      },
      {
        q: 'My spouse moved to Tattnall County and we are still legally married. Can the divorce still be filed in Evans?',
        a: 'Generally yes, as long as one spouse meets Georgia\'s residency requirement and Evans is the appropriate venue. Both Evans and Tattnall are in the Atlantic Circuit, so the judges may overlap. A family-law attorney can confirm where to file based on your specific facts.',
      },
      {
        q: 'Will a Claxton divorce sale show up in The Claxton Enterprise?',
        a: 'No. The Claxton Enterprise is the legal-notices paper for Evans County, used for foreclosure ads and certain probate notices. A divorce property sale is a private real-estate transaction — it does not run as a public notice. The deed transfer becomes part of public county records but is not advertised.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'vidalia-ga': {
    title: 'Sell House During Divorce in Vidalia, GA — Cash Buyer',
    metaDescription: 'Toombs County divorce sale? The courthouse is in Lyons. We coordinate with both attorneys and close cleanly. No fees, written offer in 24 hours.',
    h1: 'Selling the Marital Home Through a Toombs County Divorce',

    empatheticOpening: [
      'A Vidalia divorce mostly happens in Lyons. The Toombs County Superior Court, the deed recording, the divorce decree — all of it sits at the courthouse on Courthouse Square. For a Vidalia couple, that means the legal end of the marriage and the legal end of the marital home both happen in a different town than where they live.',
      'Most Toombs divorce-stage sellers we work with want a clean break — clean payoff, clean signature chain, clean split of whatever equity remains. The legal process is straight Georgia statute. The local logistics are what differ between a Vidalia sale and a sale in Savannah or Atlanta.',
    ],

    countyProcessSection: [
      'Toombs County divorces file at the Toombs County Superior Court, 100 Courthouse Square, Lyons. Toombs is part of the Middle Judicial Circuit, sharing the bench with Candler, Emanuel, Jefferson, Treutlen, and Washington counties.',
      'Georgia is an equitable distribution state. The marital home gets divided fairly — fair, not always fifty-fifty. Vidalia couples whose marital home was inherited from a parent should know that inherited property generally starts as separate property under OCGA § 19-3-9. Marital funds spent on mortgage, taxes, or improvements can shift part of the value to marital property over time.',
      'Most Toombs title companies require both spouses to sign at closing during a pending case or while the marriage is intact. A temporary order or standing order from the Lyons Superior Court can also restrict how a marital home gets sold or financed during the case. Read your specific order before signing a contract — or ask your divorce attorney to read it.',
    ],

    timelineSection: [
      'A Toombs County divorce-and-house timeline tends to move on this clock:',
      'A petition is filed at 100 Courthouse Square, Lyons. Georgia\'s six-month residency rule (OCGA § 19-5-2) applies to the spouse who files.',
      'The other spouse is served, with 30 days to answer.',
      'A temporary hearing — scheduled in Lyons — addresses possession of the marital home and any minor children.',
      'Discovery, mediation, or trial. Many Toombs divorces settle before trial; the Middle Judicial Circuit\'s docket sometimes moves more flexibly than urban courts.',
      'A final decree is entered in Lyons. The decree details the marital home\'s path — whether the property is sold, refinanced into one spouse\'s name, deeded over, or bought out.',
      'If the decree directs a sale, the closing matches the decree language. Proceeds split per the decree.',
    ],

    howWeHelpSection: [
      'A Vidalia divorce sale runs through Lyons logistically. Here is how we handle the practical pieces.',
      'We coordinate with both attorneys before contracting. The decree or temporary order has to authorize the sale, and both sides\' family-law counsel should be comfortable with the proposed closing.',
      'We close at the Lyons courthouse area. The deed records at the Toombs County clerk\'s office at 100 Courthouse Square. The closing attorney handles the trip from Vidalia to Lyons.',
      'We fund a clean mortgage payoff so neither spouse keeps the marital housing debt after the divorce.',
      'We accommodate seasonal cash flow. Many Toombs households are tied to the Vidalia onion-harvest cycle or other seasonal economies. We can sometimes time the closing to fit a specific paycheck or seasonal milestone if that helps both sides.',
      'We cover standard closing costs. No commissions, no listing fees. The Toombs County decree controls how the proceeds get divided at the closing table in Lyons.',
    ],

    trustSignalsSection: [
      'A real Toombs County operator knows the courthouse is in Lyons (not Vidalia), the Middle Judicial Circuit covers six counties, and the legal organ is The Advance. They know that Vidalia divorces sometimes involve agricultural assets in addition to the marital home, and that an onion-economy household has different cash-flow rhythms than a metro-Atlanta household. Out-of-state buyers do not understand any of this.',
      'We work across Toombs and the surrounding counties — Emanuel (Swainsboro), Candler (Metter), and Evans (Claxton). That gives us a comp set rooted in this stretch of Southeast Georgia. A Vidalia divorce home is priced against actual Vidalia and Lyons recent sales, not against a generic statewide average.',
    ],

    faqs: [
      {
        q: 'I live in Vidalia. Why does my divorce paperwork say Lyons?',
        a: 'Lyons is the Toombs County seat. All Toombs County legal filings — divorce, deed transfers, foreclosure deeds, probate matters — happen at the courthouse at 100 Courthouse Square in Lyons. Vidalia is the larger city, but the legal infrastructure is in Lyons. That is normal procedure.',
      },
      {
        q: 'Our Vidalia marital home includes onion-farming acreage. Can you handle that sale?',
        a: 'Yes. We buy properties on rural acreage with outbuildings, well, septic, and agricultural use. The offer accounts for the actual property — both the residence and the agricultural component. If the divorce involves a separate agricultural-business entity, your divorce attorney and CPA may have specific allocation guidance.',
      },
      {
        q: 'How long do contested Toombs County divorces typically take?',
        a: 'Contested cases generally take longer than uncontested ones, with timelines depending on the assigned Middle Judicial Circuit judge\'s calendar, discovery scope, and whether mediation succeeds. A Lyons-experienced family-law attorney can give you a realistic estimate based on the current docket.',
      },
      {
        q: 'My spouse and I do not agree on the sale price. Who decides?',
        a: 'If neither spouse will agree, the divorce decree or a court-ordered sale process resolves it. Some Toombs divorces include a court-appointed real-estate professional or specific sale instructions in the decree. Talk to your divorce attorney before contracting. We follow whatever the decree directs.',
      },
      {
        q: 'Will the divorce sale show up in The Advance?',
        a: 'No. The Advance is the legal-notices paper for Toombs County, used for foreclosure ads and certain probate notices. A divorce-related real-estate sale is a private transaction. The deed transfer is recorded as part of public county records but is not advertised.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'claxton-ga'],
  },
}
