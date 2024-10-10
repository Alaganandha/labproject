// const { status } = require('init')
const bookmodel = require('./Booking/bookmodel')
const patientdetail = require('./patientmodel')
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage }).single('image')
const addpatient = (req, res) => {
    console.log("file", req.file);

    let userone = new patientdetail({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        BloodGroup: req.body.BloodGroup,
        Gender: req.body.Gender,
        Age: req.body.Age,
        City: req.body.City,
        Contact: req.body.Contact,
        image: req.file,
        Password: req.body.Password

    })
    userone.save()
        .then((result) => {

            res.json({
                data: result,
                msg: "saved",
                status: 200
            })

        })

        .catch((err) => {
            console.log(err)
        })
}
// const addlab=(req,res)=>{
//     let labone=new labdetail({
//         LabName:req.body.LabName,
//         Email:req.body.Email,
//         RegistrationNumber:req.body.RegistrationNumber,
//         City:req.body.City,
//         District:req.body.District,
//         Pincode:req.body.Pincode,
//         Contact:req.body.Contact,
//         Image:req.body.Image,
//         Password:req.body.Password
//     })
//     labone.save()
//     .then((result)=>{

//         res.json({
//             data:result,
//             msg:"saved",
//             status:200
//         })

//     })

//     .catch((err)=>{
//         console.log(err)
//     })
// }
const viewpatientdetails = ((req, res) => {
    patientdetail.find({})
        .then((result) => {
            res.json({
                msg: result,
                status: 200
            })

        })
        .catch((err) => {
            console.log(err)
        })

})
const viewpatient = ((req, res) => {
    // patientdetail.findById({_id:req.params.id})
    patientdetail.find({})
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
const approvepatient = (req, res) => {
    lab.findByIdAndUpdate({ _id: req.params.id }, { isactive })
        .then((result) => {
            res.json({
                status: 200,
                msg: result,
            })
        })
        .catch((error) => {
            console.log(error);
            res.json({
                status: 400,
                msg: "Approved Fail",
            })
        })
}

// const login = ((req, res) => {
//     let Email = req.body.Email
//     let Password = req.body.Password
//     patientdetail.findOne({ Email: Email })
//         .then((result) => {
//             if (Password == result.Password) {
//                 res.json({
//                     status: "200",
//                     msg: "Login Successfully"

//                 })
//             }
//             else {
//                 res.json({
//                     status: "500",
//                     msg: "password error"
//                 })
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//             res.json({
//                 status: "400",
//                 msg: "user not found"

//             })
//         })

// })

//login
const userlogin = (req, res) => {
    const { Email, Password } = req.body;

    patientdetail.findOne({ Email: Email })
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

                    patient:{
                        patientId:data._id,
                        image:data.image,
                        FirstName:data.FirstName,
                        LastName:data.LastName,
                        Email:data.Email,
                        BloodGroup:data.BloodGroup,
                        Gender:data.Gender,
                        Age:data.Age,
                        City:data.City,
                        Contact:data.Contact,
                        Password:data.Password

                    }
    
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

//Edit profile
// const viewUserById = (req, res) => {
//     console.log("id",req.params.id);
    
//     patientdetail
//       .findById({ _id: req.params.id })
//     //   .exec()
//       .then((data) => {
//         // console.log(data);
//         res.json({
//           status: 200,
//           msg: "Data obtained successfully",
//           data: data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json({
//           status: 500,
//           msg: "No Data obtained",
//           Error: err,
//         });
//       });
//      };
const viewUserById = (req, res) => {
    const patientId = req.params.id; 
    console.log("Patient ID:", patientId);
  
    patientdetail.findById(patientId) 
      .then((data) => {
        if (data) { 
          res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: data,
          });
        } else {
          res.status(404).json({
            status: 404,
            msg: "No data found for this ID",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          status: 500,
          msg: "No data obtained",
          Error: err,
        });
      });
  };
  

            const updatepatientprofile = async (req, res) => {
                try {
                    const id=req.params.id
                    
                const patient = req.body;
                // const updatedData = { FirstName, LastName, Email, BloodGroup, Gender, Age, City, Contact, Password };
                // console.log("fn",FirstName);
                
                const updatedPatient = await patientdetail.findByIdAndUpdate(id,patient, { new: true });
                if (!updatedPatient) {
                    return res.status(404).json({ status: 404, msg: "Patient not found" });
                }
                
                res.json({ status: 200, msg: "Client updated successfully", client: updatedPatient });
                } catch (err) {
                console.error(err);
                res.status(500).json({ status: 500, msg: "Server error", error: err.message });
              }
            };


      
   const viewbookingdetailsByUser=((req,res)=>{
    console.log(req.params.id);
    
    bookmodel.find({userid:req.params.id}).populate('testid').populate('userid')
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

    



module.exports = { upload, addpatient, viewpatient, userlogin,approvepatient,viewUserById,updatepatientprofile,viewbookingdetailsByUser}