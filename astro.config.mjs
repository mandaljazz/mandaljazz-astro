import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.no/",
  prefetch: true,
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx(), lottie()],
});
