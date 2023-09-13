import { Router } from "express";
import { getAllSchedulesRealEstate, scheduleController } from "../controllers/schedule.controllers";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { verifyRealEstateIdMiddleware } from "../middlewares/checkIdRealEstate.middlewares";
import { verifyRealEstateScheduleExistsMiddlewares } from "../middlewares/verifyRealEstate.middlewares";
import { validateAdmin } from "../middlewares/validatyAdmin.middlewares";
import { ScheduleCreateSchema } from "../schemas/schedule.schema";
import { verifyUserScheduleMiddlewares } from "../middlewares/verifySchedulesUser.middlewares";
import { validateBody } from "../middlewares/validateBody.middlewares";

export const schedulesRouter = Router()

schedulesRouter.post("/schedules",verifyToken,validateBody(ScheduleCreateSchema), verifyRealEstateIdMiddleware, verifyRealEstateScheduleExistsMiddlewares,verifyUserScheduleMiddlewares, scheduleController)
schedulesRouter.get("/schedules/realEstate/:id",verifyToken,validateAdmin, getAllSchedulesRealEstate)

