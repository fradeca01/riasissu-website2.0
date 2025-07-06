import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  integrations: [tailwind(), icon(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), react(), sanity({
    projectId:"riasissu-news",
    dataset: "production",
    useCdn: false,
  })],
});