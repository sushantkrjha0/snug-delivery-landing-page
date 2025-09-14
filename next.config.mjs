/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rrdecor.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
