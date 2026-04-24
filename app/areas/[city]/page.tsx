import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { breadcrumbJsonLd, localBusinessAreaJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

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
      'VP Buys Homes is a local cash home buyer serving Statesboro and all of Bulloch County. If you need to sell your house fast — for any reason — we make it simple. We buy homes in any condition, as-is, with no repairs required and zero realtor commissions. Whether you are searching "sell my house fast Statesboro GA" or "cash home buyers near me," you have found the right place.',
      'Statesboro is the home of Georgia Southern University and the economic hub of Southeast Georgia. Whether your property is near campus on Fair Road, in a historic neighborhood like the Averitt Arts District, or out in the rural county, we know the Bulloch County market and can deliver a fair, written cash offer within 24 hours.',
      'We have closed on properties throughout Bulloch County — from Statesboro to Portal, Register, Brooklet, and Stilson. We also serve nearby zip codes 30460 and 30461. Our process is discreet, fast, and straightforward — no open houses, no repairs, no uncertainty about financing falling through.',
    ],
    situations: [
      'Behind on mortgage payments or at risk of foreclosure in Bulloch County',
      'Inherited a house in Statesboro you do not want to manage',
      'Rental property with problem tenants or years of deferred maintenance',
      'Going through divorce and need to sell the family home quickly',
      'Relocating for a job at Georgia Southern, a hospital, or out of state',
      'Fire or water damage and you cannot afford the repairs',
      'Owe back taxes or HOA fees and need a fast way out',
      'Downsizing or moving to assisted living and need a simple sale',
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
      'VP Buys Homes buys houses for cash in Rincon and throughout Effingham County. If you need to sell your house fast in Rincon — with no repairs, no realtor, and no waiting — we are your local buyer. We make cash offers on any property in any condition, and we close on your schedule.',
      'Rincon has grown rapidly and is one of the fastest-growing communities in the Savannah metro area. We have bought homes across Rincon, including properties near Goshen Road, Jimmy Deloach Parkway, and out into the surrounding Effingham County countryside — from Springfield to Guyton and Rincon to Black Creek.',
      'There are no commissions, no inspection contingencies, and no financing that can fall through at the last minute. If you are searching "we buy houses Rincon GA" or "sell my house fast Effingham County," call us today for a no-pressure cash offer within 24 hours.',
    ],
    situations: [
      'Need to sell fast due to a job relocation to Savannah or out of state',
      'Behind on payments or facing foreclosure in Effingham County',
      'Inherited a house in Rincon you do not want to keep',
      'Property that needs a new roof, HVAC, or foundation work you cannot afford',
      'Tired of dealing with a rental property and difficult tenants',
      'Divorce requiring a quick, clean sale',
      'Military PCS move out of the Savannah area',
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
      'VP Buys Homes purchases houses for cash across Savannah and Chatham County. From the Historic District and Victorian District to Midtown, Southside, and West Chatham, we buy homes in any condition — no repairs required, no commissions, no waiting on bank financing.',
      'Savannah is one of the most distinctive real estate markets in Georgia, with everything from antebellum historic properties to modern suburban homes in Pooler, Bloomingdale, and Garden City. No matter what condition your property is in or what situation you are facing, we can make a fair cash offer within 24 hours.',
      'We serve all of Chatham County, including Pooler, Port Wentworth, Thunderbolt, Tybee Island, Garden City, and Bloomingdale. If you are searching "sell my house fast Savannah GA," "cash home buyers Chatham County," or "we buy ugly houses Savannah," we are the local buyer who can get it done.',
    ],
    situations: [
      'Historic property with significant deferred maintenance or code issues',
      'Facing foreclosure or seriously behind on your Savannah mortgage',
      'Settling an estate or selling an inherited home in Chatham County',
      'Relocating for HASC, the ports, or a military PCS out of Hunter Army Airfield',
      'Divorce or legal separation requiring a quick, agreed-upon sale',
      'Rental property in poor condition with bad tenants or vacancies',
      'Underwater on your mortgage and need a fast exit',
      'Flood-damaged or storm-damaged property you cannot afford to fix',
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
      'VP Buys Homes buys houses for cash in Metter and across Candler County. We are a local buyer — not an out-of-state hedge fund — and we make straightforward offers with no hidden fees, no repairs required, and no drawn-out closing timelines.',
      'Metter is a small community along I-16 with a mix of residential and rural properties. We buy all types — single-family homes in town, farmhouses, and rural parcels throughout Candler County. If you need to sell a property in Metter quickly, we deliver a written cash offer within 24 hours.',
      'We also serve communities near Metter including Collins, Cobbtown, Pulaski, and surrounding Candler County areas. No real estate agent needed — no commission, no listing, no showings. Just a simple, fast cash sale.',
    ],
    situations: [
      'Inherited rural or farmhouse property you do not want to maintain',
      'Property in poor or unlivable condition',
      'Behind on property taxes or mortgage in Candler County',
      'Relocation along the I-16 corridor or out of Southeast Georgia',
      'Estate settlement requiring a fast, clean sale',
      'Rental with long-term vacancy or tenant problems',
      'Downsizing and want to sell without the hassle of listing',
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
      'VP Buys Homes buys houses in Springfield and all of Effingham County. We are a local cash home buyer — we know the Effingham County market and we close fast with no repairs, no agent fees, and no uncertainty.',
      'Springfield is the county seat of Effingham County and one of the fastest-growing areas between Savannah and Augusta. We have purchased homes in Springfield, Guyton, Rincon, Clyo, Marlow, and across the county. Whether you need to "sell my house fast in Springfield GA" or just want to avoid the traditional listing process, we can help.',
      'We make a written cash offer within 24 hours and close on a schedule that works for you — as fast as 7 days or on a date you choose. No home inspection contingencies, no financing delays, no commissions.',
    ],
    situations: [
      'Inherited a property in Effingham County you do not want',
      'Job relocation and need to sell your Springfield home quickly',
      'Property that needs significant repairs you cannot fund',
      'Landlord ready to exit the rental business',
      'Behind on mortgage or facing foreclosure in Effingham County',
      'Divorce or estate situation requiring a fast resolution',
      'New construction purchase contingent on selling your current home fast',
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
      'VP Buys Homes buys houses in Swainsboro and Emanuel County. We purchase homes as-is for cash — no realtor, no repairs, no waiting on bank approval. If you want to sell your house fast in Swainsboro, we are the local buyer who can make it happen.',
      'Swainsboro is the county seat of Emanuel County and sits along the US-1 corridor in Southeast Georgia. We buy all types of residential property in the area — houses in town, older farmhouses, and rural homes throughout Emanuel County, including Twin City, Nunez, Adrian, and Oak Park.',
      'We make a written cash offer within 24 hours and work on your timeline. There are no agent commissions, no repair requirements, and no inspections you have to pass. Just a straightforward cash transaction and a closing date that works for you.',
    ],
    situations: [
      'Estate or probate property in Emanuel County',
      'Behind on payments and trying to avoid foreclosure',
      'Property with extensive deferred maintenance or structural issues',
      'Quick relocation needed for work or family',
      'Tired landlord ready to sell a long-term rental',
      'Inherited a rural or farmhouse property you do not want to keep',
      'Owe back taxes and need to sell before a tax sale',
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
      'VP Buys Homes buys houses in Claxton and Evans County. We are local cash home buyers who purchase properties in any condition and on any timeline — no repairs, no commissions, no listing required.',
      'Claxton is known as the Fruitcake Capital of the World and sits in the heart of Evans County. We buy residential properties throughout the area, including homes in Hagan and the surrounding Evans County countryside. If you need to sell your house fast in Claxton, GA, we can deliver a written cash offer within 24 hours.',
      'We handle all the paperwork and work with a local closing attorney to make the process smooth and fast. No open houses, no buyer financing contingencies, no repairs before closing. Just a simple cash sale on your schedule.',
    ],
    situations: [
      'Inherited property in Evans County you are not using',
      'Home that needs significant repairs or updates before it could sell on market',
      'Fast sale needed due to relocation or life change',
      'Behind on mortgage or property taxes in Claxton',
      'Estate that needs to close quickly',
      'Rental property in poor condition or with vacancy issues',
    ],
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
      'VP Buys Homes buys houses in Vidalia and Toombs County. We are cash buyers who close fast — in as little as 7 days — with no repairs required, no real estate agent fees, and no lengthy closing timelines.',
      'Vidalia is famous for its sweet onions and sits in the heart of Southeast Georgia\'s agricultural corridor. We buy all residential property types throughout Toombs County, including homes in Lyons, Uvalda, and the surrounding area. If you are searching "we buy houses Vidalia GA" or "sell my house fast Toombs County," we are the local buyer who can help.',
      'Our process is simple: you tell us about your property, we make a cash offer within 24 hours, and you pick the closing date. No contingencies, no commissions, no surprises. We buy properties in any condition — move-in ready or completely distressed.',
    ],
    situations: [
      'Estate or inherited property in Toombs County you want to sell fast',
      'Relocation out of Vidalia for work or family',
      'Property in poor condition that will not pass a traditional inspection',
      'Behind on mortgage or facing tax issues in Toombs County',
      'Landlord done with the rental business',
      'Divorce requiring a fast, agreed-upon property sale',
      'Need to sell quickly to buy another home without a contingency',
    ],
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
      `sell my house without a realtor ${area.city}`,
      `buy my house fast ${area.city} Georgia`,
      `cash offer for home ${area.city} GA`,
      `sell inherited house ${area.city}`,
      `stop foreclosure ${area.city} GA`,
      `sell house in divorce ${area.county}`,
      `we buy ugly houses ${area.city} GA`,
      `sell house as is no repairs ${area.county}`,
      `fast home sale ${area.city} Georgia`,
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
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Areas', href: '/areas' },
      { name: `${area.city}, GA`, href: `/areas/${area.slug}` },
    ],
    siteUrl
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

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
