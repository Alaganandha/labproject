const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    testid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Addtest' },
    labid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'LabReg' },
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'PatientRegister' },
    bookingid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Booking' },
    Date: { type: Date, required: true },
    Time: { type: String, required: true },
    Comments: { type: String },

    bookingid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",

    }
   
});

module.exports = mongoose.model('Booking', bookSchema);
