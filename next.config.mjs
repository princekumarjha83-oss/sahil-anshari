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
  // Remove all path configurations for Amplify
  assetPrefix: undefined,
  basePath: undefined,
  // Ensure static export works properly
  skipTrailingSlashRedirect: true,
}

export default nextConfig
