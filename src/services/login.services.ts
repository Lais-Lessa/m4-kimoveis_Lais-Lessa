import { AppDataSource } from "../data-source"
import { User } from "../entities"
import jwt from 'jsonwebtoken'
import { jwtSecret } from "../config/config"
import AppError from "../error"

export const userLoginService = async (email:string, password:string) => {

    const userRepo = AppDataSource.getRepository(User)

    const user = await userRepo.findOne({where: {email}})

    if(!user){
        throw new AppError('Invalid credentials', 401)
    }

    const isPassword = user.password === password

    if(!isPassword){
        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign({ id: user.id, email: user.email}, jwtSecret, {
        subject: user.id.toString(), expiresIn: "10h",
    })

    return token
}