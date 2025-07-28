/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
  output: 'standalone',
  images: {
    domains: ['*'],
  },
  // Базовые настройки для production
  distDir: '.next',
  poweredByHeader: false,
  generateEtags: false,
  // Настройки для правильной работы маршрутизации
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Разрешаем все внешние подключения
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  }
}

module.exports = nextConfig 