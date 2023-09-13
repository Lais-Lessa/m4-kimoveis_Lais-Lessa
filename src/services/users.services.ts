import { AppDataSource } from "../data-source"
import { User } from "../entities"
import AppError from "../error"
import { userReturnSchema } from "../schemas/users.schema"
import bcrypt from 'bcrypt'

export const userCreate = async (payLoad: User) => {
    const userRepository = AppDataSource.getRepository(User) 
    const hashedPassword = await bcrypt.hash(payLoad.password, 10);

    const user = userRepository.create({
        name: payLoad.name,
        email: payLoad.email,
        password: hashedPassword,
        admin: payLoad.admin
    })

    const newUser = await userRepository.save(user)

    const returnedUser = userReturnSchema.parse({
        id: newUser.id,
        name: newUser.name,
        email:newUser.email,
        admin: newUser.admin,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
        deletedAt: newUser.deletedAt,

    }) 
    return returnedUser
}

export const userGetService = async () => {

    const repository = AppDataSource.getRepository(User)
    const users = await repository.find()
    return users 
}

export const userUpdate = async (userId: number, email?:string, name?:string) => {

    const repository = AppDataSource.getRepository(User)

    const user = await repository.findOne({where: {id: userId}})

    if(!user){
        throw new AppError("User not found", 404)
    }

    if(name){
        user.name = name
    }

    if(email){
        user.email = email
    }

    await repository.save(user)

    return user
}

export const userDestroyService = async (foundEntity: User) => {

    const repo = AppDataSource.getRepository(User)

    const id = foundEntity.id
    
    const destroy = await repo.findOne({where: {id}})
    
    if(!destroy){
        throw new AppError("User not found", 404)
    }
    await repo.softRemove(destroy)
   
}

