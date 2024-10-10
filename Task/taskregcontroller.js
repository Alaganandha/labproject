const Taskdetail=require('./taskregmodel')
const addtask=(req,res)=>{
    let taskone=new Taskdetail({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Gender: req.body.Gender,
        City: req.body.City,
        Contact: req.body.Contact,
        image: req.file,
        Password: req.body.Password
    })
    taskone.save()
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


const tasklogin = (req, res) => {
    const { Email, Password } = req.body;

    Taskdetail.findOne({ Email: Email })
        .then((data) => {
            if (!data) {
                return res.json({
                    status: 400,
                    msg: "User not found"
                });
            }

            // if (!data.isActive) {
            //     return res.json({
            //         status: 403,
            //         msg: "Lab is not approved yet"
            //     });
            // }



            if (Password === data.Password) {
                return res.json({
                    status: 200,
                    msg: "Login successfully",

                  
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
            return res.json({
                status: 400,
                msg: "User not found"
            });
        });
};


module.exports={addtask,tasklogin}