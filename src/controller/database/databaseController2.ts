import {Request,Response} from 'express'

export interface dbqueries {
    create(data:object):any
}

export class databaseAdapter {

    dbResponse:any
    
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

    
    async createData(dbInterface:dbqueries,req:Request,res:Response){
        try{

            this.dbResponse=await dbInterface.create(req.body)
            console.log('the database response is ',this.dbResponse.error)
            this.responseStatus(this.dbResponse,res)
        }
        catch(err){
            console.log(err)
        }
    }
    
}