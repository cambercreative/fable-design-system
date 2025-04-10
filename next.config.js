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
  },
  // Explicitly disable image optimization for GitHub Pages
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig