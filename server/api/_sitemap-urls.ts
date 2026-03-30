

export default defineEventHandler(async (event) => {
  let dynamicRoutes: Array<{ loc: string }> = []

  try {
    const blogPosts = await queryCollection(event, 'blog').all()
    const services = await queryCollection(event, 'services').all()
    const industries = await queryCollection(event, 'industries').all()
    const technologies = await queryCollection(event, 'technologies').all()

    dynamicRoutes = [
      ...blogPosts.map((post: any) => ({ loc: post.path ? post.path : `/${post.stem}` })),
      ...services.map((s: any) => ({ loc: `/${s.stem}` })),
      ...industries.map((i: any) => ({ loc: `/${i.stem}` })),
      ...technologies.map((t: any) => ({ loc: `/${t.stem}` }))
    ]
  } catch (error) {
    console.error('Sitemap API query error', error)
  }

  return dynamicRoutes
})
