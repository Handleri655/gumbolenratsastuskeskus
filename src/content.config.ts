import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/news',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['fi', 'sv', 'en']),
    slug: z.string(),
    tags: z.array(z.enum(['notice', 'health', 'work'])),
    alert: z.boolean().default(false),
    translationKey: z.string(),
  }),
});

export const collections = { news };
