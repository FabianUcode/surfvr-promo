import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://surfvr.site',
  output: 'static',
  compressHTML: true,
  build: {
    assets: '_astro',
    inlineStylesheets: 'always'
  }
});
