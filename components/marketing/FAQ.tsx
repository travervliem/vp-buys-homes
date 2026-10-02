'use client'

import { useState, ReactNode } from 'react'

export type FAQItem = {
  q: string
  a: ReactNode
}

type Props = {
  items: FAQItem[]
  defaultOpen?: number  // index of item open by default
}

export function FAQ({ items, defaultOpen = 0 }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpen)

  return (
    <div className="max-w-tight mx-auto">
      {items.map((item, i) => {
        const open = openIdx === i
        return (
          <div
            key={i}
            className="border-t border-[#D1DCE8] first:border-t-0"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer"
            >
              <span className="font-display text-[18px] md:text-[20px] font-semibold text-navy" style={{ lineHeight: 1.3, textWrap: 'balance' }}>
                {item.q}
              </span>
              <span
                aria-hidden
                className={`inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full border-[1.5px] transition-all duration-200 ${open ? 'bg-amber border-amber text-white' : 'bg-white border-navy text-navy'}`}
              >
                {open ? '–' : '+'}
              </span>
            </button>
            {open && (
              <div className="pb-6 pr-10 font-body text-[15px] text-ink-700" style={{ lineHeight: 1.7, maxWidth: 720 }}>
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
