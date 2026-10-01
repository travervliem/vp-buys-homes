type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  reversed?: boolean
  withDba?: boolean
  className?: string
}

const sizeMap = {
  sm: { vp: 18, eq: 9, divider: 16 },
  md: { vp: 24, eq: 12, divider: 22 },
  lg: { vp: 32, eq: 14, divider: 28 },
  xl: { vp: 38, eq: 15, divider: 32 },
}

export function Logo({ size = 'md', reversed = false, withDba = false, className = '' }: Props) {
  const s = sizeMap[size]
  const baseColor = reversed ? '#FFFFFF' : '#1B365D'
  return (
    <span className={`inline-flex flex-col gap-0.5 leading-none ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="font-display font-bold tracking-[0.005em]"
          style={{ fontSize: s.vp, color: '#F2A65A', lineHeight: 1 }}
        >
          VP
        </span>
        <span
          className="inline-block"
          style={{ width: 1, height: s.divider, background: reversed ? 'rgba(255,255,255,0.25)' : 'rgba(27,54,93,0.2)' }}
          aria-hidden="true"
        />
        <span
          className="font-display font-bold tracking-[0.08em] uppercase"
          style={{ fontSize: s.eq, color: baseColor, lineHeight: 1 }}
        >
          Equities
        </span>
      </span>
      {withDba && (
        <span
          className="font-body uppercase mt-1"
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: reversed ? 'rgba(255,255,255,0.4)' : 'rgba(27,54,93,0.45)',
          }}
        >
          DBA · VPBUYSHOMES.COM
        </span>
      )}
    </span>
  )
}
