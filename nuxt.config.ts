import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-07",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // TEMP WORKAROUND, REMOVE AFTER UPDATED FROM 4.6.0
  nitro: {
    externals: { inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/] },
  },
});
