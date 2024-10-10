const mongoose=require("mongoose")
const productmodelschema=new mongoose.Schema({
    Title:{type:String},
    Description:{type:String},
    Price:{type:String}
 
  
   

}
)
module.exports=new mongoose.model("Addproduct",productmodelschema) 