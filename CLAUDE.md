# VP Buys Homes — vpbuyshomes.com

Marketing + lead-capture site for **VP Equities LLC** (dba VP Buys Homes), a local cash-for-houses business serving Southeast Georgia (primary market: Statesboro / Bulloch County).

Domain: `https://vpbuyshomes.com`
Phone: `(912) 515-6060` · Lead email: `traver97@gmail.com` · From address: `leads@vpbuyshomes.com`

## Stack

- **Next.js 14.2.5** (App Router) — `next dev` / `next build` / `next start`
- **React 18.3.1** + **TypeScript 5.4** (strict)
- **Tailwind 3.4** with custom theme tokens (see `tailwind.config.ts`)
- **Zod** for input validation
- **Resend** for transactional email (lead notifications)
- **google-spreadsheet v4** for lead logging to Google Sheets
- **Deployed on Vercel** (`.vercel/project.json` is linked)

Path alias: `@/*` → project root.

## Repo layout

```
app/
  layout.tsx          # Site metadata, nav, footer, org + FAQ JSON-LD
  page.tsx            # Homepage
  sell/               # Primary conversion page
  how-it-works/
  areas/
    page.tsx          # Areas directory
    [city]/page.tsx   # Per-city landing pages (hardcoded AREAS map)
  blog/
    page.tsx
    posts.ts          # Blog data source (hardcoded array, no CMS)
    [slug]/page.tsx
  api/lead/route.ts   # Lead submission endpoint
  sitemap.ts          # Auto-built from AREAS + POSTS
  robots.ts
components/
  NavBar.tsx, Footer.tsx, HeroKinetic.tsx
  LeadForm.tsx, LeadFormQuick.tsx, FaqAccordion.tsx
  ui/                 # Button, Input, Card, Badge primitives
lib/
  seo.ts              # orgJsonLd, faqJsonLd, breadcrumbJsonLd, localBusinessAreaJsonLd
  email.ts            # Resend sender (sendLeadEmail)
  validation.ts       # Zod leadSchema
  logger.ts           # logLead() — try Sheets, fall back to local JSON
  loggers/googleSheets.ts
  loggers/local.ts    # Writes to .data/leads.json
```

## Lead flow (memorize this — it's the whole product)

1. User submits `LeadForm` → POST `/api/lead`
2. `route.ts` validates with `leadSchema`, detects city from address string, runs in parallel:
   - `sendLeadEmail()` → Resend → `traver97@gmail.com`
   - `logLead()` → Google Sheets (primary), falls back to local `.data/leads.json`
3. Returns `{ ok, email, logged }` to the client.

Cities recognized by `detectCity`: Statesboro, Rincon, Savannah, Metter, Springfield, Swainsboro, Claxton, Vidalia, Millen, Waynesboro, Jesup, Dublin.

## Environment variables

```
NEXT_PUBLIC_SITE_URL=https://vpbuyshomes.com
NEXT_PUBLIC_MAPBOX_TOKEN=...          # optional — powers address autocomplete
LEAD_NOTIFICATION_EMAIL=traver97@gmail.com  # optional, override recipient
RESEND_API_KEY=...
GOOGLE_SHEETS_CLIENT_EMAIL=...
GOOGLE_SHEETS_PRIVATE_KEY=...         # \n-escaped newlines
GOOGLE_SHEETS_SPREADSHEET_ID=...
GOOGLE_SHEETS_WORKSHEET_TITLE=Leads   # optional, defaults to "Leads"
```

Address autocomplete (`components/AddressAutocomplete.tsx`) uses Mapbox. The component is isolated behind a standard input interface — swapping providers (Google Places, LocationIQ, etc.) only requires replacing its `fetchSuggestions` implementation.

Missing Resend key → email is skipped (warns); missing Sheets env → logger falls back to local file.

## SEO architecture (current focus)

- **Metadata** — `app/layout.tsx` has default title/description/OG/Twitter. Each page overrides via its own `export const metadata`.
- **Structured data** — `lib/seo.ts` is the single source of truth:
  - `orgJsonLd` (LocalBusiness + RealEstateAgent) — injected in `layout.tsx`
  - `faqJsonLd` — injected in `layout.tsx`
  - `breadcrumbJsonLd` — for nested pages
  - `localBusinessAreaJsonLd(city, county, siteUrl, slug)` — for `/areas/[city]`
- **Sitemap** (`app/sitemap.ts`) — auto-assembles core routes + AREAS array + POSTS array. When adding a city or blog post, also add to the AREAS array here.
- **Robots** (`app/robots.ts`) — allows all; points to `/sitemap.xml`.
- **City pages** — `app/areas/[city]/page.tsx` has a hardcoded `AREAS` record. Adding a city means: (1) add entry here, (2) add slug to `sitemap.ts` AREAS, (3) add entry to homepage AREAS list.
- **Blog posts** — add entry to `app/blog/posts.ts`.

When asked for SEO work, default to: improving metadata coverage, adding structured data variants, expanding city/blog content, fixing internal linking, and validating Core Web Vitals — not rewriting infrastructure.

## Brand constraints (non-negotiable)

Source: `SKILL.md` and `assets/source/brand-guidelines.html`.

- **Colors**: navy `#1B365D` (primary) + amber `#F2A65A` (action only). 80/20 navy/amber ratio max. Amber is never a large background.
- **Type**: Barlow Semi Condensed (display, UPPERCASE, tracking 0.02em, weight 700) + Nunito Sans (body, line-height 1.7).
- **Case**: UPPERCASE display, sentence-case body. No Title Case.
- **No emoji. No exclamation points. No fake urgency.** (✓ allowed in bullets.)
- **No gradients** except optional navy-to-deep on hero backgrounds.
- **Voice**: Direct · Fast · Local · Credible · Empathetic.
- House mark never appears without the "VP" wordmark.

## Code conventions

- **Styling is mixed**: Tailwind utilities + inline `style={{...}}` + `@layer components` classes in `globals.css` (`.wrap`, `.eyebrow`, `.sec-h`, `.btn-amber`, `.circle-motif`, etc.). Don't "clean this up" without being asked — match the local pattern.
- **No ORM / no database server** — leads go to Google Sheets. This is intentional; do not suggest Postgres/Prisma unless the user raises scale.
- **No CMS** — blog posts and city data are TypeScript arrays. Editing content = editing code.
- **Client components** are marked `'use client'` (NavBar, HeroKinetic, LeadForm, LeadFormQuick, FaqAccordion). Pages are Server Components by default.
- **Fonts** currently load via Google Fonts CDN in `globals.css`. `SKILL.md` notes production should use `next/font` — flag this as tech debt if font performance comes up, but don't change unilaterally.

## Do / don't

- **Do** edit `lib/seo.ts` when tweaking structured data — it's the single source.
- **Do** add new cities/posts in the 2–3 places listed above so sitemap + UI stay in sync.
- **Don't** add emoji, exclamation points, or hand-drawn illustrations.
- **Don't** introduce a database, auth, or CMS without being asked — the product is a 4-page marketing site + lead form.
- **Don't** rewrite the styling approach. The inline-style + Tailwind mix is how this codebase works.
- **Don't** commit `.env*` or `.data/leads.json` (both gitignored).

## Related context

- `SKILL.md` — invocable design skill for generating mocks/prototypes; has fuller brand voice notes.
- `README.md` — describes this as a "handoff bundle" from claude.ai/design. The `chats/`, `scraps/`, `preview/`, `ui_kits/`, and `uploads/` directories are design-system reference material, not part of the deployed site.
- `chats/chat1.md` — original design conversation; useful for understanding intent behind existing components.
