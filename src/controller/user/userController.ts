import { Request,Response} from 'express'
import {controller,get,post,patch,del, use} from '../../decorators'
import {mongodbController} from '../database/mongoDb/mongodbController'
import {databaseAdapter} from '../database/databaseController2'
import {userModel} from '../../model/mongoDb/userModel'
import {protect} from '../database/mongoDb/protectMiddlewaer'

const dbAdapter = new databaseAdapter()
const database = new mongodbController(userModel)

@controller('/user')
class productController{
   
    @post('/signup')
    async createData(req:Request,res:Response){
        dbAdapter.createData(database,req,res)
    }

    @get('/all')
    @use(protect)
    async getData(req:Request,res:Response){
        dbAdapter.getData(database,req,res)
    }

    @get('/login')
    async getSingleData(req:Request,res:Response){
        dbAdapter.getSingleData(database,req,res)
    }
    
    @patch('/:id')
    async updateData(req:Request,res:Response){
        dbAdapter.updateData(database,req,res)
    }

    @del('/:id')
    async deleteData(req:Request,res:Response){
        dbAdapter.deleteData(database,req,res)
    }

}