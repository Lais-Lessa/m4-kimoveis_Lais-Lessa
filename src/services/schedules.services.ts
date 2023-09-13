import { AppDataSource } from "../data-source"
import { RealEstate, Schedule, User } from "../entities"
import AppError from "../error"
import { CreateSchedule } from "../interfaces/scheduleInterfaces"

export const createSchedulesServices = async ( data: CreateSchedule, userId:number) => {
    
    const scheduleRepo = AppDataSource.getRepository(Schedule)
    
    const parsedDate = new Date(data.date).getDay()
    
    if ((parsedDate === 0) || parsedDate === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400);
    }

    const parsedHour = parseInt(data.hour.split(":")[0])
    
    if ((parsedHour < 8) || (parsedHour > 18)) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    }
    
    const realEstateRepo = AppDataSource.getRepository(RealEstate)
    const realEstate = await realEstateRepo.findOneBy({ id: data.realEstateId})
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOneBy({ id: userId})
    await scheduleRepo.save({...data,real: realEstate!, user: user! })

}

export const getSchedulesServices = async ( id: number ) => {

    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const realEstate = await realEstateRepo.findOne({ 
        where: {
        id: id
        },
        relations:{
            schedules: {user: true},
            address: true,
            category: true,
            
        }
    })
    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }
    
    return realEstate

}
