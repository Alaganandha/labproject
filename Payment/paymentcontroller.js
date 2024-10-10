const paymentdetails = require('./paymentmodel');

const addpayment = (req, res) => {
    let bookone = new paymentdetails({
        testid:req.params.id,
        bookingid:req.params.bid,
        Cardholdername: req.body.Cardholdername,
        CardNumber: req.body.CardNumber,
        CVV: req.body.CVV,
        Month:req.body.Month,
        Year:req.body.Year
    });

    bookone.save()
        .then((result) => {
            res.json({
                data: result,
                msg: "saved",
                status: 200
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                msg: "Error saving data",
                status: 500
            });
        });
};

module.exports = { addpayment };