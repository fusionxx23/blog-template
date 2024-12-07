// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import auth from "auth-astro";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://travistarpley.com",
  output: "server",
  integrations: [tailwind(), auth(), sitemap(), svelte()],
});