import type { MetadataRoute } from 'next'
import { POSTS } from './blog/posts'

const AREAS = ['statesboro-ga','rincon-ga','savannah-ga','metter-ga','springfield-ga','swainsboro-ga','claxton-ga','vidalia-ga']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://vpbuyshomes.com'
  const now = new Date()

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/sell`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map(slug => ({
    url: `${base}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: slug === 'statesboro-ga' ? 0.95 : 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...coreRoutes, ...areaRoutes, ...blogRoutes]
}
