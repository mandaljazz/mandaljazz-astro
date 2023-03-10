import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.github.io",
  integrations: [tailwind(), sitemap(), prefetch(), robotsTxt(), mdx()]
});