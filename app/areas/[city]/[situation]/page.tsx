import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LeadForm } from '@/components/LeadForm'
import { FaqAccordion } from '@/components/FaqAccordion'
import { AREAS } from '@/lib/areas'
import { SITUATIONS, type SituationSlug } from '@/lib/situations'
import { listFilledIntersections, getIntersection } from '@/lib/situations/index'
import {
  breadcrumbJsonLd,
  intersectionServiceJsonLd,
  localBusinessAreaJsonLd,
  pageFaqJsonLd,
} from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

type Params = { city: string; situation: SituationSlug }

export async function generateStaticParams() {
  return listFilledIntersections().map(({ citySlug, situationSlug }) => ({
    city: citySlug,
    situation: situationSlug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const content = getIntersection(params.city, params.situation)
  if (!content) return { title: 'Not Found' }

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `${siteUrl}/areas/${params.city}/${params.situation}` },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${siteUrl}/areas/${params.city}/${params.situation}`,
    },
  }
}

export default function IntersectionPage({ params }: { params: Params }) {
  const area = AREAS.find(a => a.slug === params.city)
  const situation = SITUATIONS.find(s => s.slug === params.situation)
  const content = getIntersection(params.city, params.situation)
  if (!area || !situation || !content) return notFound()

  const business = localBusinessAreaJsonLd(area.name, area.county, siteUrl, area.slug)
  const service = intersectionServiceJsonLd({
    siteUrl,
    city: area.name,
    county: area.county,
    citySlug: area.slug,
    situationSlug: situation.slug,
    situationLabel: situation.label,
    description: content.metaDescription,
  })
  const faq = pageFaqJsonLd(content.faqs)
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Areas', href: '/areas' },
      { name: `${area.name}, GA`, href: `/areas/${area.slug}` },
      { name: situation.label, href: `/areas/${area.slug}/${situation.slug}` },
    ],
    siteUrl
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '80px 0 72px' }} className="circle-motif">
        <div className="wrap">
          <nav style={{ marginBottom: '20px' }} aria-label="Breadcrumb">
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/" style={breadcrumbLinkStyle}>Home</Link></li>
              <li style={breadcrumbSepStyle}>/</li>
              <li><Link href="/areas" style={breadcrumbLinkStyle}>Areas</Link></li>
              <li style={breadcrumbSepStyle}>/</li>
              <li><Link href={`/areas/${area.slug}`} style={breadcrumbLinkStyle}>{area.name}, GA</Link></li>
              <li style={breadcrumbSepStyle}>/</li>
              <li style={breadcrumbCurrentStyle}>{situation.label}</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>
            {area.county} · {situation.label}
          </p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px', maxWidth: '760px',
          }}>
            {content.h1}
          </h1>
          {content.empatheticOpening[0] && (
            <p style={{
              fontFamily: "'Nunito Sans',sans-serif", fontSize: '18px',
              color: 'rgba(255,255,255,0.70)', lineHeight: 1.65, maxWidth: '640px',
            }}>
              {content.empatheticOpening[0]}
            </p>
          )}
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
              {/* Remaining empathetic-opening paragraphs (¶2+) */}
              {content.empatheticOpening.slice(1).map((p, i) => (
                <p key={i} style={paragraphStyle}>{p}</p>
              ))}

              {/* County process */}
              <SectionHeading>How {situation.label} Works in {area.county}</SectionHeading>
              {content.countyProcessSection.map((p, i) => (
                <p key={i} style={paragraphStyle}>{p}</p>
              ))}

              {/* GA timeline (OCGA-cited) */}
              <SectionHeading>The Georgia Timeline — In Plain English</SectionHeading>
              {content.timelineSection.map((p, i) => (
                <p key={i} style={paragraphStyle}>{p}</p>
              ))}
              <div style={{ background: 'white', border: '1px solid #D1DCE8', borderRadius: '8px', padding: '20px 24px', marginTop: '12px', marginBottom: '20px' }}>
                <p style={{
                  fontFamily: "'Nunito Sans',sans-serif", fontSize: '11px', fontWeight: 700,
                  color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px',
                }}>
                  Georgia Statutes Cited Here
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                  {situation.ocgaRefs.map(ref => (
                    <li key={ref.code} style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', lineHeight: 1.55, color: '#374151' }}>
                      <span style={{ fontWeight: 700, color: '#1B365D' }}>{ref.code}</span> — {ref.summary}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How we help */}
              <SectionHeading>How VP Buys Homes Helps in This Situation</SectionHeading>
              {content.howWeHelpSection.map((p, i) => (
                <p key={i} style={paragraphStyle}>{p}</p>
              ))}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', marginBottom: '20px', listStyle: 'none', padding: 0 }}>
                {situation.whatWeDo.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.6, color: '#374151' }}>
                    <span style={{ color: '#F2A65A', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Local trust signals */}
              <SectionHeading>Local — Not a National Wholesaler</SectionHeading>
              {content.trustSignalsSection.map((p, i) => (
                <p key={i} style={paragraphStyle}>{p}</p>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '12px', marginTop: '12px', marginBottom: '20px' }}>
                <TrustCard label="Local Court" value={area.superiorCourt.name} sub={area.superiorCourt.courthouseAddress} />
                <TrustCard label="Probate Court" value={area.probateCourt.name} sub={area.probateCourt.address} />
                <TrustCard label="Legal Notices" value={area.legalNoticesPaper} sub={`Foreclosure ads run here, four consecutive weeks before sale`} />
              </div>

              {/* FAQ */}
              <SectionHeading>Frequently Asked — {situation.label} in {area.name}</SectionHeading>
              <FaqAccordion items={content.faqs} />

              {/* Lateral links — only render slugs that have filled content for this situation */}
              {(() => {
                const filledLaterals = content.lateralCitySlugs.filter(slug => Boolean(getIntersection(slug, situation.slug)))
                if (filledLaterals.length === 0) return null
                return (
                  <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #D1DCE8' }}>
                    <p className="eyebrow" style={{ color: '#1B365D', marginBottom: '12px' }}>
                      {situation.label} in Neighboring Counties
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {filledLaterals.map(slug => {
                        const neighbor = AREAS.find(a => a.slug === slug)
                        if (!neighbor) return null
                        return (
                          <Link
                            key={slug}
                            href={`/areas/${slug}/${situation.slug}`}
                            style={lateralLinkStyle}
                          >
                            {situation.label} in {neighbor.name}, GA →
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })()}

              {/* Pillar links */}
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #D1DCE8', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Link href={`/areas/${area.slug}`} style={lateralLinkStyle}>
                  More on {area.name}, GA →
                </Link>
                <Link href={`/situations/${situation.slug}`} style={lateralLinkStyle}>
                  {situation.label} across Georgia →
                </Link>
              </div>
            </article>

            {/* Sidebar form */}
            <aside id="get-offer">
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.02em', color: '#1B365D', marginBottom: '16px',
              }}>
                Get Your Cash Offer — {area.name}
              </h2>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '16px' }}>
                Tell us about the property. Written cash offer within 24 hours. No obligation.
              </p>
              <LeadForm context={{ city: area.slug, situation: situation.slug }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: "'Nunito Sans',sans-serif",
  fontSize: '16px',
  lineHeight: 1.75,
  color: '#374151',
  marginBottom: '20px',
}

const breadcrumbLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.50)',
  fontSize: '13px',
  fontFamily: "'Nunito Sans',sans-serif",
  textDecoration: 'none',
}

const breadcrumbSepStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.30)',
  fontSize: '13px',
}

const breadcrumbCurrentStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.70)',
  fontSize: '13px',
  fontFamily: "'Nunito Sans',sans-serif",
}

const lateralLinkStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'white',
  border: '1px solid #D1DCE8',
  borderRadius: '999px',
  padding: '8px 14px',
  fontFamily: "'Nunito Sans',sans-serif",
  fontSize: '13px',
  fontWeight: 600,
  color: '#1B365D',
  textDecoration: 'none',
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
      fontSize: '24px', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.02em', color: '#1B365D', marginTop: '32px', marginBottom: '14px',
      lineHeight: 1.2,
    }}>
      {children}
    </h2>
  )
}

function TrustCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div style={{ background: 'white', border: '1px solid #D1DCE8', borderRadius: '8px', padding: '16px 18px' }}>
      <p style={{
        fontFamily: "'Nunito Sans',sans-serif", fontSize: '11px', fontWeight: 700,
        color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
        fontSize: '15px', fontWeight: 700, color: '#1B365D', letterSpacing: '0.02em',
        textTransform: 'uppercase', lineHeight: 1.3, marginBottom: sub ? '6px' : 0,
      }}>
        {value}
      </p>
      {sub && (
        <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '12px', color: '#6B7280', lineHeight: 1.5 }}>
          {sub}
        </p>
      )}
    </div>
  )
}
