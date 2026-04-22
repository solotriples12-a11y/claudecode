import type { CollectionEntry } from 'astro:content';

/**
 * Documento de búsqueda expuesto al cliente. Evitamos incluir el cuerpo completo
 * del prompt o la técnica para mantener el JSON ligero y la búsqueda centrada
 * en metadatos.
 *
 * `type` permite distinguir entre prompts (biblioteca ejecutable) y técnicas
 * (manual conceptual). Campos opcionales dependen del tipo: `useCase` y
 * `category` los rellenan los prompts; `whenToUse` las técnicas.
 */
export interface SearchDoc {
  id: string;
  slug: string;
  type: 'prompt' | 'technique';
  title: string;
  summary: string;
  useCase?: string;
  category?: string;
  whenToUse?: string;
  level: string;
  tags: string[];
  reviewedAt: string;
}

export function promptsToSearchDocs(prompts: CollectionEntry<'prompts'>[]): SearchDoc[] {
  return prompts.map((p) => ({
    id: `prompt:${p.slug}`,
    slug: p.slug,
    type: 'prompt',
    title: p.data.title,
    summary: p.data.summary,
    useCase: p.data.useCase,
    category: p.data.category,
    level: p.data.level,
    tags: p.data.tags,
    reviewedAt: p.data.reviewedAt.toISOString(),
  }));
}

export function techniquesToSearchDocs(
  techniques: CollectionEntry<'techniques'>[],
): SearchDoc[] {
  return techniques.map((t) => ({
    id: `technique:${t.slug}`,
    slug: t.slug,
    type: 'technique',
    title: t.data.title,
    summary: t.data.summary,
    // Concatenamos los bullets de `whenToUse` para que aporten al ranking sin
    // inflar el índice; MiniSearch tokeniza el string completo.
    whenToUse: t.data.whenToUse.join(' · '),
    level: t.data.level,
    tags: [...t.data.tags, t.data.shortName],
    reviewedAt: t.data.reviewedAt.toISOString(),
  }));
}

/**
 * Configuración MiniSearch compartida entre build y cliente.
 * Pesos: título > useCase/whenToUse/summary > tags > categoría.
 */
export const SEARCH_CONFIG = {
  fields: ['title', 'summary', 'useCase', 'whenToUse', 'tags', 'category'] as const,
  storeFields: [
    'slug',
    'type',
    'title',
    'summary',
    'useCase',
    'category',
    'whenToUse',
    'level',
    'tags',
    'reviewedAt',
  ] as const,
  searchOptions: {
    boost: { title: 3, useCase: 2, whenToUse: 2, summary: 1.5, tags: 1.5, category: 1 },
    prefix: true,
    fuzzy: 0.2,
  },
};
