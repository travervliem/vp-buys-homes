# VP Buys Homes — vpbuyshomes.com

Marketing + lead-capture site for **VP Equities LLC** (dba VP Buys Homes), a local cash-for-houses buyer in Southeast Georgia (primary market: Statesboro / Bulloch County).

**Read `AGENTS.md` first.** It holds the review rules, SEO/brand constraints, "looks wrong but is intentional" list, and when to stop and ask. This file is the quick map of the code.

- Production: `https://www.vpbuyshomes.com` (apex redirects to `www`). Repo: `github.com/travervliem/vp-buys-homes`, branch `main` auto-deploys to the Vercel project `vp-buys-homes`.
- Business details (phone, email, domain) live in **`lib/site.ts`** — never type them into a page.

## Commands

```
npm run dev         # local dev server (port 3000)
npm run typecheck   # tsc --noEmit (noUnusedLocals is on)
npm run lint        # next lint (next/core-web-vitals)
npm run build       # production build; statically prerenders 69 pages
npm run check       # typecheck + lint + build — run before opening a PR
```

Pushing to `main` deploys to production. Work on a branch; Vercel builds a preview for every branch.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind 3.4 · Zod · Resend (email) · Google Apps Script webhook (Sheets log) · Vercel. Path alias `@/*` → project root.

## Layout

```
app/                         routes (Server Components unless noted)
  layout.tsx                 metadata defaults, fonts, analytics, org JSON-LD
  page.tsx                   homepage
  sell/ about/ contact/ privacy/ how-it-works/
  areas/page.tsx             city directory
  areas/[city]/page.tsx      city landing page
  areas/[city]/[situation]/  city × situation page
  situations/                directory + /situations/[situation] pillar pages
  blog/  blog/posts.ts       blog index, [slug], and the post data (TS array, no CMS)
  design-system/             internal component preview page
  api/lead/route.ts          lead submission endpoint
  sitemap.ts robots.ts
components/
  marketing/                 page blocks: SiteHeader, SiteFooter, Hero, LeadForm, FinalCTA, ...
  ui/                        primitives: Button, Card, Badge, Input, Section, ...
  analytics/                 GA / Meta pixel scripts + client event hooks
  JsonLd.tsx                 renders a schema.org <script> (escapes '<')
  AddressAutocomplete.tsx    Mapbox address field used by the lead form
lib/
  site.ts                    SITE constants + absoluteUrl()
  areas.ts                   service-area facts (single source of truth)
  area-pages.ts              per-city landing-page copy, keyed by area slug
  situations/                data.ts (5 situations + href helpers), types.ts, *-content.ts, index.ts (barrel)
  faqs.ts                    FAQ list (visible UI + JSON-LD both read this)
  seo.ts                     JSON-LD builders
  validation.ts              Zod lead schemas + EnrichedLead type
  email.ts                   Resend sender (escapes all submitter input)
  loggers/                   googleSheets.ts, local.ts
  analytics/                 client + Meta Conversions API
scripts/                     Search Console CLI helpers (local only)
docs/BRAND.md                design-system doc; docs/archive/ = finished migration notes
```

`preview/`, `ui_kits/`, `uploads/`, `assets/`, `SKILL.md`, `colors_and_type.css` and `README.md` at the repo root are design-system reference material, not part of the deployed site (Next never compiles them).

## Lead flow (the whole product)

1. `components/marketing/LeadForm.tsx` posts step 1 (`partial: true`) then step 2 to `POST /api/lead`.
2. `route.ts` validates (`leadSchema` / `partialLeadSchema`), detects the city, writes `logLocal`, then in parallel `logToGoogleSheets` and — full submissions only — `sendLeadEmail` and the Meta CAPI event.
3. Responds `{ ok, status, sessionId, saved: { local, email, sheets } }`. (`local` is false on Vercel — read-only filesystem; that is expected.)

Don't change the payload shape without asking: it maps to the Google Sheet columns.

## Single sources of truth

| Concern | Edit here |
|---|---|
| Phone, email, domain | `lib/site.ts` |
| City name / county / slug / courts | `lib/areas.ts` |
| City landing-page copy | `lib/area-pages.ts` |
| Situations (foreclosure, divorce, …) | `lib/situations/data.ts`; per-city copy in `lib/situations/<slug>-content.ts` |
| FAQ | `lib/faqs.ts` |
| Blog posts | `app/blog/posts.ts` |
| Structured data | `lib/seo.ts` (render with `<JsonLd>`) |
| Page URLs | `areaHref`, `situationHref`, `intersectionHref` — don't hand-build `/areas/...` strings |

**Add a city:** add an `Area` to `lib/areas.ts`, add its copy to `lib/area-pages.ts`, add per-situation content under `lib/situations/`. Sitemap, homepage grid, directory, footer, JSON-LD and lead-city detection derive from `lib/areas.ts`.

## Environment variables

See `.env.example` (documented inline). Required in production: `RESEND_API_KEY`, `SHEETS_WEBHOOK_URL`. `NEXT_PUBLIC_SITE_URL` falls back to the production host. Everything else (Mapbox, Meta, Google Ads/GA, Search Console) is optional and inert when unset.

## Known tech debt (ask before changing)

- **Fonts are inconsistent.** `lib/fonts.ts` loads Playfair Display + Montserrat via `next/font`, while `globals.css` still `@import`s Barlow Semi Condensed + Nunito Sans from Google's CDN (render-blocking) and uses Nunito as the base font. The brand doc specifies Barlow/Nunito. Needs an owner decision.
- `logLocal` writes to `.data/` and always fails on Vercel. Harmless noise in logs; see `AGENTS.md` §9.
- `/design-system` is publicly reachable (it is `noindex, nofollow` and not in the sitemap).

## Conventions

- Styling is deliberately mixed: Tailwind utilities + inline `style` + a few `@layer components` classes (`ds-*`) in `app/globals.css`. Match the local pattern; don't rewrite it.
- No database, ORM, auth or CMS. Content is TypeScript data.
- Client components carry `'use client'`; keep pages as Server Components.
- Brand/claims rules (48-hour offer, no testimonials, no street address or hours, no emoji/exclamation points) are in `AGENTS.md` §6.
