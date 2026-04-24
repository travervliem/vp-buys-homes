/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000']
    }
  },
  // 301 redirects preserving SEO equity from the prior site's URL scheme.
  // Source of truth: Google Search Console impressions (last 90 days).
  // Don't remove without re-checking GSC — some of these have non-trivial
  // ranking (e.g. /cash-home-buyers-metter-ga sits near position 3–4).
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/cash-home-buyers-metter-ga', destination: '/areas/metter-ga', permanent: true },
      { source: '/cash-home-buyers-brooklet-ga', destination: '/areas/statesboro-ga', permanent: true },
      { source: '/sell-house-fast-statesboro-ga', destination: '/areas/statesboro-ga', permanent: true },
      { source: '/stop-foreclosure-statesboro-ga', destination: '/areas/statesboro-ga', permanent: true },
      { source: '/stop-foreclosure-savannah-ga', destination: '/areas/savannah-ga', permanent: true },
      { source: '/blog/selling-house-during-divorce-guide', destination: '/blog/sell-a-house-as-is-georgia', permanent: true },
      { source: '/blog/georgia-real-estate-market-2024', destination: '/blog', permanent: true },
    ]
  },
};
export default nextConfig;
