import { defineCollection, z } from 'astro:content';

const frontMatter = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
  }),
});

const concepts = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    levels: z.array(z.any()).optional(),
    journal: z.any().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

const lifts = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    levels: z.array(z.any()).optional(),
    journal: z.any().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

const bodyweight = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    levels: z.array(z.any()).optional(),
    journal: z.any().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

const mobility = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    levels: z.array(z.any()).optional(),
    journal: z.any().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

const journal = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    type: z.string().optional(),
    fields: z.array(z.any()).optional(),
    prompts: z.array(z.string()).optional(),
    frequency: z.string().optional(),
    frequency_by_level: z.any().optional(),
    revisit_interval_days: z.number().optional(),
  }),
});

const stories = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    linked_concepts: z.array(z.string()).optional(),
    level: z.number().optional(),
  }),
});

export const collections = {
  'front-matter': frontMatter,
  concepts,
  lifts,
  bodyweight,
  mobility,
  journal,
  stories,
};
