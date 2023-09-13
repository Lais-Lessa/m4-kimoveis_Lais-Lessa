import { Router } from "express";
import realEstateSchema from "../schemas/realState.schema";
import { createRealController, getRealEstateController } from "../controllers/realState.controllers";
import { validateAdmin } from "../middlewares/validatyAdmin.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { validateBody } from "../middlewares/validateBody.middlewares";

export const RealEstateRouter = Router()

RealEstateRouter.post("/realEstate", verifyToken, validateAdmin, validateBody(realEstateSchema),createRealController)
RealEstateRouter.get("/realEstate",getRealEstateController)
