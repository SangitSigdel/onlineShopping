import {Request,Response} from 'express'
import { controller, get, post,patch,del } from "../../decorators";

@controller('/')
class usreController {

    @get('user')
    getProduct(req:Request,res:Response):void{
        res.status(200).send('get user')
    }

    @post('user')
    createProduct(req:Request,res:Response):void{
        res.status(200).send('create user')
    }
    
    @patch('user')
    editProduct(req:Request,res:Response):void{
        res.status(200).send('edit user route')
    }

    @del('user')
    delProduct(req:Request,res:Response){
        res.status(200).send('delete user')
    }

}