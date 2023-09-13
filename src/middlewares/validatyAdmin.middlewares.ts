import { NextFunction, Request, Response } from "express";
import AppError from "../error";

export const validateAdmin = async (_req: Request,res: Response,next: NextFunction) => {
  
  const { admin } = res.locals.decoded

    if (!admin) {
      throw new AppError('Insufficient permission', 403)
    }

    return next();
}
  
  