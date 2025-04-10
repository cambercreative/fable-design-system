/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/fable-design-system' : '',
  distDir: 'out',
  // Add trailing slash to improve compatibility
  trailingSlash: true,
  // Remove experimental.appDir as it's no longer needed in Next.js 14
  // In Next.js 14, the App Router is stable and enabled by default
}

module.exports = nextConfig