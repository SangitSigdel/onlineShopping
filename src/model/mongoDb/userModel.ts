import { Schema,model } from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new Schema ({
    
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowercase:true,
        validate: [validator.isEmail,'Please provide a valid email']

    },
    loginType:{
        type:String,
        enum:['google','facebook','email'],
        required:true
    },

    userType:{
        type:String,
        enum:['admin','customer','vendor'],
        required:[true, 'A user must have a user type']
    },

    token:{
        type:String
    },

    name:{
        type:String,
        required:[true,'User name is required']
    },

    image:String,

    password:{
        type:String,
        minLength: 8,
        select:false
    },
    passwordConfirm: {
        type:String,

        validate:{
            validator: function(el:object){
                return el===this.password
            }
        }
    },
    passwordChangedAt: Date
})

userSchema.methods.changePasswordAfter = function (JWTTimeStamp){
    if(this.passwordChangedAt){
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000,10)

        return JWTTimeStamp< changedTimeStamp
    }

    return false
}


userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
    next()
})

userSchema.methods.correctPassword = async function (candidatePassword:string, userPassword:string){
    return await bcrypt.compare(candidatePassword,userPassword)
}

export const userModel = model('user',userSchema)