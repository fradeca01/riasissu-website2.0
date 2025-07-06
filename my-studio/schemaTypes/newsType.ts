import { defineField, defineType } from 'sanity'

export const newsType = defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'tag',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})