import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  trailingSlash: false, // Optional: Remove trailing slashes
  reactStrictMode: true, // Enforces strict React guidelines
  async redirects() {
    return [
      {
        source: "/", // Root URL
        has: [
          {
            type: "host",
            value: "mahmuti.com", // Redirect only if the root domain is used
          },
        ],
        destination: "https://www.mahmuti.com",
        permanent: true, // 301 redirect to www
      },
    ];
  },
=======
  /* config options here */
>>>>>>> b4e9a17f0ea6f2b65a93f5a3d75ac65adc6caf91
};

export default nextConfig;
