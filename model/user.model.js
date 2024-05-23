import { validate } from "email-validator";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:[true,'Name is required'],
        minLength:[8,'Name should be  8 chracter'],
        maxLength:[15,'Name lessthan 15 character'],
        lowercase:true,
        trim:true,

    },
    email:{
        type:String,
        required:[true,"eamil is required"],
        trim:true,
        lowercase:true
    },
    mobileNumber:{
        type:String,
        required:[true,'mobileNumber is required'],
        minLength:[10,'mobile number should be 10 digit'],
        maxLength:[10,'mobile number lessthan 11 digit'],
        validate:{
            validator:function(value){
                const regex = /^\d{10}$/;
                return regex.test(value)
            }

        },
        trim:true
    },
    avatar:{
        public_id:{
            type:String,

        },
        secure_url:{
            type:String

        }
    },
    password:{
        type:String,
        required:[true,'password is required '],
        minLength:[6,'password should be 6 character'],
        maxLength:[8,'password lesstahn 8 character'],
        trim:true,
        lowercase:true
    }
    
    
},
{timestamps:true}

)
const User = mongoose.model('user',userSchema)
export default User