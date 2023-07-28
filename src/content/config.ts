import { defineCollection, z } from "astro:content";
import { utils } from "@utils/utils";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => {
        const date = new Date(val);
        return date.toISOString();
      }),
    updatedDate: z
      .string()
      .or(z.date())
      .transform((val) => {
        const date = new Date(val);
        return date.toISOString();
      }),
    heroColor: z.string().optional(),
    cover: z.string().optional(),
    abbrlink: z.string().optional(),
    tags: z.string().array().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
