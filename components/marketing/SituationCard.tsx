import Link from 'next/link'

type Props = {
  href: string
  tag: string
  title: string
  body: string
  cta?: string
}

export function SituationCard({ href, tag, title, body, cta = 'Read more →' }: Props) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#D1DCE8] rounded-lg p-6 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber"
    >
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-amber-dark font-body text-[11px] font-bold uppercase tracking-[0.12em]" style={{ background: 'rgba(242,166,90,0.12)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
        {tag}
      </span>
      <h3 className="font-display text-[22px] font-semibold text-navy mt-4 mb-3 leading-[1.15] transition-colors duration-200 group-hover:text-amber-dark" style={{ textWrap: 'balance' as any }}>
        {title}
      </h3>
      <p className="font-body text-[14px] text-ink-700 leading-[1.65] m-0">
        {body}
      </p>
      <div className="mt-5 font-body text-[12px] font-bold uppercase tracking-[0.14em] text-navy group-hover:text-amber-dark transition-colors duration-150">
        {cta}
      </div>
    </Link>
  )
}
