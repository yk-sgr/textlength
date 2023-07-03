// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-adsense'],
  devtools: { enabled: true },
  'google-adsense': {
    id: 'ca-pub-9604089991570546'
  }
})
