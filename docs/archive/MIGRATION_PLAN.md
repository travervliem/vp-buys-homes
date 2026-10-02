# MIGRATION_PLAN.md — VP Buys Homes redesign rollout

**Stack:** Next.js 14 App Router, statically pre-rendered, deployed on Vercel.
**Scope:** 71 pages — 8 cities × 5 situations (= 40 intersection pages) + 5 standalone situation pages + city directory + situation directory + blog posts + core pages (home, about, contact, FAQ, privacy, terms).

**Goal:** Migrate every page onto a shared design system derived from `ui_kits/website/index.html` without breaking URLs, copy, or SEO.

---

## Phase 0 — Foundation (no page changes)

**Output:** A `/design-system` preview route that renders every primitive and marketing block. Zero existing pages touched.

### Tasks

1. **Tokens & globals**
   - Update `tailwind.config.ts` with the color, type, spacing, radius, shadow, motion tokens from `BRAND.md §2–4`.
   - Add `app/globals.css` with CSS custom properties, font imports (`next/font` for Playfair Display + Montserrat), base resets.
   - Confirm `--font-display` and `--font-body` are wired to the `<html>` element.

2. **UI primitives (`components/ui/`)**
   - `Button`, `Input`, `Textarea`, `Select`, `Eyebrow`, `Card`, `Logo`, `Badge`, `Container`, `Section`.
   - Each primitive has a Storybook-style story page under `/design-system/<name>` showing all variants/sizes/states.

3. **Marketing blocks (`components/marketing/`)**
   - `SiteHeader`, `SiteFooter`, `Hero`, `LeadForm`, `UrgencyStrip`, `SituationGrid`, `SituationCard`, `ProcessSteps`, `BenefitsBlock`, `FAQ`, `FinalCTA`, `MobileCTABar`.
   - Each block has a story page showing it in isolation against a representative content prop.

4. **Data layer scaffolding**
   - Create `data/cities.ts` (8 cities with `slug`, `name`, `county`, `lat/lng`, `nearbyZips`, `population`, etc.).
   - Create `data/situations.ts` (5 situations with `slug`, `name`, `tagline`, `painPoints`, `faq`, etc.).
   - These power `generateStaticParams` for the intersection routes in Phase 2.

5. **`/design-system` route**
   - Single page rendering every primitive + every marketing block, top to bottom.
   - Type ramp visible. Color swatches visible. Form states visible (empty / filled / error / success).

### Phase 0 checkpoint

- ✋ Stop. Post the deployed preview URL.
- I review the `/design-system` route and either approve or request fixes.
- **Do not advance to Phase 1 until approved.**

---

## Phase 1 — One of each template (5 pages)

**Output:** One representative page per template type, fully migrated. URLs unchanged.

### Page taxonomy

| # | Template | Phase 1 sample | Total in Phase 2 |
|---|---|---|---|
| 1 | Home (`/`) | `/` | — |
| 2 | City page (`/[city]`) | `/savannah-ga` | 7 more cities |
| 3 | Situation page (`/[situation]`) | `/inherited-house` | 4 more situations |
| 4 | Intersection (`/[city]/[situation]`) | `/savannah-ga/inherited-house` | 39 more intersections |
| 5 | Directory (`/areas`, `/situations`) | `/areas` | `/situations` |
| 6 | Blog post + core | one blog post + `/about` | remaining posts + `/contact`, `/faq`, `/privacy`, `/terms` |

### Tasks

For each Phase 1 sample:
1. Read the existing page. Capture H1, copy, internal links, meta tags, JSON-LD.
2. Replace the page body with composed marketing blocks. **Copy moves verbatim.**
3. Verify URL, `<title>`, meta description, OG tags, JSON-LD, canonical are unchanged.
4. Verify all internal links still resolve.
5. Run Lighthouse on mobile + desktop. Target ≥ 95 perf / SEO / a11y.

### Phase 1 checkpoint

- ✋ Stop. Post 5 deployed URLs + a diff summary per page (what changed visually, what stayed identical).
- I review each page. Sign-off required before Phase 2.

---

## Phase 2 — Batch migration (66 pages)

**Output:** All remaining pages migrated. Diff per page should be tiny (data-only).

### Order

1. Remaining 7 city pages — copy Phase 1 city template, swap data prop.
2. Remaining 4 situation pages — copy Phase 1 situation template, swap data prop.
3. Remaining 39 intersection pages — driven entirely by `generateStaticParams` over `cities × situations`. Should be one component file generating all 40.
4. Remaining blog posts — copy Phase 1 post template.
5. Remaining core pages (`/contact`, `/faq`, `/privacy`, `/terms`).

### Per-page checklist (Claude Code self-runs this)

- [ ] URL unchanged
- [ ] H1 text unchanged
- [ ] `<title>` unchanged
- [ ] Meta description unchanged
- [ ] OG image / OG tags preserved
- [ ] JSON-LD preserved (LocalBusiness, FAQPage, BreadcrumbList as applicable)
- [ ] All internal links resolve
- [ ] Mobile renders cleanly at 375px (no horizontal overflow)
- [ ] Lead form (if present) submits to existing endpoint with same field names
- [ ] Lighthouse perf ≥ 90 on mobile

### Phase 2 checkpoint

- Spot-check 10 random pages across templates.
- Run a sitemap diff: every URL in old sitemap exists in new build.
- Run a 404 crawl from the homepage.

---

## Phase 3 — Polish

1. **Per-page metadata** — `generateMetadata()` populates `title`, `description`, `openGraph`, `twitter`, `alternates.canonical` from page data.
2. **OG images** — generate OG image per page using `next/og` with city/situation-specific text on the navy gradient.
3. **JSON-LD** — `LocalBusiness` on home + city pages, `FAQPage` on FAQ + intersection pages, `BreadcrumbList` everywhere.
4. **Sitemap & robots** — regenerate `app/sitemap.ts` and `app/robots.ts` from the data layer.
5. **Lighthouse sweep** — run on a sample of each template type. Fix any regression below 90.
6. **404 + redirect map** — confirm no broken links; add redirects for any URL that did change.

---

## Anti-patterns (do not do)

- ❌ Hand-writing 40 intersection page files. Use `generateStaticParams`.
- ❌ Inline Tailwind classes that duplicate token values (`#1B365D` instead of `bg-navy`). Always use the token.
- ❌ Adding new sections, copy, testimonials, or stats. Migration is structural only.
- ❌ Renaming components mid-phase. Lock the API after Phase 0.
- ❌ Skipping a checkpoint to "save time."
- ❌ Changing form field `name` attributes — breaks the CRM.

---

## Data files — required shapes

```ts
// data/cities.ts
export type City = {
  slug: string;            // 'savannah-ga'
  name: string;            // 'Savannah'
  state: 'GA';
  county: string;          // 'Chatham'
  population: number;
  nearbyZips: string[];
  lat: number; lng: number;
  blurb: string;           // 1–2 sentence intro for the city page
};

// data/situations.ts
export type Situation = {
  slug: string;            // 'inherited-house'
  name: string;            // 'Inherited a house'
  tagline: string;         // hero sub
  painPoints: string[];    // 3–5 bullets
  faq: { q: string; a: string }[];
};
```

Intersection pages route as `app/[city]/[situation]/page.tsx` with:
```ts
export async function generateStaticParams() {
  return cities.flatMap(c => situations.map(s => ({ city: c.slug, situation: s.slug })));
}
```
