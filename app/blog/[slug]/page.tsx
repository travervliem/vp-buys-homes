import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, type Post } from '../posts'
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  const url = `${siteUrl}/blog/${post.slug}`
  return {
    title: `${post.title} | VP Buys Homes`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['VP Buys Homes'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

const linkStyle = { color: '#1B365D', fontWeight: 700, textDecoration: 'underline' } as const

// Render inline markdown: **bold** and [text](href). Internal hrefs use next/link.
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let n = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-${n++}`} style={{ color: '#1B365D' }}>{m[1]}</strong>)
    } else if (m[2] !== undefined && m[3] !== undefined) {
      const href = m[3]
      const label = m[2]
      if (href.startsWith('/')) {
        nodes.push(<Link key={`${keyPrefix}-${n++}`} href={href} style={linkStyle}>{label}</Link>)
      } else {
        const external = href.startsWith('http')
        nodes.push(
          <a
            key={`${keyPrefix}-${n++}`}
            href={href}
            style={linkStyle}
            {...(external ? { rel: 'noopener', target: '_blank' } : {})}
          >
            {label}
          </a>,
        )
      }
    }
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post: Post | undefined = POSTS.find(p => p.slug === params.slug)
  if (!post) return notFound()

  const paragraphs = post.body.split('\n\n')
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/blog' },
      { name: post.title, href: `/blog/${post.slug}` },
    ],
    siteUrl,
  )
  const article = articleJsonLd(
    {
      title: post.title,
      description: post.metaDescription,
      slug: post.slug,
      category: post.category,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    },
    siteUrl,
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

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
          <p style={{
            marginTop: '18px',
            fontFamily: "'Nunito Sans',sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.04em',
          }}>
            <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
            {post.updatedAt !== post.publishedAt && (
              <>
                {' · '}
                <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: '#EEF2F7', padding: '72px 0' }}>
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <article>
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**') && !para.slice(2, -2).includes('**')) {
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
                        <span>{renderInline(item, `p${i}-li${j}`)}</span>
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
                      return (
                        <div key={j} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                          <span style={{ fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif", fontSize: '16px', fontWeight: 700, color: '#F2A65A', minWidth: '20px' }}>{num}.</span>
                          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#374151', margin: 0 }}>
                            {renderInline(rest, `p${i}-num${j}`)}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              return (
                <p
                  key={i}
                  style={{ fontFamily: "'Nunito Sans',sans-serif", fontSize: '16px', lineHeight: 1.75, color: '#374151', marginBottom: '20px' }}
                >
                  {renderInline(para, `p${i}`)}
                </p>
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
