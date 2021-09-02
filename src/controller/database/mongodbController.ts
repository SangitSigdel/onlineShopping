import {dbqueries} from '../database/databaseController2'
import {productModel} from '../../model/mongoDb/productModel'

export class mongodbController implements dbqueries {

    async create(data:object){
        
        try{
            const newData = await productModel.create(data)
            return newData
        }
        
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData
        }

    }
   

}