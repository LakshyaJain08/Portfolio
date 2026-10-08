import type {NextConfig} from "next";

// For GitHub Pages: If repository is a project repo (e.g. username.github.io/Portfolio),
// NEXT_PUBLIC_BASE_PATH is set to '/Portfolio'. If user repo (username.github.io), it stays undefined.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: basePath ? basePath : undefined,
    assetPrefix: basePath ? basePath : undefined,
};

export default nextConfig;

