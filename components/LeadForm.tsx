'use client'

import { LeadFormShared, type LeadContext } from './LeadFormShared'

export function LeadForm({ compact = false, context }: { compact?: boolean; context?: LeadContext }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #D1DCE8',
        borderRadius: '8px',
        padding: compact ? '24px' : '32px',
        boxShadow: '0 2px 6px rgba(13,27,42,0.06)',
      }}
    >
      <LeadFormShared variant="full" context={context} />
    </div>
  )
}
