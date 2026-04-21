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

export const collections = { prompts };
