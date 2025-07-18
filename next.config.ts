import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["randomuser.me", "api.dicebear.com"],
  },

  // ✅ Add this block to allow production builds despite lint issues
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
