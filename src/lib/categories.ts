export type CategorySlug =
  | 'comunicacion-cliente'
  | 'propuestas-comerciales'
  | 'analisis-critico'
  | 'investigacion'
  | 'planificacion';

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    slug: 'comunicacion-cliente',
    label: 'Comunicación con cliente',
    description: 'Síntesis de reuniones, actas, emails y seguimientos.',
  },
  {
    slug: 'propuestas-comerciales',
    label: 'Propuestas comerciales',
    description: 'Redacción y revisión de propuestas y respuestas a RFPs.',
  },
  {
    slug: 'analisis-critico',
    label: 'Análisis crítico',
    description: 'Revisión de entregables propios antes de enviar a cliente.',
  },
  {
    slug: 'investigacion',
    label: 'Investigación',
    description: 'Research, benchmarking y desk research.',
  },
  {
    slug: 'planificacion',
    label: 'Planificación',
    description: 'Roadmaps, planes de trabajo y estimaciones.',
  },
] as const;

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as CategorySlug[];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryLabel(slug: string): string {
  return getCategory(slug)?.label ?? slug;
}

export const LEVELS = ['basico', 'intermedio', 'avanzado'] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_LABELS: Record<Level, string> = {
  basico: 'Básico',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};
