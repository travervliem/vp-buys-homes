'use client'

import { useState } from 'react'

type Step1 = { name: string; phone: string; address: string }
type Step2 = {
  email: string
  expectedPrice: string
  reasonForSelling: string
  roofAge: string
  hvacAge: string
  timeline: string
  notes: string
}

const REASONS = [
  'Foreclosure / behind on payments',
  'Inherited property',
  'Tired of being a landlord',
  'Major repairs needed',
  'Relocating / job change',
  'Divorce / estate settlement',
  'Downsizing',
  'Other',
]

const TIMELINES = [
  'As fast as possible (7 days)',
  'Within 30 days',
  'Within 60 days',
  'Flexible — no rush',
]

const AGE_OPTIONS = ['Less than 5 years', '5–10 years', '10–20 years', 'More than 20 years', "Don't know"]

export function LeadFormQuick() {
  const [step, setStep] = useState<1 | 2>(1)
  const [step1, setStep1] = useState<Step1>({ name: '', phone: '', address: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleStep2(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const payload = { ...step1, ...data }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.ok) {
        setDone(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Connection error. Please call us directly.')
    }
    setLoading(false)
  }

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
        <p style={{
          fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
          fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
          color: '#1B365D', letterSpacing: '0.02em', marginBottom: '8px'
        }}>
          Got It — We'll Be in Touch
        </p>
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>
          Expect a call or text within 24 hours with your cash offer.
        </p>
      </div>
    )
  }

  if (step === 1) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          const fd = Object.fromEntries(new FormData(e.currentTarget)) as Step1
          setStep1(fd)
          setStep(2)
        }}
        className="flex flex-col gap-4"
      >
        <div className="field">
          <label htmlFor="qf-name">Your name</label>
          <input id="qf-name" name="name" placeholder="Full name" required minLength={2} defaultValue={step1.name} />
        </div>
        <div className="field">
          <label htmlFor="qf-phone">Phone number</label>
          <input id="qf-phone" name="phone" type="tel" placeholder="(912) 515-6060" required minLength={7} defaultValue={step1.phone} />
        </div>
        <div className="field">
          <label htmlFor="qf-address">Property address</label>
          <input id="qf-address" name="address" placeholder="123 Main St, Statesboro, GA" required minLength={5} defaultValue={step1.address} />
        </div>
        <button type="submit" className="btn-amber w-full mt-1" style={{ fontSize: '14px' }}>
          Next: Property Details →
        </button>
        <p style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', fontFamily: "'Nunito Sans',sans-serif" }}>
          No obligation · 100% confidential
        </p>
      </form>
    )
  }

  return (
    <form onSubmit={handleStep2} className="flex flex-col gap-4">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <button
          type="button"
          onClick={() => setStep(1)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: '13px', padding: 0, fontFamily: "'Nunito Sans',sans-serif" }}
        >
          ← Back
        </button>
        <span style={{ color: '#9CA3AF', fontSize: '12px', fontFamily: "'Nunito Sans',sans-serif" }}>Step 2 of 2 — More Details</span>
      </div>

      <div className="field">
        <label htmlFor="qf-email">Email address</label>
        <input id="qf-email" name="email" type="email" placeholder="you@email.com" required />
      </div>

      <div className="field">
        <label htmlFor="qf-reason">Reason for selling</label>
        <select id="qf-reason" name="reasonForSelling" required>
          <option value="">Select one…</option>
          {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="qf-price">Your expected price (optional)</label>
        <input id="qf-price" name="expectedPrice" placeholder="e.g. $150,000 or not sure" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="field">
          <label htmlFor="qf-roof">Roof age</label>
          <select id="qf-roof" name="roofAge">
            <option value="">Unknown</option>
            {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="qf-hvac">HVAC age</label>
          <select id="qf-hvac" name="hvacAge">
            <option value="">Unknown</option>
            {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="qf-timeline">Ideal timeline</label>
        <select id="qf-timeline" name="timeline" required>
          <option value="">Select…</option>
          {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="qf-notes">Anything else we should know? (optional)</label>
        <textarea id="qf-notes" name="notes" placeholder="Condition details, special circumstances, tenant situation…" rows={3} />
      </div>

      {error && (
        <p style={{ fontSize: '13px', color: '#B42318', fontFamily: "'Nunito Sans',sans-serif" }}>{error}</p>
      )}

      <button type="submit" className="btn-amber w-full" disabled={loading} style={{ fontSize: '14px' }}>
        {loading ? 'Submitting…' : 'Submit — Get My Cash Offer'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', fontFamily: "'Nunito Sans',sans-serif" }}>
        No obligation · We call within 24 hours
      </p>
    </form>
  )
}
