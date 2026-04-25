import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from './posts'
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'
const blogUrl = `${siteUrl}/blog`
const description = 'Guides and resources for homeowners considering selling in Statesboro, Rincon, Savannah, and Southeast Georgia. Learn about cash sales, foreclosure, inherited property, and more.'

export const metadata: Metadata = {
  title: 'Resources for Southeast Georgia Homeowners | VP Buys Homes',
  description,
  alternates: { canonical: blogUrl },
  openGraph: {
    type: 'website',
    url: blogUrl,
    title: 'Resources for Southeast Georgia Homeowners',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources for Southeast Georgia Homeowners',
    description,
  },
}

export default function BlogIndex() {
  const collection = collectionPageJsonLd({
    name: 'Resources for Southeast Georgia Homeowners',
    description,
    url: blogUrl,
    siteUrl,
    items: POSTS
      .slice()
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map(p => ({ title: p.title, slug: p.slug, description: p.excerpt })),
  })
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/blog' },
    ],
    siteUrl,
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '72px 0' }} className="circle-motif">
        <div className="wrap">
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '16px' }}>Local Expertise</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.05, marginBottom: '16px',
          }}>
            Resources for Homeowners
          </h1>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '17px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: '520px' }}>
            Practical guides for homeowners in Statesboro, Rincon, Savannah, and across Southeast Georgia.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ background: '#EEF2F7', padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {POSTS.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card" style={{ borderLeft: '3px solid #1B365D' }}>
                  <p className="eyebrow" style={{ marginBottom: '8px', color: '#F2A65A' }}>{p.category}</p>
                  <h2 style={{
                    fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                    fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.02em', color: '#1B365D', marginBottom: '8px', lineHeight: 1.2,
                  }}>
                    {p.title}
                  </h2>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', lineHeight: 1.65, color: '#374151' }}>
                    {p.excerpt}
                  </p>
                  <p style={{ marginTop: '14px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', fontWeight: 700, color: '#F2A65A', letterSpacing: '0.04em' }}>
                    Read More →
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
