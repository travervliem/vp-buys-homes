import type { MetadataRoute } from 'next'
import { POSTS } from './blog/posts'
import { AREAS } from '@/lib/areas'
import { SITUATIONS } from '@/lib/situations'
import { listFilledIntersections } from '@/lib/situations/index'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'
  const now = new Date()

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/sell`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/situations`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map(area => ({
    url: `${base}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: area.primary ? 0.95 : 0.85,
  }))

  const situationRoutes: MetadataRoute.Sitemap = SITUATIONS.map(s => ({
    url: `${base}/situations/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Only include intersection URLs that have filled content. Empty pages are
  // omitted from the sitemap (and from generateStaticParams) so we never
  // ship thin or near-duplicate pages to Google.
  const intersectionRoutes: MetadataRoute.Sitemap = listFilledIntersections().map(({ citySlug, situationSlug }) => ({
    url: `${base}/areas/${citySlug}/${situationSlug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.80,
  }))

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...coreRoutes, ...areaRoutes, ...situationRoutes, ...intersectionRoutes, ...blogRoutes]
}
