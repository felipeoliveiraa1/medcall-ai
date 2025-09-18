/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Headers para WebRTC e áudio
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },

  // Configurações para audio worklets e WebRTC
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Configurações de imagens
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Redirects para compatibilidade
  async redirects() {
    return [
      {
        source: '/room/:path*',
        destination: '/call/:path*',
        permanent: true,
      },
    ];
  },

  // Configurações de transpilação
  transpilePackages: [
    '@livekit/components-react',
    '@livekit/components-core',
    'livekit-client',
  ],

  // Configurações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Configurações de bundle
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },

  // Configurações de ESLint
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: false,
  },

  // Configurações de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
