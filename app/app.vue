<script setup lang="ts">
import { Blocks, ClipboardList, Compass, Github, Linkedin, Mail, Footprints, Gamepad2, HeartPulse, LifeBuoy, MapPin, Palette, PanelsTopLeft, Shovel, WifiOff, Wrench } from 'lucide-vue-next'
import site from '~/data/site.json'

const r = site.realisations
const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Projet - prise de contact')}`

const portes = [
  {
    id: 'construire',
    icone: Blocks,
    image: '/illustrations/construire.webp',
    titre: 'Construire',
    pour: 'Entreprises sans équipe technique',
    pitch: site.pitchs.construire,
    offres: [
      ['Une maquette en 24h', 'On en parle 20 minutes. Le lendemain, vous cliquez dans les premiers écrans de votre outil, avec une estimation du prix.'],
      ['Un prix ferme avant de vous engager', 'Une demi-journée ensemble pour décrire précisément ce que fera l’outil. Vous repartez avec un devis ferme. Si vous lancez le projet, ce temps est déduit de la facture.'],
      ['Votre outil, livré par étapes', 'Toutes les 3 à 6 semaines, une partie de l’outil est prête et vous l’essayez. Le prix de chaque étape est fixé à l’avance, et le code vous appartient.'],
      ['Un suivi après la livraison', 'Mises à jour, sécurité et petites améliorations, pour un forfait mensuel.'],
    ],
  },
  {
    id: 'debloquer',
    icone: Wrench,
    image: '/illustrations/debloquer.webp',
    titre: 'Débloquer',
    pour: 'Équipes tech : startups, scale-ups, agences, ESN',
    pitch: site.pitchs.debloquer,
    offres: [
      ['Audit Vue / Nuxt', 'Un regard extérieur sur votre application : code, architecture, performance, dette. Vous recevez un plan d’action priorisé, présenté à l’équipe.'],
      ['Renfort senior', 'Un lead dev Vue / Nuxt qui rejoint votre équipe et livre dès la première semaine : fonctionnalités, architecture, migration vers Vue 3, qualité.'],
      ['Journée de déblocage', 'Un problème précis qui bloque (bug tenace, lenteurs, build, migration) : une journée en binôme avec votre équipe pour le régler.'],
    ],
  },
]

// Une réalisation par ligne. Clients anonymisés (champ public de profil.json).
const realisations = [
  {
    icone: HeartPulse,
    image: '/illustrations/jeux.webp',
    client: r.secours.client,
    periode: '2023 - 2026',
    titre: 'La prise en charge médicale des Jeux Olympiques de Paris 2024 et de Milan Cortina 2026',
    texte: 'Une application qui fonctionne même sans réseau, pour que les soignants enregistrent chaque patient. Elle est issue d’une PWA créée de zéro en janvier 2022, adaptée en 2023 pour les Jeux, avec un front mené de bout en bout : architecture, pilotage de l’équipe, intégration rapide de nouveaux développeurs sous des délais très serrés.',
    points: [
      'Paris 2024 : près de 30 000 prises en charge, 8 700 utilisateurs, 800 points de consultation',
      'Aucun incident pendant toute la durée des Jeux',
      'Reprise pour les Jeux d’hiver de Milan Cortina 2026',
      'Astreintes pendant les Jeux',
    ],
    techs: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind', 'AWS', 'GCP'],
  },
  {
    icone: Footprints,
    image: '/illustrations/courses.webp',
    client: r.secours.client,
    periode: '2021 - 2026',
    titre: 'Les postes médicaux des grands événements sportifs',
    texte: 'La même application équipe les soignants des grandes courses, d’un pays à l’autre.',
    points: [
      'Marathon de Paris : 60 000 coureurs, 1 300 patients pris en charge',
      'UTMB : environ 300 soignants dans 3 pays',
      'Ironman, World Athletics, L’Étape du Tour, SaintéLyon, Marathon des Sables',
    ],
    techs: ['Vue 3', 'TypeScript', 'PWA hors ligne', 'IndexedDB'],
  },
  {
    icone: LifeBuoy,
    image: '/illustrations/plages.webp',
    client: r.secours.client,
    periode: '2021 - 2026',
    titre: 'La surveillance des plages et les associations de secourisme',
    texte: 'Pour la SNSM et des communes du littoral, l’application remplace le papier dans l’administratif des postes de secours.',
    points: ['Utilisée aussi par l’UNASS, la FFSS, la Croix Blanche et l’Ordre de Malte'],
    techs: ['Vue 3', 'TypeScript', 'PWA hors ligne', 'IndexedDB'],
  },
  {
    icone: MapPin,
    image: '/illustrations/gps.webp',
    client: r.secours.client,
    periode: '2025 - 2026',
    titre: 'Suivre les équipes médicales mobiles par GPS, sans balise',
    texte: 'Sur une course, savoir en temps réel où sont les équipes médicales mobiles fait gagner de précieuses minutes. Plutôt que des balises GPS coûteuses, une application mobile Android et iPhone, conçue et développée de bout en bout.',
    points: [
      'La position remonte en continu, même téléphone verrouillé ou application fermée',
      'Géorepérage : l’application détecte l’entrée et la sortie des zones de l’événement',
      'Connexion sécurisée avec double authentification',
      'Une seule base de code pour Android et iOS, publication automatisée sur les stores',
    ],
    techs: ['Vue 3', 'TypeScript', 'Capacitor', 'Android', 'iOS', 'Pinia', 'Tailwind', 'Sentry'],
  },
  {
    icone: ClipboardList,
    image: '/illustrations/questionnaire.webp',
    client: r.secours.client,
    periode: '2020 - 2026',
    titre: 'Un questionnaire de santé à remplir avant l’épreuve',
    texte: 'Créé pendant la Covid, il sert aujourd’hui avant les grands événements sportifs : chaque athlète renseigne ses antécédents et ses traitements, et les équipes médicales sur place ont déjà son dossier en main en cas de prise en charge médicale.',
    points: [
      'Première version conçue et livrée en 2020 : interface et API serverless sur AWS',
      'Questionnaire configurable par événement, invitations et relances par e-mail',
      'Traduit en une dizaine de langues, de l’espagnol à l’arabe et au coréen',
      'Refondu ensuite en Clean Architecture, avec un code métier couvert à 100 % par les tests',
    ],
    techs: ['Vue 3', 'TypeScript', 'Clean Architecture', 'AWS Lambda', 'DynamoDB', 'SQS', 'SES'],
  },
  {
    icone: PanelsTopLeft,
    image: '/illustrations/menuiseries.webp',
    client: r.refonte.client,
    periode: '2019 - 2026',
    titre: 'Un outil de vente sur mesure, conçu en 2019 et refondu sans jamais s’arrêter',
    texte: 'L’outil où les clients composent leurs fenêtres, portes, portails et volets sur mesure, sur le site et en magasin. Conçu en 2019, puis développé pendant 7 ans aux côtés de l’enseigne.',
    points: [
      'Enrichi en continu : nouveaux produits, mises à jour techniques et de l’infrastructure',
      'Branché à Hercule Pro, le logiciel de référence du secteur, utilisé en magasin',
      'En 2025, refonte complète en tant que chef de projet et lead front : une application Vue.js séparée de l’API, une nouvelle interface et de nouvelles fonctionnalités pour améliorer le parcours client (création de projets sans compte)',
      'Toutes les familles de produits migrées une à une, sans interruption de service',
      'Pilotage d’une équipe de 5 : front, back, DevOps, architecte',
    ],
    techs: ['Vue.js', 'Clean Architecture', 'Symfony', 'PHP', 'PostgreSQL'],
  },
  {
    icone: Compass,
    image: '/illustrations/geometrie.svg',
    client: 'Un neurologue, pour un article scientifique',
    periode: '2026',
    titre: 'Un outil de géométrie sur mesure pour une publication scientifique',
    texte: 'Un outil qui s’ouvre dans le navigateur, sans installation, pour démontrer une construction géométrique sur l’Homme de Vitruve avec une précision vérifiable par les relecteurs.',
    points: [
      'Construction guidée sur n’importe quelle image : cercles et pentagones de Dürer calés au pixel près',
      'Mesure des distances, des angles et des proportions, affichées sur la figure',
      'Export des figures prêtes pour l’article',
    ],
    techs: ['JavaScript', 'SVG'],
  },
  {
    icone: Shovel,
    image: '/illustrations/fouilles.webp',
    client: r.fouilles.client,
    periode: '2026',
    titre: 'Une application de terrain pour les fouilles archéologiques',
    texte: 'Les archéologues y saisissent et explorent leurs données de fouilles : cartes, photos, objets. Évolutions livrées en freelance, par lots.',
    points: [
      'Premier lot : mises à jour, suivi des erreurs, envoi de photos, corrections prioritaires',
      'Deuxième lot : liens entre les objets, recherche avancée, couches cartographiques',
    ],
    techs: ['Vue 3', 'Quasar', 'Pinia', 'Go', 'Sentry'],
  },
  {
    icone: Palette,
    image: '/illustrations/couleurs.webp',
    client: r.couleurs.client,
    periode: '2019 - 2022',
    titre: 'Essayer une couleur de peinture sur la photo de sa pièce',
    texte: 'Un simulateur en ligne : on compare des teintes et on les applique sur une photo de sa pièce ou sur une photo d’exemple, depuis son téléphone ou en magasin.',
    points: [],
    techs: ['Vue.js', 'Node.js'],
  },
  {
    icone: WifiOff,
    image: '/illustrations/grotte.webp',
    client: r.mainsCourantes.client,
    periode: '2019 - 2022',
    titre: 'Tracer chaque intervention dans une grotte préhistorique protégée',
    texte: 'Le site est fragile et sans réseau. Techniciens et chercheurs y consignent tout ce qui se passe dans la grotte, photos à l’appui, depuis une application installable qui fonctionne hors ligne. Tout se synchronise au retour au bureau.',
    points: [],
    techs: ['React', 'React-Admin', 'API Platform', 'PWA hors ligne'],
  },
  {
    icone: Gamepad2,
    image: '/illustrations/vr.webp',
    client: r.vr.client,
    periode: '2019 - 2022',
    titre: 'Piloter une salle de réalité virtuelle à distance',
    texte: r.vr.description,
    points: [],
    techs: ['React', 'Go', 'PouchDB', 'CouchDB'],
  },
]

// Chaque étape porte son engagement (seulement ceux qui sont tenus, cf. conseil du 14/10)
const etapes = [
  { titre: 'Vous m’expliquez votre besoin', texte: 'Par écrit ou en 20 minutes d’appel : comment vous travaillez aujourd’hui, ce qui vous fait perdre du temps.', engagement: 'Réponse sous 24h ouvrées' },
  { titre: 'Vous testez une maquette', texte: 'Vous cliquez dans les écrans clés de votre futur outil, avec une estimation du prix.', engagement: 'Sous 24h' },
  { titre: 'Je livre par étapes', texte: 'Une version de test en ligne et une démo à chaque étape : vous voyez l’outil avancer.', engagement: 'Étapes de 3 à 6 semaines' },
  { titre: 'L’outil évolue avec vous', texte: 'Je corrige ce qui ne marche pas, puis l’outil évolue avec votre activité si vous le souhaitez.', engagement: 'Garantie 3 mois' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${site.nom} - ${site.label}`,
  url: 'https://louis-gourain.com/',
  email: site.email,
  image: 'https://louis-gourain.com/louis-gourain.webp',
  areaServed: ['FR', 'ES', 'EU'],
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  founder: {
    '@type': 'Person',
    name: site.nom,
    jobTitle: site.label,
    sameAs: Object.values(site.profils),
  },
}
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }] })
</script>

<template>
  <a class="evitement" href="#contenu">Aller au contenu</a>
  <header class="entete">
    <div class="cadre entete__ligne">
      <a href="/" class="marque" aria-label="Louis Gourain, accueil">
        <svg class="logo" viewBox="276 248 448 488" width="36" height="39" aria-hidden="true">
          <path class="logo__l" pathLength="1" d="M311 273H390V638H620Q632 638 632 626V485H548L573 423H698V632A80 80 0 0 1 618 712H311Z" />
          <path class="logo__g" pathLength="1" d="M508 273H701L680 337H515Q490 337 490 362V513Q490 538 515 538H595V600H508A80 80 0 0 1 428 520V353A80 80 0 0 1 508 273Z" />
        </svg>
      </a>
      <nav aria-label="Sections">
        <a href="#offre">Offre</a>
        <a href="#realisations">Réalisations</a>
        <a href="#methode">Méthode</a>
        <a :href="mailto" class="bouton bouton--petit">Me contacter</a>
      </nav>
    </div>
  </header>

  <main id="contenu">
    <section class="hero cadre intro">
      <div class="hero__texte">
        <h1>Je livre des applications métier.</h1>
        <p class="hero__chapo">
          Un outil sur mesure pour votre entreprise, ou un développeur Vue.js senior pour renforcer votre équipe.
          Réactif, rigoureux, rapide, et un vrai interlocuteur humain.
        </p>
        <div class="actions">
          <a :href="mailto" class="bouton">Parlons de votre projet</a>
          <a :href="site.profils.malt" class="lien-fleche" rel="noopener">Mon profil Malt</a>
        </div>
      </div>
      <figure class="hero__photo">
        <img data-tilt src="/louis-gourain.webp" alt="Louis Gourain" width="1200" height="1200" fetchpriority="high">
      </figure>
    </section>

    <section class="chiffres" aria-label="En quelques chiffres">
      <div class="cadre chiffres__grille" data-reveal>
        <p><strong>+ de 8 ans</strong> de développement web, dont 7 sur Vue.js</p>
        <p><strong>2 Jeux Olympiques</strong> Paris 2024 et Milan Cortina 2026, sur une application que j’ai créée</p>
        <p><strong>24h</strong> pour recevoir la maquette cliquable de votre futur outil</p>
      </div>
    </section>

    <section id="offre" class="cadre section">
      <h2 class="titre-section" data-reveal>Deux façons de travailler ensemble</h2>
      <div class="portes">
        <article v-for="(porte, n) in portes" :id="porte.id" :key="porte.id" class="porte" data-reveal :style="{ '--rang': n }">
          <figure class="illustration illustration--large">
            <img :src="porte.image" alt="" width="1200" height="600" loading="lazy" decoding="async">
            <span class="vignette vignette--grande" aria-hidden="true"><component :is="porte.icone" :size="30" :stroke-width="1.5" /></span>
          </figure>
          <p class="porte__pour">{{ porte.pour }}</p>
          <h3>{{ porte.titre }}</h3>
          <p class="porte__pitch">{{ porte.pitch }}</p>
          <dl>
            <template v-for="[nom, detail] in porte.offres" :key="nom">
              <dt>{{ nom }}</dt>
              <dd>{{ detail }}</dd>
            </template>
          </dl>
        </article>
      </div>
    </section>

    <section id="realisations" class="cadre section">
      <h2 class="titre-section" data-reveal>Réalisations</h2>
      <div class="cas">
        <article v-for="cas in realisations" :key="cas.titre" class="cas__ligne" data-reveal>
          <div class="cas__meta">
            <figure class="illustration">
              <img :src="cas.image" alt="" width="640" height="480" loading="lazy" decoding="async">
              <span class="vignette" aria-hidden="true"><component :is="cas.icone" :size="22" :stroke-width="1.5" /></span>
            </figure>
            <p class="cas__client">{{ cas.client }}</p>
            <p class="cas__periode">{{ cas.periode }}</p>
          </div>
          <div>
            <h3>{{ cas.titre }}</h3>
            <p>{{ cas.texte }}</p>
            <ul v-if="cas.points.length">
              <li v-for="point in cas.points" :key="point">{{ point }}</li>
            </ul>
            <ul v-if="cas.techs?.length" class="badges" aria-label="Technologies">
              <li v-for="tech in cas.techs" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section id="methode" class="methode section">
      <div class="cadre">
        <h2 class="titre-section" data-reveal>Comment je travaille</h2>
        <ol class="etapes">
          <li v-for="(etape, n) in etapes" :key="etape.titre" data-reveal :style="{ '--rang': n }">
            <span class="etapes__num">{{ n + 1 }}</span>
            <h3>{{ etape.titre }}</h3>
            <p>{{ etape.texte }}</p>
            <p class="etapes__engagement">{{ etape.engagement }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section id="contact" class="cadre section contact">
      <h2 class="titre-section" data-reveal>Un projet, un front qui coince ?</h2>
      <p>Écrivez-moi en quelques lignes : vous avez une réponse complète sous 24h ouvrées.</p>
      <div class="actions">
        <a :href="mailto" class="bouton">{{ site.email }}</a>
      </div>
    </section>
  </main>

  <footer class="pied">
    <div class="cadre pied__ligne">
      <div class="pied__marque">
        <img src="/brand/logo-sombre.svg" alt="" width="32" height="35">
        <p>
          <strong>{{ site.nom }}</strong> · développeur freelance
          <span class="pied__origine">français <span class="drapeau drapeau--fr" aria-hidden="true" /></span>
          basé à
          <span class="pied__origine">Madrid <span class="drapeau drapeau--es" aria-hidden="true" /></span>
          · © {{ new Date().getFullYear() }}
        </p>
      </div>
      <nav class="pied__reseaux" aria-label="Me contacter et me suivre">
        <a :href="mailto" aria-label="E-mail" title="E-mail"><Mail :size="18" /></a>
        <a :href="site.profils.malt" rel="noopener" aria-label="Malt" title="Malt">M</a>
        <a :href="site.profils.linkedin" rel="noopener" aria-label="LinkedIn" title="LinkedIn"><Linkedin :size="18" /></a>
        <a :href="site.profils.github" rel="noopener" aria-label="GitHub" title="GitHub"><Github :size="18" /></a>
      </nav>
    </div>
  </footer>
</template>
