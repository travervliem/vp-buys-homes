// Per-pairing (city × situation) content shape. Lives in
// `lib/situations/<slug>-content.ts`, one file per situation.
//
// Every field that varies between pairings is named here. Helpful Content
// system rewards genuinely localized substance — this type is the contract
// that prevents city-name-swap pages.

export type IntersectionFaq = { q: string; a: string }

export type IntersectionContent = {
  // SEO — must be unique across all 40 pairings
  title: string                       // ≤60 char
  metaDescription: string              // ≤155 char
  h1: string

  // Body sections (each is paragraphs[] for flexibility)
  empatheticOpening: string[]          // ¶1 — must reference at least one local neighborhood
  countyProcessSection: string[]       // "How [situation] works in [county] specifically"
  timelineSection: string[]            // GA-specific timeline / OCGA-cited explainer
  howWeHelpSection: string[]           // "How VP Equities helps in this situation"
  trustSignalsSection: string[]        // local trust signals (court name, paper, neighborhoods)

  // FAQ block (3-5 items, schema-ready)
  faqs: IntersectionFaq[]

  // Lateral links — 2-3 neighboring-county pairings (same situation)
  // Format: city slug only (the situation is implicit since these come from the same content file)
  lateralCitySlugs: string[]
}

// Per-situation export shape: keys are city slugs from lib/areas.ts
export type SituationContent = Partial<Record<string, IntersectionContent>>
