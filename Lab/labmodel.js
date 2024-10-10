const mongoose=require("mongoose")
const labmodelschema=new mongoose.Schema({
    LabName:{type:String},
    Email:{type:String},
    RegistrationNumber:{type:Number},
    City:{type:String},
    District:{type:String},
    Pincode:{type:Number},
    Contact:{type:Number},
    Password:{type:String},
    isActive:{
        type:Boolean,
        default:false
    },
    labid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LabReg",

    }
   

}
)
module.exports=new mongoose.model("LabReg",labmodelschema) 