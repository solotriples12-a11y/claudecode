import { defineCollection, z } from 'astro:content';
import { CATEGORY_SLUGS, LEVELS } from '../lib/categories';

const nonEmptyString = z.string().min(1);

const prompts = defineCollection({
  type: 'content',
  schema: z.object({
    title: nonEmptyString,
    useCase: nonEmptyString,
    category: z.enum(CATEGORY_SLUGS as [string, ...string[]]),
    level: z.enum(LEVELS),
    summary: nonEmptyString.max(240),
    suitableFor: z.array(nonEmptyString).min(1),
    notSuitableFor: z.array(nonEmptyString).min(1),
    reviewChecklist: z.array(nonEmptyString).min(1),
    exampleInput: nonEmptyString,
    exampleOutput: nonEmptyString,
    tags: z.array(nonEmptyString).default([]),
    author: nonEmptyString,
    reviewedAt: z.date(),
    recommendedModel: z.string().optional(),
  }),
});

const techniques = defineCollection({
  type: 'content',
  schema: z.object({
    title: nonEmptyString,
    shortName: nonEmptyString,
    level: z.enum(LEVELS),
    summary: nonEmptyString.max(240),
    whenToUse: z.array(nonEmptyString).min(1),
    whenNotToUse: z.array(nonEmptyString).min(1),
    howTo: z.array(nonEmptyString).min(1),
    example: z.object({
      without: nonEmptyString,
      with: nonEmptyString,
      observation: nonEmptyString,
    }),
    pitfalls: z.array(nonEmptyString).default([]),
    relatedTechniques: z.array(nonEmptyString).default([]),
    references: z
      .array(
        z.object({
          title: nonEmptyString,
          url: z.string().url(),
        }),
      )
      .default([]),
    tags: z.array(nonEmptyString).default([]),
    author: nonEmptyString,
    reviewedAt: z.date(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = { prompts, techniques };
