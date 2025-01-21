// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    domains: ["cdn.sanity.io"],
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type checking during build
  },
};

export default nextConfig;
