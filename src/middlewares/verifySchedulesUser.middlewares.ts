import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Schedule } from "../entities"
import AppError from "../error"

export const verifyUserScheduleMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
    
    let { sub }  = res.locals.decoded
    
    sub = Number(sub)
    
    const { hour, date } = req.body

    const scheduleRepo = AppDataSource.getRepository(Schedule)

    const schedule = await scheduleRepo.findOne({ where: { hour, user: {id: sub}, date } })
    
    if(schedule){

     throw new AppError('User schedule to this real estate at this date and time already exists', 409)
}
    return next()
}