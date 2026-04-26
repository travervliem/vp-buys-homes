import type { SituationContent } from './types'

// Per-pairing content for the Foreclosure situation.
// Each city slug filled here generates an intersection page at
// /areas/<city-slug>/foreclosure. Empty cities are omitted from
// generateStaticParams and the sitemap until written.
//
// Voice rules (do not break):
// - 7th–8th grade reading level
// - No legal/tax advice — educate, redirect to attorney/CPA
// - No predatory urgency ("ACT NOW", "DON'T LOSE YOUR HOME")
// - No fabricated stats, case studies, or testimonials
// - Reference real Bulloch courthouse, Statesboro Herald, real neighborhoods

export const FORECLOSURE_CONTENT: SituationContent = {
  'statesboro-ga': {
    title: 'Sell Your House Before Foreclosure in Statesboro, GA',
    metaDescription: 'Facing foreclosure in Bulloch County? VP Buys Homes pays cash for Statesboro houses before the sale date. No fees, no repairs, written offer in 24 hours.',
    h1: 'Sell Your Statesboro House Before the Foreclosure Sale Date',

    empatheticOpening: [
      'If the bank has mailed you a notice of sale, the first Tuesday of the month is a real deadline. Talking to a local cash buyer does not cost you anything — and it might save the equity you have left.',
      'Most Statesboro homeowners we hear from are not behind by accident. A medical bill ran up. A job ended. A divorce split two paychecks into one mortgage. Whatever your story is, you do not owe us an explanation. The question is how much time you actually have, and what your real options are.',
    ],

    countyProcessSection: [
      'Bulloch County foreclosures follow Georgia\'s non-judicial process. That means no judge, no court hearing, and no lawsuit. The lender\'s attorney mails a 30-day notice (under OCGA § 44-14-162.2), then runs a foreclosure ad in the Statesboro Herald for four consecutive weeks before the sale (under OCGA § 44-14-162). On sale day — the first Tuesday of the month, between 10 AM and 4 PM — the property is sold to the highest bidder on the steps of the Bulloch County Superior Court at 20 Siebald Street, in the heart of downtown Statesboro.',
      'Two details about Bulloch matter for your timing. First, sales happen on the courthouse steps, not online. Buyers physically attend. Second, once the 30-day notice goes out, the timeline tightens fast. You can usually still sell the property up until the moment of sale. After the gavel falls, ownership transfers and any equity you had is gone.',
      'Also worth knowing: Bulloch\'s separate tax-delinquency sales — the kind for unpaid property taxes, not unpaid mortgage payments — are scheduled by the tax commissioner only a few times per year and advertised in the same Statesboro Herald. Some homeowners get the two confused. If you are not sure which letter you received, bring it to a real-estate attorney before the date on the page.',
    ],

    timelineSection: [
      'Here is how the timeline tends to look for a Statesboro homeowner who falls behind on a mortgage:',
      'You miss a payment. The mortgage company contacts you. There may be a way to bring the loan current before anything formal happens.',
      'You receive a 30-day notice. This is the legal trigger. OCGA § 44-14-162.2 requires it to come by certified or registered mail, at least 30 days before the sale date. The letter has to identify the entity that can negotiate or modify the loan.',
      'The Statesboro Herald runs the foreclosure ad. OCGA § 44-14-162 requires the ad to run once a week for four weeks before the sale. By week two, neighbors and family may have already seen it.',
      'Sale day. First Tuesday of the month. Between 10 AM and 4 PM. Bulloch County Superior Court steps. The highest bidder takes the property — usually the lender, sometimes an investor.',
      'If you sell before sale day, the lender is paid off at closing and ownership transfers cleanly. Your equity, if there is any, goes to you instead of to a courthouse-step buyer.',
    ],

    howWeHelpSection: [
      'VP Buys Homes is a local cash buyer based in Statesboro. When a Bulloch County homeowner contacts us with a foreclosure file, here is what happens.',
      'We pull a payoff. We talk to your lender\'s loss-mitigation department directly to get a current payoff figure. The number you owe today is rarely the number you owed last week.',
      'We set a closing date that beats the sale date. Our title attorney is local and works first-Tuesday calendars often enough to know them by heart. We close before sale day — period.',
      'We cover standard closing costs. No commissions, no listing fees, and the costs that normally come out of a seller\'s check are folded into our offer.',
      'We refer you out when you need it. A HUD-approved housing counselor (free) and a foreclosure-defense attorney (usually a flat fee) can sometimes find options we cannot. We tell you about them. If a loan modification works, that is a better outcome for you than selling.',
    ],

    trustSignalsSection: [
      'There are plenty of out-of-state cash-buying operations advertising in Statesboro right now. Here is how to tell who is actually local: ask them what newspaper your foreclosure ad has to run in. The answer is the Statesboro Herald. A wholesaler running Facebook ads from Phoenix is not going to know that.',
      'We have worked with homeowners across Bulloch County — from the Averitt Arts District and Fair Road to Brooklet, Portal, Stilson, and Register, and the smaller communities like Hopeulikit, Nevils, Leefield, and Adabelle. Every Bulloch foreclosure has the same statute behind it. But the practical timing of the lender, the attorney, and the courthouse changes case by case. We treat every file like that.',
    ],

    faqs: [
      {
        q: 'Can I still sell my Statesboro house after the foreclosure ad has started running in the Statesboro Herald?',
        a: 'Often yes. Until the gavel falls on the Bulloch County Superior Court steps on the first Tuesday of the month, you usually still hold title. A buyer who can pay off the lender by the sale date can typically close. Timing is tight, and the lender controls the payoff figure — but the door is rarely shut until sale day. Talk to a Georgia foreclosure-defense attorney before signing anything.',
      },
      {
        q: 'How fast can VP Buys Homes close before my Bulloch County sale date?',
        a: 'We have closed in as few as seven days when title is clean. The bottleneck is usually getting a payoff letter from your lender, plus a fast title search. If you contact us within two weeks of sale day, that is usually enough. Inside one week, it depends on which lender and which day of the week you call.',
      },
      {
        q: 'Will a foreclosure on my Statesboro property wipe out a second mortgage or HELOC?',
        a: 'Not in the way most homeowners assume. When the bank with the first mortgage forecloses, that sale typically wipes out the lien from a second mortgage or HELOC on the property — but you may still owe the unpaid balance on those junior debts personally. Georgia also requires a separate court step (confirmation) before a lender can pursue any leftover amount on the first loan. Talk to a foreclosure attorney about your case.',
      },
      {
        q: 'What does it cost to sell to a cash buyer instead of waiting for the auction?',
        a: 'From you, nothing out of pocket. We pay no commissions, no listing fees, and standard closing costs are folded into the offer rather than coming out of your check. The trade-off is the offer is below retail market value — we discount for repair costs, hold time, and the speed and certainty of cash. We share the math before you decide.',
      },
      {
        q: 'I am behind on Bulloch County property taxes too. Does that matter?',
        a: 'Yes, and it runs on a separate clock. The Bulloch County Tax Commissioner schedules tax sales a few times a year and advertises them in the Statesboro Herald, separately from the mortgage foreclosure. If both are happening, both have to be paid off at closing for clear title. We coordinate with the tax commissioner\'s office and your lender at the same time.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'springfield-ga'],
  },

  'rincon-ga': {
    title: 'Stop Foreclosure on Your Rincon, GA Home — Cash Offer',
    metaDescription: 'Facing foreclosure in Rincon? Effingham County sales follow Georgia\'s 30-day notice + four-week ad rule. We pay cash and close before your sale date.',
    h1: 'Sell Your Rincon House Before the Effingham Foreclosure Sale',

    empatheticOpening: [
      'Rincon has grown faster than almost any Effingham community in the last decade — and a lot of those mortgages were written assuming the next paycheck would always come. When it does not, a foreclosure file moves faster than most people expect.',
      'If you bought into one of the newer Rincon subdivisions during a hot market, or you took a stretch loan to land near work in Pooler or Savannah, falling behind feels personal. It is not personal to the lender. Their attorney has a calendar, and you are on it. The good news is that the law also gives you time — if you use it.',
    ],

    countyProcessSection: [
      'Effingham County foreclosures use Georgia\'s non-judicial process. The lender\'s attorney mails a 30-day notice (OCGA § 44-14-162.2), then runs a foreclosure ad in the Effingham Herald for four consecutive weeks (OCGA § 44-14-162). The sale itself happens on the first Tuesday of the month, between 10 AM and 4 PM, on the courthouse steps at 700 N. Pine Street in Springfield — the Effingham County seat. Even though you live in Rincon, the courthouse is fifteen minutes north of you.',
      'That gap between Rincon and Springfield is worth knowing. Title work, deed recording, and any divorce or probate filings tied to the property all happen at the Springfield courthouse. So does the foreclosure sale. If you are picturing a sale at the Rincon City Hall, that is not where it happens.',
      'Effingham\'s newspaper of legal record is the Effingham Herald. By the time the second week of the foreclosure ad runs, neighbors who read the paper online may have already seen the listing. There is no way to remove it once it is running — but a sale before the date pulls the property out of the lender\'s pipeline entirely.',
    ],

    timelineSection: [
      'Here is what the foreclosure clock looks like for a Rincon homeowner:',
      'A payment gets missed. The servicer calls and sends letters. Forbearance, repayment plans, and modification options are sometimes still on the table at this stage.',
      'A 30-day notice arrives by certified or registered mail. OCGA § 44-14-162.2 requires this letter to identify who has authority to negotiate or modify the loan. Save the envelope — the postmark sometimes matters.',
      'The Effingham Herald begins running the foreclosure ad once a week for four weeks (OCGA § 44-14-162). The address shows in the ad in bold.',
      'First Tuesday of the sale month, between 10 AM and 4 PM. Sale takes place on the courthouse steps in Springfield. The high bidder receives a deed under power.',
      'If a sale happens before that date — and the lender is paid in full at closing — the foreclosure simply stops. The 30-day notice is canceled by the payoff.',
    ],

    howWeHelpSection: [
      'VP Buys Homes works with Rincon homeowners under foreclosure pressure regularly. Effingham\'s growth has brought new lenders and new payoff procedures into the county. Here is how the file moves with us.',
      'We get the payoff figure. The number on your last statement is almost never the number to wire on closing day — late fees, attorney fees, and force-placed insurance pile on once a file is in foreclosure. We talk to the lender directly.',
      'We schedule closing inside the 30-day window. Our closing attorney files in Effingham regularly enough to know the recording desk\'s daily turnaround. A clean title search and a single closing usually clears it.',
      'We pay standard closing costs. The number we name is the number you walk away with — no commissions, no surprise fees at the table.',
      'We refer when we should. Some Rincon files are better served by a foreclosure-defense attorney or a HUD-approved counselor than by a sale. If your equity and timeline say so, we will tell you.',
    ],

    trustSignalsSection: [
      'A real Effingham County operator knows the courthouse is in Springfield, not Rincon. They know the legal organ is the Effingham Herald. They know the Tax Commissioner is on S. Laurel Street. Out-of-state buyers learn those facts when something goes wrong in escrow — too late to be useful.',
      'We have bought homes across the southern half of Effingham — Rincon proper, Pineora, Eden, Meldrim, Faulkville, and the corridors along Highway 21 and Goshen Road. We are also active in Savannah and Statesboro, which gives us a comp set that captures both the Rincon-as-bedroom-community and Rincon-as-its-own-market reality.',
    ],

    faqs: [
      {
        q: 'I live in Rincon but my foreclosure paperwork mentions Springfield. Why?',
        a: 'Effingham County\'s courthouse is in Springfield, the county seat. All Effingham filings — divorce, deed transfers, foreclosure deeds, probate — go through 700 N. Pine Street in Springfield. Rincon is the county\'s largest population center, but Springfield is where the legal infrastructure sits. That is normal, not a procedural mistake.',
      },
      {
        q: 'How quickly can you close in Effingham County?',
        a: 'A clean Effingham file can close in seven to ten days. The turnaround is usually limited by how fast your lender produces a payoff letter and how the title search comes back. If you have less than two weeks before the sale date, call us first thing on a weekday — same-day callbacks help on tight files.',
      },
      {
        q: 'Will my foreclosure show up online or in the Effingham Herald?',
        a: 'It runs in the Effingham Herald, the county\'s designated legal organ. The ad must run for four consecutive weeks before the sale (OCGA § 44-14-162). The Effingham Herald posts legal notices online too. There is no opt-out, but a sale before sale day cancels what runs.',
      },
      {
        q: 'What if I owe more than the house is worth?',
        a: 'That is a short-sale conversation with your lender, and we sometimes coordinate one with you. The lender has to agree to take less than the full payoff. It adds time to the process but can be the right move when there is no equity. A real-estate attorney or a HUD-approved counselor can walk you through whether your situation qualifies.',
      },
      {
        q: 'Do you only buy houses already on the market?',
        a: 'No. Most foreclosure-stage sellers we work with are not listed and have no plan to be. A traditional listing rarely closes inside a 30-day notice window because of inspection, appraisal, and financing contingencies. A cash transaction skips those steps.',
      },
    ],

    lateralCitySlugs: ['savannah-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'savannah-ga': {
    title: 'Stop Foreclosure in Savannah, GA — Local Cash Buyer',
    metaDescription: 'Foreclosure in Chatham County? Sales happen first Tuesdays at the courthouse on Montgomery St. We pay cash for Savannah houses before sale day.',
    h1: 'Sell Your Savannah House Before the Chatham County Foreclosure Sale',

    empatheticOpening: [
      'Savannah is a city of long-held houses. Properties get passed down. Mortgages get refinanced when a roof needs replacing. Then a hurricane brings code work, an insurance carrier walks away, and suddenly the math stops working. Foreclosure in Chatham County rarely starts with a single bad decision.',
      'Whether your file came from a job change at the ports, a military PCS out of Hunter Army Airfield, a flood-related insurance gap, or a divorce that left one spouse with a mortgage built for two — the Chatham County clock works the same way. The earlier you understand it, the more options you keep.',
    ],

    countyProcessSection: [
      'Chatham County is a busy court system, but the foreclosure process is straight Georgia statute. The lender\'s attorney mails the 30-day notice (OCGA § 44-14-162.2), then runs a foreclosure ad in the Savannah Morning News for four consecutive weeks (OCGA § 44-14-162). The sale takes place on the first Tuesday of the month, between 10 AM and 4 PM, on the courthouse steps at 133 Montgomery Street, downtown Savannah.',
      'One thing that confuses Savannah homeowners: the Chatham County tax sale (for unpaid property taxes, not mortgages) is held at the Savannah Civic Center on Oglethorpe Avenue, with online registration. That is a separate event from the mortgage foreclosure sale, which is still at the courthouse steps. Two different sales, two different addresses, two different deadlines. Read your letter carefully — or bring it to a real-estate attorney.',
      'Chatham\'s six-judge Superior Court bench moves quickly when motions are filed correctly. If your foreclosure has surprises in it (a missed-notice argument, a chain-of-title problem, an active loan-modification request), a local Savannah attorney can sometimes get a court order that pauses the sale. That is uncommon, but it happens.',
    ],

    timelineSection: [
      'A Chatham County foreclosure timeline tends to look like this:',
      'Payments fall behind. The servicer escalates collection calls and letters. Loan-modification options are usually still available.',
      'A 30-day notice goes out by certified mail. OCGA § 44-14-162.2 controls the content and timing. Keep the envelope with the postmark.',
      'The Savannah Morning News begins running the foreclosure ad. Four consecutive weekly runs (OCGA § 44-14-162). The address is published in bold in the ad.',
      'Sale day. First Tuesday of the month. The courthouse at 133 Montgomery Street. Between 10 AM and 4 PM, by public outcry.',
      'A sale before sale day pays off the lender and ends the foreclosure. The 30-day notice is canceled by the payoff. The Savannah Morning News ad stops at the next print cycle.',
    ],

    howWeHelpSection: [
      'Chatham foreclosures are not all the same. A historic-district property with a complex chain of title is a different file than a 1990s build in Pooler or a brick ranch on Skidaway Island. Here is what stays the same about how we handle each.',
      'We get the lender\'s real payoff. Late fees, attorney fees, force-placed insurance, and accumulated interest all sit between the principal balance and what actually has to be wired on closing day. We figure out the wire number before we make our offer.',
      'We close before the courthouse-steps sale. Our title attorney works in Savannah and knows the recording calendar at the clerk\'s office. A foreclosure file on a tight deadline is more title work than a typical sale, but it is not new to us.',
      'We do not back out at the last minute. Some buyers — especially out-of-state wholesalers — get cold feet on Savannah foreclosures because of unfamiliar code work, easements, or historic-district restrictions. We work in this market every week. We close on what we sign.',
      'We tell you when not to sell. A foreclosure-defense attorney can sometimes save a Savannah home that has equity and a homeowner with steady future income. A HUD-approved counselor (free) can sometimes restructure a loan that we would otherwise pay off.',
    ],

    trustSignalsSection: [
      'Chatham County is the kind of market that attracts every flavor of out-of-state buyer. The way to spot a real local: they know the foreclosure sale is at 133 Montgomery Street and the tax sale is at the Civic Center on Oglethorpe — and they can tell you why. They know the Savannah Morning News is the legal organ. They have actually been to the recording desk on the third floor.',
      'We buy houses across Chatham — from the Historic and Victorian Districts to Midtown, Ardsley Park, and West Chatham, and out into Wilmington Island, Skidaway Island, Whitemarsh Island, Isle of Hope, Vernonburg, and Pin Point. Every neighborhood has its own cost-to-make-livable math. We do not pretend that one Savannah comp set fits all of them.',
    ],

    faqs: [
      {
        q: 'Where exactly does the foreclosure sale happen in Savannah?',
        a: 'On the courthouse steps at 133 Montgomery Street, downtown. The sale runs on the first Tuesday of the month, between 10 AM and 4 PM, by public outcry. That is different from the Chatham County tax sale (for unpaid property taxes), which runs at the Savannah Civic Center on Oglethorpe Avenue. Two separate sales, two separate addresses.',
      },
      {
        q: 'My house has flood damage and the insurance is in dispute. Can you still buy?',
        a: 'Often yes. We buy properties with active insurance disputes, deferred storm-damage repair, and flood-zone designation issues. The offer accounts for whatever the property actually needs to become livable. If your insurance carrier is processing a claim, it sometimes makes sense to assign the claim to the buyer at closing. A coastal-Georgia real-estate attorney can advise you.',
      },
      {
        q: 'I am out of state because of a military PCS. Can you still close in time?',
        a: 'Yes. Chatham County allows remote closings with notarized signatures, and many lenders allow remote payoff coordination. We have closed Savannah foreclosure files for sellers stationed at Hunter, Stewart, and out-of-state bases. A power of attorney is sometimes useful — your closing attorney will let you know.',
      },
      {
        q: 'How is your Savannah cash offer different from a wholesaler\'s offer?',
        a: 'A wholesaler signs a contract and tries to assign it to a real buyer before closing. If the assignment falls through, the property tracks back into foreclosure with less time on the clock than before. We close on every contract we sign. Our funding source is our balance sheet, not someone else\'s decision.',
      },
      {
        q: 'My second mortgage is with a different lender. Does that complicate things?',
        a: 'Not usually. Most Chatham closings include separate payoffs to first and second lenders out of the closing proceeds — that is standard. If the second is far underwater, a short payoff sometimes has to be negotiated. We coordinate that during the contract period rather than discovering it on closing day.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'springfield-ga', 'statesboro-ga'],
  },

  'metter-ga': {
    title: 'Stop Foreclosure in Metter, GA — Candler County Cash Buyer',
    metaDescription: 'Foreclosure in Candler County? The sale runs first Tuesdays at the Metter courthouse. VP Buys Homes pays cash and closes before your sale date.',
    h1: 'Sell Your Metter House Before the Candler County Foreclosure Sale',

    empatheticOpening: [
      'Candler County is a small place. The courthouse is on Broad Street in Metter, the legal-notices paper is the Metter Advertiser, and word travels. When a foreclosure ad runs in a town this size, people you know read it.',
      'Many Metter foreclosure files start with something rural — an inherited farmhouse with a small mortgage that nobody got around to refinancing, a cattle or row-crop operation that had a hard year, a multigenerational property where the next generation could not absorb the carrying costs. The legal process is the same as in any Georgia county. The local pace is not.',
    ],

    countyProcessSection: [
      'Candler County foreclosures follow Georgia\'s standard non-judicial path. The lender\'s attorney mails a 30-day notice (OCGA § 44-14-162.2), and the foreclosure ad runs in the Metter Advertiser for four consecutive weeks before the sale (OCGA § 44-14-162). The sale itself happens on the first Tuesday of the month, between 10 AM and 4 PM, at the Candler County Superior Court at 35 SW Broad Street, Metter.',
      'Candler also runs an annual property-tax sale, separate from the mortgage foreclosure. That tax sale is unusual statewide: it happens once a year, on the first Tuesday in October, at the courthouse door in Metter. If your foreclosure paperwork is from the tax commissioner rather than the mortgage lender, the timeline is different from what is described here. A local real-estate attorney can tell you in five minutes which one you are dealing with.',
      'The Metter Advertiser is small enough that the foreclosure ad almost always gets noticed. There is no way to remove it once it starts running. A sale before sale day, however, ends the lender\'s file and stops the next ad from publishing.',
    ],

    timelineSection: [
      'A Candler County foreclosure tends to move on this clock:',
      'Payments fall behind. The mortgage company contacts the homeowner. Modification, forbearance, or repayment-plan options are usually still possible.',
      'A 30-day notice arrives. OCGA § 44-14-162.2 sets the form and timing. The letter must identify who has authority to negotiate or modify the loan.',
      'The Metter Advertiser runs the foreclosure ad once a week for four weeks (OCGA § 44-14-162). The address shows in the ad in bold.',
      'Sale day. First Tuesday. 10 AM to 4 PM. Candler County Superior Court at 35 SW Broad Street.',
      'A sale before that date pays off the lender and the file closes. The Metter Advertiser ad stops with the next issue.',
    ],

    howWeHelpSection: [
      'Smaller markets like Candler take a different operating cadence than Savannah or Statesboro. Title abstracts can take longer to come back. Lender payoff departments sometimes treat rural files as low-priority. Here is what we do.',
      'We start the payoff conversation early. Lenders\' loss-mitigation departments work in the order that calls come in. A Candler County file that calls on day one of the 30-day window gets the same attention as a metro-Atlanta file that calls on day 25.',
      'We use a local closing attorney. Candler real-estate paperwork records at the Metter courthouse. An attorney who walks the recording desk shaves a day or two off a tight foreclosure timeline.',
      'We pay closing costs. No commissions, no listing fees. The number we offer is what shows up on your settlement statement.',
      'We do not push. If your situation is better served by a USDA Rural Development restructuring, a HUD-approved counselor, or a Candler County legal-aid referral, we tell you. A Metter property held in a family for generations is not just a financial asset.',
    ],

    trustSignalsSection: [
      'A real Candler County operator knows the foreclosure sale is at 35 SW Broad Street, the legal organ is the Metter Advertiser, and the tax sale is once a year in October. They know the difference between Excelsior, Aline, Collins, Cobbtown, and Pulaski. Out-of-state wholesalers learn these names by texting Google after they get a contract — and that shows up in the way they handle a file.',
      'We work across Candler County and the surrounding counties — Bulloch (Statesboro), Emanuel (Swainsboro), Toombs (Vidalia), and Evans (Claxton). That gives us a comp set rooted in this stretch of Southeast Georgia rather than in metro Atlanta or Savannah. A Metter farmhouse and a Metter ranch on the edge of town are not the same property type, and we do not price them like they are.',
    ],

    faqs: [
      {
        q: 'I inherited a Metter farmhouse with a small mortgage. The estate is behind. Can you still buy?',
        a: 'Often yes. Inherited Candler County properties can usually be sold once letters testamentary, letters of administration, or a year\'s support order have been issued from the Candler County Probate Court. If the estate has not opened yet and a foreclosure is moving, an attorney may be able to open probate quickly. We coordinate with whoever the executor or administrator is.',
      },
      {
        q: 'My foreclosure paperwork is from the tax commissioner, not a bank. Is that different?',
        a: 'Yes. A tax-sale foreclosure is run by the Candler County Tax Commissioner under different statutes (OCGA § 48-4) and on a different schedule — Candler\'s tax sale runs once a year in October. A mortgage foreclosure runs first-Tuesday under OCGA § 44-14-162. Bring the letter to a Georgia real-estate attorney to confirm which one you are looking at.',
      },
      {
        q: 'Does a foreclosure on my Metter house affect my farm equipment loans or other business debt?',
        a: 'Sometimes. If the lender holding the foreclosure also holds equipment or operating loans, a default on one can trigger cross-default clauses on the others. If the farm business is structured as a separate entity, the impact may be limited to the personal mortgage. A Georgia agricultural-finance attorney can review your loan documents.',
      },
      {
        q: 'Will I owe taxes on the difference between what I owed and what you pay?',
        a: 'Possibly. If a lender forgives debt as part of the sale, the IRS can treat the canceled debt as taxable income (Form 1099-C). There are exceptions for primary residences and for insolvency. Talk to a CPA before closing — that conversation is worth more than most cash buyers will tell you.',
      },
      {
        q: 'Can a Candler County tenant stop the foreclosure of their landlord\'s property?',
        a: 'A tenant\'s lease may survive the foreclosure depending on the lease terms and the federal Protecting Tenants at Foreclosure Act. The tenant generally cannot stop the sale itself but may have rights to remain after the sale. A Georgia landlord-tenant attorney can advise the tenant directly.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'springfield-ga': {
    title: 'Stop Foreclosure in Springfield, GA — Effingham Cash Buyer',
    metaDescription: 'Foreclosure in Springfield, GA? Effingham\'s courthouse is in Springfield itself. We pay cash for Effingham County houses before the sale date.',
    h1: 'Sell Your Springfield House Before the Effingham Foreclosure Sale',

    empatheticOpening: [
      'Springfield is the Effingham County seat. The courthouse where your foreclosure sale would happen is in your town — on N. Pine Street, three blocks from the post office. That proximity makes the timeline more visible than in counties where the courthouse is forty minutes away.',
      'Foreclosure in a town this size feels exposed. You may know people who work at the courthouse. Your foreclosure ad runs in the Effingham Herald, which a lot of Springfield households still receive in print. None of that changes what the law requires — but it does change how the process feels in the meantime.',
    ],

    countyProcessSection: [
      'Effingham County foreclosures move through Georgia\'s non-judicial process. The lender\'s attorney sends the 30-day notice (OCGA § 44-14-162.2). The foreclosure ad runs four consecutive weeks in the Effingham Herald (OCGA § 44-14-162). The sale itself happens on the first Tuesday of the month, between 10 AM and 4 PM, on the steps of the Effingham County Superior Court at 700 N. Pine Street, Springfield.',
      'For Springfield homeowners specifically, the courthouse is not abstract. Deed recording, divorce filings, probate, and the foreclosure sale all happen at the same N. Pine Street address. If you want to verify the sale time on a given Tuesday, you can walk in and ask. Bring a photo ID.',
      'Effingham\'s tax-delinquency sales run separately from mortgage foreclosures. The tax commissioner\'s office is at 802 S. Laurel Street — also in Springfield — and they advertise sales as they schedule them. If you have received a letter from the tax commissioner about an outstanding bill, that is a different kind of file from a mortgage foreclosure. Talk to a real-estate attorney before the date on whichever letter you have.',
    ],

    timelineSection: [
      'Here is the typical clock for a Springfield foreclosure file:',
      'Missed payments. The servicer\'s collection department gets active. Loan-modification options often still exist.',
      'A 30-day notice mails by certified or registered mail. OCGA § 44-14-162.2 sets the timing — at least 30 days before the proposed sale date — and identifies the entity authorized to negotiate or modify the loan.',
      'The Effingham Herald begins running the foreclosure ad. Four consecutive weeks (OCGA § 44-14-162). The address is in bold.',
      'Sale day. First Tuesday. Between 10 AM and 4 PM. The courthouse steps at 700 N. Pine. By public outcry.',
      'A closing before sale day pays off the lender and stops the foreclosure entirely. The Effingham Herald ad ends with the next issue.',
    ],

    howWeHelpSection: [
      'We work foreclosure files across Effingham County. Springfield-specific files have a few characteristics worth knowing in advance.',
      'Recording is local and quick. Effingham\'s recording desk is at the courthouse you walk past on the way to the grocery store. Our closing attorney can hand-walk paperwork when a file is on a tight deadline.',
      'Loan payoff conversations vary by lender. Some major servicers respond same-day to payoff requests. Smaller community-bank lenders sometimes take a week. We start that conversation as soon as we see a Springfield file.',
      'We pay standard closing costs. No commissions, no listing fees. The number we name is the net.',
      'We refer when we should. A Georgia foreclosure-defense attorney can sometimes pause a sale that should not be moving. A HUD-approved housing counselor (free) can sometimes restructure a loan we would otherwise pay off. If your case fits one of those paths better than a sale, we will tell you.',
    ],

    trustSignalsSection: [
      'The way to test whether a "we buy houses" outfit knows Springfield: ask them which paper the foreclosure ad runs in (the Effingham Herald), where the courthouse is (700 N. Pine Street), and where the tax commissioner\'s office is (802 S. Laurel). Real local operators answer immediately. Wholesalers Googling between calls do not.',
      'We have bought houses across Effingham County — in Springfield itself, in Rincon, and in the smaller surrounding communities like Egypt and Shawnee. The Springfield market behaves differently than Rincon: longer hold-times, smaller cash-buyer pool, more mortgage products held by community banks rather than national servicers. We price on that reality, not on a metro-Atlanta comp set.',
    ],

    faqs: [
      {
        q: 'How long do I actually have between the 30-day notice and sale day in Springfield?',
        a: 'At least 30 days, by statute (OCGA § 44-14-162.2). In practice, the sale date the lender chooses is usually 30 to 35 days from when the notice mails — they want a reasonable cushion in case of mail delays. Look at the proposed sale date on your notice. That is the date that controls. The Effingham Herald ad will run the four weeks leading up to it.',
      },
      {
        q: 'Can the sale be postponed?',
        a: 'Sometimes. Lenders themselves sometimes postpone — usually if a payment is made or a modification is in active review. A foreclosure-defense attorney can occasionally get a court order pausing a sale based on procedural defects in the notice or advertisement. Postponement is the exception, not the rule.',
      },
      {
        q: 'Do I have to move out the day of the sale?',
        a: 'Not legally — you become a tenant at sufferance after the sale, and the new owner has to file a separate dispossessory action under OCGA § 44-7-50 to remove you. That process takes weeks. Many Springfield homeowners stay in the house for that period. A Georgia real-estate attorney can walk you through what a post-sale notice means in your specific case.',
      },
      {
        q: 'What if my lender is a Springfield-area community bank?',
        a: 'Community-bank foreclosure files often have more flexibility than big-servicer files because the bank holds the note rather than servicing it for an investor. We sometimes negotiate directly with the bank\'s loan officer rather than only with their attorney. That can speed up payoffs and short-payoff conversations.',
      },
      {
        q: 'Will the Springfield deed transfer go through smoothly if I am divorced or the title has another name on it?',
        a: 'It can, but the divorce decree or other title instrument has to clearly authorize the sale. If the property is in two names and one spouse refuses to sign, we usually pause until the divorce attorney provides a court order. Closing without a clean signature chain creates a title defect that the buyer\'s lender or title insurer will not accept later.',
      },
    ],

    lateralCitySlugs: ['rincon-ga', 'savannah-ga', 'statesboro-ga'],
  },

  'swainsboro-ga': {
    title: 'Stop Foreclosure in Swainsboro, GA — Emanuel Cash Buyer',
    metaDescription: 'Foreclosure in Emanuel County? VP Buys Homes pays cash for Swainsboro houses before sale day. Local buyer, no fees, written offer in 24 hours.',
    h1: 'Sell Your Swainsboro House Before the Emanuel Foreclosure Sale',

    empatheticOpening: [
      'Emanuel County\'s economy runs on a mix of agriculture, manufacturing, and trade-school jobs in Swainsboro. When one of those legs gets weaker — a layoff, a contract that does not renew, a crop year that goes wrong — a mortgage payment is often the first thing to slip.',
      'A foreclosure file does not pause for an explanation. The lender\'s attorney follows a calendar set by Georgia law, and the clock keeps ticking. The good news is the same calendar gives you a real window to act, if you understand it.',
    ],

    countyProcessSection: [
      'Emanuel County foreclosures use Georgia\'s non-judicial process. The lender\'s attorney mails a 30-day notice (OCGA § 44-14-162.2) and runs a foreclosure ad in the Forest-Blade for four consecutive weeks before the sale (OCGA § 44-14-162). The sale runs on the first Tuesday of the month, between 10 AM and 4 PM, on the steps of the Emanuel County Superior Court at 125 S. Main Street, Swainsboro.',
      'A practical detail about Emanuel County: the Superior Court convenes most Wednesdays at 10 AM, except the second and fifth Wednesday of the month. That is the sitting calendar — not the foreclosure-sale calendar. Foreclosure sales are still first Tuesdays. But if your case requires a court motion (for example, a foreclosure-defense attorney trying to pause a sale), the Wednesday cadence affects how quickly your motion gets heard.',
      'The Forest-Blade is Emanuel\'s designated organ for legal notices. It is read locally. A foreclosure ad usually generates a phone call or two from neighbors before the sale date.',
    ],

    timelineSection: [
      'An Emanuel County foreclosure typically runs on this clock:',
      'Missed payments accumulate. The servicer\'s collection efforts intensify. Forbearance, repayment plans, or modification are sometimes still on the table.',
      'A 30-day notice mails. OCGA § 44-14-162.2 sets the timing and content. The letter identifies the entity with authority to modify the loan.',
      'The Forest-Blade runs the foreclosure ad. Four consecutive weeks. The address is in bold (OCGA § 44-14-162).',
      'Sale day. First Tuesday of the month. 10 AM to 4 PM. Emanuel County Superior Court steps. By public outcry.',
      'A pre-sale closing pays off the lender, ends the foreclosure, and pulls the property out of the courthouse-steps process.',
    ],

    howWeHelpSection: [
      'A few things make Swainsboro foreclosure files specific:',
      'Smaller lender networks. Many Emanuel mortgages are held by community banks and credit unions in Swainsboro and the surrounding region. Those lenders sometimes have more flexibility — and slower internal processes — than the major national servicers.',
      'Rural property mix. We buy homes in town, farm-adjacent properties, mobile homes on permanent foundations, and rural parcels with multiple structures. We price each property on what it would actually take to make it livable, not on a generic metro-Atlanta formula.',
      'We pay closing costs. No commissions, no listing fees. The number we offer is the number you net.',
      'We refer where it makes sense. Some Emanuel foreclosure files are better served by a USDA Rural Development restructuring, a Georgia Legal Services Program intake, or a foreclosure-defense attorney than by a sale. If your situation fits one of those paths, we tell you.',
    ],

    trustSignalsSection: [
      'A genuine Emanuel County operator knows the courthouse is on S. Main, the Forest-Blade is the legal organ, and the Superior Court has its Wednesday-but-not-the-second-or-fifth calendar. They know the difference between Garfield, Stillmore, Summertown, Twin City, Adrian, Nunez, Oak Park, Norristown, Canoochee, and Modoc. Out-of-state wholesalers do not.',
      'We work across Emanuel and the surrounding Middle Judicial Circuit counties (Candler, Toombs, Jefferson, Treutlen, Washington), which gives us a comp set that captures the rural Southeast Georgia market rather than coastal or metro pricing. That matters when you are trying to figure out what your Swainsboro property is actually worth right now.',
    ],

    faqs: [
      {
        q: 'My Swainsboro house is on a USDA Rural Development loan. Does that change anything?',
        a: 'It can. USDA RD loans have specific loss-mitigation steps that have to be exhausted before foreclosure proceeds — sometimes including moratorium periods or special restructuring options. The 30-day notice still goes out under OCGA § 44-14-162.2, but the process behind the scenes is more structured. A USDA-experienced housing counselor can review your file.',
      },
      {
        q: 'I have a mobile home on a permanent foundation. Can you still buy?',
        a: 'Yes. Mobile and manufactured homes that are titled to the land (real-property treatment) close much like any other house. Mobile homes that still have a separate motor-vehicle title need an extra step at closing — converting the title or coordinating two transfers. We handle both.',
      },
      {
        q: 'My foreclosure file involves both my house in town and a rural parcel. Are those handled together?',
        a: 'Sometimes. If both properties secure the same mortgage (a "blanket" deed to secure debt), they get foreclosed together. If they secure different loans, the lenders may file separately. The deed records at the Emanuel County clerk\'s office show which is which. A Georgia real-estate attorney can clarify in a single visit.',
      },
      {
        q: 'Will the foreclosure show up on my Georgia driver\'s license or other state records?',
        a: 'No. Foreclosure is a real-estate transaction, not a state record tied to your driver\'s license. The lender will report the default to credit bureaus, which affects credit reports for several years. The Georgia Department of Driver Services has nothing to do with it.',
      },
      {
        q: 'How is your Swainsboro offer different from a courthouse-step bidder\'s bid?',
        a: 'A courthouse-step bidder buys at auction, often pays under what the property is worth, and the seller (you) gets nothing — the proceeds go to the lender first. A pre-sale cash purchase pays the lender and any equity goes to you. Even when the offer looks lower than retail, the net to the seller is almost always higher than what comes out of an auction.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'metter-ga'],
  },

  'claxton-ga': {
    title: 'Stop Foreclosure in Claxton, GA — Evans County Cash Buyer',
    metaDescription: 'Foreclosure in Evans County, GA? VP Buys Homes pays cash for Claxton houses before the sale date. No fees, no repairs, written offer in 24 hours.',
    h1: 'Sell Your Claxton House Before the Evans County Foreclosure Sale',

    empatheticOpening: [
      'Evans County is small. The Claxton courthouse on West Main Street, the Claxton Enterprise where legal notices run, and the cash-buyer pool itself are all on the smaller side. That makes a foreclosure file feel close — and easier to act on if you know how the process works.',
      'Many Evans foreclosure files come from rural-property situations that were never going to fit the standard mortgage servicing playbook. A property inherited two decades ago. A loan modification that lapsed. A medical event. The result is the same lender process either way.',
    ],

    countyProcessSection: [
      'Evans County foreclosures are non-judicial Georgia foreclosures. The lender\'s attorney mails the 30-day notice (OCGA § 44-14-162.2), then runs the foreclosure ad in the Claxton Enterprise for four consecutive weeks before sale (OCGA § 44-14-162). The sale runs on the first Tuesday of the month, between 10 AM and 4 PM, at the Evans County Superior Court at 123 West Main Street, Claxton.',
      'Worth knowing: Evans County is part of the six-county Atlantic Judicial Circuit, which also covers Bryan, Liberty, Long, McIntosh, and Tattnall. Superior Court judges rotate among the circuit, and some hearings affecting Claxton residents are heard at the larger Liberty County courthouse in Hinesville. The foreclosure sale itself, however, always happens at the property\'s county courthouse — for Evans, that is Claxton.',
      'The Claxton Enterprise has been the legal organ for Evans County for generations. It is read in town, and a foreclosure ad on its pages becomes local news quickly. There is no way to remove the ad once it is running. A pre-sale closing simply ends what comes next.',
    ],

    timelineSection: [
      'An Evans County foreclosure tends to run on this calendar:',
      'Missed payments build up. Servicer collection efforts begin. Modification or forbearance options sometimes still exist.',
      'A 30-day notice arrives by certified or registered mail (OCGA § 44-14-162.2). The letter identifies the lender entity with authority to negotiate.',
      'The Claxton Enterprise runs the foreclosure ad. Once a week for four weeks. The property\'s address is in bold (OCGA § 44-14-162).',
      'Sale day. First Tuesday of the month. 10 AM to 4 PM. The Evans County Superior Court steps. The high bidder takes the property.',
      'A closing before that date pays off the lender, ends the foreclosure, and stops the next ad. The 30-day notice is canceled by the payoff.',
    ],

    howWeHelpSection: [
      'A Claxton-specific foreclosure file has its own pace. Here is how we work it.',
      'We get the lender\'s real payoff. Smaller Evans County mortgages held by regional or community lenders sometimes take longer to produce a payoff letter than the major servicers. We start that conversation early.',
      'We use a closing attorney familiar with Atlantic Judicial Circuit recording practice. The Evans County clerk\'s recording desk is small, and a clean title package gets through faster when the attorney has a relationship there.',
      'We pay closing costs. No commissions, no listing fees. The offer is the net.',
      'We refer when it fits better. Atlantic Circuit court motions can take longer than denser-circuit motions because of the rotating-judge schedule. If a foreclosure-defense attorney is the right path for your file, we tell you that — and then we step back.',
    ],

    trustSignalsSection: [
      'The way to test whether a buyer actually knows Evans County: ask them what circuit Evans is part of (Atlantic Judicial), where the courthouse is (123 West Main Street, Claxton), and what paper the foreclosure ad runs in (the Claxton Enterprise). Real Southeast Georgia operators know. A wholesale lead-buying operation in a different state usually does not.',
      'We have bought houses in Claxton and the surrounding Evans County communities — including Bellville, Daisy, Hagan, and Manassas. Every Evans foreclosure has the same statute behind it. But the practical experience of the lender, the local attorney, the recording desk, and the local property market is different in this county than it is in Chatham or Bulloch. We work on that reality.',
    ],

    faqs: [
      {
        q: 'My foreclosure paperwork mentions Hinesville. Is that a mistake?',
        a: 'Probably not. Evans County is in the Atlantic Judicial Circuit, and certain Superior Court matters are heard in Hinesville at the Liberty County courthouse. The actual foreclosure sale is still held at the Evans County courthouse in Claxton on the first Tuesday of the month. Hearings tied to your file (motions, orders) may happen elsewhere in the circuit. Read the document carefully — or have a Georgia real-estate attorney look at it.',
      },
      {
        q: 'My Claxton property is part of an inherited estate. Can it still be foreclosed?',
        a: 'Yes, if there is a mortgage on it, the lender can pursue foreclosure regardless of who is currently holding the property in the estate. The estate\'s personal representative — or the heirs — would need to take action to either pay off, modify, or sell the property before the sale date. A Georgia probate or real-estate attorney can advise on the specific mechanics.',
      },
      {
        q: 'Are there special programs for rural Evans County foreclosures?',
        a: 'Sometimes. USDA Rural Development loans have their own loss-mitigation steps. Georgia Legal Services Program offers free legal help to eligible homeowners. Local nonprofit housing counselors (HUD-approved) can review options at no cost. We can point you to those resources — none of them charge — if your file fits.',
      },
      {
        q: 'What if I cannot find my mortgage paperwork?',
        a: 'You can request copies from your lender directly. Georgia recording offices, including Evans County\'s, also keep public records of recorded security deeds — anyone can request a copy from the clerk\'s office for a small fee. A title attorney can pull a full title abstract in a day or two if your timeline is tight.',
      },
      {
        q: 'How does your Claxton offer compare to listing the house with a real-estate agent?',
        a: 'A traditional listing brings the highest possible retail price, but it usually takes 30 to 90+ days, includes commissions and repair negotiations, and depends on the buyer\'s financing. A foreclosure-stage timeline rarely allows for that. Cash offers are below retail in exchange for speed, certainty, and no out-of-pocket costs to you. We share the tradeoff in numbers before you commit.',
      },
    ],

    lateralCitySlugs: ['statesboro-ga', 'vidalia-ga', 'swainsboro-ga'],
  },

  'vidalia-ga': {
    title: 'Stop Foreclosure in Vidalia, GA — Toombs County Cash Buyer',
    metaDescription: 'Foreclosure in Toombs County, GA? Sales run at the Lyons courthouse first Tuesdays. We pay cash for Vidalia houses before the sale date.',
    h1: 'Sell Your Vidalia House Before the Toombs County Foreclosure Sale',

    empatheticOpening: [
      'Vidalia is the population center of Toombs County, but the courthouse is in Lyons — the county seat, eight miles east. For Vidalia homeowners, that distance does not change the foreclosure process, but it does mean the sale, the recording, and the legal paperwork all happen in a different town than where you live.',
      'Toombs foreclosure files often have an agricultural or seasonal-economy backstory. The Vidalia onion harvest, post-harvest cash-flow gaps, off-season layoffs in food processing or trucking — when the household income hits a soft month, a mortgage payment is often what slips first. The legal calendar does not care about onion season. But you can plan around it if you understand it.',
    ],

    countyProcessSection: [
      'Toombs County foreclosures are non-judicial Georgia foreclosures. The lender\'s attorney mails a 30-day notice (OCGA § 44-14-162.2), then runs the foreclosure ad in The Advance — Vidalia\'s designated legal organ — for four consecutive weeks before the sale (OCGA § 44-14-162). The sale itself happens on the first Tuesday of the month, between 10 AM and 4 PM, at the Toombs County Superior Court, 100 Courthouse Square, Lyons.',
      'A few Toombs-specific quirks worth knowing. The Toombs County Tax Commissioner publishes its delinquent tax-sale list "in office only" — meaning if your problem is unpaid property taxes (a separate clock from a mortgage foreclosure), the only way to confirm whether your property is on the upcoming list is to walk into 100 Courthouse Square in Lyons. That is unusual statewide. Mortgage foreclosure ads, by contrast, run publicly in The Advance.',
      'Toombs is part of the Middle Judicial Circuit, the same circuit as Candler and Emanuel. The judicial bench rotates among Middle Circuit counties, but the foreclosure sale is always held at the property\'s home courthouse — Lyons, in this case — by the foreclosing attorney, not by a judge.',
    ],

    timelineSection: [
      'A Toombs County foreclosure tends to follow this clock:',
      'Missed payments. The servicer\'s collection process starts. Modification or repayment-plan options often still exist at this stage.',
      'A 30-day notice mails. OCGA § 44-14-162.2 controls the timing — at least 30 days before the proposed sale — and the content. The letter identifies the entity with authority to modify the loan.',
      'The Advance runs the foreclosure ad. Four consecutive weeks (OCGA § 44-14-162). The address is in bold.',
      'Sale day. First Tuesday of the month. Between 10 AM and 4 PM. Toombs County Superior Court steps in Lyons. By public outcry.',
      'A pre-sale closing pays off the lender, ends the foreclosure, and stops the four-week ad cycle.',
    ],

    howWeHelpSection: [
      'A Vidalia file moves a little differently than the metro-area foreclosures most national cash-buying outfits know how to handle. Here is what we actually do.',
      'We start with the payoff letter. Late fees, attorney fees, and force-placed insurance can add several thousand dollars between the principal balance and the wire amount. We pull the real number first.',
      'We close in Lyons. Our closing attorney records at the Toombs County clerk\'s office at 100 Courthouse Square, Lyons. The recording desk is local — the title package gets through faster when the attorney is known there.',
      'We pay closing costs. No commissions, no listing fees. The offer is the net.',
      'We refer when it fits better. If your Vidalia file would benefit more from a foreclosure-defense attorney, a HUD-approved housing counselor, or a USDA Rural Development restructuring than from a sale, we tell you. A sale is not always the right answer.',
    ],

    trustSignalsSection: [
      'A real Toombs County operator knows the courthouse is in Lyons (not Vidalia), the legal organ is The Advance, the tax-sale list is in-office only, and Toombs is in the Middle Judicial Circuit. They know Cedar Crossing, Ohoopee, Santa Claus, Normantown, and Johnson Corner are all real Toombs communities. Out-of-state buyers learn that on the fly — usually after a contract is already signed.',
      'We work across Toombs and the rest of Southeast Georgia\'s smaller counties — Emanuel (Swainsboro), Candler (Metter), Evans (Claxton), and Bulloch (Statesboro). That gives us a comp set rooted in this stretch of the state. A Vidalia property is priced against actual recent Vidalia sales, not against a generic onion-country average.',
    ],

    faqs: [
      {
        q: 'I live in Vidalia but the foreclosure paperwork says Lyons. Why?',
        a: 'Lyons is the Toombs County seat. All Toombs County legal filings — including the foreclosure sale itself, deed recording, divorce, and probate — happen at the courthouse at 100 Courthouse Square, Lyons. Vidalia is the larger city, but the legal infrastructure is in Lyons. That is normal.',
      },
      {
        q: 'My Vidalia property is on rural acreage with outbuildings. Can you still buy?',
        a: 'Yes. We buy houses on small in-town lots, on agricultural acreage, and on rural parcels with multiple structures. The offer accounts for the actual property — including outbuildings, fencing, well, septic, and any deferred maintenance. We do not lump rural properties into a generic "house" formula.',
      },
      {
        q: 'Does the Vidalia onion-season cash flow gap qualify me for any specific foreclosure help?',
        a: 'There is no specific Vidalia-onion-season foreclosure program, but if your loan is a USDA Rural Development loan or a farm-related loan, those programs have their own loss-mitigation steps. Some Georgia banks also offer agricultural-cycle restructuring informally. A Georgia agricultural-finance attorney can review your loan documents.',
      },
      {
        q: 'I am behind on Toombs County property taxes too. How do I find out?',
        a: 'Walk into the Toombs County Tax Commissioner\'s office at 100 Courthouse Square, Suite 169, Lyons. The delinquent-tax-sale list is published in-office only. The staff there can tell you whether your property is on an upcoming list. If both a mortgage foreclosure and a tax-sale issue are happening, both have to be paid off at closing for clear title — we coordinate that.',
      },
      {
        q: 'Will the foreclosure show up in The Advance for everyone in Vidalia to see?',
        a: 'Yes — the ad has to run for four consecutive weeks before the sale. The Advance is the designated legal organ for Toombs County. The ad shows the property\'s address in bold. There is no way to remove it once it is running. A pre-sale closing, however, ends the foreclosure and stops the next week\'s ad from running.',
      },
    ],

    lateralCitySlugs: ['swainsboro-ga', 'metter-ga', 'claxton-ga'],
  },
}
