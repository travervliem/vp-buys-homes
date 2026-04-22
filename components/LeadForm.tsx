'use client'

import { useState } from 'react'

type Step1 = { name: string; phone: string; address: string }

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

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<1 | 2>(1)
  const [step1, setStep1] = useState<Step1>({ name: '', phone: '', address: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleStep2(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...step1, ...data }),
      })
      const json = await res.json()
      if (json.ok) setDone(true)
      else setError('Something went wrong. Please try again or call us directly.')
    } catch {
      setError('Connection error. Please call us directly.')
    }
    setLoading(false)
  }

  if (done) {
    return (
      <div style={{
        background: '#EEF2F7', borderRadius: '8px', padding: '40px 32px', textAlign: 'center'
      }}>
        <p style={{ fontSize: '28px', marginBottom: '12px' }}>✓</p>
        <h3 style={{
          fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
          fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
          color: '#1B365D', letterSpacing: '0.02em', marginBottom: '8px'
        }}>
          Received — We'll Call Soon
        </h3>
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', color: '#374151', lineHeight: 1.65 }}>
          Expect a call or text within 24 hours with your no-obligation cash offer.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', border: '1px solid #D1DCE8', borderRadius: '8px', padding: compact ? '24px' : '32px', boxShadow: '0 2px 6px rgba(13,27,42,0.06)' }}>
      {/* Progress indicator */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {[1, 2].map(s => (
          <div key={s} style={{ flex: 1, height: '3px', borderRadius: '999px', background: s <= step ? '#1B365D' : '#D1DCE8', transition: 'background 200ms' }} />
        ))}
      </div>

      {step === 1 ? (
        <>
          <h3 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: '18px', fontWeight: 700, textTransform: 'uppercase',
            color: '#1B365D', letterSpacing: '0.02em', marginBottom: '16px'
          }}>
            Step 1 — About You
          </h3>
          <form
            onSubmit={e => {
              e.preventDefault()
              const fd = Object.fromEntries(new FormData(e.currentTarget)) as Step1
              setStep1(fd)
              setStep(2)
            }}
            className="flex flex-col gap-4"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="sm:grid-cols-2">
              <div className="field">
                <label htmlFor="lf-name">Full name</label>
                <input id="lf-name" name="name" placeholder="Jane Smith" required minLength={2} defaultValue={step1.name} />
              </div>
              <div className="field">
                <label htmlFor="lf-phone">Phone number</label>
                <input id="lf-phone" name="phone" type="tel" placeholder="(912) 515-6060" required minLength={7} defaultValue={step1.phone} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="lf-address">Property address</label>
              <input id="lf-address" name="address" placeholder="123 Oak St, Statesboro, GA 30458" required minLength={5} defaultValue={step1.address} />
            </div>
            <button type="submit" className="btn-amber w-full">
              Continue to Property Details →
            </button>
          </form>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: '13px', padding: 0, fontFamily: "'Nunito Sans',sans-serif" }}
            >
              ← Back
            </button>
            <h3 style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: '18px', fontWeight: 700, textTransform: 'uppercase',
              color: '#1B365D', letterSpacing: '0.02em'
            }}>
              Step 2 — Property Details
            </h3>
          </div>
          <form onSubmit={handleStep2} className="flex flex-col gap-4">
            <div className="field">
              <label htmlFor="lf-email">Email address</label>
              <input id="lf-email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="field">
                <label htmlFor="lf-reason">Reason for selling</label>
                <select id="lf-reason" name="reasonForSelling" required>
                  <option value="">Select…</option>
                  {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="lf-price">Expected price (optional)</label>
                <input id="lf-price" name="expectedPrice" placeholder="e.g. $150,000" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="field">
                <label htmlFor="lf-roof">Roof age</label>
                <select id="lf-roof" name="roofAge">
                  <option value="">Unknown</option>
                  {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="lf-hvac">HVAC age</label>
                <select id="lf-hvac" name="hvacAge">
                  <option value="">Unknown</option>
                  {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="lf-timeline">Ideal closing timeline</label>
              <select id="lf-timeline" name="timeline" required>
                <option value="">Select…</option>
                {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="lf-notes">Additional context (optional)</label>
              <textarea id="lf-notes" name="notes" placeholder="Condition, tenants, special circumstances…" rows={3} />
            </div>
            {error && (
              <p style={{ fontSize: '13px', color: '#B42318', fontFamily: "'Nunito Sans',sans-serif" }}>{error}</p>
            )}
            <button type="submit" className="btn-amber w-full" disabled={loading}>
              {loading ? 'Submitting…' : 'Submit — Get My Cash Offer'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9CA3AF', fontFamily: "'Nunito Sans',sans-serif" }}>
              No obligation · 100% confidential · We respond within 24 hours
            </p>
          </form>
        </>
      )}
    </div>
  )
}
