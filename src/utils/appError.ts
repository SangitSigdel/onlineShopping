export class AppError extends Error {
    status:string
    statusCode:Number
    isOperational:boolean
    constructor(message:string,statusCode:Number){
        super(message)

        this.statusCode =statusCode
        this.status = `${statusCode}`.startsWith('4')?'fail':'error'
        this.isOperational = true

        Error.captureStackTrace(this,this.constructor)
    }
}