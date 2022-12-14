import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";

// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap(), image()],
  output: 'static',
  // adapter: vercel()
});