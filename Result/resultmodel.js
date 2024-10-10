const mongoose=require("mongoose")
const resultmodelschema=new mongoose.Schema({
    bookingid: {
          type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Booking'
        
        },
    // userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'PatientRegister' },
    value:{type:String},
    comments:{type:String},
  
  
   

}
)
module.exports=new mongoose.model("Addresult",resultmodelschema) 