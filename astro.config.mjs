import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.no/",
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    mdx(),
    lottie(),
    yeskunallumami({ id: "d43a3a76-eba4-47c6-b19f-8c6499479a8b" }),
  ],
  image: {
    domains: ["live.staticflickr.com"],
  },
});
