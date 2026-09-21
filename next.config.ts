import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "acuwellnessclinic.com" },
    ],
  },
};

export default nextConfig;
