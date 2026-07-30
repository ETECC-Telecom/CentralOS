import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: '/',
  plugins: [
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',

      // Inclua aqui todos os assets estáticos soltos da pasta public
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'logo.svg',
        'icon_192.svg',
        'icon_512.svg'
      ],

      workbox: {
        // 1. Garante que todas as extensões de imagem geradas na build entrem no pré-cache
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,gif}'],

        // 2. Estratégia de cache para imagens requisitadas em tempo de execução (APIs, URLs externas, etc.)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*(png|jpg|jpeg|svg|webp|gif)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-runtime-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 dias
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },

      manifest: {
        name: 'Central OS',
        short_name: 'CentralOS',
        description: 'Aplicativo de Gestão de Script de Ordens de Serviço (OS)',
        theme_color: '#b81202',
        background_color: '#1c0a0a',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon_192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable' // Recomendado para PWA moderno
          },
          {
            src: 'icon_512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'build',
  }
});