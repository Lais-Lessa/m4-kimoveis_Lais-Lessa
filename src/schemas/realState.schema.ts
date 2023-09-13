import { z } from "zod";

const realEstateSchema = z.object({
  value: z.union([z.string(), z.number()]).default(0),
  size: z.number().positive().int(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().int().positive(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number().int(),
});

export default realEstateSchema;
