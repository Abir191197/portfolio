/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'ibb.co',
      'images.unsplash.com',
      'res.cloudinary.com',
      'aws.amazon.com',
      'github.com',
      'githubusercontent.com'
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
