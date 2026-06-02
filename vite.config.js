import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate', // Atualiza o PWA automaticamente quando há código novo
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'logo.svg'],
      manifest: {
        name: 'Central OS',
        short_name: 'CentralOS',
        description: 'Aplicativo de Gestão de Script de Ordens de Serviço (OS)',
        theme_color: '#b81202', // Cor do Bootstrap Dark
        background_color: '#1c0a0a',
        display: 'standalone', // Faz o app parecer um aplicativo nativo (sem barra de URL)
        start_url: '.',
        icons: [
          {
            src: 'icon_192.svg', // Use sua logo nova!
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'icon_512.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'build',
  }
});