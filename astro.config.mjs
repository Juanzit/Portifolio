import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Geração puramente estática (SSG) para Cloudflare Pages / GitHub Pages
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
