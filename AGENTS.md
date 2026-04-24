# AGENTS.md — review guide for VP Buys Homes

This file is for code-review agents (Codex, Claude, etc.) acting as a senior
engineer on this repository. Read it before opening files. It captures the
constraints that are not discoverable from the code alone.

Think of your job as: **protect SEO/market presence, keep the lead form
working, and prevent drift between the ~six places that describe the same
city or FAQ.** Everything else is style.

---

## 1. What this is

Marketing + lead-capture site for **VP Equities LLC** (dba VP Buys Homes), a
cash-for-houses business in Southeast Georgia. Primary market: Statesboro /
Bulloch County. Production URL: `https://vpbuyshomes.com`.

**The product is four things**:

1. A lead form that captures name/phone/address (step 1) and property
   details (step 2) and posts to `/api/lead`.
2. An outbound email (Resend) to `traver97@gmail.com` plus a Google Sheets
   log via an Apps Script webhook.
3. 8 city landing pages targeting local-SEO keywords.
4. 6 blog posts covering common seller situations (foreclosure, inherited,
   as-is, tired-landlord).

If a change does not make one of those four work better, question it.

---

## 2. Stack

- Next.js 14.2.5 (App Router), React 18, TypeScript 5.4 strict
- Tailwind 3.4 with custom theme tokens (`tailwind.config.ts`)
- Zod for request validation
- Resend (transactional email), Google Apps Script webhook (lead log)
- Deployed on Vercel (`.vercel/project.json` is linked)
- Path alias: `@/*` → project root

Run locally: `npm install && npm run dev` (port 3000). Build: `npm run build`.

---

## 3. Architecture — single sources of truth

**If you are adding or changing a city, FAQ, or area-related anything, use
these files. Do not reintroduce the duplicates that were removed.**

| Concern | Single source | Downstream consumers |
|---|---|---|
| Service-area list (name, county, slug) | `lib/areas.ts` | `app/sitemap.ts`, `app/page.tsx`, `app/areas/page.tsx`, `components/Footer.tsx`, `lib/seo.ts` (`orgJsonLd` areaServed), `app/api/lead/route.ts` (via `RECOGNIZED_CITIES`) |
| Per-city SEO body copy | `app/areas/[city]/page.tsx` `AREAS` record | city landing page only |
| FAQ questions + answers | `lib/faqs.ts` | `components/FaqAccordion.tsx` (visible), `lib/seo.ts#faqJsonLd` (JSON-LD) |
| Blog posts | `app/blog/posts.ts` | blog index + `[slug]` + sitemap |
| Structured-data generators | `lib/seo.ts` | `orgJsonLd`, `faqJsonLd`, `breadcrumbJsonLd`, `localBusinessAreaJsonLd` |
| Brand tokens (colors, fonts) | `tailwind.config.ts` + `:root` in `app/globals.css` | everywhere |

**To add a city**: add an `Area` to `lib/areas.ts`, then add a full entry to
the `AREAS` record in `app/areas/[city]/page.tsx`. Nothing else. The sitemap,
homepage grid, areas directory, footer, JSON-LD, and lead-route city
detector pick it up automatically.

**To add a FAQ**: edit `lib/faqs.ts`. Both the accordion and the JSON-LD
update automatically. Never add FAQs to only one of them.

**To add a blog post**: edit `app/blog/posts.ts`. The index, dynamic route,
and sitemap pick it up.

---

## 4. Lead flow (memorize)

`POST /api/lead` in `app/api/lead/route.ts`:

1. Parse body; `partial: true` uses `partialLeadSchema` (step 1 only), else
   `leadSchema` (full).
2. `detectCity(address)` checks against `RECOGNIZED_CITIES` (service-area
   cities + secondary coverage like Millen, Waynesboro, Jesup, Dublin).
3. Always write `logLocal(enriched)` first — guaranteed local fallback.
4. In parallel: `logToGoogleSheets(enriched)` and, for full submissions,
   `sendLeadEmail(enriched)`. Partial submissions never send email.
5. Return `{ ok, status, sessionId, saved: { local, email, sheets } }`.

Keep partial submissions forgiving: even if Zod fails on a partial, the
lead is still written to local fallback before returning 400. Do not change
this — losing a half-filled lead is worse than logging a bad record.

### Environment variables

```
NEXT_PUBLIC_SITE_URL            # canonical base URL
NEXT_PUBLIC_MAPBOX_TOKEN        # optional; enables address autocomplete
RESEND_API_KEY                  # optional; email skipped if unset
LEAD_NOTIFICATION_EMAIL         # optional; defaults to traver97@gmail.com
SHEETS_WEBHOOK_URL              # optional; Apps Script /exec URL
```

See `.env.example` for the full set with inline setup notes.

---

## 5. SEO — this is the product, protect it

**Never regress these without asking:**

- `metadataBase`, title templates, and default `<meta>` in `app/layout.tsx`.
- `export const metadata` on every page. Each page has its own canonical URL.
- `orgJsonLd` (LocalBusiness + RealEstateAgent) + `faqJsonLd` in the root
  layout.
- `localBusinessAreaJsonLd` on each city page.
- `breadcrumbJsonLd` on city and blog pages.
- Per-city keyword arrays in `generateMetadata` on `areas/[city]`.
- `app/sitemap.ts` + `app/robots.ts`.

**Google demotes FAQ structured data that does not match what the user can
see.** `FaqAccordion` and `faqJsonLd()` both read from `lib/faqs.ts` for
exactly this reason. If you ever split them, you have broken SEO.

**Per-city body copy on `areas/[city]/page.tsx` is intentionally distinct
per city.** Do not "deduplicate" it. The whole point is that every city
page ranks independently on local-intent queries.

---

## 6. Brand — non-negotiable

Source: `SKILL.md` and `assets/source/brand-guidelines.html`.

- **Colors**: navy `#1B365D` (primary) + amber `#F2A65A` (action only).
  Approx 80/20 navy/amber. Amber is never a large background.
- **Type**: Barlow Semi Condensed (display, UPPERCASE, tracking 0.02em,
  weight 700) + Nunito Sans (body, line-height 1.7).
- **Case**: UPPERCASE display, sentence-case body. No Title Case.
- **No emoji, exclamation points, fake urgency, gradients (except
  navy-deep on hero), or hand-drawn illustrations.**
- **Voice**: Direct · Fast · Local · Credible · Empathetic.
- House mark never appears without the "VP" wordmark.

---

## 7. Conventions you must respect

- **Styling is intentionally mixed**: Tailwind utility classes + inline
  `style={{...}}` blocks + `@layer components` classes in `app/globals.css`
  (e.g. `.wrap`, `.eyebrow`, `.sec-h`, `.btn-amber`, `.btn-navy`,
  `.btn-outline`, `.badge-amber`, `.card`, `.field`, `.circle-motif`). Do
  not rewrite the styling approach. Match the local pattern.
- **Client components** are marked `'use client'` (NavBar, HeroKinetic,
  LeadForm wrappers, LeadFormShared, FaqAccordion, AddressAutocomplete).
  Pages are Server Components by default.
- **No ORM / no database server.** Leads go to Google Sheets and email.
  This is intentional. Do not suggest Postgres, Prisma, Supabase, or any
  other database unless the user explicitly raises scale concerns.
- **No CMS.** Blog posts and city data are TypeScript arrays. Editing
  content means editing code. Do not suggest adding Contentful, Sanity,
  Notion, MDX, etc.
- **Fonts load via Google Fonts CDN in `app/globals.css`.** `SKILL.md`
  notes production should switch to `next/font`. Flag this as tech debt
  if font performance comes up — do not change unilaterally.

---

## 8. Review checklist

When reviewing a diff, go through this list. Flag anything that fails.

### Single-source-of-truth checks
- [ ] Adding a city: does it touch `lib/areas.ts` + `app/areas/[city]/page.tsx` and **only** those two files? If the diff also edits sitemap/footer/homepage/seo manually, that is a regression — they derive automatically now.
- [ ] Adding a FAQ: is it in `lib/faqs.ts` only?
- [ ] Is there a new hardcoded city list, FAQ array, or "areas" array anywhere? That is drift. Point it at the shared source instead.

### SEO integrity
- [ ] Every page still has `export const metadata` with `title`, `description`, and `alternates.canonical`.
- [ ] Any visible FAQ change also flows into JSON-LD (should happen for free via `lib/faqs.ts` — verify).
- [ ] Any new page is added to `app/sitemap.ts` or derived from an existing source.
- [ ] City and blog pages emit breadcrumb JSON-LD.
- [ ] No page sets `robots: { index: false }` or `noindex` unintentionally.

### Lead form integrity
- [ ] Both step-1 and step-2 submissions hit `/api/lead`.
- [ ] `partial: true` path still falls back to local logging on validation failure.
- [ ] Email is still suppressed for partial submissions (avoids duplicate inbox noise when user completes step 2).
- [ ] `sessionId` is preserved across both steps so sheet rows can be joined.
- [ ] `detectCity` still covers `RECOGNIZED_CITIES`.

### Brand + content
- [ ] No emoji, exclamation points, gradients beyond hero, or Title Case display text.
- [ ] Phone number is `(912) 515-6060` and `tel:+19125156060` — not a placeholder.
- [ ] From-address is `leads@vpbuyshomes.com`, lead recipient is `traver97@gmail.com` (or `LEAD_NOTIFICATION_EMAIL`).
- [ ] Brand name is "VP Buys Homes" (doing business as) / "VP Equities LLC" (legal entity). Not "VP Equities" alone in marketing copy.

### Codebase hygiene
- [ ] No new dependency unless it's earning its weight. Reject `clsx`, `classnames`, `nodemailer` — they were removed deliberately.
- [ ] No new `components/ui/*` primitives. The brand classes in `app/globals.css` already cover Button, Card, Badge, Input.
- [ ] No reintroduction of `next.config.ts` (keep the `.mjs` variant).
- [ ] No re-adding `lib/logger.ts` — the route calls `logToGoogleSheets` directly.

---

## 9. Things that look wrong but are intentional — do not "fix"

- **`logLocal` uses synchronous `fs`** inside an async function. Known; on
  Vercel serverless, `process.cwd()` is read-only in production so this
  path effectively no-ops outside of local dev. The lead is still delivered
  via email + Sheets. Fixing this means switching to `/tmp` or dropping it
  — user must approve.
- **Inline styles repeat the same Barlow font + uppercase + navy pattern
  ~46 times across pages.** The user has seen this and chose not to
  extract it into utility classes in this pass. Don't refactor without
  being asked.
- **The `preview/`, `ui_kits/`, `chats/`, `uploads/`, `scraps/`, and
  `assets/source/` directories are design reference material**, not
  part of the deployed site. Next doesn't compile them. Ignore during
  reviews.
- **Google Sheets webhook returns a 302 that resolves to a 200 from
  `script.googleusercontent.com` regardless of whether `doPost` ran.**
  The code treats any non-5xx final status as ok — this is intentional
  and explained in `lib/loggers/googleSheets.ts`. Do not change the
  `redirect: 'follow'` logic.
- **Email sender tries `leads@vpbuyshomes.com` first and falls back to
  `onboarding@resend.dev` with a `[UNVERIFIED DOMAIN]` subject prefix.**
  This is so leads keep arriving during DNS propagation. Remove the
  fallback only once the domain is permanently verified *and* the user
  approves.

---

## 10. Commit + PR style

- Short, specific subject: `Fix navbar scroll flicker`, not `Chore`.
- Focus commits on one concern. Multi-area commits are hard to revert.
- Do not commit `.env*` or `.data/leads.json` (both gitignored).
- Never commit `node_modules/`, `.next/`, `.vercel/`, or `*.tsbuildinfo`.

---

## 11. Search Console health check (local-only)

`scripts/gsc-check.mjs` uses the Google Search Console API (read-only scope
`webmasters.readonly`) to print sitemap submission status, indexed page
counts, coverage errors, and the top queries/pages from the last 7 days.

- `npm run gsc:auth /path/to/oauth-client.json` — one-time. Runs a local
  loopback OAuth flow, opens the browser, and prints `GSC_CLIENT_ID`,
  `GSC_CLIENT_SECRET`, `GSC_REFRESH_TOKEN`, `GSC_SITE_URL` for `.env.local`.
- `npm run gsc:check` — queries the API and prints a summary.

Why this is important for review agents: this script is the fastest way
to confirm the site is reaching Google, sitemap is accepted, and no new
changes have dropped impressions or broken pages. If a diff materially
touches SEO (metadata, canonical URLs, sitemap, JSON-LD), ask the user
to run `npm run gsc:check` before and after and compare.

Do not commit `.env.local` or the OAuth client JSON. Both contain secrets.

## 12. Escalation signals

Ask the user before doing any of the following:

- Introducing a database, ORM, auth, or CMS.
- Changing the lead-payload shape (breaks the Google Sheet columns).
- Rewriting the styling approach (Tailwind vs inline vs globals).
- Removing a landing page or blog post (SEO indexed).
- Changing `orgJsonLd` shape, `metadataBase`, or canonical URLs.
- Switching email or sheets providers.
- Upgrading Next.js across a major version.

When in doubt, surface your plan and stop.
