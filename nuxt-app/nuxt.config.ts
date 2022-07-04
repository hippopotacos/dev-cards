const { BASE_URL, API_KEY } = process.env;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/global.scss'
  ],
}
