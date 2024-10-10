const Testdetail=require('./testmodel')
const addtest=(req,res)=>{
    console.log(req.params.id);
    
    let testone=new Testdetail({
        TestName:req.body.TestName,
        Duration:req.body.Duration,
        Price:req.body.Price,
        Minrange:req.body.Minrange,
        Maxrange:req.body.Maxrange,
        Comments:req.body.Comments,
        labid:req.params.id
       
    })
    testone.save()
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


// const viewtestdetails=((req,res)=>{
//     Testdetail.find({})
//         .then((result)=>{
//             res.json({
//                 msg:result,
//                 status:200
//                 })
    
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
            
//     })

//view

const viewtestdetails=((req,res)=>{
    Testdetail.find({})
    .then((result)=>{
        res.json({
            msg:result,
            data:result,
        })
    })


.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})

const viewbookingdetails=((req,res)=>{
    bookmodel.find({labid:req.params.id}).populate('testid').populate('userid')
    .then((result)=>{
        res.json({
            data:result
        })
    })


.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})


const viewTestById=(req,res)=>{
    console.log("id",req.params.id);
    
    Testdetail.findById({_id:req.params.id})
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }

//deletetest

  const deletetest=(req,res)=>{
    Testdetail.findByIdAndDelete({_id:req.params.id})
    .then((result)=>{
        res.json({
            status:200,
            msg:result,
        })
    })
    .catch((error)=>{
        console.log(error);
      
        
    })
}

//approve test

const approvetest=(req,res)=>{
    Testdetail.findByIdAndUpdate({_id:req.params.id},{isActive:true})
    .then((result)=>{
        res.json({
            status:200,
            msg:result,
        })
    })
    .catch((error)=>{
        console.log(error);
      
        
    })
}


//approved details
const viewapproved=((req,res)=>{
    Testdetail.find({isActive:true})
    .then((result)=>{
        res.json({
            msg:result,
            data:result
        })
    })


.catch((err)=>{
    console.log(err);
    console.log("error"+err)
})
})




module.exports={addtest,viewtestdetails,viewTestById,deletetest,approvetest,viewapproved,viewbookingdetails}