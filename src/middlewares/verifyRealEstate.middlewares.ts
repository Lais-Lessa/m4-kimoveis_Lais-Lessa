import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Schedule } from "../entities"
import AppError from "../error"

export const verifyRealEstateScheduleExistsMiddlewares = async (req: Request, _res: Response, next: NextFunction) => {
    
    const { realEstateId, hour, date } = req.body

    const scheduleRepo = AppDataSource.getRepository(Schedule)

    const schedule = await scheduleRepo.findOne({ 
        where: { hour, realEstate: { id: realEstateId }, date } })
    
    if(schedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}