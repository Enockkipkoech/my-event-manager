import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler:true,
    experimental:{
        turbopackFileSystemCacheForDev:true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    turbopack: {
        root: process.cwd(),
    },
};

export default nextConfig;
