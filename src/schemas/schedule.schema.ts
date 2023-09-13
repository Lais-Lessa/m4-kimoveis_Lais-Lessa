import { z } from "zod";

export const ScheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(), 
    realEstateId: z.number().int().positive(),
    userId: z.number().int().positive()
  });

export const ScheduleCreateSchema = ScheduleSchema.omit({
    id: true,
    userId: true,
})

