import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep src/ directory structure
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
