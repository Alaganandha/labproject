const testmodel = require('../Test/testmodel');
const bookmodel = require('./bookmodel');
const bookdetails = require('./bookmodel');

const addbook = async (req, res) => {
    const { Date, Time, Comments, userid } = req.body;

    try {
        const testData = await testmodel.findById({ _id: req.params.id });
        if (!testData) {
            return res.status(404).json({ msg: "Test not found", status: 404 });
        }
console.log("testData",testData);

        const bookone = new bookdetails({
            testid: req.params.id,
            labid: testData.labid,
            userid,
            Date,
            Time,
            Comments
        });

        const result = await bookone.save();
        return res.json({ data: result, msg: "Saved", status: 200 });
    } catch (err) {
        console.error("Error in booking:", err);
        return res.status(500).json({ msg: "Error saving booking", status: 500 });
    }
};



const viewbookingdetailsByLab=((req,res)=>{
    console.log(req.params.id);
    
    bookdetails.find({labid:req.params.id}).populate('testid').populate('userid')
    .then((result)=>{
        res.json({
            msg:"data obtained",
            data:result,
        })
    })


.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})

const viewbookingdetailsByUser=((req,res)=>{
    console.log(req.params.id);
    
    bookdetails.find({labid:req.params.id}).populate('bookingid').populate('userid')
    .then((result)=>{
        console.log("here");
        
        res.json({
            msg:"data obtained",
            data:result,
        })
    })


.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})
// const viewbookingdetailsByUser2=((req,res)=>{
//     console.log("he",req.params.id);
    
//     bookmodel.find({Comments:'wedwed'})
//     .then((result)=>{
//         console.log("here");
        
//         res.json({
//             msg:"data obtained",
//             data:result,
//         })
//     })


// .catch((err)=>{
//     console.log(err);
//     console.log("error"+err)
// })
// })



module.exports = { addbook,viewbookingdetailsByLab,viewbookingdetailsByUser};
