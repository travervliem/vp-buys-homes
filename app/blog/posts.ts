import { SITE } from '@/lib/site'

export type Post = {
  slug: string
  title: string
  category: string
  excerpt: string
  body: string
  metaDescription: string
  // Drafts are excluded from the index, sitemap, and static params (they 404).
  // Remove `draft: true` to publish once the copy has been reviewed.
  draft?: boolean
  faqs?: Array<{ q: string; a: string }>
}

type Faq = { q: string; a: string }

// The visible FAQ section is generated from the same list used for FAQPage
// JSON-LD, so the two can never drift apart.
function faqSection(faqs: Faq[]): string {
  return '**Frequently Asked Questions**\n\n' + faqs.map(f => `**${f.q}**\n\n${f.a}`).join('\n\n')
}

const NOT_LEGAL_ADVICE = 'This guide is general information, not legal advice. For advice about your situation, talk with a licensed Georgia attorney.'

const TAX_FAQS: Faq[] = [
  { q: 'Can I sell my Bulloch County property if I owe back taxes?', a: 'Generally, yes. Owing property taxes does not transfer ownership of your home, so you still own it and can sell it. Back taxes are typically found in the title search and paid from the sale proceeds at closing. Ask the Bulloch County Tax Commissioner for your exact balance and confirm the payoff with your closing attorney.' },
  { q: 'How long do I have to redeem my property after a tax sale?', a: 'Under O.C.G.A. § 48-4-40, you can redeem at any time within 12 months from the date of the sale. The right to redeem also continues after that until it is cut off by the notice described in O.C.G.A. § 48-4-45. If a tax sale has already happened, speak with an attorney right away.' },
  { q: 'How much does it cost to redeem after a tax sale?', a: 'Under O.C.G.A. § 48-4-42, the redemption amount starts with the amount paid for the property at the tax sale, as shown in the tax deed, plus a premium: 20 percent of that amount for the first year or fraction of a year between the sale and the redemption, and 10 percent for each year or fraction of a year after that, plus other amounts the statute adds. Ask the Tax Commissioner for an exact figure.' },
  { q: 'Who should I contact first?', a: 'Start with the Bulloch County Tax Commissioner for your exact balance and any options the office offers. For legal advice about a tax sale or redemption, contact a licensed Georgia attorney.' },
]

const INHERIT_FAQS: Faq[] = [
  { q: 'Can I sell an inherited house in Effingham County before probate is finished?', a: 'Usually the person signing the deed needs legal authority to act for the estate, which commonly comes from the probate court. Some sellers accept an offer and set the closing date for after that authority is in place. An estate attorney can tell you what applies to your situation.' },
  { q: 'Do all heirs have to agree to a sale?', a: 'When several people own a property together, the buyer will typically need all of them to sign the deed. If an owner disagrees, an attorney can explain the options, which can add time and cost.' },
  { q: 'Does Georgia have an inheritance tax?', a: 'No. According to the Georgia Department of Revenue, Georgia has no inheritance tax, and since July 1, 2014 the state does not levy an estate tax. Federal tax rules are separate, so consult a CPA about your situation.' },
  { q: 'What is the tax basis of an inherited house?', a: 'Under federal law (26 U.S.C. § 1014), the basis of property acquired from a decedent is generally its fair market value on the date of the decedent’s death. That affects any gain or loss when you later sell. Ask a CPA how it applies to you.' },
]

const FORECLOSURE_FAQS: Faq[] = [
  { q: 'Can I stop a Chatham County foreclosure once a sale date is set?', a: 'Until the sale takes place, there are generally still options, such as bringing the loan current, agreeing a workout with your lender, or selling the property before the sale date. Speak with your lender, a HUD-approved housing counselor, and a licensed Georgia attorney about which fits your situation.' },
  { q: 'How much notice does the lender have to give me?', a: 'Under O.C.G.A. § 44-14-162.2, notice of the proposed foreclosure must be sent to the debtor by registered or certified mail or statutory overnight delivery, return receipt requested, no later than 30 days before the date of the proposed foreclosure.' },
  { q: 'Can I still owe money after a foreclosure sale?', a: 'Possibly. Under O.C.G.A. § 44-14-161, a lender that wants to pursue a deficiency judgment must report the sale to the superior court within 30 days after the sale for confirmation and approval, and no deficiency action may be taken unless that is done. Ask an attorney how this applies to your loan.' },
  { q: 'Where can I get free help?', a: 'HUD-funded housing counseling is available nationwide. You can call (800) 569-4287 to find a HUD-approved housing counseling agency near you.' },
]

const LIEN_FAQS: Faq[] = [
  { q: 'Can I sell my Savannah house if it has a lien on it?', a: 'Often, yes. Liens are typically identified in the title search, and the closing attorney requests payoff amounts and pays them from the sale proceeds. If the sale price covers the liens, the buyer can receive clear title. Your attorney can confirm what applies to your property.' },
  { q: 'What if my liens add up to more than the house is worth?', a: 'Then the proceeds will not cover everything, and the sale usually needs the cooperation of the lienholders, for example a lender agreeing to accept less than the full balance. That takes more time and approval, and an attorney can help.' },
  { q: 'How do I find out what liens are on my property?', a: 'A title search of the public records, which your closing attorney or a title company can run, shows recorded liens. Payoff letters from each lienholder give the exact amounts.' },
  { q: 'Do federal tax liens affect a sale?', a: 'Under 26 U.S.C. § 6321, if a person liable for a federal tax neglects or refuses to pay it after demand, the amount becomes a lien in favor of the United States on all property and rights to property belonging to that person. Talk with a tax professional or attorney before selling a property with a federal tax lien.' },
]

const STATESBORO_FAQS: Faq[] = [
  { q: 'How do I know if a cash offer on my Statesboro home is fair?', a: 'Get more than one offer, and ask each buyer to explain how they reached their number. A fair offer reflects the property’s condition, the repairs it needs, and the buyer’s costs. A trustworthy buyer will walk you through it.' },
  { q: 'Do cash buyers cover closing costs?', a: 'Some do. Whatever is agreed, make sure it is written into the purchase contract and not just mentioned in conversation.' },
  { q: 'How fast can a cash sale close?', a: 'It depends on the property and the title. A straightforward sale can close in as little as a week or two; properties with title issues, liens, back taxes or probate take longer. Typically we see 7 to 21 days from accepted offer to closing.' },
  { q: 'Is it safe to sell my house for cash?', a: 'It can be, if you work with a reputable buyer, read the contract, and close with a licensed attorney who handles the title search and the paperwork. Do not sign over a deed without that.' },
]

export const POSTS: Post[] = [
  {
    slug: 'sell-house-fast-statesboro-ga',
    category: 'Local Guide',
    title: 'Sell Your House Fast in Statesboro, GA: A Complete Guide',
    excerpt: 'Everything Bulloch County homeowners need to know about selling quickly — including what cash buyers look for and how to avoid common mistakes.',
    metaDescription: 'Guide to selling your house fast in Statesboro, GA. Learn how cash buyers work, what affects your offer, and how to close in as little as 7 days.',
    body: `If you need to sell your house in Statesboro fast, you have options — and working with a local cash buyer is often the fastest and simplest path.

Statesboro is the commercial hub of Bulloch County and home to Georgia Southern University. The local real estate market is active, but selling on the open market through a realtor still takes time: weeks to list, showings, buyer financing contingencies, and a closing process that can stretch to 60–90 days.

A cash sale skips nearly all of that.

**What cash buyers look for**

When a local cash buyer evaluates your property, they look at:
- Recent comparable sales in your neighborhood
- The property's current condition and what repairs would be needed
- Location, lot size, and general market demand

You do not need to fix anything. The offer accounts for condition.

**Who typically benefits most from a cash sale**

Cash sales in Statesboro work best for homeowners who:
- Need to sell quickly (foreclosure deadline, job transfer, divorce)
- Have a property that needs significant work and do not want to invest in repairs before selling
- Inherited a property they do not intend to keep
- Are tired of managing a rental and want out fast

**The timeline**

With VP Buys Homes, the process is: submit information → written offer within 48 hours → close in 7–21 days. The closing happens with a local attorney. You choose your date.

If you have questions about selling your Statesboro property for cash, call us directly: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'cash-home-buyers-bulloch-county',
    category: 'Local Guide',
    title: 'Cash Home Buyers in Bulloch County, GA — How the Process Works',
    excerpt: 'What to expect when working with a cash buyer in Bulloch County — from offer to closing.',
    metaDescription: 'Understand how cash home buyers work in Bulloch County, GA. From offer to close, here is what sellers in Statesboro and surrounding areas can expect.',
    body: `Bulloch County has a straightforward market, but selling a home the traditional route still involves months of uncertainty. Cash buyers remove that uncertainty.

**How the offer is calculated**

Cash buyers in Bulloch County look at:
- Comparable sales in your specific neighborhood (Statesboro, Portal, Register, Brooklet)
- Property condition — the offer reflects what it would cost to bring the house to market condition
- Your timeline and any circumstances affecting the sale

The offer you receive is a net number — what you walk away with. There are no commissions subtracted afterward.

**What happens at closing**

Cash purchases close at a local title company or attorney's office. The closing attorney handles the title search and paperwork. You sign, the deed transfers, and you receive your funds — typically via wire transfer the same day.

**Common questions**

*Do I need to be present for closing?* Generally yes, but remote signing can sometimes be arranged.

*Can you close if there is a mortgage?* Yes. The proceeds pay off your existing mortgage first, and you receive the remainder.

*What if the house has code violations or unpermitted work?* We buy as-is. Code violations and unpermitted additions are factored into our offer — not a deal-breaker.

If you own a property in Bulloch County you need to sell, reach out: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'sell-a-house-as-is-georgia',
    category: 'Seller Guide',
    title: 'Selling a House As-Is in Georgia: What to Expect',
    excerpt: 'An as-is sale means you do not make repairs. Here is what that actually means for your net proceeds, timeline, and options in Southeast Georgia.',
    metaDescription: 'Learn what selling a house as-is in Georgia means for your net proceeds, timeline, and options. Complete guide for Southeast Georgia homeowners.',
    body: `An as-is sale means you list or sell the property in its current condition — no repairs, no touch-ups, no cleaning required.

In Georgia, as-is sales are common in two scenarios: bank-owned (REO) properties and direct cash purchases. Most traditional buyer financing (FHA, USDA, VA) comes with appraisal requirements that can flag needed repairs — which is why as-is sales often work best with cash buyers who have no lender requirements.

**How condition affects your offer**

A cash buyer factors condition into the offer price. They are not asking you to repair the roof — they are pricing in what that repair will cost them after purchase. This is standard and fair: you save the time and cost of managing repairs yourself, and accept a price that reflects the work needed.

For properties with major issues (foundation, roof, HVAC systems, mold, fire damage), the discount can be significant — but the tradeoff is speed and certainty with zero out-of-pocket expense.

**Georgia disclosure requirements**

Even in an as-is cash sale, Georgia law requires sellers to disclose known material defects. A reputable cash buyer will not expect you to hide problems — they are buying as-is precisely because they have the resources and expertise to handle them.

**When as-is makes sense**

As-is cash sales work best when:
- The cost of repairs exceeds what you can or want to spend
- Time matters more than maximizing price
- The property is in an estate or inherited situation
- You are facing foreclosure, divorce, or another deadline

Questions about selling as-is in Southeast Georgia? Call: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'stop-foreclosure-options',
    category: 'Foreclosure Help',
    title: 'Options to Stop Foreclosure in Southeast Georgia',
    excerpt: 'If you are behind on payments in Statesboro, Rincon, or Savannah, these are your options — and why timing matters more than anything.',
    metaDescription: 'Options to stop or avoid foreclosure in Southeast Georgia. Learn what Statesboro and Bulloch County homeowners can do when behind on mortgage payments.',
    body: `Foreclosure in Georgia moves faster than most states. Once a lender begins the process, you may have as little as 37 days before a sale date is set. If you are behind on payments in Bulloch County, Effingham County, or anywhere in Southeast Georgia, time is the most critical factor.

**Your options when behind on payments**

1. **Loan modification** — Contact your lender immediately and request a modification. Lenders often prefer to avoid foreclosure and may extend terms, reduce interest, or add missed payments to the loan balance. This takes time to negotiate.

2. **Repayment plan** — If you missed payments due to a temporary hardship, your lender may allow you to catch up over several months alongside regular payments.

3. **Forbearance** — A temporary pause or reduction in payments. Available in specific circumstances (job loss, illness). Payments are not forgiven — they are deferred.

4. **Sell the property quickly** — If you cannot catch up and a modification is not available, a quick cash sale before the auction date stops the foreclosure, preserves your credit from a foreclosure judgment, and may leave you with proceeds after the mortgage is paid off.

**Why a fast sale can be the best option**

A foreclosure on your credit report affects you for 7 years. A sale — even at a price below what you hoped — closes out the obligation cleanly. If the sale price exceeds what you owe (after payoff and costs), you keep the difference.

VP Buys Homes has helped homeowners in Statesboro, Rincon, Metter, and Springfield sell before the auction date. We move fast and work directly with your lender's payoff team.

If you are facing foreclosure, do not wait. Call: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'how-to-sell-inherited-property-georgia',
    category: 'Estate & Probate',
    title: 'How to Sell an Inherited Property in Southeast Georgia',
    excerpt: 'Inherited a house in Statesboro or surrounding Southeast Georgia? Here is how to navigate the sale — including what to do if probate is involved.',
    metaDescription: 'Guide to selling an inherited property in Southeast Georgia. What to do in probate, how to sell as-is, and how cash buyers can simplify the process.',
    body: `Inheriting a property is often more complicated than it sounds. If you have inherited a house in Bulloch County, Effingham County, or elsewhere in Southeast Georgia, here is what you need to know.

**Is the estate in probate?**

If the deceased left a will, the estate goes through probate — a legal process that formally transfers ownership. In Georgia, probate is handled through the county probate court. Until probate closes, you technically cannot sell the property (though some exceptions exist).

If there was no will, the property passes according to Georgia intestacy law, which may involve multiple heirs. All heirs typically must agree to a sale.

A cash buyer experienced with estate transactions will work with your attorney and wait for probate to clear — or advise you on timing.

**What condition does the property need to be in?**

None. Inherited properties often sit for months or years before heirs decide to sell, and deferred maintenance accumulates. Cash buyers purchase as-is. You do not need to clean out the house, make repairs, or update anything.

**Common scenarios**

- *Property is in another city or state* — You do not need to be present for closing (with some arrangements)
- *Multiple heirs* — All parties must agree; cash buyers can help facilitate a clean resolution
- *Back taxes owed* — These are typically resolved at closing from proceeds
- *Tenants in place* — We buy occupied rental properties

If you have inherited a property in Southeast Georgia and need to sell, reach out: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'selling-rental-property-georgia',
    category: 'Landlord Resources',
    title: 'Tired Landlord? How to Sell Your Rental Property Fast in Southeast Georgia',
    excerpt: 'If you are done with being a landlord in Statesboro or surrounding Georgia, here are your options — including selling with tenants in place.',
    metaDescription: 'How to sell your rental property fast in Southeast Georgia. Options for landlords in Statesboro, Rincon, and Savannah — including selling occupied properties.',
    body: `Managing rental property is not passive income. If you are a landlord in Statesboro, Rincon, Savannah, or anywhere in Southeast Georgia who is done dealing with tenants, repairs, and vacancies — you are not alone.

**Selling a rental: your options**

**1. Wait for the lease to expire, then list**
This is the cleanest traditional route but involves waiting, potentially months, before you can show the property freely.

**2. Sell with tenants in place**
Cash buyers purchase occupied properties. The tenant either stays (new owner takes over the lease) or is given notice per Georgia landlord-tenant law. This is often the fastest path.

**3. Negotiate a buyout with your tenant**
Offer the tenant a cash payment to vacate voluntarily. This can accelerate a traditional sale with faster showings and an empty property.

**What cash buyers look for in rental properties**

- Current rent roll and lease terms
- Tenant payment history (if you have records)
- Property condition — we buy as-is regardless

A property with a problem tenant, deferred maintenance, or code violations is still purchasable. We factor condition and situation into our offer.

**Georgia landlord-tenant considerations**

Georgia is a relatively landlord-friendly state. Month-to-month tenants require written notice to vacate (typically 60 days). Fixed-term leases run with the property — the new owner inherits them.

If you are a tired landlord in Southeast Georgia ready to exit, call: ${SITE.phoneDisplay}.`,
  },
  {
    slug: 'property-tax-delinquency-bulloch-county-georgia',
    category: 'Tax & Financial Help',
    title: 'What Happens If You Cannot Pay Property Taxes in Bulloch County, Georgia',
    excerpt: 'Behind on property taxes in Bulloch County? Here is how a tax sale and the redemption period work under Georgia law, and the options you have before and after a sale.',
    metaDescription: 'What happens when you cannot pay property taxes in Bulloch County, GA: tax sales, the 12-month redemption period, and your options, including selling before a sale.',
    faqs: TAX_FAQS,
    body: `If you cannot pay your property taxes in Bulloch County, you are not out of options. The process after a missed payment is time-sensitive, though, and knowing how it works is the first step to protecting your home.

The short answer: if property taxes stay unpaid, Georgia law allows the property to be sold at a tax sale, and the owner has a right to redeem afterward. Before that point, you may be able to work something out with the county, or sell the property and have the back taxes paid from the proceeds. ${NOT_LEGAL_ADVICE}

**Start With the Tax Commissioner**

The Bulloch County Tax Commissioner administers property tax collection from Statesboro. Your first call should be there. Ask for your exact balance, whether any enforcement steps have started, what payment options the office offers, and which exemptions and deadlines may apply to you. Getting precise numbers early helps every decision that follows.

**Georgia Tax Sales and the Right to Redeem**

Georgia gives the owner a right to redeem property after a tax sale. Under O.C.G.A. § 48-4-40, you can redeem at any time within 12 months from the date of the sale, and the right to redeem continues after that until it is cut off by the notice described in O.C.G.A. § 48-4-45.

Redeeming costs more than the original tax debt. Under O.C.G.A. § 48-4-42, the amount starts with what was paid for the property at the sale, as shown in the tax deed, plus a premium of 20 percent of that amount for the first year or fraction of a year between the sale and the redemption, and 10 percent for each year or fraction of a year after that, plus other amounts the statute adds. The Tax Commissioner can give you an exact figure.

If a tax sale has already happened, speak with a licensed Georgia attorney right away. Deadlines matter.

**Selling Before a Tax Sale**

Owing back taxes does not stop you from selling your home. In a typical sale, the closing attorney runs a title search, identifies what is owed against the property, gets payoff amounts, and pays those from the proceeds before sending you what remains. That is why a sale can resolve a tax problem without you finding cash first. Confirm the payoff with the Tax Commissioner and your closing attorney.

**Your Options**

1. **Contact the Tax Commissioner** — Ask about your balance, payment options, and any steps already taken.
2. **Ask about exemptions** — Find out which exemptions you may qualify for and what the filing deadlines are.
3. **Sell the property** — A sale before a tax sale can pay off the taxes from the proceeds and may leave you with money after the debt is cleared.
4. **If a sale has happened, look at redemption** — Ask an attorney and the Tax Commissioner about the 12-month right and the amount required.
5. **Talk to an attorney** — A licensed Georgia attorney can review your situation and your deadlines.

**Working With a Cash Buyer in Bulloch County**

VP Buys Homes buys houses in [Statesboro and throughout Bulloch County](/areas/statesboro-ga), including homes with unpaid property taxes. We close with a local closing attorney, who handles the title search and the payoffs as part of the transaction. You do not need to resolve the tax balance before asking for an offer.

If time is short, tell us the date you are working against. Learn more about [how the process works](/how-it-works), go to our [sell page](/sell) to request a cash offer, or call us at ${SITE.phoneDisplay}.

${faqSection(TAX_FAQS)}`,
  },
  {
    slug: 'sell-inherited-house-effingham-county-georgia',
    category: 'Estate & Probate',
    title: 'How to Sell an Inherited House in Effingham County, Georgia',
    excerpt: 'Inherited a property in Effingham County? Here is what to sort out first, how multiple heirs and probate can affect a sale, and how an as-is cash sale works.',
    metaDescription: 'How to sell an inherited house in Effingham County, GA: what to sort out before you sell, multiple heirs, taxes on inherited property, and how an as-is cash sale works.',
    faqs: INHERIT_FAQS,
    body: `Inheriting a house in Effingham County can feel like a gift and a burden at the same time. Between court paperwork, family decisions, deferred maintenance, and the logistics of managing a property you may not live near, the path to selling can look unclear. This guide covers the practical steps and what you can do to simplify them. ${NOT_LEGAL_ADVICE}

The short answer: before an inherited house can be sold, the person signing the deed needs legal authority to do so. In many cases that authority comes through the probate court, and an estate attorney can tell you what applies to your family's situation. Once that is settled, the property can be sold as-is for cash, with no repairs and no cleanout required.

**Who Can Sign the Deed?**

How the property was owned and whether there is a will both affect who can sign. Property owned by the deceased person alone commonly goes through probate. Property owned jointly, or held in a trust, may follow different paths. Ask an estate attorney which one applies, because the answer decides who has to sign at closing and what documents the closing attorney will need.

**Several Heirs, One House**

When several people own a property together, a buyer will typically need all of them to sign the deed. Heirs who live in different places can often sign remotely. If one owner disagrees about selling, an attorney can explain the options, which can add time and legal cost. A buyer who is used to estate sales can often make the logistics easier for everyone.

**Taxes on Inherited Property**

Georgia has no inheritance tax, and since July 1, 2014 it does not levy an estate tax, according to the Georgia Department of Revenue. Federal rules are separate. Under 26 U.S.C. § 1014, the basis of property acquired from a decedent is generally its fair market value on the date of the decedent's death, which affects any gain or loss when you later sell. Ask a CPA how this applies to you.

**Condition Does Not Matter**

Inherited houses often sit vacant while the family decides what to do. Belongings remain inside and maintenance gets deferred. We buy as-is. You do not need to clean out the house, make repairs, or stage anything, and our offer takes the condition into account.

**Common Situations**

| Situation | What it means for the sale |
| --- | --- |
| One heir, no debts on the property | Usually the simplest path; confirm signing authority first |
| Several heirs | A buyer will typically need every owner to sign |
| An heir lives out of state | Closing paperwork can often be handled remotely |
| Back taxes owed | Typically paid from the proceeds at closing |
| Tenants in the property | We can discuss buying it occupied |
| The house needs major repairs | An as-is sale means no repairs on your side |
| Court authority not yet in place | You can talk with us now and plan the closing date around it |

**What to Expect at Closing**

We close with a local closing attorney, who handles the title search, any payoffs, and the deed. Everyone whose signature is needed signs the closing documents. A typical timeline from accepted offer to closing is 7 to 21 days, and the date can be set around what your family and attorney need.

Effingham County includes communities like [Rincon](/areas/rincon-ga) and [Springfield](/areas/springfield-ga). To get started, visit our [sell page](/sell) or call ${SITE.phoneDisplay}.

${faqSection(INHERIT_FAQS)}`,
  },
  {
    slug: 'avoid-foreclosure-chatham-county-georgia',
    category: 'Foreclosure Help',
    title: 'How to Avoid Foreclosure in Chatham County, Georgia',
    excerpt: 'Behind on payments in Chatham County? Here is how Georgia foreclosure sales work, what notice you are entitled to, and the options to look at before the sale date.',
    metaDescription: 'How to avoid foreclosure in Chatham County, GA: how Georgia foreclosure sales work, the notice you must receive, deficiency judgments, and options like a lender workout or a fast sale.',
    faqs: FORECLOSURE_FAQS,
    body: `If you own a home in Chatham County and you are falling behind on your mortgage, acting early gives you the most options. This guide explains how a Georgia foreclosure sale works and what you can do before the sale date. ${NOT_LEGAL_ADVICE}

The short answer: in Georgia, a lender can foreclose by selling the property at a public sale at the courthouse. Before the sale, the lender must send you notice, and until the sale happens you generally still have choices: work something out with your lender, get help from a housing counselor, or sell the property yourself.

**How the Sale and Notice Work**

Georgia law ties the sale to the way sheriff's sales are run. Under O.C.G.A. § 44-14-162, a sale under power is held at the time and place and in the usual manner of the sheriff's sales in the county. Sheriff's sales, under O.C.G.A. § 9-13-161, are held at the courthouse on the first Tuesday of the month between 10:00 a.m. and 4:00 p.m. (moving to the following Wednesday if the first Tuesday is a holiday). In Chatham County, the courthouse is in Savannah.

Before the sale, the lender must send you notice. Under O.C.G.A. § 44-14-162.2, notice of the proposed foreclosure must be sent to the debtor by registered or certified mail or statutory overnight delivery, return receipt requested, no later than 30 days before the date of the proposed foreclosure. If you receive that notice, treat the date in it as a deadline.

**Can You Owe Money After the Sale?**

Possibly. Under O.C.G.A. § 44-14-161, a lender that wants to pursue a deficiency judgment must report the sale to the superior court within 30 days after the sale for confirmation and approval, and no deficiency action may be taken unless that is done. Ask an attorney how this could apply to your loan.

**Your Options Before the Sale Date**

**Talk to your lender**

Call your servicer, ask for the loss mitigation department, and explain your situation. Depending on your loan, options may include a loan modification, a repayment plan, a forbearance, or reinstatement by paying what is past due. Get any agreement confirmed in writing.

**Get free counseling**

HUD funds housing counseling nationwide. You can call (800) 569-4287 to find a HUD-approved housing counseling agency near you. A counselor can help you understand your options and work with your lender.

**Talk to an attorney**

A licensed Georgia attorney can review your notice, your loan and your options, including how any deadline applies to you.

**Sell the property**

If a workout is not possible, selling before the sale date can pay off the mortgage from the proceeds and may leave you with money if you have equity. If you owe more than the home is worth, a sale usually needs your lender's cooperation, and an attorney or counselor can help you understand that route.

**How a Cash Sale Works When Time Is Short**

VP Buys Homes buys houses in [Savannah](/areas/savannah-ga) and across Chatham County. We close with a local closing attorney, who requests the payoff from your lender and handles the paperwork. A typical timeline from accepted offer to closing is 7 to 21 days. You do not need to make repairs or clean out the property.

If a sale date is coming up, tell us the date when you reach out. Learn how it works on our [how it works page](/how-it-works), go to our [sell page](/sell) to request a cash offer, or call ${SITE.phoneDisplay}.

${faqSection(FORECLOSURE_FAQS)}`,
  },
  {
    slug: 'selling-house-with-liens-savannah-georgia',
    category: 'Seller Guide',
    title: 'Selling a House With Liens in Savannah, Georgia',
    excerpt: 'A lien does not automatically stop a Savannah home sale. Here is how title searches and payoffs work, the kinds of liens you might see, and when a sale gets complicated.',
    metaDescription: 'How to sell a house with liens in Savannah, GA: how title searches and payoffs work at closing, common lien types, and what happens when liens exceed the home’s value.',
    faqs: LIEN_FAQS,
    body: `A lien on your Savannah property does not automatically mean you cannot sell it. In many sales, liens are identified in the title search and paid from the proceeds at closing, and you receive whatever remains. ${NOT_LEGAL_ADVICE}

The short answer: the closing attorney runs a title search, finds the recorded liens, requests a payoff from each lienholder, and pays them at settlement. If the sale price covers them, the buyer can receive clear title. When it does not, the sale needs more negotiation and the lienholders' cooperation.

**What Is a Lien?**

A lien is a claim against a property, usually for money owed, that has to be dealt with before the property can transfer with clear title. Recorded liens appear in a title search of the public records.

**Common Types of Liens**

**Mortgage liens** come from borrowing against the property. They are the most common and are paid off from the sale proceeds. If you owe more than the home is worth, you would need your lender's agreement to a short sale.

**Judgment liens** can arise when someone obtains a court judgment against you. Whether and how a judgment attaches to your property depends on the facts, so ask your attorney.

**Contractor liens** (often called mechanic's liens) are claimed by contractors or suppliers who say they were not paid for work on the property.

**Federal tax liens.** Under 26 U.S.C. § 6321, if a person liable for a federal tax neglects or refuses to pay it after demand, the amount becomes a lien in favor of the United States on all property and rights to property belonging to that person. Talk with a tax professional or attorney before selling a property with a federal tax lien.

**State tax and property tax liens** can also appear in a title search.

**Homeowner association (HOA) claims** can appear if dues or assessments go unpaid.

**Child support or other court-ordered obligations** can also lead to recorded claims. Your attorney can tell you how any of these apply.

**How a Title Search and Payoff Work**

Before closing, the closing attorney searches the public records for liens and other title problems, asks each lienholder for a payoff letter, and pays them from the proceeds at closing. Once paid, each lienholder should release its lien, and the closing attorney follows up on that.

If the total of the liens is more than the sale price, some creditors will not be paid in full. That is when a short sale or negotiation with lienholders may be needed, and it takes more time.

**Why a Cash Sale Can Work Well With Liens**

A cash buyer does not depend on mortgage financing, so there is no lender appraisal or underwriting on the buyer's side to slow down or derail a complicated title. The closing attorney still has to resolve the liens.

VP Buys Homes buys houses in [Savannah and across Chatham County](/areas/savannah-ga), including properties with liens. You do not need to resolve them before asking for an offer. For more on selling in as-is condition, see our guide to [selling a house as-is in Georgia](/blog/sell-a-house-as-is-georgia). To request an offer, visit our [sell page](/sell) or call ${SITE.phoneDisplay}.

${faqSection(LIEN_FAQS)}`,
  },
  {
    slug: 'cash-home-buyers-statesboro-georgia-guide',
    category: 'Local Guide',
    title: 'Cash Home Buyers in Statesboro, Georgia: What to Know',
    excerpt: 'Considering a cash sale in Statesboro? Here is how cash offers are worked out, how to size up a buyer, and what the process looks like.',
    metaDescription: 'Cash home buyers in Statesboro, Georgia: how cash offers are calculated, how to vet a buyer, how a cash sale compares with listing, and what to expect at closing.',
    faqs: STATESBORO_FAQS,
    body: `If you are thinking about selling your Statesboro home to a cash buyer, you probably have two questions: how does it work, and how do I know I am being treated fairly? Both are reasonable. This guide covers how cash offers are worked out, how to size up a buyer, and what the process looks like.

The short answer: a cash buyer purchases your home directly, without mortgage financing, so there is no lender appraisal or underwriting to wait on. You submit your property information, receive a written offer within 48 hours, and if you accept, you choose a closing date with a local closing attorney. Typically we see 7 to 21 days from accepted offer to closing. There are no commissions and no repair requirements on your side. The tradeoff is that the offer is usually lower than what a fully renovated home might bring on the open market, because the buyer is pricing in repairs, costs and risk.

**What Cash Home Buyers Do**

A cash home buyer purchases residential property directly from owners without a mortgage. Many then repair and resell the property; some keep it as a rental. Either way, the price they can offer has to leave room for the work and the costs.

**How a Cash Offer Is Worked Out**

Buyers generally start from what the home might sell for once repaired, then subtract repair costs, carrying and closing costs, and a margin. Here is an illustration, not a quote:

- Estimated value after repairs: $185,000
- Estimated repairs: minus $45,000
- Costs and margin: minus $20,000
- Resulting offer: $120,000

Real numbers depend on the property. A good buyer will walk you through theirs.

**Cash Sale vs. Listing**

| Factor | Cash sale | Traditional listing |
| --- | --- | --- |
| Repairs | None required of you | Often done before listing to get the best price |
| Showings | None | Showings while it is on the market |
| Agent commissions | None | Commissions to agents |
| Buyer financing | None | The buyer's loan has to be approved |
| Timing | You pick a closing date | Depends on the market and the buyer's financing |
| Price | Usually below a fully renovated sale | Can be higher for a home in good condition |

**When a Cash Sale Makes Sense**

If your home is in excellent shape and you are not in a hurry, listing with an agent may bring a higher price. A cash sale tends to make sense when:

- The home needs repairs you cannot or do not want to pay for
- You are working against a deadline, such as foreclosure, divorce, probate or a move
- You inherited a property you do not plan to keep
- You are a landlord ready to exit
- The property has liens, back taxes or other title complications
- You value speed and certainty over getting the highest price

**How to Size Up a Cash Buyer**

- **Are they local?** A buyer in Southeast Georgia knows the market and the local closing attorneys.
- **Can they show proof of funds?** Ask for a bank statement or letter confirming funds before you sign.
- **Who closes the deal?** Ask which attorney handles the closing and where they are located.
- **Does the contract allow the buyer to assign it?** Some buyers plan to pass the contract to another buyer for a fee. Ask directly who will actually be buying your home.
- **Is earnest money involved?** Ask what is offered and under what terms.
- **Are you being rushed?** A fair buyer gives you time to read the contract and talk to an attorney.

**About Statesboro**

Statesboro is the commercial and educational center of Bulloch County and home to Georgia Southern University. We buy houses in [Statesboro and throughout Bulloch County](/areas/statesboro-ga).

**What to Expect With VP Buys Homes**

1. **Submit your property** — Use our [sell page](/sell) or call ${SITE.phoneDisplay}. We ask for the address, the condition, and your timeline.
2. **Receive a written offer** — We deliver a written cash offer within 48 hours.
3. **Choose your closing date** — If you accept, we open title with a local closing attorney and you pick the date.
4. **Close** — You sign the closing documents with the attorney.

There are no commissions, no fees, and no repairs required. For the full process, see our [how it works page](/how-it-works).

${faqSection(STATESBORO_FAQS)}`,
  },
]

export const PUBLISHED_POSTS = POSTS.filter(p => !p.draft)
