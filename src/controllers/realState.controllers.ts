import { Request, Response } from "express";
import { readServices, realEstateCreate } from "../services/realState.services";

export const createRealController = async (req: Request, res: Response) => {
    
    const data = req.body

    const newRealEstate = await realEstateCreate(data)
    
    return res.status(201).json(newRealEstate)

}

export const getRealEstateController = async (_req: Request, res: Response) => {

    const userRepo = await readServices()

    return res.status(200).json(userRepo);
}

