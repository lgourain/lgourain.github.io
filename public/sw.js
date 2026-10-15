// L'ancien site Gatsby installait un service worker (gatsby-plugin-offline) qui garde l'ancienne version en cache.
// Celui-ci le remplace chez les anciens visiteurs : il vide les caches, se désinstalle et recharge la page.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const cle of await caches.keys()) await caches.delete(cle)
    await self.registration.unregister()
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url)
  })())
})
