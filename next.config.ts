import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ['127.0.0.1'],
  images: {remotePatterns: [{protocol: 'https', hostname: 'cdn.sanity.io'}]},
}

export default nextConfig
