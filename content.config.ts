import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const commonDataSchema = z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    benefits: z.array(z.string()).optional(),
    features: z.array(z.object({
        title: z.string(),
        description: z.string()
    })).optional()
})

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: "blog/**/*.md",
            schema: z.object({
                date: z.string(),
                author: z.string().optional(),
                category: z.string().optional(),
                tags: z.array(z.string()).optional(),
                image: z.string().optional(),
                readTime: z.string().optional()
            })
        }),
        industries: defineCollection({
            type: 'data',
            source: 'industries/**/*.json',
            schema: commonDataSchema
        }),
        services: defineCollection({
            type: 'data',
            source: 'services/**/*.json',
            schema: commonDataSchema
        }),
        technologies: defineCollection({
            type: 'data',
            source: 'technologies/**/*.json',
            schema: commonDataSchema
        }),
        content: defineCollection({
            type: 'page',
            source: '*.md'
        })
    }
})