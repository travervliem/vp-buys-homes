import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { LeadForm } from '@/components/marketing/LeadForm'
import { UrgencyStrip } from '@/components/marketing/UrgencyStrip'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'
import { POSTS } from './posts'

export const metadata: Metadata = {
  title: 'Resources for Southeast Georgia Homeowners',
  description: 'Guides and resources for homeowners considering selling in Statesboro, Savannah, and Southeast Georgia. Learn about cash sales, foreclosure, inherited property, and more.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/blog' },
}

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Local expertise"
        headline={<>Resources for <em>Homeowners</em></>}
        sub="Practical guides for homeowners in Statesboro, Savannah, and across Southeast Georgia."
      >
        <LeadForm source="blog-index" />
      </Hero>

      <UrgencyStrip />

      <Section tone="paper" padding="lg" tight>
        <div className="flex flex-col gap-4">
          {POSTS.map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block bg-white border border-hairline rounded-lg p-7 no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-amber border-l-[3px] border-l-navy"
            >
              <p className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-amber mb-2">{p.category}</p>
              <h2 className="font-display text-[22px] font-bold text-navy leading-[1.2] mb-2 transition-colors duration-200 group-hover:text-amber-dark">
                {p.title}
              </h2>
              <p className="font-body text-[14.5px] text-ink-700 leading-[1.65] m-0">
                {p.excerpt}
              </p>
              <p className="mt-4 font-body text-[12px] font-bold uppercase tracking-[0.14em] text-amber-dark group-hover:text-amber transition-colors">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCTA
        title={<>Ready when you are</>}
        sub="Have a question we haven't covered? Send us the address and a sentence — we follow up within 48 hours."
      />

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
