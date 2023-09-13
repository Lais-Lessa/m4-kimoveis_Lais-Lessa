import { NextFunction, Request, Response } from "express"
import { Category } from "../entities"
import { AppDataSource } from "../data-source"
import AppError from "../error"

export const checkExistIdCategory = async (req: Request, res: Response, next: NextFunction) => {
    
    const id = Number(req.params.id)
    
    const repo = AppDataSource.getRepository(Category)

    const foundEntity = await repo.findOneBy({id})

    if(!foundEntity){
        throw new AppError("Category not found", 404)
    }

    res.locals.foundEntity = foundEntity
    
    return next()
}