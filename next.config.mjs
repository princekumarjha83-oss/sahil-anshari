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
  distDir: 'out',
  // AWS Amplify specific configuration
  generateEtags: false,
  // Ensure compatibility with Amplify
  assetPrefix: undefined,
  basePath: undefined,
}

export default nextConfig
