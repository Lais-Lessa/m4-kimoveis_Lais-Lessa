import { z } from "zod";
import { ScheduleSchema } from "../schemas/schedule.schema";

type Schedule = z.infer<typeof ScheduleSchema>;
type CreateSchedule = z.infer<typeof ScheduleSchema>
export { Schedule, CreateSchedule }