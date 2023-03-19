// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    openApiKey: "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",
  },
  devServerHandlers: [],
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "ImageGPT",
      meta: [
        {
          name: "description",
          content: "Unleash Your Creativity with ImageGPT.",
        },
      ],
    },
  },
});
