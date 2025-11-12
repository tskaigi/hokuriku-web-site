import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        source: "/(/.*).json",
        headers: [
          { key: "Content-Type", value: "application/json; charset=utf-8" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
