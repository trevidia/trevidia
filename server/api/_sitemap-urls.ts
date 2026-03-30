

export default defineEventHandler(async (event) => {
  let dynamicRoutes: Array<{ loc: string }> = []

  try {
    const blogPosts = await queryCollection(event, 'blog').all()
    const services = await queryCollection(event, 'services').all()
    const industries = await queryCollection(event, 'industries').all()
    const technologies = await queryCollection(event, 'technologies').all()

    dynamicRoutes = [
      ...blogPosts.map((post: {path?: string, stem: string}) => ({ loc: post.path ? post.path : `/${post.stem}` })),
      ...services.map((s: {stem: string}) => ({ loc: `/${s.stem}` })),
      ...industries.map((i: {stem: string}) => ({ loc: `/${i.stem}` })),
      ...technologies.map((t: {stem: string}) => ({ loc: `/${t.stem}` }))
    ]
  } catch (error) {
    console.error('Sitemap API query error', error)
  }

  return dynamicRoutes
})
