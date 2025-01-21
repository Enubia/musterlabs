// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        'shadcn-nuxt',
    ],

    googleFonts: {
        families: {
            Montserrat: true,
        },
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },

    compatibilityDate: '2025-01-21',
});
