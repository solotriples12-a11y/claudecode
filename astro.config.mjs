import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// El repo se sirve desde https://<owner>.github.io/claudecode/, por eso `base`.
// Se puede sobrescribir al construir en otro destino: `SITE=https://foo BASE=/ npm run build`.
const site = process.env.SITE ?? 'https://solotriples12-a11y.github.io';
const base = process.env.BASE ?? '/claudecode/';

export default defineConfig({
  site,
  base,
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
  },
});
