import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { AREAS } from '@/lib/areas'
import { SITUATIONS, type SituationSlug, SITUATION_SLUGS } from '@/lib/situations'
import { listFilledIntersections } from '@/lib/situations/index'
import {
  breadcrumbJsonLd,
  localBusinessSituationJsonLd,
} from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

type Params = { situation: SituationSlug }

export async function generateStaticParams() {
  return SITUATION_SLUGS.map(slug => ({ situation: slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  if (!situation) return { title: 'Not Found' }

  // Page title — layout.tsx appends " | VP Buys Homes" via the metadata template.
  // Use shortLabel to keep the rendered title <= 60 chars.
  const title = `${situation.shortLabel} in Georgia — Cash Home Buyers`
  const description = `${situation.pillarLead} VP Buys Homes pays cash for houses across Southeast Georgia in any condition.`.slice(0, 155)

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/situations/${situation.slug}` },
    openGraph: {
      title: `${title} | VP Buys Homes`,
      description,
      url: `${siteUrl}/situations/${situation.slug}`,
    },
  }
}

export default function SituationPillarPage({ params }: { params: Params }) {
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  if (!situation) return notFound()

  // Cities for which we already have a filled intersection page for this situation.
  const filledForThisSituation = new Set(
    listFilledIntersections()
      .filter(i => i.situationSlug === situation.slug)
      .map(i => i.citySlug)
  )

  const business = localBusinessSituationJsonLd({
    siteUrl,
    situationSlug: situation.slug,
    situationLabel: situation.label,
  })
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Situations', href: '/situations' },
      { name: situation.label, href: `/situations/${situation.slug}` },
    ],
    siteUrl
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0 72px' }} className="circle-motif">
        <div className="wrap">
          <nav style={{ marginBottom: '20px' }} aria-label="Breadcrumb">
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/" style={breadcrumbLinkStyle}>Home</Link></li>
              <li style={breadcrumbSepStyle}>/</li>
              <li><Link href="/situations" style={breadcrumbLinkStyle}>Situations</Link></li>
              <li style={breadcrumbSepStyle}>/</li>
              <li style={breadcrumbCurrentStyle}>{situation.label}</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>
            Southeast Georgia · {situation.label}
          </p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '760px',
          }}>
            {situation.searchVerb} {situation.label} — Sell Your House for Cash
          </h1>
          <p style={{
            fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px',
            color: 'rgba(255,255,255,0.70)', lineHeight: 1.65, maxWidth: '640px',
          }}>
            {situation.pillarLead}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#get-offer" className="btn-amber">Get My Cash Offer</a>
            <a href="tel:+19125156060" className="btn-outline">(912) 515-6060</a>
          </div>
        </div>
      </section>

      {/* Body content + sidebar form */}
      <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }} className="lg:grid-cols-[1fr_420px]">
            <article>
              {/* Pillar long-form body */}
              {situation.pillarBody.map((p, i) => (
                <p key={i} style={pillarParagraphStyle}>{p}</p>
              ))}

              {/* Statutes */}
              <h2 style={sectionHeadingStyle}>The Georgia Statutes That Govern This Situation</h2>
              <p style={paragraphStyle}>
                Below are the Georgia code sections most often relevant when a homeowner sells under {situation.label.toLowerCase()} circumstances. This is educational only — talk to a Georgia attorney for advice on your specific case.
              </p>
              <div style={{ background: 'white', border: '1px solid #D1DCE8', borderRadius: '8px', padding: '20px 24px', marginBottom: '20px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                  {situation.ocgaRefs.map(ref => (
                    <li key={ref.code} style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#374151' }}>
                      <span style={{ fontWeight: 700, color: '#1B365D' }}>{ref.code}</span> — {ref.summary}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Triggers */}
              <h2 style={sectionHeadingStyle}>What Sellers in This Situation Are Often Feeling</h2>
              <ul style={bulletListStyle}>
                {situation.triggers.map(t => (
                  <li key={t} style={bulletItemStyle}>
                    <span style={amberCheck}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>

              {/* Objections */}
              <h2 style={sectionHeadingStyle}>Red Flags to Watch For With Cash Buyers</h2>
              <ul style={bulletListStyle}>
                {situation.objections.map(o => (
                  <li key={o} style={bulletItemStyle}>
                    <span style={amberCheck}>!</span>
                    {o}
                  </li>
                ))}
              </ul>

              {/* What we do */}
              <h2 style={sectionHeadingStyle}>What VP Buys Homes Does in This Situation</h2>
              <ul style={bulletListStyle}>
                {situation.whatWeDo.map(item => (
                  <li key={item} style={bulletItemStyle}>
                    <span style={amberCheck}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* City links */}
              <h2 style={sectionHeadingStyle}>Cities Where We Help With {situation.label}</h2>
              {filledForThisSituation.size === 0 ? (
                <p style={paragraphStyle}>
                  Detailed city-by-city information for this situation is being added — meanwhile, call (912) 515-6060 or use the form to get a cash offer for your property anywhere in Southeast Georgia.
                </p>
              ) : (
                <p style={paragraphStyle}>
                  Click any city to see how {situation.label.toLowerCase()} works in that specific county — including the local courthouse, legal-organ newspaper, and how we help homeowners there.
                </p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '12px', marginTop: '12px', marginBottom: '20px' }}>
                {AREAS.map(area => {
                  const isFilled = filledForThisSituation.has(area.slug)
                  const inner = (
                    <div style={{
                      background: 'white',
                      border: isFilled ? '1px solid #D1DCE8' : '1px dashed #D1DCE8',
                      borderRadius: '8px',
                      padding: '14px 18px',
                      opacity: isFilled ? 1 : 0.55,
                      height: '100%',
                    }}>
                      <p style={{
                        fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                        fontSize: '17px', fontWeight: 700, color: '#1B365D',
                        textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2,
                      }}>
                        {area.name}, GA
                      </p>
                      <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>
                        {area.county}
                      </p>
                      <p style={{
                        fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', fontWeight: 700,
                        color: isFilled ? '#F2A65A' : '#9CA3AF', marginTop: '8px', letterSpacing: '0.04em',
                      }}>
                        {isFilled ? `${situation.label} in ${area.name} →` : 'Coming soon'}
                      </p>
                    </div>
                  )
                  return isFilled ? (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}/${situation.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div key={area.slug}>{inner}</div>
                  )
                })}
              </div>

              {/* Other situations */}
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #D1DCE8', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {SITUATIONS.filter(s => s.slug !== situation.slug).map(other => (
                  <Link key={other.slug} href={`/situations/${other.slug}`} style={lateralLinkStyle}>
                    {other.label} →
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar form */}
            <aside id="get-offer">
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: '#1B365D', marginBottom: '16px',
              }}>
                Get Your Cash Offer
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '16px' }}>
                Tell us about the property. Written cash offer within 24 hours. No obligation.
              </p>
              <LeadForm context={{ situation: situation.slug }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
  fontSize: '24px', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.02em', color: '#1B365D', marginTop: '32px', marginBottom: '14px', lineHeight: 1.2,
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: "'Nunito Sans',sans-serif",
  fontSize: '16px',
  lineHeight: 1.75,
  color: '#374151',
  marginBottom: '20px',
}

const pillarParagraphStyle: React.CSSProperties = {
  fontFamily: "'Nunito Sans',sans-serif",
  fontSize: '17px',
  lineHeight: 1.78,
  color: '#1F2937',
  marginBottom: '20px',
}

const bulletListStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: '10px',
  marginBottom: '20px', listStyle: 'none', padding: 0,
}

const bulletItemStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'flex-start', gap: '10px',
  fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.65, color: '#374151',
}

const amberCheck: React.CSSProperties = {
  color: '#F2A65A', fontWeight: 700, flexShrink: 0, marginTop: '1px',
}

const breadcrumbLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.50)', fontSize: '13px',
  fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none',
}

const breadcrumbSepStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.30)', fontSize: '13px',
}

const breadcrumbCurrentStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.70)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif",
}

const lateralLinkStyle: React.CSSProperties = {
  display: 'inline-block', background: 'white', border: '1px solid #D1DCE8',
  borderRadius: '999px', padding: '8px 14px',
  fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', fontWeight: 600,
  color: '#1B365D', textDecoration: 'none',
}
