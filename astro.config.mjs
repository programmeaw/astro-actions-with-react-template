// @ts-check
import vercelAdapter from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://example.me",
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercelAdapter(),
  integrations: [icon(), sitemap(), react()],
});
