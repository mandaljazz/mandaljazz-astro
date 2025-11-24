import { defineCollection, z } from "astro:content";

const blogg = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    ingress: z.string().optional(),
    image: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z
      .union([z.string().transform((str) => new Date(str)), z.undefined()])
      .optional(),
    hide: z.boolean().default(false),
    body: z.string(),
  }),
});

export const collections = {
  blogg,
};
