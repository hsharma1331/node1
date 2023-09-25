const mongoose=require('mongoose')
const empSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // confirmpassword:{
    //     type:String,
    //     required:true
    // }
})

const Register=new mongoose.model('register',empSchema)
module.exports=Register;