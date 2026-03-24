// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-24",
  devtools: { enabled: true },

  modules: [
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
  ],

  site: {
    url: "https://khaomi.dev/",
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  i18n: {
    locales: [{ code: "en", language: "en-US" }],
    defaultLocale: "en",
  },
});
