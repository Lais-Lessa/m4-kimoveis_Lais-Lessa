import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../error';
import { AppDataSource } from '../data-source';
import { User } from '../entities';


export const checkUserPermission = async (req: Request,_res: Response,next: NextFunction) => {
  
  const token = req.headers.authorization

  const userId = Number(req.params.id)

  if (!token) {
    throw new AppError("Missing bearer token", 401)
  }

  const bearerToken = token.split("Bearer ")[1]

  const secretKey = process.env.SECRET_KEY

  if (!secretKey) {
    throw new AppError("Secret key not configured", 500)
  }

  const decodedToken: any = jwt.verify(bearerToken, secretKey)

  const userRepository = AppDataSource.getRepository(User)

  const existingUser = await userRepository.findOne({
    where: { id: userId },
  })

  if (!existingUser) {
    throw new AppError("User not found", 404);
  }

  if (!decodedToken.admin && decodedToken.sub !== String(userId)) {
    throw new AppError("Insufficient permission", 403);
  }
  
    return next();
  } 

 
