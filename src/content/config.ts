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

const artist = defineCollection({
  type: "content",
  schema: z.object({
    imageType: z.string().optional(),
    imageAttribution: z.string().optional(),
    title: z.string(),
    shortTitle: z.string().optional(),
    author: z.string().optional(),
    authorImage: z.string().optional(),
    noAuthor: z.boolean().default(false),
    tagline: z.string().optional(),
    venue: z.string().optional(),
    concertStartAt: z.string().optional(),
    concertEndAt: z.string().optional(),
    spotifyUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    sponsoredByBergesenstiftelsen: z
      .union([z.string(), z.boolean()])
      .optional(),
    hideFromProgram: z.boolean().default(false),
    hideFromArtistList: z.boolean().default(false),
    isFree: z.boolean().default(false),
    externalLink: z.string().optional(),
    altImage: z.string().optional(),
    isMorgensolo: z.boolean().default(false),
    isBestillingsverk: z.boolean().default(false),
    isBarnekonsert: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
    isNonConcertEvent: z.boolean().default(false),
    requiresFreeTicket: z.boolean().default(false),
    externalTicketUrl: z.string().optional(),
    order: z.union([z.string(), z.number()]).optional(),
    releaseAt: z.string().optional(),
    cancelled: z.boolean().default(false),
  }),
});

export const collections = {
  authors,
  blogg,
  festivalkomite,
  frivillig,
  artist,
};
