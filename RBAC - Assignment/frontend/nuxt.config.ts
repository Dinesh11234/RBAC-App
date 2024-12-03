// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  modules: ["@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    middleware: ['auth'],
  },
  pinia: {
    storesDirs: ['./src/store/**'],
  },

  extensions: [
    ".js",
    ".jsx",
    ".mjs",
    ".ts",
    ".tsx",
    ".vue"
  ],

  compatibilityDate: "2024-11-29",
})