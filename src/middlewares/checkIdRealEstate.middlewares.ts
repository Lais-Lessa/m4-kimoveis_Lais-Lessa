import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { RealEstate } from "../entities"
import AppError from "../error"

export const verifyRealEstateIdMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
    
    const { realEstateId } = req.body

    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    
    const realEstate = await realEstateRepo.findOne({ where: { id: realEstateId } })

    if(!realEstate){
        throw new AppError('RealEstate not found', 404)
    } 

    return next()
}