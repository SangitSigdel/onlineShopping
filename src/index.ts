import express from 'express'
import {Request,Response,NextFunction} from 'express'

import { router } from './decorators'
import {AppError} from './utils/appError'
import {globalErrorHandler} from './controller/errorController'

import './controller/Login/LoginController'
import './controller/product/productController'
import './controller/user/userController'

const app = express()

app.use(express.json())
app.use(router)

// Serving a public file
app.use(express.static(`${__dirname}/public`))

// Handling undefined route error
app.all('*',(req:Request,res:Response,next:NextFunction)=>{
    next(new AppError(`Can't find ${req.originalUrl} on this server`,404))
})

// Global error hadler
app.use(globalErrorHandler)

module.exports = app
