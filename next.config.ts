import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  // Sanity Studio currently performs an async initialization that is not
  // compatible with React Strict Mode's development-only remount cycle.
  reactStrictMode: false,
  allowedDevOrigins: ['127.0.0.1'],
  images: {remotePatterns: [{protocol: 'https', hostname: 'cdn.sanity.io'}]},
}

export default nextConfig
