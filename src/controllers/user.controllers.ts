import { Request, Response } from "express";
import { userCreate, userDestroyService, userGetService, userUpdate } from "../services/users.services";
import { User } from "../entities";
import { TuserReadSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserController = async (req: Request, res: Response) => {
    
    const payload = req.body

    const user = await userCreate(payload)
    
    return res.status(201).json(user)
}

export const getUserController = async (_req: Request, res: Response) => {

    const userRepo = await userGetService()

    const responseUser: TuserReadSchema[] = userRepo.map((user: User) => {
        
    const parsedUser = userReturnSchema.parse(user);

    return parsedUser;
    });

    return res.status(200).json(responseUser);
}

export const userUpdateController = async (req: Request, res: Response) => {
    
    const { email, name } = req.body

    const userId = Number(req.params.id)

    const userRepo = await userUpdate(userId, email, name)

    const user = userReturnSchema.parse(userRepo)

    return res.json(user)
}

export const userDestroyController = async (_req: Request, res: Response) => {
    
    await userDestroyService(res.locals.foundEntity)

    return res.status(204).json()
}

