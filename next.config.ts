import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src https://www.google.com https://maps.google.com https://www.gstatic.com; " +
              "child-src https://www.google.com;"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
