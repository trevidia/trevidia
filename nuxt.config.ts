import {defineNuxtConfig} from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtmId: ''
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
        tailwindcss()
    ]
  },
  pages: true,
  content: {
    watch: {
      port: 4000,
      showURL: true
    }
  },
  app: {
    head: {
      title: "Consulting & Web Development Company - Trevidia",
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ]
})