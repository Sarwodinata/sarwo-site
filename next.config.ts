// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    tsconfigPaths: true
  }
};

export default nextConfig;
