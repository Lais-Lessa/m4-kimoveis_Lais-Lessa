import { Request, Response } from "express";
import { createSchedulesServices, getSchedulesServices } from "../services/schedules.services";

export const scheduleController = async (req: Request, res: Response) => {
    
    const { sub } = res.locals.decoded

    const data = req.body

    const userId = Number(sub)
    
    await createSchedulesServices(data, userId);

    return res.status(201).json({ message: 'Schedule created' });

}

export const getAllSchedulesRealEstate = async (req: Request, res: Response) => {
    
    const { id } = req.params

    const realEstate = await getSchedulesServices(Number(id))

    return res.status(200).json(realEstate)
}
