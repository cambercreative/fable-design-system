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
  // Skip image optimization for faster builds
  skipTrailingSlashRedirect: true,
  // Explicitly disable favicon generation
  experimental: {
    // Disable features that might be causing favicon issues
    instrumentationHook: false,
    serverComponentsExternalPackages: []
  }
}

module.exports = nextConfig