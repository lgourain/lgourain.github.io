import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Louis Gourain | Développeur Web',
  lang: 'fr',
  description: 'Bienvenue sur mon site web',
};

// HERO DATA
export const heroData = {
  title: "Hey, moi c'est",
  name: 'Louis',
  subtitle: 'Je suis développeur web',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Je suis un passionné de développement web et je travaille actuellement dans une agence lyonnaise : Wanadev. Je réalise également selon mes disponibilités des missions en freelance afin d'en apprendre toujours plus.",
  paragraphTwo: "Je travaille sur divers projets et j'apporte mes qualités techniques et humaines afin de les mener à bien.",
  paragraphThree: "Mes compétences techniques sont aussi bien liées au front-end (React.js, Vue.js, ...) qu'au back-end (Symfony).",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'caseo.jpg',
    title: 'Caséo',
    info: "Création d'un configurateur de fenêtres 2D.",
    info2: "Compétences : Gestion de Projet - Intégration Design - Vue.js - Symfony",
    url: 'https://www.caseo-maison.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bematrix.jpg',
    title: "BeMatrix",
    info: "Mise en place des abonnements avec Stripe pour accéder à l'outil 3D de configuration de stands.",
    info2: 'Compétences : Stripe - PHP Unit - Symfony - React.js',
    url: 'https://my.bematrix.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'octopod.png',
    title: 'OctopodVR',
    info: 'Refonte du launcher Octopod permettant aux exploitants de salles de jeux VR de contrôler les différents ordinateurs de leur salle à distance.',
    info2: 'Compétences : React.js - Golang - PouchDB / CouchDB',
    url: 'https://www.octopodvr.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chauvet.jpg',
    title: 'Grotte Chauvet',
    info: "Création d'une PWA (fonctionnement hors-ligne) permettant aux employés de saisir des mains courantes.",
    info2: 'Compétences : API-Platform - Symfony - React.js - React-Admin',
    url: 'https://archeologie.culture.fr/chauvet/fr',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logicoss.jpg',
    title: 'Logicoss',
    info: "Mise en place d'un questionnaire de santé en serverless permettant à des participants d'un événements sportif d'informer un responsable médical de leur été de santé.",
    info2: 'Compétences : Serverless - AWS (Lambda, Amplify, SES, SQS, ..) - Symony - Node.js - Vue.js',
    url: 'http://www.logicoss.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Je suis toujours partant pour une nouvelle aventure et je reste à l'écoute de toutes les opportunités. Vous souhaitez qu'on travaille ensemble ? Super !",
  btn: 'Parlons-en',
  email: 'louis.gourain@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/LouisGourain/',
    },
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
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
