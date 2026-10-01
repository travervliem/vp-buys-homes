'use client'

import { useState } from 'react'
import { AddressAutocomplete } from '@/components/AddressAutocomplete'
import { readAttribution, trackEvent } from '@/lib/analytics/client'
import { EVENTS } from '@/lib/analytics/events'

export type LeadFormContext = {
  city?: string
  situation?: string
}

type Props = {
  variant?: 'card' | 'inline'
  context?: LeadFormContext
  source?: string
}

type Step1 = { name: string; phone: string; address: string }

type PhotoPayload = { name: string; type: string; base64: string; previewUrl: string; sizeKB: number }

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
  'ASAP (7–14 days)',
  'Within 30 days',
  '1–2 months',
  'Just exploring',
]

const CONDITIONS = [
  'Move-in ready',
  'Light updates',
  'Needs work',
  'Major repairs',
]

const MAX_PHOTOS = 4
const MAX_DIMENSION = 1280
const JPEG_QUALITY = 0.85

function newSessionId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
}

// Resize a single image File to a max dimension (preserving aspect) and
// re-encode as JPEG. Returns base64 (no data prefix), filename, and a preview
// data URL for the in-form thumbnail.
async function processImage(file: File): Promise<PhotoPayload | null> {
  if (!file.type.startsWith('image/')) return null
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image()
    i.onload = () => resolve(i)
    i.onerror = () => reject(new Error('image-decode-failed'))
    i.src = dataUrl
  })
  const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height))
  const w = Math.round(img.width * scale)
  const h = Math.round(img.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  ctx.drawImage(img, 0, 0, w, h)
  const resizedDataUrl = canvas.toDataURL('image/jpeg', JPEG_QUALITY)
  const base64 = resizedDataUrl.replace(/^data:image\/jpeg;base64,/, '')
  // Approximate KB from base64 length
  const sizeKB = Math.round((base64.length * 0.75) / 1024)
  const baseName = file.name.replace(/\.[^.]+$/, '') || 'photo'
  return {
    name: `${baseName}.jpg`,
    type: 'image/jpeg',
    base64,
    previewUrl: resizedDataUrl,
    sizeKB,
  }
}

export function LeadForm({ variant = 'card', context, source = 'hero-form' }: Props) {
  const [step, setStep] = useState<1 | 2>(1)
  const [step1, setStep1] = useState<Step1>({ name: '', phone: '', address: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sessionId] = useState(() => newSessionId())
  const [photos, setPhotos] = useState<PhotoPayload[]>([])
  const [photoBusy, setPhotoBusy] = useState(false)

  async function savePartial(data: Step1) {
    const eventId = `${sessionId}_partial`
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          partial: true,
          sessionId,
          eventId,
          source,
          pageCity: context?.city ?? '',
          pageSituation: context?.situation ?? '',
          attribution: readAttribution(),
        }),
      })
      trackEvent(EVENTS.LEAD_PARTIAL, {
        source,
        pageCity: context?.city,
        pageSituation: context?.situation,
        eventId,
      })
    } catch (e) {
      console.warn('[LeadForm] partial save failed (non-fatal)', e)
    }
  }

  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return
    setPhotoBusy(true)
    try {
      const remainingSlots = Math.max(0, MAX_PHOTOS - photos.length)
      const next: PhotoPayload[] = []
      for (const f of files.slice(0, remainingSlots)) {
        const processed = await processImage(f).catch(() => null)
        if (processed) next.push(processed)
      }
      setPhotos(prev => [...prev, ...next])
    } finally {
      setPhotoBusy(false)
      // Clear the input so the same file can be re-selected if removed and re-added
      e.target.value = ''
    }
  }

  function removePhoto(idx: number) {
    setPhotos(prev => prev.filter((_, i) => i !== idx))
  }

  async function handleStep2Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const eventId = `${sessionId}_complete`
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...step1,
          email: data.email,
          reasonForSelling: data.reasonForSelling || '',
          expectedPrice: data.expectedPrice || '',
          timeline: data.timeline,
          notes: data.notes || data.condition || '',
          roofAge: '',
          hvacAge: '',
          partial: false,
          sessionId,
          eventId,
          source,
          pageCity: context?.city ?? '',
          pageSituation: context?.situation ?? '',
          attribution: readAttribution(),
          photos: photos.map(p => ({ name: p.name, type: p.type, base64: p.base64 })),
        }),
      })
      const json = await res.json().catch(() => ({ ok: false }))
      if (json.ok) {
        setSubmitted(true)
        trackEvent(EVENTS.LEAD_COMPLETE, {
          source,
          pageCity: context?.city,
          pageSituation: context?.situation,
          status: 'complete',
          eventId,
          photoCount: photos.length,
        })
      } else {
        setError('Something went wrong. Please call (912) 515-6060.')
      }
    } catch {
      setError('Connection error. Please call (912) 515-6060.')
    }
    setLoading(false)
  }

  const cardClass =
    variant === 'card'
      ? 'leadform-card bg-white text-ink-900 rounded-xl shadow-xl relative p-[26px]'
      : 'leadform-card bg-white/5 border border-white/10 rounded-2xl p-[26px] backdrop-blur'

  if (submitted) {
    return (
      <div className={cardClass}>
        <div className="rounded-md p-7 text-center" style={{ background: '#DCFCE7', border: '1px solid #86EFAC' }}>
          <div
            className="inline-flex items-center justify-center mb-3"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#15803D',
              color: '#fff',
              fontSize: 22,
              fontWeight: 900,
              lineHeight: 1,
            }}
            aria-hidden
          >
            ✓
          </div>
          <div className="font-display text-[20px] font-bold uppercase tracking-[0.04em] mb-2" style={{ color: '#15803D' }}>
            Thanks — we got it
          </div>
          <p className="font-body text-[14.5px]" style={{ color: '#15803D', lineHeight: 1.6 }}>
            Someone from VP Buys Homes will reach out within 48 hours regarding your cash offer
            {step1.phone ? <> at <strong>{step1.phone}</strong></> : ''}.
          </p>
          {photos.length > 0 && (
            <p className="font-body text-[12px] mt-3" style={{ color: '#15803D' }}>
              {photos.length} photo{photos.length === 1 ? '' : 's'} attached.
            </p>
          )}
        </div>
        <LeadFormStyles />
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
          savePartial(fd)
          setStep(2)
        }}
        className={cardClass}
      >
        {variant === 'card' && (
          <span aria-hidden className="absolute left-6 right-6 -top-px h-[3px] rounded-b-sm bg-amber" />
        )}

        <ProgressBar step={1} />

        <div className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-amber-dark mb-1.5">
          Cash offer · 48 hours
        </div>
        <h3 className="font-display text-[24px] font-bold leading-[1.12] text-navy m-0">
          Tell us about your house
        </h3>
        <p className="font-body text-[13px] text-ink-500 mt-1.5 mb-4 leading-[1.55]">
          Step 1 of 2 · Takes under two minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          <div className="field leadform-field">
            <label htmlFor="lf-name">Full name</label>
            <input id="lf-name" name="name" placeholder="Jane Smith" required minLength={2} defaultValue={step1.name} autoComplete="name" />
          </div>
          <div className="field leadform-field">
            <label htmlFor="lf-phone">Phone</label>
            <input id="lf-phone" name="phone" type="tel" placeholder="(912) 515-6060" required minLength={7} defaultValue={step1.phone} autoComplete="tel" />
          </div>
          <div className="field leadform-field sm:col-span-2">
            <label htmlFor="lf-address">Property address</label>
            <AddressAutocomplete
              id="lf-address"
              name="address"
              placeholder="123 Main St, Statesboro, GA"
              required
              minLength={5}
              defaultValue={step1.address}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-amber text-white py-[15px] font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm border-none cursor-pointer shadow-amber transition-all duration-150 hover:bg-amber-dark hover:!text-white"
        >
          Continue to Property Details →
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-3 font-body text-[11px] text-ink-500 font-semibold tracking-[0.04em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden />
          No obligation · Your info stays private
        </div>

        <LeadFormStyles />
      </form>
    )
  }

  return (
    <form onSubmit={handleStep2Submit} className={cardClass}>
      {variant === 'card' && (
        <span aria-hidden className="absolute left-6 right-6 -top-px h-[3px] rounded-b-sm bg-amber" />
      )}

      <ProgressBar step={2} />

      <button
        type="button"
        onClick={() => setStep(1)}
        className="bg-transparent border-none cursor-pointer text-ink-500 font-body text-[13px] mb-2 inline-flex items-center gap-1 p-0 hover:text-amber-dark transition-colors"
      >
        ← Back
      </button>

      <div className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-amber-dark mb-1.5">
        Step 2 of 2 · Property details
      </div>
      <h3 className="font-display text-[22px] font-bold leading-[1.12] text-navy m-0 mb-2">
        Almost done
      </h3>

      <div className="rounded-md mb-4 p-3" style={{ background: '#EEF2F7', border: '1px solid #D1DCE8' }}>
        <p className="font-body text-[10px] font-bold uppercase tracking-[0.04em] text-navy mb-0.5">✓ Received</p>
        <p className="font-body text-[12px] text-ink-700 m-0">
          <strong className="text-navy font-semibold">{step1.name}</strong>
          {step1.phone && ` · ${step1.phone}`}
          {step1.address && ` · ${step1.address}`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
        <div className="field leadform-field sm:col-span-2">
          <label htmlFor="lf-email">Email address</label>
          <input id="lf-email" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
        </div>
        <div className="field leadform-field">
          <label htmlFor="lf-reason">Reason for selling</label>
          <select id="lf-reason" name="reasonForSelling" required defaultValue="">
            <option value="" disabled>Select…</option>
            {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="field leadform-field">
          <label htmlFor="lf-timeline">Ideal timeline</label>
          <select id="lf-timeline" name="timeline" required defaultValue="">
            <option value="" disabled>Select…</option>
            {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="field leadform-field">
          <label htmlFor="lf-condition">Condition (optional)</label>
          <select id="lf-condition" name="condition" defaultValue="">
            <option value="">Skip</option>
            {CONDITIONS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="field leadform-field">
          <label htmlFor="lf-price">Expected price (optional)</label>
          <input id="lf-price" name="expectedPrice" placeholder="e.g. $150,000" />
        </div>
        <div className="field leadform-field sm:col-span-2">
          <label htmlFor="lf-notes">Anything else? (optional)</label>
          <textarea id="lf-notes" name="notes" placeholder="Tenants, special circumstances, repairs needed…" rows={2} />
        </div>

        {/* Photo intake */}
        <div className="field leadform-field sm:col-span-2">
          <label htmlFor="lf-photos">
            Photos of condition + any repairs needed (optional)
          </label>
          <div
            className="rounded-md border border-dashed p-4 text-center transition-colors"
            style={{
              borderColor: '#D1DCE8',
              background: '#F9FAFB',
            }}
          >
            <input
              id="lf-photos"
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="hidden"
              disabled={photoBusy || photos.length >= MAX_PHOTOS}
            />
            <label
              htmlFor="lf-photos"
              className={`inline-flex items-center gap-2 cursor-pointer font-body text-[13px] font-semibold ${photos.length >= MAX_PHOTOS || photoBusy ? 'text-ink-400 cursor-not-allowed' : 'text-navy hover:text-amber-dark'}`}
            >
              <span
                aria-hidden
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${photos.length >= MAX_PHOTOS ? 'bg-ink-100 text-ink-400' : 'bg-amber/15 text-amber-dark'}`}
              >
                +
              </span>
              {photoBusy
                ? 'Processing…'
                : photos.length >= MAX_PHOTOS
                  ? `Max ${MAX_PHOTOS} photos`
                  : photos.length === 0
                    ? 'Add photos'
                    : `Add more (${photos.length}/${MAX_PHOTOS})`}
            </label>
            <p className="font-body text-[11px] text-ink-400 mt-2">
              JPG / PNG · auto-resized to 1280px · stays on your device until you submit
            </p>

            {photos.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mt-3">
                {photos.map((p, i) => (
                  <div key={i} className="relative aspect-square rounded-md overflow-hidden border border-hairline bg-ink-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.previewUrl} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label={`Remove photo ${i + 1}`}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-ink-900/85 text-white text-[14px] leading-none flex items-center justify-center cursor-pointer border-none hover:bg-danger"
                    >
                      ×
                    </button>
                    <span className="absolute bottom-1 left-1 right-1 text-[10px] text-white font-body bg-ink-900/55 rounded px-1 py-0.5 text-center">
                      {p.sizeKB}KB
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {error && (
        <p className="font-body text-[13px] text-danger mb-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading || photoBusy}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-amber text-white py-[15px] font-body text-[12px] font-bold tracking-[0.16em] uppercase rounded-sm border-none cursor-pointer shadow-amber transition-all duration-150 hover:bg-amber-dark hover:!text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting…' : 'Submit — Get My Cash Offer'}
      </button>

      <div className="flex items-center justify-center gap-1.5 mt-3 font-body text-[11px] text-ink-500 font-semibold tracking-[0.04em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden />
        We respond within 48 hours
      </div>

      <LeadFormStyles />
    </form>
  )
}

function ProgressBar({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex gap-1.5 mb-4">
      <span className={`flex-1 h-1 rounded-pill transition-colors ${step >= 1 ? 'bg-amber' : 'bg-[#D1DCE8]'}`} />
      <span className={`flex-1 h-1 rounded-pill transition-colors ${step >= 2 ? 'bg-amber' : 'bg-[#D1DCE8]'}`} />
    </div>
  )
}

function LeadFormStyles() {
  return (
    <style jsx global>{`
      .leadform-card .field input[type="text"],
      .leadform-card .field input[type="tel"],
      .leadform-card .field input[type="email"],
      .leadform-card .field input:not([type]),
      .leadform-card .field select,
      .leadform-card .field textarea {
        width: 100%;
        padding: 12px 14px;
        font-family: var(--font-body), 'Helvetica Neue', sans-serif;
        font-size: 14px;
        color: #0D1B2A;
        background: #fff;
        border: 1px solid #D1DCE8;
        border-radius: 6px;
        outline: none;
        transition: border-color 120ms, box-shadow 120ms;
        -webkit-appearance: none;
        appearance: none;
      }
      .leadform-card .field input::placeholder,
      .leadform-card .field textarea::placeholder {
        color: rgba(13,27,42,0.4);
      }
      .leadform-card .field input:focus,
      .leadform-card .field select:focus,
      .leadform-card .field textarea:focus {
        border-color: #1B365D;
        box-shadow: 0 0 0 3px rgba(27,54,93,0.18);
      }
      .leadform-card .field select {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1l5 5 5-5' stroke='%231B365D' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>");
        background-repeat: no-repeat;
        background-position: right 14px center;
        padding-right: 36px;
        cursor: pointer;
      }
      .leadform-card .field label {
        font-family: var(--font-body), 'Helvetica Neue', sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6B6558;
        margin-bottom: 4px;
        display: block;
      }
      .leadform-card .field { display: flex; flex-direction: column; }
    `}</style>
  )
}
