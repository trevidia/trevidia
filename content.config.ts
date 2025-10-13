import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: "blog/**/*.md"
        }),
        industries: defineCollection({
            type: 'data',
            source: 'industries/**.json'
        }),
        services: defineCollection({
            type: 'data',
            source: 'services/**.json'
        }),
        technologies: defineCollection({
            type: 'data',
            source: 'technologies/**.json'
        }),
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        })
    }
})