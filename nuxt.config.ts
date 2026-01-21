// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  // Global CSS
  css: ['~/assets/scss/main.scss'],

  // Vite configuration for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Auto-import variables, mixins, and functions in all components
          // Using modern @use syntax instead of deprecated @import
          additionalData: `
            @use "sass:math";
            @use "sass:color";
            @use "~/assets/scss/_functions.scss" as *;
            @use "~/assets/scss/_variables.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  // Dev server configuration
  devServer: {
    port: parseInt(process.env.PORT || '3000'),
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api',
      projectName: process.env.PROJECT_NAME,
    },
  },
})
