import { nanoid } from 'nanoid';

// Contenu aligné sur la source unique du profil (ai-pro-freelance/data/freelance/profil/profil.json) et la charte v1 du 09/10/2026.
// Clients des réalisations anonymisés, pas de capture d'écran client.

// HEAD DATA
export const headData = {
  title: 'Louis Gourain | Développeur freelance Vue.js & Nuxt',
  lang: 'fr',
  description:
    "Je conçois, construis et débloque des applications web métier en Vue.js et Nuxt. Freelance depuis Madrid, à distance pour la France et l'Europe.",
  url: 'https://www.louis-gourain.com',
  image: 'https://www.louis-gourain.com/brand/partage-1200x630.png',
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Louis Gourain',
  subtitle: 'Développeur freelance Vue.js & Nuxt.',
  tagline: 'Je conçois, construis et débloque des applications web métier.',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Pendant 7 ans en agence, j'ai été développeur full-stack, chef de projet puis Lead Dev Front-end. J'y ai notamment créé l'application de prise en charge médicale utilisée par les secouristes des Jeux Olympiques de Paris 2024 : plus de 1 000 prises en charge par jour, sans incident.",
  paragraphTwo:
    "Freelance depuis Madrid, je travaille avec deux types de clients. Les PME dont l'activité tient sur Excel, du papier et des e-mails : je comprends votre métier, je vous montre une maquette cliquable sous 24 h, puis je livre votre outil par lots de 3 à 6 semaines. Et les équipes tech dont le front Vue rame ou dont la migration vers Vue 3 traîne : audit, architecture, migration, qualité et tests, développement assisté par l'IA.",
  paragraphThree:
    'Une réponse sous 24 h, un point écrit chaque semaine, des tests et une revue de code sur chaque fonctionnalité. Certifié Vue.js et Scrum Master, ingénieur IMT Lille Douai. Français, anglais, espagnol.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projet-secours.png',
    title: 'Application de prise en charge médicale',
    info:
      "Application conçue de zéro avec le client pour les équipes de secours sur les grands événements sportifs : Jeux Olympiques de Paris 2024 et de Milan Cortina 2026, Marathon de Paris, UTMB. Plus de 1 000 prises en charge par jour, sans incident. Lead Dev Front-end.",
    info2: 'Vue 3 · TypeScript · PWA hors-ligne · AWS',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'projet-fouilles.png',
    title: 'Application de fouilles archéologiques',
    info:
      "Évolution de l'application de saisie et d'exploration des données de fouilles d'une école d'archéologie suisse, livrée au forfait par lots : moteur relationnel, requêtes expertes, photos, cartographie, suivi des erreurs.",
    info2: 'Vue 3 · Quasar · Pinia · Go · Sentry',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'projet-pwa.png',
    title: 'PWA hors-ligne de terrain',
    info:
      "Application installable, utilisable sans réseau, pour que les agents d'un site patrimonial protégé saisissent leurs mains courantes pendant les visites. Les données se synchronisent au retour du réseau.",
    info2: 'PWA · Hors-ligne · React · React-Admin · API Platform',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'projet-aidd.png',
    title: "Développement assisté par l'IA",
    info:
      "Une méthode en 6 phases (cadrage, design, tests d'abord, implémentation, revue critique, capitalisation) et des règles de code pour Claude Code et GitHub Copilot : livrer plus vite sans sacrifier les tests ni la revue.",
    info2: 'Claude Code · Copilot · Vue 3 · Vitest',
    url: '',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Un outil métier à construire, un front Vue à débloquer ? Écrivez-moi, je vous réponds sous 24 h.',
  btn: 'Écrivez-moi',
  email: 'contact@louis-gourain.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/louis-gourain-7a0551113/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lgourain/',
    },
  ],
  text: 'Louis Gourain · Développeur freelance Vue.js & Nuxt · Madrid',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
