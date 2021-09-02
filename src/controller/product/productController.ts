import {Request,Response} from 'express'
import {controller,get,post,patch,del} from '../../decorators'
import {mongodbController} from '../database/mongodbController'
import {databaseAdapter} from '../database/databaseController2'

const dbAdapter = new databaseAdapter()
const mongoDb = new mongodbController()

@controller('/product')
class productController{

    @post('/')
    async createData(req:Request,res:Response){
        console.log('i am here',req.body)
        dbAdapter.createData(mongoDb,req,res)
    }
    
}