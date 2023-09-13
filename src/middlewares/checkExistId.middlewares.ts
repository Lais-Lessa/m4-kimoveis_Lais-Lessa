import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../error";
import { User } from "../entities";

export const checkExistId = async (req: Request, res: Response, next: NextFunction) => {
    
    const id = Number(req.params.id)
    const repo = AppDataSource.getRepository(User)

    const foundEntity = await repo.findOneBy({id})

    if(!foundEntity){
        throw new AppError("User not found", 404)
    }

    res.locals.foundEntity = foundEntity
    
    return next()
}