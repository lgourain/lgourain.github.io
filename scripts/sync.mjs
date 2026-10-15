// Copie depuis ai-pro-freelance (source unique) : sous-ensemble public de profil.json,
// jetons de la charte, dossier /brand/ (signature e-mail) et photo.
// Seuls les champs publics sont extraits : les noms réels des clients ne quittent jamais profil.json.
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const src = resolve(process.env.PROFIL_DIR ?? '../ai-pro-freelance/data/freelance/profil')
const p = JSON.parse(readFileSync(resolve(src, 'profil.json'), 'utf8'))

const projet = (nom) => {
  const x = p.projects.find((pr) => pr.name === nom)
  if (!x) throw new Error(`Projet introuvable dans profil.json : ${nom}`)
  return { titre: x.name, client: x.x_client?.public ?? null, description: x.description, points: x.highlights ?? [] }
}

const site = {
  nom: p.basics.name,
  label: p.basics.label,
  email: p.basics.email,
  url: p.basics.url,
  // « 24h » collé, comme dans le reste du site
  pitchs: Object.fromEntries(Object.entries(p.basics.x_pitchs).map(([k, v]) => [k, v.replace(/(\d)\s+h\b/g, '$1h')])),
  profils: Object.fromEntries(p.basics.profiles.map((pr) => [pr.network.toLowerCase(), pr.url])),
  // Pas de configurateurs (contentieux, exclus de toutes les sorties publiques) : seules ces réalisations sont publiées
  realisations: {
    secours: projet('Application de prise en charge médicale et de secours'),
    fouilles: projet('Application de fouilles archéologiques'),
    mainsCourantes: projet('PWA hors-ligne de mains courantes'),
    vr: projet('Launcher de salles de réalité virtuelle'),
    // Projets publiés par l'ancien employeur (décision du 15/10) : client seulement, sans chiffre interne
    refonte: { client: projet("Refonte d'un configurateur de menuiseries").client.replace(/ \(.*\)$/, '') },
    couleurs: { client: projet('Simulateur de couleurs').client },
  },
}
// Noms à ne jamais voir dans le site construit (contrôlés par verifier.mjs, jamais publiés).
// Tous viennent de profil.json, aucun n'est écrit ici (dépôt public) : « Nom (sigle) » donne aussi « Nom » et « sigle ».
const interdits = [
  ...p.projects.map((pr) => pr.x_client?.name),
  ...p.work.flatMap((w) => [w.x_client?.public !== w.x_client?.name && w.x_client?.name, ...(w.x_client?.noms ?? [])]),
]
  .filter(Boolean)
  .flatMap((n) => [n, n.replace(/ \(.*\)$/, ''), n.match(/\((?:produit : )?([^)]+)\)$/)?.[1]])
  .filter(Boolean)

mkdirSync('app/data', { recursive: true })
writeFileSync('app/data/site.json', JSON.stringify(site, null, 2) + '\n')
writeFileSync('.noms-interdits.json', JSON.stringify([...new Set(interdits)]))
cpSync(resolve(src, 'charte/tokens.css'), 'app/assets/tokens.css')
cpSync(resolve(src, 'charte/brand'), 'public/brand', { recursive: true })
cpSync(resolve(src, 'assets/me-retouche.webp'), 'public/louis-gourain.webp')
console.log('sync : profil, charte et /brand/ copiés')
