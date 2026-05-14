/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't fail Vercel deploys on lint-only issues (apostrophes in JSX, unused
  // imports, etc.). TypeScript errors still block the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
