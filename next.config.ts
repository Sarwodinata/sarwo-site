// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // App Router sudah default di Next 16, jadi jangan pakai appDir lagi.
  experimental: {
    tsconfigPaths: true, // biar alias "@/..." di-resolve saat build Vercel
  },
};

export default nextConfig;
