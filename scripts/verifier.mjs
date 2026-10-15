// Garde-fou : aucun nom de client anonymisé dans le site construit, et le contenu est bien dans le HTML.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const noms = JSON.parse(readFileSync('.noms-interdits.json', 'utf8'))
const fichiers = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f)
  return statSync(p).isDirectory() ? fichiers(p) : [p]
})
const textes = fichiers('.output/public').filter((f) => /\.(html|js|json|txt|xml|css)$/.test(f))
const fautes = []
for (const f of textes) {
  const contenu = readFileSync(f, 'utf8').toLowerCase()
  for (const n of noms) {
    // Comparaison en mot entier (lettres accentuées comprises)
    const echappe = n.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(`(^|[^\\p{L}])${echappe}($|[^\\p{L}])`, 'u')
    if (re.test(contenu)) fautes.push(`${f} : ${n}`)
  }
}
const index = readFileSync('.output/public/index.html', 'utf8')
if (!index.includes('applications métier')) fautes.push('index.html : contenu absent du HTML pré-rendu')
if (fautes.length) {
  console.error('verifier : ÉCHEC\n' + fautes.join('\n'))
  process.exit(1)
}
console.log(`verifier : OK (${textes.length} fichiers, ${noms.length} noms contrôlés)`)
