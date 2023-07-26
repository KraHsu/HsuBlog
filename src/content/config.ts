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
        return utils.formatDate(date);
      }),
    updatedDate: z
      .union([z.string(), z.date()])
      .optional()
      .transform((value) => {
        if (!value) {
          return undefined;
        } else if (value instanceof Date) {
          return utils.formatDate(value);
        } else {
          const date = new Date(value);
          return utils.formatDate(date);
        }
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
