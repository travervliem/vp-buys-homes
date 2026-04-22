import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { localBusinessAreaJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vpbuyshomes.com'

type AreaData = {
  city: string
  county: string
  slug: string
  state: string
  headline: string
  subheadline: string
  body: string[]
  situations: string[]
  zip?: string
}

const AREAS: Record<string, AreaData> = {
  'statesboro-ga': {
    city: 'Statesboro',
    county: 'Bulloch County',
    slug: 'statesboro-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Statesboro, GA',
    subheadline: 'No repairs. No fees. Cash offer in 24 hours. Close in as little as 7 days.',
    body: [
      'VP Buys Homes is a local cash buyer serving Statesboro and all of Bulloch County. If you need to sell your house fast — for any reason — we make it simple. We buy homes in any condition, as-is, with no repairs required and no realtor fees.',
      'Statesboro is the home of Georgia Southern University and the economic center of Southeast Georgia. Whether your property is near campus, in a historic neighborhood, or out in the county, we know the local market and can make you a fair, written cash offer within 24 hours.',
      'We have closed on properties throughout Bulloch County — from Statesboro proper to Portal, Register, Brooklet, and Stilson. Our process is fast, local, and confidential.',
    ],
    situations: [
      'Behind on mortgage payments or facing foreclosure',
      'Inherited a property you do not want',
      'Rental with bad tenants or deferred maintenance',
      'Divorce or estate that needs to be settled fast',
      'Relocating for work or family',
      'Property that needs major repairs you cannot afford',
    ],
    zip: '30458',
  },
  'rincon-ga': {
    city: 'Rincon',
    county: 'Effingham County',
    slug: 'rincon-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Rincon, GA',
    subheadline: 'Effingham County cash home buyers. No repairs, no commissions. Offer in 24 hours.',
    body: [
      'VP Buys Homes buys houses for cash in Rincon and throughout Effingham County. If you need a fast, hassle-free sale, we are your local buyer. No listing, no showings, no waiting.',
      'Rincon has grown rapidly in recent years, and we have closed on homes across the city — new builds, older homes, and everything in between. We buy properties in any condition and close on your schedule.',
    ],
    situations: [
      'Need to sell fast due to relocation',
      'Behind on payments or facing foreclosure',
      'Inherited property you want to sell quickly',
      'Property needs costly repairs',
      'Tired of managing a rental',
    ],
    zip: '31326',
  },
  'savannah-ga': {
    city: 'Savannah',
    county: 'Chatham County',
    slug: 'savannah-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Savannah, GA',
    subheadline: 'Chatham County cash home buyers. Any condition. Offer in 24 hours.',
    body: [
      'VP Buys Homes purchases houses for cash across Savannah and Chatham County. From the Historic District to Midtown, West Chatham, and Pooler, we buy homes in any condition — no repairs required.',
      'Whether you are dealing with a difficult property, a tight timeline, or a complicated situation, we can help. We are local buyers who understand the Savannah market.',
    ],
    situations: [
      'Historic property needing significant work',
      'Facing foreclosure or behind on payments',
      'Estate or inherited property to sell',
      'Relocating out of Savannah',
      'Divorce settlement requiring a fast sale',
    ],
    zip: '31401',
  },
  'metter-ga': {
    city: 'Metter',
    county: 'Candler County',
    slug: 'metter-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Metter, GA',
    subheadline: 'Candler County cash home buyers. Simple, local, and fast.',
    body: [
      'VP Buys Homes buys houses for cash in Metter and across Candler County. We are local buyers — not out-of-state investors — and we make straightforward offers with no hidden fees.',
      'If you need to sell a property in Metter quickly, we can deliver a written cash offer within 24 hours and close on a date that works for you.',
    ],
    situations: [
      'Inherited rural property',
      'Property in poor condition',
      'Behind on taxes or mortgage',
      'Relocation or life change',
    ],
    zip: '30439',
  },
  'springfield-ga': {
    city: 'Springfield',
    county: 'Effingham County',
    slug: 'springfield-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Springfield, GA',
    subheadline: 'Effingham County cash buyer. Fast, simple, local.',
    body: [
      'VP Buys Homes buys houses in Springfield and all of Effingham County. We are a local operation — we know the market and we close fast.',
      'If you own a property in Springfield that you need to sell without the hassle of listing, showings, or repairs, we can help. Cash offer in 24 hours, close on your schedule.',
    ],
    situations: [
      'Property you inherited and do not want',
      'Relocation requiring a fast sale',
      'Property needing major repairs',
      'Landlord done with rental headaches',
    ],
    zip: '31329',
  },
  'swainsboro-ga': {
    city: 'Swainsboro',
    county: 'Emanuel County',
    slug: 'swainsboro-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Swainsboro, GA',
    subheadline: 'Emanuel County cash home buyers. Fast, local, no fees.',
    body: [
      'VP Buys Homes buys houses in Swainsboro and Emanuel County. We purchase homes as-is for cash — no realtor, no repairs, no waiting.',
      'If you need to sell a property in Swainsboro quickly, give us a call. We make a written offer within 24 hours and close on your timeline.',
    ],
    situations: [
      'Estate or inherited property',
      'Behind on payments',
      'Property with deferred maintenance',
      'Quick relocation needed',
    ],
    zip: '30401',
  },
  'claxton-ga': {
    city: 'Claxton',
    county: 'Evans County',
    slug: 'claxton-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Claxton, GA',
    subheadline: 'Evans County cash buyer. No repairs, no fees.',
    body: [
      'VP Buys Homes buys houses in Claxton and Evans County. We are local cash buyers who purchase homes in any condition, on any timeline.',
      'Get a written cash offer within 24 hours. No repairs, no commissions, no uncertainty.',
    ],
    situations: ['Inherited property', 'Property needing repairs', 'Fast sale needed'],
    zip: '30417',
  },
  'vidalia-ga': {
    city: 'Vidalia',
    county: 'Toombs County',
    slug: 'vidalia-ga',
    state: 'GA',
    headline: 'We Buy Houses for Cash in Vidalia, GA',
    subheadline: 'Toombs County cash home buyers. Simple process, fast close.',
    body: [
      'VP Buys Homes buys houses in Vidalia and Toombs County. We are cash buyers who can close quickly — in as little as 7 days.',
      'No repairs required, no realtor fees, and no lengthy closing process. Get your offer within 24 hours.',
    ],
    situations: ['Estate or inherited property', 'Relocation', 'Property in poor condition'],
    zip: '30474',
  },
}

export async function generateStaticParams() {
  return Object.keys(AREAS).map(city => ({ city }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const area = AREAS[params.city]
  if (!area) return { title: 'Area Not Found' }

  const title = `Sell My House Fast ${area.city}, GA — Cash Home Buyers | VP Buys Homes`
  const description = `We buy houses for cash in ${area.city}, GA (${area.county}). No repairs, no fees, no commissions. Cash offer within 24 hours. Close in as little as 7 days.`

  return {
    title,
    description,
    keywords: [
      `sell my house fast ${area.city} GA`,
      `cash home buyers ${area.city} GA`,
      `we buy houses ${area.city} GA`,
      `cash for houses ${area.county}`,
      `sell house as is ${area.city}`,
    ],
    alternates: { canonical: `${siteUrl}/areas/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/areas/${area.slug}`,
    },
  }
}

export default function AreaPage({ params }: { params: { city: string } }) {
  const area = AREAS[params.city]
  if (!area) return notFound()

  const schema = localBusinessAreaJsonLd(area.city, area.county, siteUrl, area.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0 72px' }} className="circle-motif">
        <div className="wrap">
          <nav style={{ marginBottom: '20px' }} aria-label="Breadcrumb">
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>/</li>
              <li><Link href="/areas" style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>Areas</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>/</li>
              <li style={{ color: 'rgba(255,255,255,0.70)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif" }}>{area.city}, GA</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>{area.county} · Southeast Georgia</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '720px',
          }}>
            {area.headline}
          </h1>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: '600px' }}>
            {area.subheadline}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#get-offer" className="btn-amber">Get My Cash Offer</a>
            <a href="tel:+19125156060" className="btn-outline">(912) 515-6060</a>
          </div>
        </div>
      </section>

      {/* Body content + form */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }} className="lg:grid-cols-[1fr_420px]">
            <div>
              {/* Body */}
              {area.body.map((para, i) => (
                <p key={i} style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.75, color: '#374151', marginBottom: '20px' }}>
                  {para}
                </p>
              ))}

              {/* Situations */}
              <div style={{ marginTop: '40px' }}>
                <h2 style={{
                  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                  fontSize: '24px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.02em', color: '#1B365D', marginBottom: '16px',
                }}>
                  Common Situations We Help With
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {area.situations.map(s => (
                    <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.6, color: '#374151' }}>
                      <span style={{ color: '#F2A65A', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust items */}
              <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '16px' }}>
                {[
                  { label: 'Offer in', value: '24 Hours' },
                  { label: 'Close in as fast as', value: '7 Days' },
                  { label: 'Fees', value: 'None' },
                  { label: 'Repairs required', value: 'None' },
                ].map(item => (
                  <div key={item.label} style={{ background: 'white', borderRadius: '8px', padding: '20px', border: '1px solid #D1DCE8', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{item.label}</p>
                    <p style={{ fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '26px', fontWeight: 700, color: '#1B365D', letterSpacing: '0.02em' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="get-offer">
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: '#1B365D', marginBottom: '16px',
              }}>
                Get Your Cash Offer — {area.city}
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
