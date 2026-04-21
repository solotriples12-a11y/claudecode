import type { CollectionEntry } from 'astro:content';

/**
 * Documento de búsqueda expuesto al cliente. Evitamos incluir el cuerpo completo
 * del prompt para mantener el JSON ligero y la búsqueda centrada en metadatos.
 */
export interface SearchDoc {
  id: string;
  slug: string;
  title: string;
  summary: string;
  useCase: string;
  category: string;
  level: string;
  tags: string[];
  reviewedAt: string;
}

export function toSearchDocs(prompts: CollectionEntry<'prompts'>[]): SearchDoc[] {
  return prompts.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.data.title,
    summary: p.data.summary,
    useCase: p.data.useCase,
    category: p.data.category,
    level: p.data.level,
    tags: p.data.tags,
    reviewedAt: p.data.reviewedAt.toISOString(),
  }));
}

/**
 * Configuración MiniSearch compartida entre build y cliente.
 * Pesos: título > useCase/summary > tags > categoría.
 */
export const SEARCH_CONFIG = {
  fields: ['title', 'summary', 'useCase', 'tags', 'category'] as const,
  storeFields: ['slug', 'title', 'summary', 'useCase', 'category', 'level', 'tags', 'reviewedAt'] as const,
  searchOptions: {
    boost: { title: 3, useCase: 2, summary: 1.5, tags: 1.5, category: 1 },
    prefix: true,
    fuzzy: 0.2,
  },
};
