/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/sahil-anshari',
  assetPrefix: '/sahil-anshari',
  distDir: 'out',
}

export default nextConfig
