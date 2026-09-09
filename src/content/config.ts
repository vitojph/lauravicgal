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
    type: z.enum(['private-kids', 'art-birthday', 'family-art', 'mindful-adults']),
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

// Blog content blocks
const headingBlock = z.object({
  type: z.literal('heading'),
  level: z.enum(['h2', 'h3']).default('h2'),
  text: z.string(),
});
const textBlock = z.object({
  type: z.literal('text'),
  text: z.string(),
});
const imageBlock = z.object({
  type: z.literal('image'),
  image: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});
const imageRowBlock = z.object({
  type: z.literal('image-row'),
  images: z.array(z.object({ image: z.string() })).min(2).max(3),
  caption: z.string().optional(),
});
const quoteBlock = z.object({
  type: z.literal('quote'),
  text: z.string(),
  attribution: z.string().optional(),
});
const blockSchema = z.discriminatedUnion('type', [
  headingBlock,
  textBlock,
  imageBlock,
  imageRowBlock,
  quoteBlock,
]);

// Blog collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEs: z.string().optional(),
    date: z.date(),
    description: z.string(),
    descriptionEs: z.string().optional(),
    image: z.string().optional(),
    blocks: z.array(blockSchema).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
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
  blog,
};
