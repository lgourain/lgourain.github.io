// Survol de la photo : elle se soulève (montée + zoom) et s'incline vers le curseur
// (inclinaison reprise de react-tilt sur l'ancien site : max 8°, perspective 1000)
export default defineNuxtPlugin((nuxtApp) => {
  if (!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return
  const max = 8
  nuxtApp.hook('app:mounted', () => {
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        el.style.transform = `perspective(1000px) translate(-10px, -12px) scale(1.04) rotateX(${(max / 2 - y * max).toFixed(2)}deg) rotateY(${(x * max - max / 2).toFixed(2)}deg)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = ''
      })
    })
  })
})
