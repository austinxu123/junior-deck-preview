import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  basePath: "/junior-deck-preview",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
