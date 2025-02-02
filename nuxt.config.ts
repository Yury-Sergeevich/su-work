// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/utils" as *;
            @use "@/assets/scss/base" as *;
            @use "@/assets/scss/layouts" as *;
          `,
        },
      },
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/color-mode'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   }
  // ],

  compatibilityDate: '2024-11-01',
})