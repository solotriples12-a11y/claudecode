/**
 * Prefija un path con `import.meta.env.BASE_URL` para que los enlaces internos
 * funcionen tanto en desarrollo como cuando el sitio se sirve bajo un subpath
 * (p. ej. GitHub Pages en /claudecode/).
 */
const BASE = import.meta.env.BASE_URL;
const normalized = BASE.endsWith('/') ? BASE : `${BASE}/`;

export function url(path = ''): string {
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return `${normalized}${cleaned}`;
}
