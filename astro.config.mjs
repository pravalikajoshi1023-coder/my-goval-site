import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';  // Serverless adapter for Vercel (dynamic/SSR support)

export default defineConfig({
  output: 'server',  // Serverless mode: Enables API routes, edge functions (use 'static' for pure static)
  adapter: vercel({
    webAnalytics: true,  // Optional: Enables Vercel Web Analytics (free, tracks page views/errors)
    // runtime: 'nodejs18.x',  // Optional: Force Node version (default auto-detects)
  }),
  // Optional: Other Astro settings (e.g., integrations)
  // site: 'https://your-site.vercel.app',  // Uncomment for base URL (after deploy)
  // vite: { ssr: { noExternal: ['some-lib'] } },  // If SSR issues with deps
});
