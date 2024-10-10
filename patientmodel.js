const mongoose=require("mongoose")
const Usermodelschema=new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    BloodGroup:{type:String},
    Gender:{type:String},
    Age:{type:Number},
    City:{type:String},
    Contact:{type:Number},
   image:{type:Object}, 
    Password:{type:String},

    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patientregister",

    }
   

}
)
module.exports=new mongoose.model("PatientRegister",Usermodelschema) 