import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { validateAdmin } from "../middlewares/validatyAdmin.middlewares";
import { uniqueCategory } from "../middlewares/uniqueCategory.middlewares";
import { Router } from "express";
import { createCategoriesController, getCategoriesController, getRealStatesByCategory } from "../controllers/category.controllers";
import { checkPermissionCategory } from "../middlewares/checkPermissionCategory.middlewares";
import { checkExistIdCategory } from "../middlewares/checkExistIdCategory.middlewares";

export const categoryRouter = Router()

categoryRouter.post("/categories",checkPermissionCategory, verifyToken,validateAdmin, uniqueCategory, createCategoriesController) 
categoryRouter.get("/categories", getCategoriesController)  
categoryRouter.get("/categories/:id/realEstate", checkExistIdCategory, getRealStatesByCategory)
