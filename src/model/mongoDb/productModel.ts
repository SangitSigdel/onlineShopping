import {model, Schema} from 'mongoose'

const productSchema = new Schema({
    name:{
        type:String,
        required:[true,'A product must have a name']
    },
    price:{
        type:Number,
        required:[true,'A product must have a price']
    },
    quantity:{
        type:Number,
        required:[true,'A product must have a quantity']
    },
    description: String
})

export const productModel = model('products',productSchema)