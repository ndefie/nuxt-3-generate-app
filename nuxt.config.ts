// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css'
    ],
    modules: [
        'nuxt-directus'
    ],
    directus: {
        url: 'http://localhost:8055/'
    }
});
