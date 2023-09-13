import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(45),
  email: z.string().email(),
  admin: z.boolean().optional(),
  password: z.string().min(1).max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deleteAt: z.string().nullable()
});

const userCreateSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deleteAt: true,
})

const userReturnSchema =z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  admin: z.boolean(),
  createdAt: z.date().or(z.string()).nullable(),
  updatedAt: z.date().or(z.string()).nullable(),
  deletedAt: z.date().or(z.string()).nullable(),
})


type Infer<T> = T extends z.ZodType<infer R> ? R : never;

export type TuserReadSchema = Infer<typeof userReturnSchema>

export { UserSchema,userCreateSchema,userReturnSchema }