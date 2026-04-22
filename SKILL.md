---
name: vpbuyshomes-design
description: Use this skill to generate well-branded interfaces and assets for VP Buys Homes (VP Equities LLC) — a Southeast Georgia cash-for-houses service — either for production or throwaway prototypes/mocks. Contains brand colors, typography, logo assets, voice guidelines, and UI kit components.
user-invocable: true
---

# VP Buys Homes Design Skill

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — CSS variables (colors, type, spacing, radii, shadows, motion) + semantic defaults. Import this first on any new artifact.
- `assets/` — logos (full lockup navy + white), house mark, source brand templates (business card, postcard, offer letter, email signature, social banners)
- `assets/source/brand-guidelines.html` — canonical brand guidelines document
- `ui_kits/website/` — hi-fi JSX components for the marketing site
- `preview/` — token and component specimen cards

## How to use

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, postcards, offer letters, email templates, social ads):
1. Copy relevant assets from `assets/` into the artifact folder
2. Link `colors_and_type.css` at the top of the HTML
3. Use Barlow Semi Condensed (display / headings) + Nunito Sans (body)
4. Follow the 80/20 navy/amber color ratio
5. Compose from `ui_kits/website/` components — copy JSX verbatim, don't reinvent

If working on production code (Next.js repo):
1. Port `colors_and_type.css` tokens into `tailwind.config.ts` theme.extend
2. Upgrade the existing `Button`, `Input`, `Card`, `Badge` components to match `ui_kits/website/`
3. Load Barlow Semi Condensed + Nunito Sans via `next/font` (not CDN in production)

If the user invokes this skill without guidance, ask what they want to build (landing variant? pitch deck? postcard? email? offer letter?), ask 3–5 questions about audience and channel, then produce HTML or production code.

## Non-negotiables

- **UPPERCASE headlines in Barlow Semi Condensed 700, tracking 0.02em.** This is the core visual voice.
- **Body in Nunito Sans, line-height 1.7.** Deliberately open.
- **Amber (#F2A65A) is the action color only.** CTAs, badges, key callouts. Never a background for large areas. 80/20 navy/amber ratio max.
- **No emoji. No exclamation points. No fake urgency.** (✓ check marks allowed in bullet lists.)
- **House mark never appears without "VP" wordmark.** Per § 01 logo misuse rules.
- **No hand-drawn illustration, no abstract blobs, no gradients** (except the optional navy-to-deep on hero backgrounds).
- **Sentence-case body, UPPERCASE display.** No Title Case anywhere.

## Voice cheat sheet

Direct · Fast · Local · Credible · Empathetic.

Use canonical headlines verbatim where they fit:
- "WE BUY HOUSES FOR CASH IN SOUTHEAST GEORGIA"
- "NO REPAIRS. NO FEES. CLOSE IN DAYS."
- "GET YOUR CASH OFFER IN 24 HOURS"
