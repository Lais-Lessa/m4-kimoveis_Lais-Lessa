import express from "express";
import {userCreateSchema } from "../schemas/users.schema";
import { checkEmailExist } from "../middlewares/checkEmailExists.middlewares";
import { createUserController, getUserController, userDestroyController, userUpdateController } from "../controllers/user.controllers";
import { validateAdmin } from "../middlewares/validatyAdmin.middlewares";
import { checkUserPermission } from "../middlewares/checkPermissionUpdate.middleware";
import { checkExistId } from "../middlewares/checkExistId.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { validateBody } from "../middlewares/validateBody.middlewares";

const router = express.Router();

router.post("/users",checkEmailExist, validateBody(userCreateSchema), createUserController)
router.get("/users",verifyToken, validateAdmin,getUserController)
router.patch("/users/:id", checkUserPermission, userUpdateController)
router.delete("/users/:id",checkExistId,verifyToken, validateAdmin,userDestroyController)

export default router;