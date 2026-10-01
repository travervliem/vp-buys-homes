# VP Buys Homes — Claude Code Handoff

This package migrates the existing **Next.js 14 App Router** site (71 statically-rendered pages) onto a new shared design system, derived from `ui_kits/website/index.html`.

---

## Files in this package

| File | What it is | When to read it |
|---|---|---|
| `BRAND.md` | The design system. Tokens, type, components, do's/don'ts. Tailwind config + CSS vars + React component contracts. | Phase 0 (foundation work) |
| `MIGRATION_PLAN.md` | Phased execution plan. Page taxonomy, checkpoints, what to migrate when. | Every phase |
| `ui_kits/website/index.html` | The visual source of truth. Pixel-fidelity reference for hero, form, cards, buttons, motion. | Continuously |

---

## Recommended prompt to give Claude Code

> Read `docs/BRAND.md` and `docs/MIGRATION_PLAN.md` in full. Open `ui_kits/website/index.html` and treat it as the canonical visual reference.
>
> Start **Phase 0** only. Build the foundation (Tailwind config, globals, primitives, marketing blocks) and stand up a `/design-system` preview route that renders every component. Do not touch any existing page yet.
>
> When Phase 0 is complete, stop and post the preview URL. Wait for sign-off before Phase 1.

---

## Hard rules (repeat these every phase)

1. **Don't break URLs.** Every existing route stays at its current path. No slug changes.
2. **Don't rewrite copy.** Body text, headlines, meta descriptions, H1s move verbatim unless explicitly approved.
3. **Don't break SEO.** Preserve `<title>`, meta descriptions, OpenGraph, JSON-LD, internal links, sitemap entries.
4. **Don't change form behavior.** The hero lead form is wired to a CRM. Field names, submit endpoint, validation rules, success state — all sacred. Visual styling can change; contract cannot.
5. **Match `index.html` pixel-for-pixel** for the hero, form card, buttons, card patterns, urgency strip, and motion. Use exact hex values and type scale from `BRAND.md`.
6. **Use the data layer.** City × situation pages must be driven by `cities.ts` + `situations.ts` data files with `generateStaticParams` — not 40 hand-written page files.
7. **Mobile parity required.** Every migrated page must pass a 375px-wide check before being marked done.
8. **Stop at every checkpoint.** Do not auto-advance phases.

---

## What "done" looks like per phase

- **Phase 0** — `/design-system` route renders every primitive and marketing block. Type ramp, color tokens, button states, form states all visible. No existing page is touched.
- **Phase 1** — One page of each template type (5 total) is fully migrated and reviewed. URLs unchanged. Lighthouse ≥ 95 on perf/SEO/a11y for the sample.
- **Phase 2** — Remaining 66 pages migrated using the Phase 1 components. Diff per page should be tiny (data-only).
- **Phase 3** — Per-page metadata, OG images, JSON-LD, sitemap regenerated. Final Lighthouse pass.
