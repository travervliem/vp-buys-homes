type Props = {
  items?: string[]
  tone?: 'amber' | 'navy'
}

const DEFAULT_ITEMS = [
  '50+ closings completed',
  'Cash offer in 24 hours',
  'Close in 7 days',
  'No repairs required',
  'No fees or commissions',
]

// Revolving ticker. The track holds two copies of the items so the CSS
// translateX(-50%) animation loops seamlessly.
export function UrgencyStrip({ items = DEFAULT_ITEMS, tone = 'amber' }: Props) {
  const isAmber = tone === 'amber'
  const tape = [...items, ...items]

  return (
    <div
      className={`overflow-hidden ${isAmber ? 'bg-amber border-y border-amber-dark/30' : 'bg-navy-deep border-y border-white/10'}`}
      aria-label="Trust highlights"
    >
      <div className="ticker-track flex items-center whitespace-nowrap py-3.5">
        {tape.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2.5 px-8 font-body text-[12px] font-bold uppercase tracking-[0.16em] ${isAmber ? 'text-navy-900' : 'text-white'}`}
          >
            <span className={isAmber ? 'text-navy' : 'text-amber'} aria-hidden>✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
