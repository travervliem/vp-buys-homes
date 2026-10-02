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
    draft: true,
    slug: 'property-tax-delinquency-bulloch-county-georgia',
    category: 'Tax & Financial Help',
    title: 'What Happens If You Cannot Pay Property Taxes in Bulloch County, Georgia',
    excerpt: 'Facing delinquent property taxes in Bulloch County? Here is exactly what happens under Georgia law — fi.fa. liens, tax sales, redemption periods, and your options before the county auctions your property.',
    metaDescription: 'What happens when you cannot pay property taxes in Bulloch County, GA. Learn about fi.fa. liens, tax sales, the 12-month redemption period, and your options under Georgia law.',
    faqs: [
      { q: "Can I sell my Bulloch County property even if a fi.fa. has been recorded?", a: "Yes. A fi.fa. is a lien on the property, not a transfer of ownership. You retain the right to sell, and the fi.fa. is paid off at closing from the sale proceeds. The buyer receives clean title." },
      { q: "How much notice does Bulloch County give before a tax sale?", a: "Georgia law requires four consecutive weeks of advertising in the county legal organ before the sale date. You should also receive a mailed notice, but mail delivery is not guaranteed. If you have a delinquent account, contact the Tax Commissioner directly rather than waiting." },
      { q: "What happens to excess proceeds if my property sells at auction for more than I owe?", a: "Surplus proceeds above the tax debt, penalties, and costs belong to the original property owner. After the sale, you can file a claim with Bulloch County to receive the excess." },
      { q: "Does a property tax sale affect my credit report?", a: "A tax sale is a public records event but is not directly reported to credit bureaus the way a mortgage foreclosure is. Related court judgments or collection actions may appear on your report." },
    ],
    body: `If you cannot pay your property taxes in Bulloch County, you are not alone — and you are not out of options. But the process that follows delinquency in Georgia is time-sensitive, and understanding exactly what happens is the first step to protecting yourself.

The short answer: Bulloch County will eventually sell your property at a public tax auction if the debt is not resolved. Sales are held on the first Tuesday of each month at the county courthouse in Statesboro. Before it reaches that point, you have several options — including a fast cash sale that pays off the tax lien from the closing proceeds, so you do not need to come to the table with cash.

**Bulloch County Property Tax Basics**

Bulloch County property tax bills are mailed in late summer and due by December 20 each year. The Bulloch County Tax Commissioner administers collection from the courthouse in Statesboro. If your bill is unpaid by December 20, Georgia law (O.C.G.A. § 48-2-40) imposes a one-time 10 percent penalty on the unpaid principal plus one percent monthly interest on the outstanding balance. On a $3,000 tax bill, that is $300 in penalties on day one — plus $30 for every month that follows.

**What Is a Fi.Fa.?**

Once a tax account remains delinquent past a threshold the county sets internally, the Tax Commissioner issues a fi.fa. — short for fieri facias — a tax execution that formally certifies the debt and attaches to your property as a recorded lien. The fi.fa. is filed in the Superior Court records of Bulloch County and appears on any title search. A recorded fi.fa. clouds your title: you cannot sell or refinance the property cleanly until it is resolved. However, it does not prevent you from selling — the lien is paid off at closing from the sale proceeds.

**Georgia Tax Sales: How They Work**

If delinquency continues, Bulloch County can proceed to a tax sale under O.C.G.A. § 48-4-1 et seq. The county must advertise the property in the legal organ of Bulloch County — the Statesboro Herald — once per week for four consecutive weeks before the sale date. Tax sales are conducted on the first Tuesday of the month at the Bulloch County Courthouse in Statesboro.

At the sale, the property is auctioned to the highest bidder. The minimum bid is the total owed: back taxes, penalties, interest, and administrative fees. A third party who wins the bid receives a tax sale deed — not a warranty deed, but a deed that can ultimately become full title if the original owner does not redeem.

**The 12-Month Redemption Window**

Georgia law grants property owners a right of redemption after a tax sale. Under O.C.G.A. § 48-4-40, you have 12 months from the date of the sale to redeem the property by paying the purchaser the full sale price plus a 20 percent premium.

If you redeem within 12 months, the tax sale deed is cancelled and your title is restored. If the window expires without redemption, the tax sale purchaser can file for a barment of redemption in Superior Court — permanently cutting off your ability to reclaim the property.

**How Back Taxes Are Handled in a Property Sale**

A recorded fi.fa. or delinquent tax bill does not prevent you from selling. At closing, the attorney conducts a title search, identifies all outstanding liens including back taxes, and pays them from the proceeds before distributing the remainder to you.

| Situation | What Happens at Closing |
| --- | --- |
| Delinquent taxes, no tax sale yet | Paid from proceeds; title transfers clean |
| Fi.fa. recorded | Paid from proceeds; fi.fa. released |
| Tax sale occurred, within redemption window | Purchaser must be paid out; more complex |
| Redemption period expired | Legal action required; act before this point |

**Your Options If You Cannot Pay**

1. **Contact the Tax Commissioner's office directly** — While Georgia does not mandate installment plans for delinquent taxes, many counties will negotiate informally with property owners before accelerating to sale. Contact the Bulloch County Tax Commissioner in Statesboro before the fi.fa. is issued.
2. **Apply for exemptions** — If you have not filed for the Bulloch County homestead exemption, do so. Standard, senior, and disability exemptions can substantially reduce your annual tax obligation. The filing deadline is April 1.
3. **Request a penalty waiver** — Georgia law allows penalty waivers in certain hardship circumstances. This reduces the total owed but does not forgive the underlying tax principal.
4. **Sell before the tax sale date** — A cash sale before the first Tuesday auction eliminates the county's claim, stops the process entirely, and may leave you with proceeds after the debt is cleared. This is often the fastest and most complete resolution available.
5. **Redeem after a tax sale** — If the sale has already occurred and you are within the 12-month window, you can still reclaim the property by paying the full redemption amount to the tax deed purchaser.
6. **Consult a real estate attorney** — A Georgia attorney can review the county's process for procedural errors, evaluate your exemption eligibility, or guide you through the redemption process.

**Working With a Cash Buyer in Bulloch County**

VP Buys Homes purchases properties in [Statesboro and throughout Bulloch County](/areas/statesboro) — including homes with delinquent taxes, recorded fi.fa. liens, and scheduled tax sale dates. The closing attorney handles the payoff as part of the transaction. You do not need to resolve the tax situation before reaching out or accepting an offer.

If a tax sale has been scheduled, timing is critical. Our typical timeline is 7 to 21 days from offer to close — fast enough to beat most scheduled auction dates. Learn more about [how the process works](/how-it-works), or go to our [sell page](/sell) to request a cash offer. You can also call us at (912) 515-6060.

**Frequently Asked Questions**

**Can I sell my Bulloch County property even if a fi.fa. has been recorded?**

Yes. A fi.fa. is a lien on the property, not a transfer of ownership. You retain the right to sell, and the fi.fa. is paid off at closing from the sale proceeds. The buyer receives clean title.

**How much notice does Bulloch County give before a tax sale?**

Georgia law requires four consecutive weeks of advertising in the county legal organ before the sale date. You should also receive a mailed notice, but mail delivery is not guaranteed. If you have a delinquent account, do not wait — contact the Tax Commissioner's office directly.

**What happens to excess proceeds if my property sells at auction for more than I owe?**

Surplus proceeds above the tax debt, penalties, and costs belong to the original property owner. After the sale, you can file a claim with Bulloch County to receive the excess.

**Does a property tax sale affect my credit report?**

A tax sale is a public records event but is not directly reported to credit bureaus the way a mortgage foreclosure is. Related court judgments or collection actions may appear on your report.`,
  },
  {
    draft: true,
    slug: 'sell-inherited-house-effingham-county-georgia',
    category: 'Estate & Probate',
    title: 'How to Sell an Inherited House in Effingham County, Georgia',
    excerpt: 'Inherited a property in Effingham County? Here is how to navigate probate, handle multiple heirs, and sell the property — with no repairs and no cleanup required.',
    metaDescription: 'How to sell an inherited house in Effingham County, GA. Covers the probate process in Springfield, multiple-heir situations, as-is cash sales, and what to expect at closing.',
    faqs: [
      { q: "Can I sell an inherited house in Effingham County before probate is complete?", a: "Not technically — title cannot transfer until the Personal Representative has legal authority. However, you can accept an offer and set a closing date after probate is expected to clear. A cash buyer can accommodate this timeline." },
      { q: "Do all heirs have to agree to sell an inherited property in Georgia?", a: "Yes, if the property is held as tenants in common, which is the default when multiple heirs inherit real property. All owners must sign the deed at closing. If an heir is unwilling, the others may petition for partition in Superior Court, but this adds time and legal expense." },
      { q: "How long does probate take in Effingham County, Georgia?", a: "A simple estate with a valid will, no creditor disputes, and cooperative heirs typically takes four to eight months. More complex estates can take a year or longer." },
      { q: "What taxes do heirs owe when selling an inherited property in Georgia?", a: "Georgia has no state inheritance tax. At the federal level, inherited property receives a stepped-up cost basis equal to fair market value on the date of death, so capital gains taxes apply only to appreciation after inheritance. Consult a CPA for your specific situation." },
    ],
    body: `Inheriting a house in Effingham County can feel like receiving a gift and a burden at the same time. Between probate court procedures, family decisions, deferred maintenance, and the logistics of managing a property you may not live near, the path to selling often seems unclear. This guide walks through exactly how the process works in Georgia — and what you can do to simplify it.

The short answer: before you can sell an inherited property in Effingham County, you need legal authority to act on behalf of the estate. In most cases that means going through probate in the Effingham County Probate Court in Springfield, Georgia. Once you have that authority, you can sell the property as-is, for cash, with no repairs required.

**Does the Estate Need to Go Through Probate?**

In Georgia, probate is the legal process that formally transfers ownership of a deceased person's assets to heirs or beneficiaries. Whether you need probate depends on how the property was titled:

- Property owned solely by the deceased requires probate before it can be sold. The estate must be opened in the Effingham County Probate Court, located at the courthouse in Springfield.
- Property held in joint tenancy with right of survivorship passes automatically to the surviving joint tenant. A copy of the death certificate is typically all that is needed.
- Property held in a living trust transfers according to the trust document without probate. The successor trustee handles the sale.
- Property with a valid transfer-on-death deed recognized under O.C.G.A. § 44-17-1 et seq. passes directly to the named beneficiary without probate.

For the majority of inherited properties in Effingham County, the deceased held sole ownership, and probate is required.

**Opening Probate in Effingham County**

Probate in Georgia is governed by O.C.G.A. § 53-1-1 et seq. The Effingham County Probate Court is located at the courthouse in Springfield, Georgia. To open an estate:

1. **File the original will** — If one exists, file it with the Probate Court along with a petition for probate and the applicable filing fee.
2. **Appointment of the Personal Representative** — The Probate Judge appoints a Personal Representative — Executor if named in the will, Administrator if no will exists.
3. **Letters issued** — The Personal Representative receives Letters Testamentary or Letters of Administration, authorizing them to act on behalf of the estate.
4. **Creditors notified and debts resolved** — The Personal Representative notifies creditors, resolves outstanding debts, and distributes remaining assets — including real property — to the heirs.

A straightforward estate with a valid will, no creditor disputes, and cooperative heirs typically takes four to eight months in Effingham County. Contested estates or those with significant debts can take considerably longer.

**What If There Is No Will?**

If the deceased died without a valid will, the property passes according to Georgia intestacy law under O.C.G.A. § 53-2-1 et seq. — surviving spouse first, then children, then parents, then siblings.

When multiple heirs inherit the same property, all hold ownership interests as tenants in common. All co-owners must agree to a sale and sign the closing documents. If one heir refuses, the others may petition for partition in Superior Court — a process that forces a sale but adds time and legal cost. A cash buyer experienced with estate sales can often help facilitate agreement among heirs by simplifying the logistics and moving quickly.

**Condition Does Not Matter**

Inherited properties often sit vacant for months or years before heirs decide to sell. Deferred maintenance accumulates. Belongings remain inside. In some cases the property has significant structural issues. Cash buyers purchase inherited properties as-is. You do not need to clean out the house, make repairs, update the kitchen, or stage anything. The offer accounts for condition. If the house needs a new roof, new HVAC, foundation work, or cosmetic updates — none of that is your responsibility before the sale.

**Common Scenarios With Effingham County Inherited Properties**

| Situation | What It Means for the Sale |
| --- | --- |
| Single heir, property clear of debt | Straightforward sale after probate |
| Multiple heirs, all agree | All must sign the deed at closing |
| Heir lives out of state | Remote closing arrangements available |
| Back taxes owed | Paid from proceeds at closing |
| Tenants currently in the property | Cash buyer can purchase occupied |
| Property needs significant repairs | As-is sale; no repairs required |
| Probate not yet complete | Accept offer now; close after Letters issue |

**Why Effingham County Heirs Often Choose a Cash Sale**

Effingham County — which includes growing communities like [Rincon](/areas/rincon) and [Springfield](/areas/springfield) — has seen strong population growth and rising property values over the past decade. Inherited properties in the county are often genuinely valuable. But a traditional listing requires the estate to be clear of probate, the property to be in marketable condition, and time — typically 30 to 90 days of market exposure plus a 30 to 45 day closing period.

A cash sale requires none of that. It moves faster, requires no repairs, and eliminates the carrying costs — taxes, insurance, utilities — that accumulate while a property sits on the market. For heirs who do not live locally or who need to resolve the estate cleanly and quickly, a cash sale is often the most practical path.

**After Probate: What to Expect at Closing**

Once the Personal Representative has Letters in hand, the sale can proceed. With a cash buyer, the timeline from accepted offer to closing is typically 7 to 21 days. Closing occurs with a Georgia closing attorney who handles the deed transfer — an Executor's Deed or Administrator's Deed — the title search, and any lien payoffs. All heirs who are parties to the sale sign the closing documents.

VP Buys Homes works with estate attorneys in Southeast Georgia regularly and can coordinate directly with your attorney if probate is still in progress. We can put an offer in place and wait for Letters to issue. To get started, visit our [sell page](/sell) or call (912) 515-6060.

**Frequently Asked Questions**

**Can I sell an inherited house in Effingham County before probate is complete?**

Not technically — title cannot transfer until the Personal Representative has legal authority. However, you can accept an offer and set a closing date after probate is expected to clear. A cash buyer can accommodate this timeline without requiring a traditional closing contingency.

**Do all heirs have to agree to sell?**

Yes, if the property is held as tenants in common, which is the default when multiple heirs inherit real property. All owners must sign the deed at closing. If an heir is unwilling, the others may petition for partition in Superior Court, but this adds time and legal expense.

**How long does probate take in Effingham County, Georgia?**

A simple estate with a valid will, no creditor disputes, and cooperative heirs typically takes four to eight months. More complex estates — multiple heirs, contested will, significant debts — can take a year or longer.

**What taxes do heirs owe when selling an inherited property in Georgia?**

Georgia has no state inheritance tax. At the federal level, inherited property receives a stepped-up cost basis equal to fair market value on the date of death — so capital gains taxes apply only to appreciation after inheritance, not from the original purchase price. Consult a CPA for advice specific to your situation.`,
  },
  {
    draft: true,
    slug: 'avoid-foreclosure-chatham-county-georgia',
    category: 'Foreclosure Help',
    title: 'How to Avoid Foreclosure in Chatham County, Georgia',
    excerpt: 'Behind on payments in Chatham County? Georgia non-judicial foreclosure moves fast — here are your options, the exact timeline, and why acting before the courthouse sale matters.',
    metaDescription: 'How to avoid foreclosure in Chatham County, GA. Georgia non-judicial foreclosure timeline, your options under O.C.G.A. § 44-14-162, and how a cash sale can stop a Savannah foreclosure.',
    faqs: [
      { q: "How long does the foreclosure process take in Chatham County, Georgia?", a: "Under Georgia's non-judicial foreclosure statute, the minimum timeline from first publication to sale is approximately 37 days — four consecutive weekly publications plus the sale date. In practice, lenders often allow several months after the first missed payment before beginning formal proceedings, but once the notice of sale is published, the timeline moves fast." },
      { q: "Can I stop a Chatham County foreclosure after the notice of sale has been published?", a: "Yes — until the sale actually occurs, you can stop it by bringing the loan fully current, completing a sale of the property, negotiating a loan modification, or filing for bankruptcy which triggers an automatic stay. Once the sale occurs on the courthouse steps, your options under Georgia non-judicial foreclosure law are essentially gone." },
      { q: "Will I owe money after foreclosure if the sale price is less than my loan balance?", a: "Potentially, yes. Georgia allows lenders to pursue a deficiency judgment for the gap between the sale price and the outstanding balance under O.C.G.A. § 44-14-161. The lender must file within 30 days of the sale. Selling before the foreclosure eliminates this risk if the proceeds cover the payoff." },
      { q: "Does foreclosure affect my ability to rent in the future?", a: "Yes. A foreclosure can appear on background checks used by property managers and landlords. Many rental screening processes flag foreclosures and may result in a denial — in addition to the seven-year credit impact. Avoiding foreclosure through a pre-sale protects your rental options as well as your ability to purchase again." },
    ],
    body: `If you own a home in Chatham County and you are falling behind on mortgage payments, the window to act is shorter than most homeowners expect. Georgia is one of the fastest foreclosure states in the country, with a process that can move from first missed payment to courthouse auction in as little as a few months. But real options exist at every stage — and the earlier you act, the more leverage you have.

The short answer: in Chatham County, Georgia, lenders can foreclose without going to court under the state's non-judicial foreclosure statute. Once the process is formally initiated, a sale can be scheduled in as few as 37 days. Your primary options are a loan workout with your lender, a short sale, or a fast cash sale before the auction date. A foreclosure on your record affects your credit for seven years and eliminates any equity in the property. Acting before the sale is almost always the better outcome.

**How Georgia Non-Judicial Foreclosure Works**

Georgia is a non-judicial foreclosure state, which means lenders do not need court approval to foreclose on your property. The process is governed by O.C.G.A. § 44-14-162 et seq. This makes Georgia foreclosures faster than states like Florida or New York, where court involvement adds months or years to the timeline.

Here is how the process unfolds in Chatham County:

1. **Missed payments and default notice** — After you miss payments, typically three or more depending on the servicer, the lender declares you in default and sends written notice. This starts the formal process.
2. **Notice of sale under power** — Under O.C.G.A. § 44-14-162.2, the lender must send you written notice of the foreclosure sale by registered mail at least 30 days before the sale date. The lender must also publish notice in the Chatham County legal organ — the Savannah Morning News — once a week for four consecutive weeks.
3. **Foreclosure sale at the courthouse** — Georgia foreclosure sales are held on the first Tuesday of each month at the Chatham County Courthouse on Montgomery Street in Savannah. The property is sold to the highest bidder.
4. **No right of redemption** — Unlike Georgia tax sales, which carry a 12-month redemption right, non-judicial mortgage foreclosures provide no right of redemption after the sale. Once the deed transfers, your legal claim to the property is gone.

**The Real Cost of Foreclosure**

Beyond losing the property, foreclosure carries consequences that follow you for years:

- A foreclosure remains on your credit report for seven years and lowers your credit score significantly — often by 100 points or more.
- Most conventional mortgage programs require a waiting period of three to seven years after foreclosure before you can purchase again.
- If the property sells for less than you owe, Georgia law allows lenders to pursue a deficiency judgment for the remaining balance under O.C.G.A. § 44-14-161. The lender must file within 30 days of the foreclosure sale.
- Foreclosures are filed in Chatham County Superior Court and become part of the permanent public record.

A sale before the foreclosure — even at a price below what you hoped — closes out the obligation cleanly, avoids all of these consequences, and may leave you with proceeds if the property has equity.

**Chatham County Foreclosure Timeline**

| Stage | Typical Timing |
| --- | --- |
| Notice of sale published in newspaper | At least 4 consecutive weeks before sale |
| Certified mail notice to borrower | At least 30 days before sale |
| Foreclosure sale at courthouse | First Tuesday of the month |
| Right of redemption after sale | None under Georgia non-judicial law |

**Your Options Before the Foreclosure Sale**

**Contact your lender's loss mitigation department**

Lenders generally prefer to avoid foreclosure — it is expensive and time-consuming for them too. Call your servicer directly, ask for the loss mitigation department, and explain your situation. Common outcomes include a loan modification that permanently changes your loan terms, a repayment plan that lets you catch up over several months, a forbearance that temporarily reduces or pauses payments, or reinstatement by paying the full past-due balance in a lump sum. Document everything and get any agreement confirmed in writing.

**Sell before the auction date**

If a workout with your lender is not possible — or if negotiations are taking longer than the timeline allows — a fast cash sale before the first Tuesday sale date is often the most effective solution. You sell the property, the mortgage is paid from proceeds, and the foreclosure process stops entirely.

In Chatham County, where [Savannah](/areas/savannah) property values have increased substantially over the past several years, many homeowners in foreclosure have equity they do not realize. A cash sale captures that equity. If you are underwater — owing more than the property is worth — a short sale negotiated with lender approval may still resolve the debt without a formal foreclosure on your record.

**Seek HUD-approved counseling**

HUD-approved housing counselors provide free guidance to homeowners facing foreclosure. They can communicate with your lender on your behalf and help you evaluate which options are available. The HUD foreclosure prevention hotline is 1-800-569-4287.

**How a Cash Sale Works When Time Is Short**

VP Buys Homes helps Chatham County homeowners sell before the auction date. We work directly with your lender's payoff team and move fast — typically 7 to 21 days from offer to close. You do not need to make repairs, clean out the property, or navigate a traditional listing process.

If your property is in or around [Savannah](/areas/savannah), we know the market and can make an offer quickly. Visit our [how it works page](/how-it-works) to understand the full process, or go to our [sell page](/sell) to request a cash offer. Call (912) 515-6060 if you want to speak with someone directly about your situation.

**Frequently Asked Questions**

**How long does the foreclosure process take in Chatham County, Georgia?**

Under Georgia's non-judicial foreclosure statute, the minimum timeline from first publication to sale is approximately 37 days. In practice, lenders often allow several months to pass after the first missed payment before beginning formal proceedings — but once the notice of sale is published, the clock moves fast.

**Can I stop a Chatham County foreclosure after the notice of sale has been published?**

Yes — until the sale actually occurs, you can stop it by bringing the loan fully current, completing a sale of the property, negotiating a loan modification, or filing for bankruptcy which triggers an automatic stay. Once the sale occurs on the first Tuesday, your options under Georgia non-judicial foreclosure law are essentially gone.

**Will I owe money after foreclosure if the sale price is less than my loan balance?**

Potentially, yes. Georgia allows lenders to pursue a deficiency judgment for the gap between the sale price and the outstanding balance under O.C.G.A. § 44-14-161. The lender must file within 30 days of the sale. Selling before the foreclosure eliminates this risk if the sale proceeds are sufficient to cover the payoff.

**Does foreclosure affect my ability to rent in the future?**

Yes. A foreclosure can appear on background checks used by property managers and individual landlords. Many rental screening processes flag foreclosures and may result in a denial — in addition to the seven-year credit impact. Avoiding foreclosure through a pre-sale protects your rental options as well as your ability to purchase again in the future.`,
  },
  {
    draft: true,
    slug: 'selling-house-with-liens-savannah-georgia',
    category: 'Seller Guide',
    title: 'Selling a House With Liens in Savannah, Georgia',
    excerpt: 'A lien does not prevent a Savannah home sale — it means the lien gets paid at closing. Here is how title searches work, what lien types you might face, and how to sell without resolving them first.',
    metaDescription: "How to sell a house with liens in Savannah, GA. Covers judgment liens, mechanic's liens, IRS tax liens, HOA liens, lien priority, and how Chatham County closings handle payoffs.",
    faqs: [
      { q: "Can I sell my Savannah house if it has a lien on it?", a: "Yes. Liens are paid off at closing from the sale proceeds by the closing attorney. You do not need to resolve them before listing or accepting an offer. As long as the sale price is sufficient to cover the liens, the buyer receives clean title." },
      { q: "What happens if the liens on my property exceed what it is worth?", a: "This is called being underwater. To sell, you typically need lienholder cooperation — most importantly the primary mortgage lender agreeing to a short sale and accepting less than the full balance owed. Cash buyers can sometimes negotiate directly with lienholders to structure a transaction that works." },
      { q: "Do I need to disclose liens to a buyer in Georgia?", a: "In Georgia, you are required to disclose known material facts affecting the property. A lien will be discovered in the title search regardless, but it is both legally prudent and good practice to inform any serious buyer of known liens upfront. A reputable cash buyer will not be deterred." },
      { q: "How long does it take to get a lien release after closing?", a: "Mortgage lien releases are typically recorded within a few weeks to a couple of months. Federal IRS lien releases take 30 to 40 days from the date of full payment. Your closing attorney tracks these and follows up until every release is recorded." },
    ],
    body: `A lien on your Savannah property does not mean you cannot sell it. It means the lien must be resolved at or before closing. In the vast majority of cases, liens are paid from the sale proceeds by the closing attorney, the buyer receives clean title, and you receive whatever remains. The process is routine for Georgia closing attorneys — and it can happen without you coming to the table with additional cash.

The short answer: most liens on a property in Savannah, Georgia can be resolved at closing. The closing attorney conducts a title search, identifies every outstanding lien, collects payoff figures from each lienholder, and disburses funds at settlement. You receive whatever is left after the liens are satisfied. A property with liens is still sellable — the key is knowing what you are dealing with before you go under contract.

**What Is a Lien?**

A lien is a legal claim against your property that must be satisfied before or at the time of a sale. In Chatham County, liens are filed with the Chatham County Clerk of Superior Court in Savannah. Any title search will surface them. Liens come in several forms, each with different rules governing how they attach to property, how they must be resolved, and what payment priority they hold.

**Common Types of Liens on Savannah Properties**

**Mortgage liens** are the most common. They are created when you borrow against the property and give the lender a security interest in it. Mortgage liens are paid off at closing from the sale proceeds. If you owe more than the property is worth — being underwater — you would need the lender's agreement for a short sale, where the lender accepts less than full payoff.

**Judgment liens** arise when someone wins a lawsuit against you and records the judgment. Under O.C.G.A. § 9-12-80, a recorded judgment in Chatham County attaches automatically to all real property you own there. Judgment liens must be paid from sale proceeds at closing or released before title can transfer cleanly.

**Mechanic's liens** are filed by contractors, subcontractors, or material suppliers who performed work on the property and were not paid. Georgia mechanic's lien law (O.C.G.A. § 44-14-360 et seq.) requires the claimant to file within 90 days of last furnishing labor or materials. Savannah's active renovation market means mechanic's liens appear regularly — especially on older historic properties or homes with recent unpaid renovation work.

**IRS federal tax liens** attach to all of a taxpayer's property nationwide when the IRS files a Notice of Federal Tax Lien following an unpaid tax assessment (26 U.S.C. § 6321). Federal liens survive property sales unless the IRS releases the lien or the proceeds satisfy the debt. The IRS offers a Certificate of Discharge for specific properties, allowing a sale to proceed even before the underlying tax debt is fully resolved.

**State tax liens** function similarly. The Georgia Department of Revenue files a tax execution (fi.fa.) that attaches to real property in any county where it is recorded.

**HOA liens** arise when homeowner association dues or assessments go unpaid. Georgia law (O.C.G.A. § 44-3-232) grants HOAs lien rights for unpaid amounts. HOA liens must be satisfied at closing.

**Child support and alimony liens** can be recorded against property when support obligations go unpaid and a court issues a judgment. These are treated like other judgment liens and must be cleared at closing.

**Lien Priority: Who Gets Paid First**

When a property sells and proceeds are distributed, lienholders are paid in priority order. Priority is generally determined by the date the lien was recorded — first in time, first in right — with certain statutory exceptions.

| Lien Type | Priority Notes |
| --- | --- |
| First mortgage | Typically first in priority; set at loan origination |
| Property tax lien (fi.fa.) | Super-priority in Georgia; can prime senior mortgages |
| Mechanic's lien | Priority runs from date work commenced, not filing date |
| HOA lien | Generally subordinate to first mortgage in Georgia |
| Judgment lien | Priority set by recording date in Chatham County |
| Federal IRS lien | Senior to judgment liens but subordinate to valid mortgages |

If the total of all liens exceeds the sale price, the shortfall means some lienholders will not be paid in full. This requires negotiation — and in some cases, a short sale with lienholder cooperation.

**How a Title Search Works in Chatham County**

Georgia requires a licensed attorney to handle real estate closings. Before closing, the attorney orders a title search — a review of Chatham County public records looking back 30 to 50 years. The search surfaces outstanding mortgages, tax liens, judgment liens, mechanic's liens, HOA liens, and title defects.

Once all liens are identified, the closing attorney requests payoff letters from each lienholder, collects the required amounts at closing, and issues lien releases to ensure the buyer receives unencumbered title.

**Why Cash Buyers Are Well-Suited for Lien-Encumbered Properties**

Cash buyers handle lien-encumbered properties regularly. Because there is no lender on the buyer's side, there is no appraisal contingency that might flag a complicated title situation, no underwriting approval that could be delayed or denied, and the transaction moves faster — which matters when a judgment enforcement deadline or foreclosure is approaching.

VP Buys Homes purchases properties throughout [Savannah and Chatham County](/areas/savannah) regardless of lien status. Our offer accounts for the property's condition and the liens that will be satisfied at closing. You do not need to resolve liens before contacting us or accepting an offer.

For more on what to expect when selling in as-is condition, see our guide to [selling a house as-is in Georgia](/blog/sell-a-house-as-is-georgia). To get a cash offer on your Savannah property, visit our [sell page](/sell) or call (912) 515-6060.

**Frequently Asked Questions**

**Can I sell my Savannah house if it has a lien on it?**

Yes. Liens are paid at closing from the sale proceeds. You do not need to resolve them before listing or accepting an offer. As long as the sale price covers the liens, the closing attorney handles the payoff and the buyer receives clean title.

**What happens if the liens on my property exceed what it is worth?**

This is called being underwater. To sell, you typically need lienholder cooperation — most importantly the primary mortgage lender agreeing to a short sale and accepting less than the full balance owed. Cash buyers can sometimes negotiate directly with lienholders to structure a transaction that works. This requires more time and lender approval, but it is possible.

**Do I need to disclose liens to a buyer in Georgia?**

In Georgia, you are required to disclose known material facts affecting the property. A lien will be discovered in the title search regardless of disclosure, but it is both legally prudent and good practice to inform any serious buyer of known liens upfront. A reputable cash buyer will not be deterred.

**How long does it take to get a lien release after closing?**

Mortgage lien releases are typically recorded within a few weeks to a couple of months. Federal IRS lien releases take 30 to 40 days from the date of full payment. Your closing attorney tracks these and follows up until every release is recorded and the title is clean.`,
  },
  {
    draft: true,
    slug: 'cash-home-buyers-statesboro-georgia-guide',
    category: 'Local Guide',
    title: 'Cash Home Buyers in Statesboro, Georgia: What to Know',
    excerpt: 'Considering a cash sale in Statesboro? Here is how offers are calculated, what separates reputable local buyers from out-of-state wholesalers, and what the process actually looks like.',
    metaDescription: 'Cash home buyers in Statesboro, Georgia — what to know. How offers are calculated, how to vet buyers, cash vs. traditional listing comparison, and what to expect at closing in Bulloch County.',
    faqs: [
      { q: "How do I know if a cash offer on my Statesboro home is fair?", a: "Get multiple offers. A fair cash offer reflects the property's realistic after-repair value minus actual renovation costs. If an offer seems extremely low without explanation, ask the buyer to walk through their numbers. A transparent buyer can explain exactly how they arrived at the figure." },
      { q: "Do cash buyers cover closing costs in Statesboro?", a: "Many do. It is common for cash buyers to cover the seller's closing costs as part of the offer. Make sure this is specified in the written purchase contract — not just mentioned verbally." },
      { q: "How fast can a cash sale actually close in Bulloch County?", a: "A cash transaction with no title complications can close in as few as 7 days after the purchase agreement is signed and earnest money is deposited. More common is 10 to 21 days. Properties with title issues — back taxes, liens, probate — require additional time." },
      { q: "Is it safe to sell my house for cash in Statesboro?", a: "Yes, if you work with a reputable buyer and close with a licensed Georgia real estate attorney. The closing attorney represents the transaction — ensuring title is clean, disbursements are accurate, and documents are properly executed. Never sign over a deed without a closing attorney involved." },
    ],
    body: `If you are considering selling your Statesboro home to a cash buyer, you likely have two questions: how does this actually work, and how do I know I am not being taken advantage of? Both are reasonable. The cash home buying market includes reputable local operators and opportunistic out-of-state companies whose interests are not the same as yours. Knowing the difference protects you.

The short answer: selling to a legitimate local cash buyer is straightforward. You submit property information, receive a written offer within 48 hours, and if you accept, close in 7 to 21 days with a local attorney. There are no commissions, no repair requirements, and no financing contingencies. The offer is lower than what a fully renovated property would sell for on the open market — because the buyer is pricing in the cost of repairs they will make after purchase. Here is everything you need to know before you start.

**What Cash Home Buyers Actually Do**

A cash home buyer purchases residential properties directly from homeowners without using mortgage financing. Because there is no lender involved, there is no appraisal contingency, no financing contingency, and no underwriting timeline. The closing schedule is set by the two parties, not a mortgage company.

The buyer typically purchases the property, invests in repairs and updates, and then resells it at a higher price — commonly called a fix-and-flip. Some buyers hold properties as long-term rentals instead. Either way, the business model requires buying at a price low enough to account for renovation costs and time.

**How the Cash Offer Is Calculated**

Cash buyers estimate the property's after-repair value — what it would sell for in fully updated condition — and subtract the cost of needed repairs, holding costs, and a margin. What remains is the offer to the seller.

For a Statesboro property worth $185,000 in updated condition with $45,000 in needed repairs:

- After-repair value: $185,000
- Estimated repairs: minus $45,000
- Holding costs, closing costs, and margin: minus $18,000 to $27,000
- Likely offer range: $113,000 to $122,000

This is why cash offers are lower than what a fully renovated property would sell for on the MLS. The tradeoff is certainty, speed, and zero out-of-pocket repair costs for the seller.

**Cash Sale vs. Traditional Listing in Statesboro**

| Factor | Cash Sale | Traditional Listing |
| --- | --- | --- |
| Time to close | 7–21 days | 60–120 days |
| Repairs required | None | Usually required to maximize price |
| Agent commissions | None | 5–6% of sale price |
| Financing contingency | None | Buyer financing can fall through |
| Appraisal risk | None | Low appraisal can kill the deal |
| Showing disruptions | None | Multiple showings over weeks |
| Certainty of close | High | Moderate |
| Net price | Lower than retail | Higher if property is in good condition |

**Who Benefits Most From a Cash Sale in Statesboro**

If your property is in excellent condition and you have time, a traditional listing with a local agent may net you more money. Cash sales make the most sense when:

- The property needs significant repairs you cannot or do not want to fund
- You are facing a deadline — foreclosure, divorce, probate, job relocation
- You have an inherited property you do not intend to keep
- You are a tired landlord ready to exit
- The property has title complications like liens, back taxes, or a probate situation
- You want certainty and speed over maximum price

**How to Vet a Cash Buyer in Statesboro**

Not all cash buyers operate the same way. Here is how to evaluate any offer you receive:

- Are they a local company? A buyer based in Southeast Georgia understands the Bulloch County market, the local closing process, and the attorneys in Statesboro. Out-of-state wholesalers may not.
- Can they show proof of funds? Any legitimate cash buyer can provide a bank statement or letter confirming available funds before you sign. Ask for it.
- Do they use a local closing attorney? Georgia requires a licensed attorney at every real estate closing. A reputable buyer has an established relationship with a Statesboro or Bulloch County real estate attorney.
- Does the contract have assignment clauses? Some wholesalers sign contracts with the intent to assign them to another buyer for a fee. This is legal but means the person offering is not the person closing. Ask directly.
- Is there earnest money? A committed buyer puts earnest money down. An offer with no earnest money and a long due diligence period may mean the buyer is shopping your deal to other investors.
- Do they pressure you to sign immediately? Legitimate buyers give you time to review the contract and consult an attorney. High-pressure tactics are a red flag.

**The Statesboro Market Context**

Statesboro is the commercial and educational hub of Bulloch County — home to Georgia Southern University and a regional economy that draws residents and workers from surrounding rural counties. The residential market is active, with demand from university-affiliated buyers, growing families, and investors who recognize the area's relative affordability compared to Savannah and the coast.

Cash buyers are active in Statesboro because renovation economics work here: the gap between distressed property prices and updated home values creates enough margin for buyers who can manage the work efficiently. Neighborhoods near Georgia Southern, older subdivisions on the south side of town, and rural properties throughout Bulloch County are all common targets.

**What to Expect With VP Buys Homes**

VP Buys Homes is a local Southeast Georgia company. We buy houses in [Statesboro and throughout Bulloch County](/areas/statesboro), and we close with local attorneys in the market. Our process:

1. **Submit your property** — Use our [sell page](/sell) or call (912) 515-6060. We ask for basic information: address, condition, and your timeline.
2. **Receive a written offer** — We deliver a written cash offer within 48 hours.
3. **Choose your close date** — If you accept, we open title with a local closing attorney. You set the closing date — typically 7 to 21 days out, or later if you need more time.
4. **Close and get paid** — You sign the closing documents. Proceeds are wired to you the same day.

There are no commissions, no fees, and no repairs required. To understand the full process from start to finish, visit our [how it works page](/how-it-works).

**Frequently Asked Questions**

**How do I know if a cash offer on my Statesboro home is fair?**

Get multiple offers. A fair cash offer reflects the property's realistic after-repair value minus actual renovation costs. If an offer seems extremely low without explanation, ask the buyer to walk through their numbers. A transparent buyer can explain exactly how they arrived at the figure.

**Do cash buyers cover closing costs in Statesboro?**

Many do. It is common for cash buyers to cover the seller's closing costs as part of the offer. Make sure this is specified in the written purchase contract — not just mentioned verbally.

**How fast can a cash sale actually close in Bulloch County?**

A cash transaction with no title complications can close in as few as 7 days after the purchase agreement is signed and earnest money is deposited. More common is 10 to 21 days, allowing time for the title search and closing document preparation. Properties with title issues — back taxes, liens, probate — require additional time.

**Is it safe to sell my house for cash in Statesboro?**

Yes, if you work with a reputable buyer and close with a licensed Georgia real estate attorney. The closing attorney represents the transaction — ensuring the title is clean, disbursements are accurate, and documents are properly executed. Never sign over a deed without a closing attorney involved.`,
  },
]

export const PUBLISHED_POSTS = POSTS.filter(p => !p.draft)
