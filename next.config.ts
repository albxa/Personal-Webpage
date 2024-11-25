import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Optional: Set to true if you prefer URLs to always end with a slash
  reactStrictMode: true, // Optional: Enables React's Strict Mode
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.mahmuti.com",
        permanent: false, // Set to false if you expect this to change in the future
      },
    ];
  },
};

export default nextConfig;
