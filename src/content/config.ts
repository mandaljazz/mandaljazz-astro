import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
  }),
});

const blogg = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    ingress: z.string().optional(),
    image: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z
      .union([z.string().transform((str) => new Date(str)), z.undefined()])
      .optional(),
    hide: z.boolean().default(false),
  }),
});

export const collections = {
  authors,
  blogg,
};
