import {NextFunction, Request,Response} from 'express'

export interface databaseInterface {
    createData(data:object):any
    getSingleData(req:Request):any
    getData(queryObject:object):any
    updateData(id:string,data:object):any
    deleteData(id:string):any
    // databaseTable:Object | string
}

export class databaseAdapter {

    dbResponse:any

    // RESPONSE BACK FROM THE SERVER    
    responseStatus(dbError:any,res:Response){
        if(!dbError.error){
            this.success(res)
        }
        else if (dbError.error) {
            this.failed(res)
        }

        else {
            this.internalError(res)
        }
    }

    success(res:Response){
        res.status(200).send({
            status:'success',
            data: this.dbResponse
        })
    }

    failed(res:Response){
        res.status(400).send({
            status: 'failed',
            message: this.dbResponse
        })
    }

    internalError(res:Response){
        res.status(500).send({
            status:'failed',
            messge:'internal server error please contact admin'
        })
    }

    
    async createData(dbInterface:databaseInterface,req:Request,res:Response){
        try{

            this.dbResponse=await dbInterface.createData(req.body)
            console.log('the database response is ',this.dbResponse.error)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    }

    async getData(dbInterface:databaseInterface,req:Request,res:Response){

        try{
            // Building a query
            this.dbResponse=await dbInterface.getData(req.query)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    } 

    async getSingleData(dbInterface:databaseInterface,req:Request,res:Response){
        try{

            this.dbResponse=await dbInterface.getSingleData(req)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    } 
    
    async updateData(dbInterface:databaseInterface,req:Request,res:Response){
        try{

            this.dbResponse=await dbInterface.updateData(req.params.id,req.body)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    } 

    async deleteData(dbInterface:databaseInterface,req:Request,res:Response){
        try{

            this.dbResponse=await dbInterface.deleteData(req.params.id)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    } 
}