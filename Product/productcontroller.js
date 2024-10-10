const Productdetail=require('./productmodel')
const addproduct=(req,res)=>{
    let productone=new Productdetail({
        Title:req.body.Title,
        Description:req.body.Description,
        Price: req.body.Price
       
    })
    productone.save()
    .then((result)=>{
    
        res.json({
            data:result,
            msg:"saved",
            status:200
        })
       
    })
    
    .catch((err)=>{
        console.log(err)
    })

}

const viewproduct = ((req, res) => {
    // patientdetail.findById({_id:req.params.id})
    Productdetail.find({})
        .then((result) => {
            res.json({
                msg: "saved",
                data: result
            })
        })
        .catch((err) => {
            console.log("error" + err)
        })
})

module.exports={addproduct, viewproduct}