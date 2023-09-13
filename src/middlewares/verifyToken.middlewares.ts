import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../error";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

  const authorization: string | undefined = req.headers.authorization;

  if (!authorization) throw new AppError("Missing bearer token", 401);

  const [_bearer, token]: Array<string> = authorization.split(" ");

  const decoded = verify(token,process.env.SECRET_KEY!)

  res.locals = { ...res.locals, decoded }
  

  return next();
}