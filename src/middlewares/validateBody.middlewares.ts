import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";


export const validateBody =  (schema: ZodTypeAny) => async (req: Request, _res: Response, next: NextFunction) => {
   
      const validatedBody = schema.parse(req.body);

      req.body = validatedBody;
         
      return next();

  }


