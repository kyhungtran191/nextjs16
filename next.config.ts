import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    // optimize using babel plugin react complier to optimize rerender
    reactCompiler: true,
    experimental: {
        turbopackFileSystemCacheForDev: true,
    },
}

export default nextConfig
