import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.no/",
  prefetch: true,
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx(), lottie()],
  image: {
    domains: ["live.staticflickr.com"],
  },
});
