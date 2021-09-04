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

class APIFeatuers{
    query:any
    queryString:any
    constructor(query:any, queryString:any){
        this.query=query
        this.queryString=queryString
    }

    filter(){

        const queryObj= {...this.queryString}
            const excludeFields = ['page','sort','limit','fields']
            excludeFields.forEach(el=>delete queryObj[el])

            // Advanced filtering

            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=> `$${match}`);
            
            this.query =  this.query.find(JSON.parse(queryStr)) 
            return this
    }

    sort(){
        if(this.queryString.sort){
            const sortBy= this.queryString.sort.split(',').join(' ');
            this.query= this.query.sort(this.queryString.sort)
        }
        else {

            this.query=this.query.sort('-createdAt');
        } 
        return this
    }

    limit(){

        if(this.queryString.fields){
            const fields = this.queryString.fields.split(',').join(' ');
            this.query=this.query.select(fields);
        }
        else {
            this.query=this.query.select('-_v')
        }

        return this        
    }

    pagination(){
        const page = this.queryString.page *1 || 1;
        const limit = this.queryString.limit *1 || 10;
        const skip = (page-1) * limit

        this.query = this.query .skip(skip).limit(limit)

        return this
    }

}