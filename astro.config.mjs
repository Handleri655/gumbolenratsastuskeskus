import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gumbolenratsastuskeskus.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kiitos'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
