// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',

    ssr: false,

    app: {
        head: {
            title: 'Poketipo - Qual é o tipo desse Pokemon?',
            htmlAttrs: {
                lang: 'pt-br'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Identifique as fraquezas dos Pokemons. Este aplicativo foi feito para que você possa memorizar mais facilmente as fraquezas de cada tipo de Pokemon.' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: "theme-color", content: "#FFFFFF" }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap",
                },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/import.scss";',
                }
            }
        }
    },

    css: ['~/assets/css/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    components: true,

    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/style-resources',
    ],

    modules: [
        '@pinia/nuxt',
    ],
})

