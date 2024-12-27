/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
    domains: [
      'user-images.githubusercontent.com',
      'ibb.co',
      'images.unsplash.com',
      'res.cloudinary.com',
      'aws.amazon.com',
      'https:/github.com',
      'https:/githubusercontent.com'
    ],
    
  },
  experimental: {
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during build
  },
  
};

module.exports = nextConfig;
