import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';


export default defineConfig({
  // used to generate images
  site: 
  process.env.VERCEL_ENV === 'production' 
  ? 'https://inshalak.github.io/me/' 
  : 'https://inshalak.github.io/me/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
