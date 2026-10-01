import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Fall back to the production host so a missing env var can never publish a localhost sitemap URL.
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
