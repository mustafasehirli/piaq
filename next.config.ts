import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ajans",
        destination: "/atolye/meta",
        permanent: false
      },
      {
        source: "/ajans/plan",
        destination: "/pusula",
        permanent: false
      },
      {
        source: "/ajans/:path*",
        destination: "/atolye/:path*",
        permanent: false
      }
    ];
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
