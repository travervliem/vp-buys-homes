import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Field, Input, Select, Textarea } from '@/components/ui/Input'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Logo } from '@/components/ui/Logo'
import { Section } from '@/components/ui/Section'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { SituationGrid } from '@/components/marketing/SituationGrid'
import { ProcessSteps } from '@/components/marketing/ProcessSteps'
import { BenefitsBlock } from '@/components/marketing/BenefitsBlock'
import { FAQ } from '@/components/marketing/FAQ'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'

export const metadata: Metadata = {
  title: 'Design System Preview',
  robots: { index: false, follow: false },
}

const COLORS = [
  ['Navy',       '#1B365D', 'navy'],
  ['Navy Deep',  '#0F2040', 'navy-deep'],
  ['Navy Mid',   '#264D80', 'navy-mid'],
  ['Navy 900',   '#0D1B2A', 'navy-900'],
  ['Amber',      '#F2A65A', 'amber'],
  ['Amber Dark', '#D4862E', 'amber-dark'],
  ['Paper',      '#F5F2ED', 'paper'],
  ['Hairline',   '#E5E0D8', 'hairline'],
  ['Light',      '#EEF2F7', 'light'],
  ['Border',     '#D1DCE8', 'border'],
  ['Ink 700',    '#3F3B33', 'ink-700'],
  ['Ink 500',    '#6B6558', 'ink-500'],
  ['Success',    '#3FCF8E', 'success'],
  ['Danger',     '#B42318', 'danger'],
]

const TYPE_RAMP: Array<[string, string, string]> = [
  ['Mega 72',  'ds-mega', 'Hero · Playfair 72/700'],
  ['H1 56',    'ds-h1',   'Page H1 · Playfair 56/700'],
  ['H2 38',    'ds-h2',   'Section title · Playfair 38/700'],
  ['H3 28',    'ds-h3',   'Subsection · Playfair 28/700'],
  ['H4 22',    'ds-h4',   'Card title · Playfair 22/600'],
  ['H5 18',    'ds-h5',   'Small heading · Playfair 18/600'],
  ['Lead 18',  'ds-lead', 'Hero sub / intro paragraph · Montserrat 18/400'],
  ['Body 15',  'ds-body', 'Body copy · Montserrat 15/400 · line-height 1.7'],
  ['Caption',  'ds-caption', 'Caption · Montserrat 13/500'],
]

const SITUATION_DEMOS = [
  { href: '#', tag: 'Foreclosure', title: 'Stop a foreclosure before sale day', body: 'Georgia\'s 30-day notice + 4-week ad means the timeline is tight. We coordinate the lender payoff and close before the courthouse-steps sale.' },
  { href: '#', tag: 'Inherited', title: 'Sell an inherited Georgia home', body: 'Letters testamentary, year\'s support, or a § 53-2-40 order — we wait for the right Probate Court paperwork before closing.' },
  { href: '#', tag: 'Divorce', title: 'Sell through a Georgia divorce', body: 'Equitable distribution, not 50/50. We work with both spouses\' attorneys so the closing matches the decree or pending order.' },
]

const STEPS = [
  { title: 'Tell us about the house', body: 'Send us the address and a few details. No appraisal, no walkthrough required up front.' },
  { title: 'Get a written cash offer', body: 'A real number from a real local buyer — not a teaser range. Sent within 48 hours.' },
  { title: 'Pick your close date', body: 'Close in 7 days or 70 — your call. We pay standard closing costs at a local attorney\'s office.' },
]

const FAQ_DEMO = [
  { q: 'Are you really cash buyers?', a: 'Yes — we close with our own funds through a local closing attorney. No bank, no appraisal, no financing contingency.' },
  { q: 'How fast can you close?', a: 'As fast as 7 days when title is clean. Most closings happen in 2–4 weeks; we move on your timeline.' },
  { q: 'Do I need to make any repairs?', a: 'No. We buy as-is. Don\'t fix anything, don\'t clean — leave whatever you don\'t want.' },
  { q: 'What if I owe more than the house is worth?', a: 'It\'s worth a conversation. We may still be able to negotiate a short payoff with your lender.' },
]

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />

      {/* Page banner */}
      <div className="bg-amber/10 border-b border-amber/30">
        <div className="max-w-container mx-auto px-[18px] sm:px-[28px] py-3 flex items-center gap-3">
          <Badge tone="amber" withDot>Phase 0 · Preview</Badge>
          <span className="font-body text-[13px] text-ink-700">
            Design system showcase — not a live page. Existing routes remain unchanged.
          </span>
        </div>
      </div>

      {/* Hero showcase */}
      <Hero
        eyebrow="Southeast Georgia · Since 2021"
        headline={<>We buy houses for <em>cash</em> in Southeast Georgia</>}
        sub={<>No repairs. No agent fees. Pick your close date. A fair written offer within 48 hours — for homeowners in Statesboro, Savannah, Rincon, Metter, Springfield, Swainsboro, Claxton, and Vidalia.</>}
        bullets={[
          'Cash offer within 48 hours — no obligation',
          'Close in as little as 7 days, or on your timeline',
          'Any condition. Any situation. No showings.',
        ]}
      >
        <LeadForm />
      </Hero>

      <UrgencyStrip />

      {/* TYPE */}
      <Section tone="paper" padding="lg" id="type">
        <Eyebrow>Type</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">Playfair Display + Montserrat — the new pairing.</h2>
        <div className="space-y-6">
          {TYPE_RAMP.map(([label, cls, descr]) => (
            <div key={label} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-baseline border-t border-hairline pt-4">
              <div className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">{label}</div>
              <div>
                <div className={cls}>The quick brown fox <em>jumps</em> over the lazy dog</div>
                <div className="font-body text-[12px] text-ink-400 mt-2">{descr}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COLORS */}
      <Section tone="white" padding="lg" id="color">
        <Eyebrow>Color tokens</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">80% navy · 20% amber. Amber is for CTAs only.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {COLORS.map(([name, hex, token]) => (
            <div key={token} className="rounded-lg overflow-hidden border border-hairline bg-white">
              <div style={{ background: hex, height: 88 }} />
              <div className="p-3">
                <div className="font-body text-[12px] font-bold text-ink-900">{name}</div>
                <div className="font-mono text-[10px] text-ink-500 mt-0.5">{hex}</div>
                <div className="font-mono text-[10px] text-ink-400">{token}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRIMITIVES */}
      <Section tone="paper" padding="lg" id="primitives">
        <Eyebrow>Primitives</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">Buttons, badges, inputs, eyebrows, logos, cards.</h2>

        <h3 className="ds-h3 mb-4">Buttons</h3>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Button variant="amber" size="sm">Amber SM</Button>
          <Button variant="amber" size="md">Amber MD</Button>
          <Button variant="amber" size="lg">Amber LG</Button>
          <Button variant="amber" size="md" disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Button variant="navy" size="md">Navy</Button>
          <Button variant="link" size="md">Link button</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-10 p-6 -mx-2 rounded-lg" style={{ background: '#1B365D' }}>
          <Button variant="ghost" size="md">Ghost on dark</Button>
          <Button variant="amber" size="md">Amber on dark</Button>
        </div>

        <h3 className="ds-h3 mb-4">Badges</h3>
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Badge tone="amber">Amber</Badge>
          <Badge tone="amber" withDot>Amber · Dot</Badge>
          <Badge tone="navy">Navy</Badge>
          <Badge tone="success" withDot>Live</Badge>
          <Badge tone="neutral">Neutral</Badge>
        </div>

        <h3 className="ds-h3 mb-4">Eyebrows</h3>
        <div className="flex flex-col gap-3 mb-10">
          <Eyebrow tone="amber" withLine>Amber on light</Eyebrow>
          <Eyebrow tone="navy" withLine>Navy on light</Eyebrow>
          <div className="p-4 rounded" style={{ background: '#1B365D' }}>
            <Eyebrow tone="white" withLine>White on dark</Eyebrow>
          </div>
        </div>

        <h3 className="ds-h3 mb-4">Logo</h3>
        <div className="flex flex-wrap items-end gap-8 mb-10">
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
          <Logo size="md" withDba />
          <div className="p-3 rounded" style={{ background: '#1B365D' }}>
            <Logo size="md" reversed />
          </div>
        </div>

        <h3 className="ds-h3 mb-4">Inputs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[640px] mb-10">
          <Field label="Full name" required>
            <Input name="demo-name" placeholder="Jane Smith" />
          </Field>
          <Field label="Phone" required>
            <Input name="demo-phone" type="tel" placeholder="(912) 515-6060" />
          </Field>
          <Field label="Property address" required className="md:col-span-2">
            <Input name="demo-address" placeholder="123 Oak St, Statesboro, GA" />
          </Field>
          <Field label="Timeline" className="md:col-span-2">
            <Select name="demo-timeline" defaultValue="">
              <option value="" disabled>Choose…</option>
              <option>ASAP (7–14 days)</option>
              <option>Within 30 days</option>
              <option>1–2 months</option>
              <option>Just exploring</option>
            </Select>
          </Field>
          <Field label="Notes" className="md:col-span-2">
            <Textarea placeholder="Anything else we should know?" rows={3} />
          </Field>
          <Field label="With error" error="This field is required" className="md:col-span-2">
            <Input name="demo-error" placeholder="Empty" />
          </Field>
        </div>

        <h3 className="ds-h3 mb-4">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <Card variant="default">
            <h4 className="ds-h4 mb-2">Default card</h4>
            <p className="ds-body m-0">Quiet white card with hairline border.</p>
          </Card>
          <Card variant="hover">
            <h4 className="ds-h4 mb-2">Hover lift</h4>
            <p className="ds-body m-0">Translates up + amber border on hover.</p>
          </Card>
          <Card variant="feature">
            <h4 className="ds-h4 mb-2">Feature card</h4>
            <p className="ds-body m-0">Always elevated. Use for highlighted pricing or CTAs.</p>
          </Card>
        </div>
      </Section>

      {/* MARKETING BLOCKS */}
      <Section tone="white" padding="lg" id="situations">
        <Eyebrow>Marketing block · SituationGrid</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">Common reasons sellers call us</h2>
        <SituationGrid items={SITUATION_DEMOS} />
      </Section>

      <Section tone="paper" padding="lg" id="how">
        <Eyebrow>Marketing block · ProcessSteps</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">How it works</h2>
        <ProcessSteps steps={STEPS} />
      </Section>

      <Section tone="white" padding="lg" id="benefits">
        <Eyebrow>Marketing block · BenefitsBlock</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8">Why homeowners pick us over agents</h2>
        <BenefitsBlock
          eyebrow="Direct cash buyer"
          title={<>A faster, simpler way to <em>actually</em> sell.</>}
          body="Listing with an agent has its place — but it's slow, uncertain, and expensive. We pay a fair price for the certainty of cash and a fast, clean close."
          bullets={[
            'Skip the showings, repairs, and inspections',
            'No agent fees, commissions, or buyer concessions',
            'A real written offer within 48 hours',
            'Close in 7 days when title is clean',
          ]}
        />
      </Section>

      <Section tone="paper" padding="lg" id="faq">
        <Eyebrow>Marketing block · FAQ</Eyebrow>
        <h2 className="ds-h2 mt-3 mb-8 text-center">Common questions</h2>
        <FAQ items={FAQ_DEMO} />
      </Section>

      <FinalCTA
        title={<>Ready to <em>actually</em> sell?</>}
        sub="Send us the address. We'll send back a written cash offer within 48 hours."
      />

      <SiteFooter />

      <MobileCTABar />
    </>
  )
}
