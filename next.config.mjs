/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't fail Vercel deploys on lint-only issues. TypeScript still blocks.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
