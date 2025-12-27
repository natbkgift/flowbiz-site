import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://flowbiz.co.th',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
