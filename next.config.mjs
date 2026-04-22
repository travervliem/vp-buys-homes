/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000']
    }
  }
};
export default nextConfig;
