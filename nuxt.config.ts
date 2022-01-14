import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target:"static",
    // UI framework 用の CSS の参照パス
    css: [
        'quasar/dist/quasar.prod.css'
    ],
})
