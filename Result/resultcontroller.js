const resultdetail=require('./resultmodel')
const addresult=(req,res)=>{
    let resultone=new resultdetail({
        value:req.body.value,
        comments:req.body.comments,
        bookingid:req.params.id
        
    })
    resultone.save()
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


const viewbookingdetailsByUser=((req,res)=>{
    console.log(req.params.id);
    
    resultdetail.find({labid:req.params.id})
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

// const viewResultByUser=((req,res)=>{
//     console.log(req.params.id);
    
//     resultdetail.findOne({bookingid:req.params.id})
//     .then((result)=>{
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

module.exports={addresult,viewbookingdetailsByUser}