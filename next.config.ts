import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Optional: Remove trailing slashes
  reactStrictMode: true, // Enforces strict React guidelines

  async redirects() {
    return [
      {
        source: "/", // Root URL
        has: [
          {
            type: "host",
            value: "mahmuti.com", // Redirect only if root domain is used
          },
        ],
        destination: "https://www.mahmuti.com",
        permanent: true, // 301 redirect to www
      }
    ];
  },
};

export default nextConfig;