import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        teaser: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
    })
});


export const collections = {
    blog: blogCollection,
};
