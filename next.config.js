/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal config for Vercel deployment
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Remove experimental features that might cause issues
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig