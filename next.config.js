/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'github.com', 'avatars.githubusercontent.com','raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
