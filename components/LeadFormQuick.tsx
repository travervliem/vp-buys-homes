'use client'

import { LeadFormShared, type LeadContext } from './LeadFormShared'

export function LeadFormQuick({ context }: { context?: LeadContext } = {}) {
  return <LeadFormShared variant="hero" context={context} />
}
