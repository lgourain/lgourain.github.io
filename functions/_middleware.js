// Pages Function : www.louis-gourain.com redirige en 301 vers le domaine nu (adresse canonique du site)
export const onRequest = ({ request, next }) => {
  const url = new URL(request.url)
  if (url.hostname !== 'www.louis-gourain.com') return next()
  url.hostname = 'louis-gourain.com'
  return Response.redirect(url.toString(), 301)
}
