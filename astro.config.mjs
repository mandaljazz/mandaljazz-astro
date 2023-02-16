import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import firebase from "astro-firebase";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.github.io",
  integrations: [tailwind(), sitemap(), prefetch(), robotsTxt(), mdx()],
  adapter: firebase(),
});
