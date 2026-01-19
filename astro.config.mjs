// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://astauf03.github.io/sound-journal-26",
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});