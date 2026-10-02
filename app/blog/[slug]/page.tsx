import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { PUBLISHED_POSTS } from '../posts'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo'
import { SITE, absoluteUrl } from '@/lib/site'


export async function generateStaticParams() {
  return PUBLISHED_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = PUBLISHED_POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Not Found' }
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
    openGraph: { title: post.title, description: post.metaDescription },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = PUBLISHED_POSTS.find(p => p.slug === params.slug)
  if (!post) return notFound()

  const paragraphs = post.body.split('\n\n')
  const breadcrumbs = breadcrumbJsonLd(
    [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/blog' },
      { name: post.title, href: `/blog/${post.slug}` },
    ]
  )

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {post.faqs && <JsonLd data={faqJsonLd(post.faqs)} />}

      <SiteHeader />

      <Hero
        eyebrow={post.category}
        headline={<>{post.title}</>}
      >
        <LeadForm source={`blog-${post.slug}`} />
      </Hero>

      <Section tone="paper" padding="lg" tight>
        <nav className="mb-6 font-body text-[13px] text-ink-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
            <li><Link href="/" className="text-ink-500 hover:text-amber-dark no-underline">Home</Link></li>
            <li className="text-ink-300">/</li>
            <li><Link href="/blog" className="text-ink-500 hover:text-amber-dark no-underline">Resources</Link></li>
            <li className="text-ink-300">/</li>
            <li className="text-ink-700">{post.category}</li>
          </ol>
        </nav>

        <article className="max-w-[760px] mx-auto">
          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              const text = para.slice(2, -2)
              return (
                <h2 key={i} className="ds-h3 mt-9 mb-3">
                  {text}
                </h2>
              )
            }
            if (para.startsWith('- ') || para.includes('\n- ')) {
              const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2))
              return (
                <ul key={i} className="m-0 mb-5 p-0 list-none">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 mb-2 font-body text-[15px] text-ink-700 leading-[1.7]">
                      <span aria-hidden className="text-amber-dark font-bold shrink-0 mt-[2px]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            if (para.match(/^\d+\. /)) {
              const lines = para.split('\n').filter(Boolean)
              return (
                <div key={i} className="mb-5">
                  {lines.map((line, j) => {
                    const match = line.match(/^(\d+)\. (.+)$/)
                    if (!match) return null
                    const [, num, rest] = match
                    const boldMatch = rest.match(/^\*\*(.+?)\*\*(.*)$/)
                    return (
                      <div key={j} className="flex gap-3 mb-2.5">
                        <span className="font-display text-[18px] font-bold text-amber min-w-[24px]">{num}.</span>
                        <p className="font-body text-[15px] text-ink-700 leading-[1.7] m-0">
                          {boldMatch ? (
                            <><strong className="text-navy">{boldMatch[1]}</strong>{boldMatch[2]}</>
                          ) : rest}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )
            }
            const tableRows = para.split('\n').filter(l => l.trim().startsWith('|'))
            if (tableRows.length >= 2) {
              const [header, ...rest] = tableRows.map(row => row.split('|').slice(1, -1).map(c => c.trim()))
              const bodyRows = rest.filter(row => !row.every(c => /^-+$/.test(c)))
              return (
                <div key={i} className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse font-body text-[14px]">
                    <thead>
                      <tr>
                        {header.map((cell, j) => (
                          <th key={j} className="bg-navy text-white text-left px-3.5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em]">{cell}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((row, j) => (
                        <tr key={j} className={j % 2 === 0 ? 'bg-paper' : 'bg-white'}>
                          {row.map((cell, k) => (
                            <td key={k} className="px-3.5 py-2.5 text-ink-700 border-b border-hairline">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }
            const html = para
              .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1B365D">$1</strong>')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#1B365D;font-weight:600;text-decoration:underline">$1</a>')
            return (
              <p key={i} className="font-body text-[16.5px] text-ink-700 leading-[1.78] mb-5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )
          })}
        </article>

        <div className="bg-navy rounded-xl p-7 mt-12 max-w-[760px] mx-auto">
          <h3 className="font-display text-[22px] font-bold text-white">Get your cash offer — no obligation</h3>
          <p className="font-body text-[14px] mt-1 mb-4" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
            We respond within 48 hours. No pressure, no commitment required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/sell" variant="amber" size="md">Get My Cash Offer</Button>
            <Button href={SITE.phoneHref} variant="ghost" size="md">{SITE.phoneDisplay}</Button>
          </div>
        </div>
      </Section>

      <Section tone="white" padding="md" tight>
        <Eyebrow>More Resources</Eyebrow>
        <div className="flex flex-col gap-3 mt-5">
          {PUBLISHED_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block p-5 bg-paper rounded-md no-underline border border-hairline hover:border-amber transition-colors"
            >
              <p className="font-display text-[18px] font-bold text-navy leading-[1.2] mb-1">
                {p.title}
              </p>
              <p className="font-body text-[13px] text-ink-500 leading-[1.5]">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCTA
        title={<>Ready to <em>actually</em> sell?</>}
        sub="Send us the address. Cash offer in 48 hours."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
