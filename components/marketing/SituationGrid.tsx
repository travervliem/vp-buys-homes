import { SituationCard } from './SituationCard'

type Item = {
  href: string
  tag: string
  title: string
  body: string
}

type Props = {
  items: Item[]
  className?: string
}

export function SituationGrid({ items, className = '' }: Props) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {items.map((it, i) => (
        <SituationCard key={i} {...it} />
      ))}
    </div>
  )
}
