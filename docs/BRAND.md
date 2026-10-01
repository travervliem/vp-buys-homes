# BRAND.md — VP Buys Homes / VP Equities Design System

> Visual source of truth: `ui_kits/website/index.html`. When this doc and the HTML disagree, the HTML wins — open it side-by-side while building.

---

## 1. Brand & voice

- **Legal entity:** VP Equities LLC
- **DBA / consumer-facing:** VPBuysHomes.com
- **Tagline:** *Investing Today. Building Tomorrow.*
- **Phone:** (912) 515-6060 — `tel:9125156060`
- **Email:** leads@vpbuyshomes.com
- **Service area:** Bulloch, Chatham, Effingham, Candler counties (Southeast Georgia)

**Voice:** Plainspoken. Direct. No hype. No exclamation points. We sound like a trustworthy local firm, not a wholesaler. Italics on serif headlines carry the emotional weight; body copy is calm and informational.

---

## 2. Color tokens

```css
:root {
  /* Primary — Navy */
  --navy:        #1B365D;  /* primary brand */
  --navy-deep:   #0F2040;  /* deeper, for gradients */
  --navy-mid:    #264D80;  /* mid tone, eyebrows on light */
  --navy-900:    #0D1B2A;  /* near-black body text */

  /* Accent — Amber (CTA only) */
  --amber:       #F2A65A;
  --amber-dark:  #D4862E;  /* hover/pressed */

  /* Neutrals */
  --white:       #FFFFFF;
  --light:       #F5F2ED;  /* page tint */
  --border:      #E5E0D8;
  --gray-100:    #F0EDE6;
  --gray-400:    #8A8275;
  --gray-500:    #6B6558;
  --gray-700:    #3F3B33;
  --dark:        #0D1B2A;

  /* Semantic */
  --success:     #3FCF8E;  /* live dots, success states */
}
```

**Tailwind equivalent (`tailwind.config.ts`):**
```ts
colors: {
  navy:    { DEFAULT: '#1B365D', deep: '#0F2040', mid: '#264D80', 900: '#0D1B2A' },
  amber:   { DEFAULT: '#F2A65A', dark: '#D4862E' },
  paper:   '#F5F2ED',
  hairline:'#E5E0D8',
  ink:     { 100: '#F0EDE6', 400: '#8A8275', 500: '#6B6558', 700: '#3F3B33', 900: '#0D1B2A' },
  success: '#3FCF8E',
}
```

**Usage rules**
- **Amber is for CTAs only.** Never decorative. Never headers. Never icon backgrounds in body content.
- **Navy gradients** are reserved for hero (`navy → navy-deep`) and dark sections.
- **Italic amber serif** is the one decorative move (e.g. *can't sell, can't fix*) — use sparingly, once per page.
- **Body text** = `--gray-700` on white, `rgba(255,255,255,.72)` on navy.

---

## 3. Typography

**Families**
- **Display (serif):** `'Playfair Display', Georgia, 'Times New Roman', serif` — headlines, hero, italic accents
- **Body (sans):** `'Montserrat', 'Helvetica Neue', system-ui, sans-serif` — everything else
- **Mono:** `'JetBrains Mono', ui-monospace, Menlo, monospace` — rare, technical only

Load both via `next/font/google`:
```ts
import { Playfair_Display, Montserrat } from 'next/font/google';
export const fontDisplay = Playfair_Display({ subsets: ['latin'], weight: ['600','700'], variable: '--font-display' });
export const fontBody    = Montserrat({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' });
```

**Type scale** (desktop)

| Token | Size | Weight | Family | Usage |
|---|---|---|---|---|
| `--fs-mega` | 72px | 700 | Display | Hero H1 |
| `--fs-h1`   | 56px | 700 | Display | Page H1 |
| `--fs-h2`   | 38px | 700 | Display | Section title |
| `--fs-h3`   | 28px | 700 | Display | Subsection |
| `--fs-h4`   | 22px | 600 | Display | Card title |
| `--fs-h5`   | 18px | 600 | Display | Small heading |
| `--fs-lead` | 18px | 400 | Body    | Hero sub, intro paragraph |
| `--fs-body` | 15px | 400 | Body    | Body copy |
| `--fs-body-sm` | 13px | 500 | Body | Secondary |
| `--fs-cap`  | 11px | 700 | Body    | Eyebrow (uppercase, tracked .18em) |
| `--fs-micro`| 10px | 600 | Body    | Stamps, micro-labels |

**Mobile clamps** (apply at `≤768px`): mega → 40px, h1 → 36px, h2 → 28px, h3 → 22px.

**Italic accent rule:** `<em>` inside display headings is `font-style: italic; font-weight: 600; color: var(--amber)`. This is the brand's signature move — use it on emotionally-loaded words once per heading.

**Eyebrow rule:** uppercase, `letter-spacing: .18em`, amber on light, amber on dark.

---

## 4. Spacing, radii, shadows, motion

```css
--radius-sm: 6px;   /* inputs, small chips */
--radius-md: 10px;  /* cards, primary surfaces */
--radius-lg: 14px;  /* hero form card, large surfaces */
--radius-pill: 999px;

--shadow-xs: 0 1px 2px rgba(13,27,42,.06);
--shadow-sm: 0 2px 6px rgba(13,27,42,.06), 0 1px 2px rgba(13,27,42,.04);
--shadow-md: 0 4px 14px rgba(13,27,42,.10), 0 2px 4px rgba(13,27,42,.04);
--shadow-lg: 0 10px 30px rgba(13,27,42,.12), 0 4px 10px rgba(13,27,42,.06);
--shadow-xl: 0 24px 48px rgba(13,27,42,.18), 0 10px 20px rgba(13,27,42,.08);
--shadow-amber: 0 6px 20px rgba(242,166,90,.35);

--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
--dur-fast: 120ms;
--dur-med:  200ms;
--dur-slow: 360ms;

--container: 1200px;  /* max content width */
--gutter: 28px;       /* desktop side padding */
--gutter-mob: 18px;
```

Spacing scale: stick to multiples of 4 (4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 120). Tailwind's default works fine.

---

## 5. Components — contracts

Build these in `components/ui/` (primitives) and `components/marketing/` (blocks). Prop names below are non-negotiable so pages can swap content without touching components.

### Primitives (`components/ui/`)

**`<Button variant size>`**
- variants: `'amber' | 'ghost' | 'navy' | 'link'`
- sizes: `'sm' | 'md' | 'lg'`
- `amber` = `bg-amber text-white`, hover `bg-amber-dark`, font Montserrat 12px 700 uppercase letter-spacing .16em, padding `14px 26px`, radius `--radius-sm`, transform `translateY(-1px)` on hover.
- `ghost` = transparent, white text on dark / navy text on light, 1px border `rgba(255,255,255,.3)` on dark.

**`<Input>` / `<Textarea>` / `<Select>`**
- Height 44px (lg) / 40px (md). Radius `--radius-sm`. Border `--border`. Focus: `border-color: var(--navy); box-shadow: 0 0 0 3px rgba(27,54,93,.12)`.
- Label: 11px Montserrat 700 uppercase tracked .14em, color `--gray-500`.

**`<Eyebrow tone>`**
- tones: `'amber' | 'navy' | 'white'`
- 11px Montserrat 700 uppercase tracked .18em. Optional `<span className="line">` rule before text (24px × 2px bar).

**`<Card variant>`**
- variants: `'default' | 'hover' | 'feature'`
- White bg, 1px `--border`, radius `--radius-md`, padding 22–28px. `hover` lifts `translateY(-2px)` + `shadow-md` + `border-color: amber`.

**`<Logo size reversed>`**
- Wordmark only (no house icon). `VP` (amber) + `Equities` (navy or white if reversed). Optional DBA strapline `DBA · VPBuysHomes.com` (10px tracked .22em).

### Marketing blocks (`components/marketing/`)

**`<SiteHeader>`** — sticky, white, 72px tall. Logo left. Nav: How it works · Situations · Areas · FAQ · phone link · amber "Get Offer" CTA. Mobile: hamburger + circular call button.

**`<SiteFooter>`** — navy bg, 4 columns: Brand block (logo + tagline + service note + phone + email), Sitemap, Areas, Company. Bottom strip: copyright + "Southeast Georgia · Since 2018".

**`<Hero>`** — props: `eyebrow?, headline, headlineEm?, sub, bullets[], children` (form slot)
- Two-column grid 1.2fr / 1fr. Background: navy gradient with three radial orb gradients (`--navy-mid` dominant, one soft amber, vignette warmed).
- H1 uses Playfair, italic amber `<em>` for `headlineEm`.
- Right column = form slot (typically `<LeadForm>`).
- Mobile: stack, form below text.

**`<LeadForm>`** — *the hero form. Don't change field names or submit behavior.*
- Fields: `name` (required), `phone` (required), `email`, `address` (required), `timeline` (select: ASAP / 30d / 60d / 90d / Exploring), `condition` (select: Move-in ready / Light updates / Needs work / Major repairs).
- Submit: amber button, centered, "Get My Cash Offer" + arrow.
- Success state: green check, *"Got it — we're on it."* + "We'll call **[their phone]**".
- The submit endpoint and field `name` attributes must match the existing CRM contract — confirm before changing.

**`<UrgencyStrip>`** — thin amber/navy strip below hero with 3–4 trust signals (*7-day close · No fees · Cash · As-is*).

**`<SituationGrid>`** — 3-column grid (mobile: 1 col) of `<SituationCard>`. Tag chip with amber dot, H4 title, body, "Read more →" link. Hover: lift + amber border.

**`<ProcessSteps>`** — 3-column "How it works" with giant italic numbers (`84px`, `--light`, `position: absolute top-right` of card). Eyebrow + step number, H3, body.

**`<BenefitsBlock>`** — 1.1fr / 1fr two-column. Left: photo with navy gradient overlay + tag block at bottom. Right: H2 + body + checklist.

**`<FAQ>`** — accordion. Border-top hairline per item. Q row: 28px circular icon (1.5px navy border, amber bg when open), "+" / "–". A: body copy, max-width 720.

**`<FinalCTA>`** — navy section, large H2 with italic amber accent, two CTAs (amber primary + ghost phone link).

**`<MobileCTABar>`** — fixed bottom bar visible ≤768px, two buttons: Call · Text (sms: link with prefilled body), one amber Get Offer.

---

## 6. Hero background recipe (don't get this wrong)

```css
background:
  radial-gradient(circle at 18% 20%, rgba(38,77,128,.55), transparent 50%),
  radial-gradient(circle at 82% 30%, rgba(38,77,128,.40), transparent 55%),
  radial-gradient(circle at 50% 90%, rgba(242,166,90,.18), transparent 60%),
  linear-gradient(180deg, #1B365D 0%, #0F2040 100%);
```

Vignette overlay: `radial-gradient(circle at 50% 50%, transparent 40%, rgba(15,32,64,.55) 100%)`. Goal: navy-dominant with one soft amber accent. Never crush to black.

---

## 7. Do's and don'ts

✅ **Do**
- Use `<em>` italics on emotional words in display headings, exactly once.
- Center the form submit button.
- Use `text-wrap: balance` on every H1/H2.
- Use Playfair italics for big-number step counters (84px, color `--light`, decorative).
- Match the form's success state copy *"Got it — we're on it."* exactly.

❌ **Don't**
- Don't add gradient backgrounds to cards or buttons.
- Don't use emoji.
- Don't use rounded-corner-with-left-border-accent containers (AI slop tell).
- Don't add a "Trusted by 10,000+ homeowners" stat strip — we don't claim numbers we can't back.
- Don't add the eyebrow "CASH HOME BUYER · SOUTHEAST GEORGIA · SINCE 2019" above the hero H1 (removed per latest design).
- Don't add a top live-ticker bar ("Just closed: Savannah in 9 days · $232,000") — removed per latest design.
- Don't add a "Talk to a human · See how it works" secondary CTA row below the hero form — removed.
- Don't add filler sections (testimonials lorem-ipsum, decorative stats). Ask before adding any new section.

---

## 8. Accessibility & perf floor

- Tap targets ≥ 44×44px on mobile.
- Color contrast AA minimum on all text.
- All form inputs labelled (visible label or `aria-label`).
- All images have `alt`.
- Lighthouse: Perf ≥ 90, SEO 100, a11y ≥ 95 per page.
- LCP element on every page is text or static image — no JS-dependent hero.
- Use `next/image` with explicit width/height. Use `next/font` (no FOUT).
