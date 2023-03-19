// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
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
