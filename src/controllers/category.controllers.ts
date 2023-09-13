import { Request, Response } from "express"
import { categoryServices, createCategoriesServices, getCategoriesService } from "../services/category.services"

export const createCategoriesController = async (req: Request, res: Response) => {
    
    const payload = req.body

    const category = await createCategoriesServices(payload)
    
    return res.status(201).json(category)
}

export const getCategoriesController = async (req: Request, res: Response) => {
    
    const categoryRepo = await getCategoriesService()

    return res.status(200).json(categoryRepo)
}

export const getRealStatesByCategory = async (req: Request, res: Response) => {
    
    const categoryId = Number(req.params.id)

    const realEstate = await categoryServices(categoryId)

    return res.status(200).json(realEstate)
} 

