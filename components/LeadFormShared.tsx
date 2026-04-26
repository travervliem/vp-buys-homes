'use client'

import { useState } from 'react'
import { AddressAutocomplete } from './AddressAutocomplete'

type Step1 = { name: string; phone: string; address: string }

export type LeadVariant = 'full' | 'hero'

export type LeadContext = {
  city?: string       // city slug or name of the page that hosts this form (e.g. 'statesboro-ga')
  situation?: string  // situation slug if the form is on an intersection page (e.g. 'foreclosure')
}

type Props = {
  variant?: LeadVariant
  context?: LeadContext
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

function newSessionId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
}

export function LeadFormShared({ variant = 'full', context }: Props) {
  const [step, setStep] = useState<1 | 2>(1)
  const [step1, setStep1] = useState<Step1>({ name: '', phone: '', address: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [sessionId] = useState<string>(() => newSessionId())

  async function savePartial(data: Step1) {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          partial: true,
          sessionId: sessionId,
          source: variant === 'hero' ? 'hero-form' : 'full-form',
          pageCity: context?.city ?? '',
          pageSituation: context?.situation ?? '',
        }),
      })
    } catch (e) {
      console.warn('[LeadForm] partial save failed (non-fatal)', e)
    }
  }

  async function handleStep2Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...step1,
          ...data,
          partial: false,
          sessionId: sessionId,
          source: variant === 'hero' ? 'hero-form' : 'full-form',
          pageCity: context?.city ?? '',
          pageSituation: context?.situation ?? '',
        }),
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
    return variant === 'hero' ? (
      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
        <p style={{
          fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
          fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
          color: '#1B365D', letterSpacing: '0.02em', marginBottom: '8px',
        }}>
          Got It — We'll Be in Touch
        </p>
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>
          Expect a call or text within 24 hours with your cash offer.
        </p>
      </div>
    ) : (
      <div style={{ background: '#EEF2F7', borderRadius: '8px', padding: '40px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '28px', marginBottom: '12px' }}>✓</p>
        <h3 style={{
          fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
          fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
          color: '#1B365D', letterSpacing: '0.02em', marginBottom: '8px',
        }}>
          Received — We'll Call Soon
        </h3>
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', color: '#374151', lineHeight: 1.65 }}>
          Expect a call or text within 24 hours with your no-obligation cash offer.
        </p>
      </div>
    )
  }

  const progressBar = variant === 'full' ? (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
      {[1, 2].map(s => (
        <div
          key={s}
          style={{
            flex: 1,
            height: '3px',
            borderRadius: '999px',
            background: s <= step ? '#1B365D' : '#D1DCE8',
            transition: 'background 200ms',
          }}
        />
      ))}
    </div>
  ) : null

  if (step === 1) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          const fd = Object.fromEntries(new FormData(e.currentTarget)) as Step1
          setStep1(fd)
          savePartial(fd)
          setStep(2)
        }}
        className="flex flex-col gap-4"
      >
        {progressBar}
        {variant === 'full' ? (
          <>
            <h3 style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: '18px', fontWeight: 700, textTransform: 'uppercase',
              color: '#1B365D', letterSpacing: '0.02em', marginBottom: '4px',
            }}>
              Step 1 — About You
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="sm:grid-cols-2">
              <div className="field">
                <label htmlFor="lf-name">Full name</label>
                <input id="lf-name" name="name" placeholder="Jane Smith" required minLength={2} defaultValue={step1.name} autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="lf-phone">Phone number</label>
                <input id="lf-phone" name="phone" type="tel" placeholder="(912) 515-6060" required minLength={7} defaultValue={step1.phone} autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="lf-address">Property address</label>
              <AddressAutocomplete
                id="lf-address"
                name="address"
                placeholder="123 Oak St, Statesboro, GA 30458"
                required
                minLength={5}
                defaultValue={step1.address}
              />
            </div>
            <button type="submit" className="btn-amber w-full">
              Continue to Property Details →
            </button>
          </>
        ) : (
          <>
            <div className="field">
              <label htmlFor="qf-name">Your name</label>
              <input id="qf-name" name="name" placeholder="Full name" required minLength={2} defaultValue={step1.name} autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="qf-phone">Phone number</label>
              <input id="qf-phone" name="phone" type="tel" placeholder="(912) 515-6060" required minLength={7} defaultValue={step1.phone} autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="qf-address">Property address</label>
              <AddressAutocomplete
                id="qf-address"
                name="address"
                placeholder="123 Main St, Statesboro, GA"
                required
                minLength={5}
                defaultValue={step1.address}
              />
            </div>
            <button type="submit" className="btn-amber w-full mt-1" style={{ fontSize: '14px' }}>
              Next: Property Details →
            </button>
            <p style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', fontFamily: "'Nunito Sans',sans-serif" }}>
              No obligation · 100% confidential
            </p>
          </>
        )}
      </form>
    )
  }

  // Step 2
  const confirmStrip = (
    <div
      style={{
        background: '#EEF2F7',
        border: '1px solid #D1DCE8',
        borderRadius: '6px',
        padding: '10px 12px',
        marginBottom: '12px',
        fontFamily: "'Nunito Sans',sans-serif",
        fontSize: '12px',
        color: '#374151',
        lineHeight: 1.5,
      }}
    >
      <p style={{ fontWeight: 700, color: '#1B365D', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '10px', marginBottom: '4px' }}>
        ✓ Received — just a few more details
      </p>
      <p style={{ margin: 0 }}>
        <span style={{ color: '#1B365D', fontWeight: 600 }}>{step1.name}</span>
        {step1.phone ? ` · ${step1.phone}` : ''}
        {step1.address ? ` · ${step1.address}` : ''}
      </p>
    </div>
  )

  return (
    <form onSubmit={handleStep2Submit} className="flex flex-col gap-4">
      {progressBar}
      {variant === 'full' ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
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
            color: '#1B365D', letterSpacing: '0.02em',
          }}>
            Step 2 — Property Details
          </h3>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <button
            type="button"
            onClick={() => setStep(1)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', fontSize: '13px', padding: 0, fontFamily: "'Nunito Sans',sans-serif" }}
          >
            ← Back
          </button>
          <span style={{ color: '#9CA3AF', fontSize: '12px', fontFamily: "'Nunito Sans',sans-serif" }}>
            Step 2 of 2 — More Details
          </span>
        </div>
      )}

      {confirmStrip}

      <div className="field">
        <label htmlFor={`${variant}-email`}>Email address</label>
        <input id={`${variant}-email`} name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="field">
          <label htmlFor={`${variant}-reason`}>Reason for selling</label>
          <select id={`${variant}-reason`} name="reasonForSelling" required>
            <option value="">Select…</option>
            {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${variant}-price`}>Expected price (optional)</label>
          <input id={`${variant}-price`} name="expectedPrice" placeholder="e.g. $150,000" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="field">
          <label htmlFor={`${variant}-roof`}>Roof age</label>
          <select id={`${variant}-roof`} name="roofAge">
            <option value="">Unknown</option>
            {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${variant}-hvac`}>HVAC age</label>
          <select id={`${variant}-hvac`} name="hvacAge">
            <option value="">Unknown</option>
            {AGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${variant}-timeline`}>Ideal closing timeline</label>
        <select id={`${variant}-timeline`} name="timeline" required>
          <option value="">Select…</option>
          {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${variant}-notes`}>Additional context (optional)</label>
        <textarea id={`${variant}-notes`} name="notes" placeholder="Condition, tenants, special circumstances…" rows={3} />
      </div>

      {error && (
        <p style={{ fontSize: '13px', color: '#B42318', fontFamily: "'Nunito Sans',sans-serif" }}>{error}</p>
      )}

      <button type="submit" className="btn-amber w-full" disabled={loading} style={variant === 'hero' ? { fontSize: '14px' } : undefined}>
        {loading ? 'Submitting…' : 'Submit — Get My Cash Offer'}
      </button>
      <p style={{ textAlign: 'center', fontSize: variant === 'hero' ? '11px' : '12px', color: '#9CA3AF', fontFamily: "'Nunito Sans',sans-serif" }}>
        No obligation · 100% confidential · We respond within 24 hours
      </p>
    </form>
  )
}
