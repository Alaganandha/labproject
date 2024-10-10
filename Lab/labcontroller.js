const Labdetail=require('./labmodel')
const addlab=(req,res)=>{
    let labone=new Labdetail({
        LabName:req.body.LabName,
        Email:req.body.Email,
        RegistrationNumber:req.body.RegistrationNumber,
        City:req.body.City,
        District:req.body.District,
        Pincode:req.body.Pincode,
        Contact:req.body.Contact,
        Password:req.body.Password
    })
    labone.save()
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




//view approve req
const viewalllab=((req,res)=>{
    Labdetail.find({isActive:false})
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


// view approved details

const viewapproved=((req,res)=>{
    Labdetail.find({isActive:true})
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

// delete btn
const deletelab=(req,res)=>{
    Labdetail.findByIdAndDelete({_id:req.params.id})
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

// approve btn
const approvelab=(req,res)=>{
    Labdetail.findByIdAndUpdate({_id:req.params.id},{isActive:true})
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


//booknow





//login
const lablogin = (req, res) => {
    const { Email, Password } = req.body;
console.log(req.body);

    Labdetail.findOne({ Email: Email })
        .then((data) => {
            console.log("dar",data);
            
            if (!data) {
                return res.json({
                    status: 400,
                    msg: "User not found"
                });
            }

            if (!data.isActive) {
                return res.json({
                    status: 403,
                    msg: "Lab is not approved yet"
                });
            }



            if (Password === data.Password) {
                console.log("Login successfully");
                
                return res.json({
                    status: 200,
                    msg: "Login successfully",

                    lab:data
    
                    // data: {
                    //     _id: data._id,
                    // }
                });

            } else {
                return res.json({
                    status: 500,
                    msg: "Incorrect password",

                });

            }
        })
        .catch((err) => {
            console.log(err);
            
            return res.json({
                status: 400,
                msg: "User not found"
            });
        });
};

module.exports={addlab,approvelab,viewalllab,viewapproved,deletelab,lablogin}