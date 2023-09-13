import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../error";
import { Category } from "../entities";

export const uniqueCategory = async (req: Request, _res: Response, next: NextFunction) => {
    
    const name = req.body.name
    
    if(!name){
        return next()
    }

    const categoryRepo = AppDataSource.getRepository(Category)
    
    const foundEntity: Category | null = await categoryRepo.findOneBy({name})
    
    if(foundEntity){
        throw new AppError("Category already exists", 409)
    }

    return next()
}