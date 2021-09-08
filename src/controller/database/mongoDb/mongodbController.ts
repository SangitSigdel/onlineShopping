import {databaseInterface} from '../databaseController2'
import {Request} from 'express'
import {userModelActions} from './userModelActions'
import {userModel} from '../../../model/mongoDb/userModel'
import {APIFeatuers} from './apiFeatures'

export class mongodbController implements databaseInterface {

    constructor(private model:any){}

    async createData(data:object){
        
        try{
            const newData = await this.model.create(data)

            if(this.model===userModel){
               const signUpData= new userModelActions(userModel).signUpUser(newData)
               return signUpData
            }

            else {
                return newData
            }
        }
        
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData
        }

    }

    async getData(reqQuery:any){
        try{
                       
            const features = new APIFeatuers(this.model.find(),reqQuery).filter().sort().limit().pagination()
            const data = await features.query
            
            return data 
        }
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData 
        }
    }

    async getSingleData(req:Request){
        try{

            if(this.model===userModel){
                const signUpData= new userModelActions(userModel).loginUser(req)
                return signUpData
             }
            
           const data = await this.model.findById(req.params.id)
           return data 
        }
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData 
        }
    }
   

    async updateData(id:string,data:object){
        try {
            const updatedData = await this.model.findByIdAndUpdate(id,data,{
                new:true,
                runValidators:true
            })
            return updatedData
        }
        catch(err) {
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData
        }
    }


    async deleteData(id:string){

        // something are left for delete to proceed, like if the data get deleted just push message successfully deleted.
        try {
            const deleteData = await this.model.findByIdAndDelete(id)
            return deleteData
        }
        catch(err) {
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData
        }
    }
  

}





