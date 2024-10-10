const mongoose=require("mongoose")
const Taskmodelschema=new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Gender:{type:String},
    City:{type:String},
    Contact:{type:Number},
    image:{type:Object},
    
    Password:{type:String},

   
   

}
)
module.exports=new mongoose.model("Taskreg",Taskmodelschema) 