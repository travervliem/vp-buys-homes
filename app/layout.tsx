import './globals.css'
import type { Metadata } from 'next'
import { AnalyticsScripts } from '@/components/analytics/AnalyticsScripts'
import { AnalyticsClient } from '@/components/analytics/AnalyticsClient'
import { fontBody, fontDisplay } from '@/lib/fonts'
import { orgJsonLd } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'
const metaDomainVerification = process.env.META_DOMAIN_VERIFICATION || ''
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION || ''

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'We Buy Houses for Cash in Statesboro, GA | VP Buys Homes',
    template: '%s | VP Buys Homes',
  },
  description: 'VP Buys Homes pays cash for houses in Statesboro, Savannah, Rincon, Metter, and Springfield, GA. No repairs, no fees, no commissions. Cash offer in 24 hours. Close in 7 days.',
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
  verification: {
    google: googleSiteVerification || undefined,
    other: metaDomainVerification
      ? { 'facebook-domain-verification': metaDomainVerification }
      : undefined,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = orgJsonLd(siteUrl)

  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <AnalyticsScripts />
        <AnalyticsClient />
        <main>{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      </body>
    </html>
  )
}
