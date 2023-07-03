// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-umami', 'nuxt-seo-kit'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  'google-adsense': {
    id: 'ca-pub-9604089991570546'
  },
  appConfig: {
    umami: {
      host: 'https://analytics.umami.is',
      id: '2367cafe-381d-4692-8c72-a96eb4571d25',
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://textlength.info',
      siteName: 'TextLength Counter',
      siteDescription: 'Count your text and word length online.',
    }
  },
})
