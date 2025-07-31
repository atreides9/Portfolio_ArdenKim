/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-optimized configuration
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Ensure proper build for Vercel
  distDir: '.next',
  generateEtags: false,
}

module.exports = nextConfig