import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from './posts'

export const metadata: Metadata = {
  title: 'Resources for Southeast Georgia Homeowners | VP Buys Homes',
  description: 'Guides and resources for homeowners considering selling in Statesboro, Rincon, Savannah, and Southeast Georgia. Learn about cash sales, foreclosure, inherited property, and more.',
  alternates: { canonical: 'https://vpbuyshomes.com/blog' },
}

export default function BlogIndex() {
  return (
    <>
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
