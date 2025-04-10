/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/fable-design-system' : '',
  distDir: 'out',
  // Add redirects for GitHub Pages 404 handling
  async redirects() {
    return [
      {
        source: '/fable-design-system',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig