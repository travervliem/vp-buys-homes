import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS } from '../posts'
import { breadcrumbJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.title} | VP Buys Homes`,
    description: post.metaDescription,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.metaDescription },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return notFound()

  const paragraphs = post.body.split('\n\n')
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/blog' },
      { name: post.title, href: `/blog/${post.slug}` },
    ],
    siteUrl
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section style={{ background: '#1B365D', padding: '72px 0' }} className="circle-motif">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <nav style={{ marginBottom: '16px' }} aria-label="Breadcrumb">
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>/</li>
              <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif", textDecoration: 'none' }}>Resources</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}>/</li>
              <li style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontFamily: "'Nunito Sans',sans-serif" }}>{post.category}</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: '#F2A65A', marginBottom: '14px' }}>{post.category}</p>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
            fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.02em', color: 'white', lineHeight: 1.1,
          }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: '#EEF2F7', padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <article>
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                const text = para.slice(2, -2)
                return (
                  <h2 key={i} style={{
                    fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
                    fontSize: '22px', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.02em', color: '#1B365D', marginBottom: '12px', marginTop: '36px',
                  }}>
                    {text}
                  </h2>
                )
              }
              if (para.startsWith('- ') || para.includes('\n- ')) {
                const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2))
                return (
                  <ul key={i} style={{ margin: '0 0 20px', paddingLeft: '0', listStyle: 'none' }}>
                    {items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px', fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#374151' }}>
                        <span style={{ color: '#F2A65A', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (para.match(/^\d+\. /)) {
                const lines = para.split('\n').filter(Boolean)
                return (
                  <div key={i} style={{ margin: '0 0 20px' }}>
                    {lines.map((line, j) => {
                      const match = line.match(/^(\d+)\. (.+)$/)
                      if (!match) return null
                      const [, num, rest] = match
                      const boldMatch = rest.match(/^\*\*(.+?)\*\*(.*)$/)
                      return (
                        <div key={j} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                          <span style={{ fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '16px', fontWeight: 700, color: '#F2A65A', minWidth: '20px' }}>{num}.</span>
                          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#374151', margin: 0 }}>
                            {boldMatch ? (
                              <><strong style={{ color: '#1B365D' }}>{boldMatch[1]}</strong>{boldMatch[2]}</>
                            ) : rest}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              const html = para.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1B365D">$1</strong>')
              return (
                <p key={i} style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.75, color: '#374151', marginBottom: '20px' }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )
            })}
          </article>

          {/* CTA */}
          <div style={{
            background: '#1B365D', borderRadius: '8px', padding: '28px', marginTop: '48px',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <p style={{
              fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
              fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.02em', color: 'white',
            }}>
              Get Your Cash Offer — No Obligation
            </p>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.65 }}>
              We respond within 24 hours. No pressure, no commitment required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sell" className="btn-amber">Get My Cash Offer</Link>
              <a href="tel:+19125156060" className="btn-outline">(912) 515-6060</a>
            </div>
          </div>
        </div>
      </section>

      {/* Other posts */}
      <section style={{ background: 'white', padding: '56px 0' }}>
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>More Resources</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px', background: '#EEF2F7', borderRadius: '6px' }}>
                <div>
                  <p style={{ fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#1B365D', marginBottom: '4px' }}>
                    {p.title}
                  </p>
                  <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '13px', color: '#6B7280', lineHeight: 1.5 }}>{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
