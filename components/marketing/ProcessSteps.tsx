import { ReactNode } from 'react'

type Step = {
  eyebrow?: string
  title: string
  body: string | ReactNode
}

type Props = {
  steps: Step[]
  startLabel?: string
}

export function ProcessSteps({ steps, startLabel = 'Step' }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
      {steps.map((s, i) => (
        <div
          key={i}
          className="group relative bg-white border border-hairline rounded-lg p-7 overflow-hidden cursor-default transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber"
        >
          {/* Decorative big number — turns amber on group hover */}
          <span
            aria-hidden
            className="absolute font-display italic font-bold pointer-events-none select-none transition-colors duration-200 ease-out text-[#F0EDE6] group-hover:text-amber/40"
            style={{
              top: 12,
              right: 18,
              fontSize: 96,
              lineHeight: 1,
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="relative z-[1]">
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-amber-dark">
              {s.eyebrow ?? `${startLabel} ${i + 1}`}
            </span>
            <h3
              className="font-display text-[22px] font-bold text-navy mt-2.5 mb-2 leading-[1.2] transition-colors duration-200 group-hover:text-navy-deep"
              style={{ textWrap: 'balance' }}
            >
              {s.title}
            </h3>
            <div className="font-body text-[14.5px] text-ink-700 leading-[1.7] m-0">
              {s.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
