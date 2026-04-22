'use client'

import { useState } from 'react'

const FAQS = [
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

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
      {FAQS.map((faq, i) => (
        <div
          key={i}
          style={{
            borderBottom: '1px solid #D1DCE8',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
            aria-expanded={open === i}
          >
            <span style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#1B365D',
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}>
              {faq.q}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: open === i ? '#1B365D' : '#EEF2F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 150ms, transform 200ms',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke={open === i ? 'white' : '#1B365D'} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: '20px' }}>
              <p style={{
                fontFamily: "'Nunito Sans','Helvetica Neue',sans-serif",
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#374151',
              }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
