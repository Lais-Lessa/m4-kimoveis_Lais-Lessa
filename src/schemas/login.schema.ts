import { z } from "zod";

export const loginSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
  });
  
  export const loginResponseSchema = z.object({
    token: z.string(),
  });
  