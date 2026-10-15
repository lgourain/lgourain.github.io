# louis-gourain.com

Site de Louis Gourain, développeur freelance Vue.js & Nuxt. Nuxt 4, pages pré-rendues, hébergé sur Cloudflare Pages.

- `npm run dev` : développement local
- `npm run generate` : site statique dans `.output/public`

Le contenu factuel vient de `profil.json` (dépôt `ai-pro-freelance`) : `scripts/sync.mjs` en copie le sous-ensemble public, la charte et `/brand/` (chemin utilisé par la signature e-mail). `scripts/verifier.mjs` bloque la génération si un nom de client anonymisé apparaît dans le site construit.
