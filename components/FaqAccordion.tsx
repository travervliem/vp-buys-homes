'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/faqs'

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
