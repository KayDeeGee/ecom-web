// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt', '@vueuse/nuxt'],
  colorMode: {
    preference: 'light'
  },
  components: [
    { path: '~/components/Modal'},
    { path: '~/components/Home', pathPrefix: false },
    { path: '~/components/Shop', pathPrefix: false },
    '~/components'
  ],
})