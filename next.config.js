/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    WEBHOOK_URL: process.env.WEBHOOK_URL,
  }
}

module.exports = nextConfig
