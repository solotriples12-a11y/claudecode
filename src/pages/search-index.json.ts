import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { promptsToSearchDocs, techniquesToSearchDocs } from '../lib/search-index';

export const GET: APIRoute = async () => {
  const [prompts, techniques] = await Promise.all([
    getCollection('prompts'),
    getCollection('techniques'),
  ]);
  const docs = [...promptsToSearchDocs(prompts), ...techniquesToSearchDocs(techniques)];
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json' },
  });
};
