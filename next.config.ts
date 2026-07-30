import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/TiTurf-landing",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;