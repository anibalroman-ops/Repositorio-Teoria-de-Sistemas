import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://anibalroman-ops.github.io',
  base: '/Repositorio-Teoria-de-Sistemas',
  trailingSlash: 'always'
});
