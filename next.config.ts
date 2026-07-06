import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    allowedDevOrigins: ['172.21.160.1'],
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    
}

export default nextConfig
