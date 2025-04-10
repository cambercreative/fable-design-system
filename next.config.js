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
  // Remove assetPrefix as it's handled by basePath
  // Ensure experimental features are compatible with static export
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig