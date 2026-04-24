import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { orgJsonLd, faqJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'We Buy Houses for Cash in Statesboro, GA | VP Buys Homes',
    template: '%s | VP Buys Homes',
  },
  description: 'VP Buys Homes pays cash for houses in Statesboro, Rincon, Savannah, Metter, and Springfield, GA. No repairs, no fees, no commissions. Cash offer in 24 hours. Close in 7 days.',
  keywords: [
    'sell my house fast Statesboro GA',
    'cash home buyers Statesboro GA',
    'we buy houses Statesboro GA',
    'cash for houses southeast Georgia',
    'sell house as is Statesboro',
    'we buy ugly houses Georgia',
    'sell my house fast Bulloch County',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    url: siteUrl,
    title: 'We Buy Houses for Cash in Statesboro, GA | VP Buys Homes',
    description: 'Local cash offer in 24 hours. No repairs, no fees, no commissions. Close in 7 days.',
    siteName: 'VP Buys Homes',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Buy Houses for Cash in Southeast Georgia',
    description: 'VP Buys Homes — local cash offers in 24 hours. No repairs, no fees.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = orgJsonLd(siteUrl)
  const faq = faqJsonLd()

  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      </body>
    </html>
  )
}
