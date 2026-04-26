// Aggregator for all per-situation content modules. Routing and sitemap
// code consume this to discover which intersection pages have copy yet.

import type { SituationSlug } from '../situations'
import type { SituationContent, IntersectionContent } from './types'
import { FORECLOSURE_CONTENT } from './foreclosure-content'
import { DIVORCE_CONTENT } from './divorce-content'
import { PROBATE_CONTENT } from './probate-content'
import { TIRED_LANDLORD_CONTENT } from './tired-landlord-content'
import { TAX_LIENS_CONTENT } from './tax-liens-content'

export const INTERSECTION_CONTENT: Record<SituationSlug, SituationContent> = {
  foreclosure: FORECLOSURE_CONTENT,
  divorce: DIVORCE_CONTENT,
  probate: PROBATE_CONTENT,
  'tired-landlord': TIRED_LANDLORD_CONTENT,
  'tax-liens': TAX_LIENS_CONTENT,
}

export type Intersection = {
  citySlug: string
  situationSlug: SituationSlug
  content: IntersectionContent
}

// Returns every (city × situation) pairing that has content written.
// Drives generateStaticParams + sitemap.
export function listFilledIntersections(): Intersection[] {
  const out: Intersection[] = []
  for (const [situationSlug, situationContent] of Object.entries(INTERSECTION_CONTENT) as [SituationSlug, SituationContent][]) {
    for (const [citySlug, content] of Object.entries(situationContent)) {
      if (content) out.push({ citySlug, situationSlug, content })
    }
  }
  return out
}

export function getIntersection(citySlug: string, situationSlug: SituationSlug): IntersectionContent | undefined {
  return INTERSECTION_CONTENT[situationSlug]?.[citySlug]
}

export type { IntersectionContent, IntersectionFaq, SituationContent } from './types'
