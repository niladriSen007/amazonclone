import mongoose from mongoose
const userDetailsSchema = mongoose.Schema({
    fname:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Not valid email address");
        }
    },
    mobile:{
        type:Number,
        require:true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
    },
    tokens:[
        {
            token:{
                type:String,
                require:true,
            }
        }
    ],
    carts:Array
})

export default UserDetails = mongoose.model("UserDetail",userDetailsSchema);