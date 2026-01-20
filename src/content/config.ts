import { defineCollection, z } from "astro:content";

const authors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
  }),
});

const blekka = defineCollection({
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
    start: z.date().optional(),
    end: z.date().optional(),
    deadline: z.date().optional(),
    filled: z.boolean().default(false),
  }),
});

const frivillig = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const artist = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    imageAttribution: z.string().optional(),
    title: z.string(),
    shortTitle: z.string().optional(),
    author: z.string().optional(),
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

const accommodations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

const sponsorGroup = z.enum([
  "Generalsponsor",
  "Hovedsponsorer",
  "Sponsorer",
  "Støttespillere",
  "Offentlig støtte",
  "Samarbeidspartnere",
]);

const sponsors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    url: z.string(),
    image: z.string(),
    group: sponsorGroup,
  }),
});

export const collections = {
  authors,
  blekka,
  festivalkomite,
  frivillig,
  artist,
  accommodations,
  sponsors,
};
