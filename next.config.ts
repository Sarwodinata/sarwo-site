import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true }, // pastikan App Router aktif
};

export default nextConfig;
