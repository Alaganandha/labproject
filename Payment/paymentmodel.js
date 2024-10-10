
const mongoose=require("mongoose")
const paymentmodelschema=new mongoose.Schema({
    Cardholdername:{type:String},
    CardNumber:{type:String},
    CVV:{type:String},
    Month:{type:String},
    Year:{type:Number},
    testid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'addtest'
    },
   
    bookingid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Addbook'
    },

    // isActive:{
    //     type:Boolean,
    //     default:false
    // },
   

});
module.exports=new mongoose.model("payment",paymentmodelschema) 