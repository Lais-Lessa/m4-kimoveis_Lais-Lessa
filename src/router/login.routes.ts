import express from "express";
import { userLoginController } from "../controllers/login.controllers";

export const routerLogin = express.Router();

routerLogin.post("/login", userLoginController)
