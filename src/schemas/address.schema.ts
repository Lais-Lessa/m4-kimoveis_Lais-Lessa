import { z } from "zod";

export const AddressSchema = z.object({
    id: z.number(),
    street: z.string(),
    zipCode: z.string(),
    number: z.number(),
    city: z.string(),
    state: z.string()
  });

  export const AddressCreateSchema = AddressSchema.omit({
    id: true
  })