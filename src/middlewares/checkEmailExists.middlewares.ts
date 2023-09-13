import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../error";
import { User } from "../entities";

export const checkEmailExist = async (req: Request,_res: Response,next: NextFunction) => {

    const { email } = req.body;
      
    const repo = AppDataSource.getRepository(User)
    
    const foundEmail = await repo.findOne({ where: {email} })
    
    if(foundEmail){
        throw new AppError("Email already exists", 409)
    }
            
    return next()
    
}