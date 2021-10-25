import {userModel} from '../../../model/mongoDb/userModel'
import { AppError } from '../../../utils/appError'
import jwt from 'jsonwebtoken'
import {NextFunction, Response} from 'express'

export const protect =async (req:any,res:Response,next:NextFunction)=>{
    // Getting token and check if it is there
    let token
    let JWT_SECRET:any= process.env.JWT_SECRET
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1]
    }

    if (!token){
        return next(new AppError('You are not logged in! Please log in to get access',401))
    }
    // Token verification
    const decode:any =await (jwt.verify(token, JWT_SECRET))
    // Check if user still exists
    
    // BE CAREFUL THE USER MODEL IS DIRECT IMPLEMENTED IN THE CONTROLLER TYPESCRIPT FILE 
    const freshUser = await userModel.findById(decode.id)

    if(!freshUser){
        return next(new AppError('The user belonging to this token no longer exists',401))
    }
    // Check if user changed password after issuing the token
    if (freshUser.changedPasswordAfter(decode.iat)){
        return next(new AppError('User Recently changed password, Please login in again ', 401))
    }

    req.user = freshUser

    next()

}