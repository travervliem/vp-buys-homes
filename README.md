# VP Buys Homes — Design System

> **VP Equities LLC** — dba *VP Buys Homes* (vpbuyshomes.com). A Southeast‑Georgia distressed‑home buyer. Professional, fast, experienced. Built to earn trust and convert stressed sellers into warm leads.

---

## Company context

**Who** — VP Equities LLC. Local investor buying houses for cash.
**Where** — Statesboro, Rincon, Savannah, Metter, Springfield (SE Georgia).
**Promise** — Written cash offer in 24 hours. Close in 7–21 days. No repairs, no fees, no commissions.
**Audience** — Homeowners under real stress: foreclosure deadlines, divorce, inherited property, bad tenants, major repairs. They want *speed and certainty*, not warmth.
**Positioning** — Direct, fast, local, credible, empathetic. Not corporate. Not hype‑y.

---

## Sources

| Source | Path | Notes |
| --- | --- | --- |
| Brand guidelines 2025 | `assets/source/brand-guidelines.html` | Canonical — cover, logo system, color palette, type scale, voice, business card, email sig, offer letter, postcard, social banner. |
| Logo (navy) | `assets/logo-navy.svg` | Full lockup: "VP" + house mark + "VP EQUITIES" + "VPBUYSHOMES.COM" |
| Logo (white / reversed) | `assets/logo-white.svg` | For navy backgrounds |
| House mark (icon only) | `assets/house-mark-navy.svg`, `assets/house-mark-white.svg` | Never use the house mark alone without "VP" — per brand guidelines section 01 |
| Sample templates | `assets/source/{business-card,postcard,offer-letter,email-signature,social-banners}.html` | Production-ready examples. |
| Codebase | `travervliem/VPBuysHomes.com` (imported to root) | Next.js 14 + Tailwind. Existing tokens were placeholder; replaced with real brand values. |

---

## Index

- `README.md` — this file
- `SKILL.md` — Agent‑Skills-compatible entry point
- `colors_and_type.css` — CSS variables (color, type, spacing, radii, shadows, motion) + semantic defaults
- `assets/` — logos, house mark, source brand templates
- `preview/` — registered cards for the Design System tab
- `ui_kits/website/` — hi‑fi marketing site recreation (hero, trust bar, process, offer form, testimonials, FAQ, footer)

---

## Content fundamentals

### Voice pillars (guidelines § 04)

1. **DIRECT** — No jargon, no hedging.
2. **FAST** — Speed is the value proposition.
3. **LOCAL** — Name the cities, know the market.
4. **CREDIBLE** — No fake urgency. No inflated claims.
5. **EMPATHETIC** — Acknowledge the situation, then solve it.

### Write like this

- *"We buy houses in Statesboro for cash. Close in 7 days."*
- *"Facing foreclosure? We can make an offer this week."*
- *"No repairs. No fees. You pick the closing date."*
- *"Inherited a house you don't want? We'll take it as-is."*
- *"Get your cash offer today — no obligation."*

### Not like this

- *"Your trusted real estate partner in Southeast Georgia!"* — corporate warmth
- *"We're passionate about helping homeowners explore options."* — hedging
- *"Schedule a consultation to discuss your unique situation."* — jargon
- *"We provide comprehensive property acquisition solutions."* — empty
- *"Limited time offer — act now!!!"* — fake urgency

### Casing

- **Display & section titles** — **UPPERCASE**, Barlow Semi Condensed 700, tracking 0.02em. This is the core visual voice.
- **Card H3, H4** — UPPERCASE allowed; required for Barlow.
- **Body** — sentence case, Nunito Sans.
- **Buttons** — UPPERCASE, tracking 0.06em ("GET MY CASH OFFER").
- **Eyebrows** — UPPERCASE, tracking 0.14–0.18em, amber.
- **Phone** — `(555) 000-0000` or `555-000-0000` formatted consistently.

### Canonical headlines

- **Primary** — "WE BUY HOUSES FOR CASH IN SOUTHEAST GEORGIA"
- **Benefits** — "NO REPAIRS. NO FEES. CLOSE IN DAYS."
- **CTA** — "GET YOUR CASH OFFER IN 24 HOURS"

### Punctuation

- **Middle dot (·)** is the brand's list separator: `NO REPAIRS · NO FEES · CLOSE IN 7 DAYS`
- **Em dash (—)** for setups: "Facing foreclosure — we can help."
- **En dash (–)** for ranges: "7–21 days"
- **No exclamation points.** Ever.
- **No emoji.** (Check marks `✓` allowed in bullet lists per postcard spec.)

---

## Visual foundations

### Color (guidelines § 02)

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| **Primary** | `--navy` | `#1B365D` | Anchors all touchpoints. Headlines, buttons, nav, full‑bleed sections. |
| Background (page) | `--white` | `#FFFFFF` | Default. |
| **Accent / CTA** | `--amber` | `#F2A65A` | CTAs, badges, key callouts ONLY. Never dilute by overuse. |
| Page tint | `--light` | `#EEF2F7` | Alt section backgrounds. |
| Body text | `--navy-900` / `--dark` | `#0D1B2A` | All body copy. |
| Hairline | `--border` | `#D1DCE8` | Card borders on white. |

**Preferred ratio — 80% navy, 20% amber.** Amber is the action color: CTAs, badges, key callouts. If amber appears on more than 20% of any layout, back it off.

**Three valid mixes** (from § 02):
- *Digital pages* — tint + navy + white
- *Print / direct mail* — two-color: navy + white only
- *Letters* — white with navy bar + amber badge

### Typography (guidelines § 03)

Two typefaces only.

- **Barlow Semi Condensed** — all headlines, display, buttons. Weight 700 default, 600 for smaller heads, 800 for extreme emphasis. Tracking +0.02em. Line-height 1.0–1.2.
- **Nunito Sans** — all body, UI, captions, labels. Weight 400 body, 600 UI labels, 700 caps labels. Line-height 1.7 body (deliberately open).

**Scale**

| Role | Size | Family | Weight | LH |
| --- | --- | --- | --- | --- |
| Hero / H1 | 42–72px | Barlow SC | 700 | 1.0 |
| Section H2 | 26–38px | Barlow SC | 700 | 1.1 |
| Card H3 | 18–22px | Barlow SC | 600 | 1.2 |
| Body | 14–16px | Nunito Sans | 400 | 1.7 |
| Label / eyebrow | 10–12px | Nunito Sans | 700 | 1 (caps) |

### Spacing & rhythm

- 4px base grid
- Section vertical padding on marketing pages: **72px** (desktop), 48px (tablet), 32px (mobile)
- Container max: 960–1200px

### Backgrounds

- **Default** — white
- **Alt section** — `--light` (#EEF2F7)
- **Hero / closing CTA** — navy full-bleed, optional decorative large-radius concentric circle outlines at 3–6% white opacity (see brand guideline cover)
- **Photography** — never substituted for solid sections. When photography is used, it's warm documentary, not stock. No gradients.
- **No hand-drawn illustration, no abstract blobs, no squiggles.**

### Borders

- **Hairline** — `1px solid #D1DCE8` on card edges (white on white)
- **Amber accent bar** — `2px solid #F2A65A` as a top border on feature cards / voice callouts
- **Navy accent bar** — `3px solid #1B365D` as a bottom border on offer letters / invoice docs

### Corner radii

- **Cards, inputs** — `--r-lg` (8px). This is the canonical radius.
- **Buttons** — `--r-sm` (4px) rectangular CTAs OR `--r-pill` for pill-style badges.
- **Badges / amber CTA chips** — `--r-pill` (999px)
- **Logos / decorative** — sharp.

### Shadows

- Quiet by default. `shadow-sm` on resting cards.
- `shadow-md` → `shadow-lg` on hover.
- `shadow-xl` on the business card / postcard preview.
- Dedicated `shadow-amber` for the primary CTA button.

### Motion

- **Ease** — `cubic-bezier(0.2, 0, 0, 1)` standard.
- **Duration** — 120ms micro / 200ms standard / 360ms entries.
- **No bounce, no overshoot, no parallax.** Brand is fast and confident.
- Scroll entries: fade + 6px translate-up.

### Interaction states

| State | Treatment |
| --- | --- |
| Primary button hover | Background `--amber-dark` (#D4862E); shadow lifts `md → lg`; 120ms. |
| Primary button press | 97% scale; 80ms. |
| Secondary/navy button hover | Background `--navy-deep` (#0F2040). |
| Link hover | Color shifts navy → `--amber-dark`. |
| Input focus | Border `--navy`; ring `--ring-navy`. |
| Card hover | `translateY(-2px)`, shadow `sm → md`. |
| Disabled | 50% opacity, `cursor: not-allowed`. |

### Transparency & blur

- **Used once**: sticky header after scroll — `backdrop-filter: saturate(140%) blur(12px)` over `rgba(255,255,255,0.85)`.
- **On navy cards**: `rgba(255,255,255,0.08)` for inner voice-callout cards, `rgba(255,255,255,0.12)` border.

### Layout rules

- 12-column desktop, 4-column mobile
- Sticky header 72px tall, borderless at top, picks up border + blur after 40px scroll
- Offer form anchors hero — first CTA, never buried
- Signature decorative motif: concentric large-radius circle outlines in the top-right of navy sections, `border: 40–72px solid rgba(255,255,255,0.03–0.04)` (see brand guidelines cover)

---

## Iconography

The codebase ships no icon set. The brand kit uses minimal iconography:

- **House pentagon mark** — the only brand-native icon. Single-color fill (navy or white). Never used alone without "VP" wordmark (§ 01 misuse rules).
- **Check marks (✓)** — allowed for bullet lists on postcards and benefit lists. Rendered as the unicode glyph in body color or amber.
- **P / W letter markers** — the business card / email signature uses "P" and "W" in amber bold as inline phone/web markers instead of phone/globe icons. Preserve this pattern.
- **Lucide** — recommended stand‑in for any UI affordances not covered by the above (form field icons, nav arrows, menu). 1.75–2px stroke, round caps, 24px base. Use `currentColor`. ⚠ **Substitution flag** — no custom UI icons exist yet; confirm with user before finalizing.
- **No emoji anywhere.**
- **No multi-color or two-tone icons.**

---

## Preview cards

Registered in `preview/`, grouped as:

- **Type** — Barlow display, Nunito body, scale, eyebrow
- **Colors** — True Navy, Warm Amber, neutrals, semantic, 80/20 ratio
- **Spacing** — radii, shadow elevation, spacing ramp
- **Components** — buttons, inputs, badges, cards, feature cells, lead form
- **Brand** — primary lockup, reversed lockup, house mark usage, voice callouts

---

## Open items for the user

1. **Phone number** — all templates show `[555-000-0000]` / `[555] 000-0000`. Share real number to replace.
2. **Acquisitions team names** — business card + email sig are templated. Please share roster.
3. **Photography** — brand kit has no photography direction. Suggest commissioning warm documentary shots of SE Georgia neighborhoods + seller portraits, OR adopting a no-photography, type/geometry-driven direction (recommended if budget-limited).
4. **Icon set** — Lucide is my substitution suggestion. Confirm or swap.
