const mongoose=require("mongoose")
const testmodelschema=new mongoose.Schema({
    TestName:{type:String},
    Duration:{type:Number},
    Price:{type:Number},
    Minrange:{type:Number},
    Maxrange:{type:Number},
    Comments:{type:String},
   
    // isActive:{
    //     type:Boolean,
    //     default:false
    // },
   
labid:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'LabReg'
}



}
)
module.exports=new mongoose.model("Addtest",testmodelschema) 