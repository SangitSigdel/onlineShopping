import {databaseInterface} from '../database/databaseController2'


export class mongodbController implements databaseInterface {

    constructor(private model:any){}

    async createData(data:object){
        
        try{
            const newData = await this.model.create(data)
            return newData
        }
        
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData
        }

    }

    async getData(reqQuery:any){
        try{
            
            const queryObj= {...reqQuery}
            const excludeFields = ['page','sort','limit','fields']
            excludeFields.forEach(el=>delete queryObj[el])

            // Advanced filtering

            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=> `$${match}`);
            
            let query =  this.model.find(JSON.parse(queryStr))

            // Sorting 
            if(reqQuery.sort){
                const sortBy= reqQuery.sort.split(',').join(' ');
                query= query.sort(reqQuery.sort)
            }
            else {

                query=query.sort('-createdAt');
            }

            // FIELD LIMITING
            if(reqQuery.fields){
                const fields = reqQuery.fields.split(',').join(' ');
                query=query.select(fields);
            }
            else {
                query=query.select('-_v')
            }

            // PAGINATION
            const page = reqQuery.page *1 || 1;
            const limit = reqQuery.limit *1 || 10;
            const skip = (page-1) * limit

            query = query .skip(skip).limit(limit)

            if(reqQuery.page){
                const numProduct = await this.model.countDocuments();
                if(skip>numProduct) throw new Error('this page doesnot exist')
            }

            // EXECUTE QUERY
            const data = await query
            
            return data 
        }
        catch(err){
            const errorData = err
            Object.assign(errorData,{error:true})
            return errorData 
        }
    }

    async getSingleData(id:string){
        try{
           const data = await this.model.findById(id)
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