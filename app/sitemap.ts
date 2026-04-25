import type { MetadataRoute } from 'next'
import { POSTS } from './blog/posts'
import { AREAS } from '@/lib/areas'

const AREAS_LAST_MODIFIED = '2026-04-25'
const STATIC_LAST_MODIFIED = '2026-04-25'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vpbuyshomes.com'
  const staticLastMod = new Date(`${STATIC_LAST_MODIFIED}T00:00:00Z`)
  const areasLastMod = new Date(`${AREAS_LAST_MODIFIED}T00:00:00Z`)

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: staticLastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/sell`, lastModified: staticLastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/how-it-works`, lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/areas`, lastModified: areasLastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: staticLastMod, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map(area => ({
    url: `${base}/areas/${area.slug}`,
    lastModified: areasLastMod,
    changeFrequency: 'monthly' as const,
    priority: area.primary ? 0.95 : 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.updatedAt}T00:00:00Z`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...coreRoutes, ...areaRoutes, ...blogRoutes]
}
