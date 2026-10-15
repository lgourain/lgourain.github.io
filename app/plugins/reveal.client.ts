// Apparition douce des blocs au défilement. Sans JavaScript (ou avec « réduire les animations »),
// tout reste visible : la classe « animer » n'est posée qu'ici.
export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  nuxtApp.hook('app:mounted', () => {
    document.documentElement.classList.add('animer')
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) {
          if (!e.isIntersecting) continue
          e.target.classList.add('visible')
          observateur.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observateur.observe(el))
  })
})
