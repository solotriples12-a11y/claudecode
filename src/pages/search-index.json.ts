import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toSearchDocs } from '../lib/search-index';

export const GET: APIRoute = async () => {
  const prompts = await getCollection('prompts');
  const docs = toSearchDocs(prompts);
  return new Response(JSON.stringify(docs), {
    headers: { 'Content-Type': 'application/json' },
  });
};
