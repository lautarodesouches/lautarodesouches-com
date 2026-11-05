import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://lautarodesouches.com',
  integrations: [sitemap()],
  output: 'static',
  server: {
    port: 3000,
  },
})
