import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If you need pure static export (e.g. for GitHub Pages or Netlify Drop), uncomment the line below.
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
