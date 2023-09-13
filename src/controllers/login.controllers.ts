import { Request, Response } from "express"
import { userLoginService } from "../services/login.services"

export const userLoginController = async (req: Request, res: Response) => {
    
    const { email, password } = req.body

    const token = await userLoginService(email, password)

    res.status(200).json({token})
    
}