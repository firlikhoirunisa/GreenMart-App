import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ← penting untuk static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
