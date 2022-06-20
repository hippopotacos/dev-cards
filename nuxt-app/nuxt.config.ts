import { defineNuxtConfig } from 'nuxt'
const { BASE_URL, API_KEY } = process.env;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
})
