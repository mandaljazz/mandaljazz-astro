import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "content",
  schema: z.object({
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

const festivalkomite = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    fee: z.boolean().default(false),
    start: z.string().optional(),
    end: z.string().optional(),
    deadline: z.string().optional(),
    filled: z.boolean().default(false),
  }),
});

const frivillig = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    imagePath: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = {
  authors,
  blogg,
  festivalkomite,
  frivillig,
};
