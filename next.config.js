/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fable-design-system' : '',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    instrumentationHook: false,
    serverComponentsExternalPackages: []
  }
}

module.exports = nextConfig