import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explictly bypass Turbopack compilation for Prisma
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
