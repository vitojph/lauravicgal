import { defineCollection, z } from 'astro:content';

// Ceremony packages collection
const ceremonies = defineCollection({
  type: 'data',
  schema: z.object({
    tier: z.enum(['simple', 'personalized', 'deluxe']),
    title: z.string(),
    titleEs: z.string(),
    price: z.number(),
    featured: z.boolean().default(false),
    features: z.array(z.string()),
    featuresEs: z.array(z.string()),
    order: z.number(),
  }),
});

// Workshops collection
const workshops = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum(['team-building', 'private', 'group']),
    title: z.string(),
    titleEs: z.string(),
    description: z.string(),
    descriptionEs: z.string(),
    details: z.array(z.string()),
    detailsEs: z.array(z.string()),
    icon: z.string(),
    order: z.number(),
  }),
});

// FAQ collection
const faq = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['commissions', 'ceremonies', 'workshops', 'general']),
    question: z.string(),
    questionEs: z.string(),
    answer: z.string(),
    answerEs: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  ceremonies,
  workshops,
  faq,
};
