import jwt from 'jsonwebtoken'
import {Request} from 'express'
export class userModelActions {

    constructor(private dbModel:any){}

    async createToken(userId:any) {
        const jwt_secrete: any = process.env.JWT_SECRET
        const token = await jwt.sign({id:userId},jwt_secrete,{
            expiresIn:process.env.JWT_EXPIRES_IN
        })
        return token
    }


   async signUpUser(newData:any){
            const jwt_secrete:any = process.env.JWT_SECRET
            const token = await this.createToken(newData._id)
            
            Object.assign(newData,{token:token})
            console.log(newData)

            return newData
            
    }

    async loginUser(req:Request){
        const {email,password}= req.body

        if(!email || !password) {
            const error = {
                error:true,
                response: 'please provide email and password'
            }
            return error
        }

        const user = await this.dbModel.findOne({email}).select('+password')
        const correct = await user.correctPassword(password,user.password)

        console.log('the password is ', correct)

        if(!user || !correct){
            const error = {
                error:true,
                response: 'Incorrect email or password'
            }
            return error
        }
        
        const token = await this.createToken(user._id)
        console.log(token)

        const result= {
            token
        }
        return result
    }
}
