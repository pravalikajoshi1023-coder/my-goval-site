import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // or "@astrojs/netlify/static" if it's static only

export default defineConfig({
  output: 'server',   // or "static" if no SSR
  adapter: netlify(),
});