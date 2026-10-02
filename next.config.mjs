/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site doesn't use next/image. Disabling optimization removes the
  // /_next/image endpoint (attack surface for several Next 14 advisories).
  images: { unoptimized: true },
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000']
    }
  },
  // 301 redirects preserving SEO equity from the prior site's URL scheme.
  // Source of truth: Google Search Console impressions (last 90 days).
  // Don't remove without re-checking GSC — some of these have non-trivial
  // ranking (e.g. /cash-home-buyers-metter-ga sits near position 3–4).
  // Use statusCode: 301 (not permanent: true, which Next.js serves as 308).
  // 301 is the canonical signal Google weights most strongly.
  async redirects() {
    return [
      { source: '/cash-home-buyers-metter-ga', destination: '/areas/metter-ga', statusCode: 301 },
      { source: '/cash-home-buyers-brooklet-ga', destination: '/areas/statesboro-ga', statusCode: 301 },
      { source: '/sell-house-fast-statesboro-ga', destination: '/areas/statesboro-ga', statusCode: 301 },
      { source: '/stop-foreclosure-statesboro-ga', destination: '/areas/statesboro-ga', statusCode: 301 },
      { source: '/stop-foreclosure-savannah-ga', destination: '/areas/savannah-ga', statusCode: 301 },
      { source: '/blog/selling-house-during-divorce-guide', destination: '/blog/sell-a-house-as-is-georgia', statusCode: 301 },
      { source: '/blog/georgia-real-estate-market-2024', destination: '/blog', statusCode: 301 },
    ]
  },
};
export default nextConfig;
