// Single source of truth for the FAQ. Rendered visibly by
// `components/FaqAccordion.tsx` and emitted as FAQPage JSON-LD by
// `lib/seo.ts#faqJsonLd`. Google flags FAQ structured data that does
// not match what the user can see on the page, so both consumers
// MUST read from this list.

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'How fast can you make an offer?',
    a: 'We review the property and deliver a written cash offer within 24 hours of your submission — often the same day. There is no obligation to accept.',
  },
  {
    q: 'Do I need to make repairs or clean the house?',
    a: 'No. We buy houses in any condition — fire damage, foundation issues, outdated systems, full of belongings. You take what you want and leave the rest.',
  },
  {
    q: 'Are there fees or commissions?',
    a: 'None. We are not agents. We charge no commissions, no listing fees, and we typically cover standard closing costs. Your net proceeds are exactly what we agree on.',
  },
  {
    q: 'How is the closing date chosen?',
    a: 'You pick it. We can close in as little as 7 days or give you 30–60 days if you need time to move. The schedule is yours.',
  },
  {
    q: 'Can you help if I am behind on payments or facing foreclosure?',
    a: 'Often, yes — but timing is critical. Contact us immediately. A quick sale can stop the foreclosure process before the auction date. The sooner we talk, the more options you have.',
  },
  {
    q: 'I inherited a house. Can you buy it?',
    a: 'Yes. We regularly purchase inherited and estate properties, even those in probate. We work with your attorney if needed and handle the paperwork.',
  },
  {
    q: 'Do you buy houses outside of Statesboro?',
    a: 'Yes. We buy across Southeast Georgia — Statesboro, Rincon, Savannah, Metter, Springfield, Swainsboro, Claxton, Vidalia, and surrounding Bulloch, Effingham, Chatham, and Emanuel counties.',
  },
  {
    q: 'How is your offer calculated?',
    a: 'We look at recent comparable sales in your area, the property\'s current condition, and the cost of any work needed. We share a clear, written offer with no pressure to accept.',
  },
]
