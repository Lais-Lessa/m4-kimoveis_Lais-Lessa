import { z } from "zod";

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string().max(45),
  });

export const CategoryCreateSchema = CategorySchema.omit({
    id: true
  })

