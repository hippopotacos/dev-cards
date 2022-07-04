import { defineNuxtConfig } from "nuxt"
const { BASE_URL, API_KEY } = process.env

export default defineNuxtConfig({
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
})