const titre = 'Louis Gourain - Développeur freelance Vue.js & Nuxt, applications métier'
const description =
  'Je livre des applications métier en Vue.js et Nuxt : un outil sur mesure pour votre entreprise (maquette cliquable sous 24h), ou un renfort senior et un audit pour votre équipe tech. Madrid, à distance France et Europe.'

export default defineNuxtConfig({
  compatibilityDate: '2025-10-01',
  devtools: { enabled: false },
  css: ['~/assets/tokens.css', '~/assets/site.css'],
  nitro: { prerender: { routes: ['/'] } },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: titre,
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#232B45' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:url', content: 'https://louis-gourain.com/' },
        { property: 'og:title', content: titre },
        { property: 'og:description', content: description },
        { property: 'og:image', content: 'https://louis-gourain.com/brand/partage-1200x630.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'canonical', href: 'https://louis-gourain.com/' },
        { rel: 'icon', type: 'image/svg+xml', href: '/brand/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/brand/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/brand/favicon-180.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;600&display=swap',
        },
      ],
      script: [
        // Cloudflare Web Analytics : mesure d'audience sans cookies (pas de bandeau de consentement)
        {
          defer: true,
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': '{"token": "5e7fa4665ec14a33a4a45503e9cc59b5"}',
          tagPosition: 'bodyClose',
        },
      ],
    },
  },
})
