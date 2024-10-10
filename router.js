const express=require("express")
const Router=express.Router()

const patient=require("./Patientcontroller")
const Labdetail=require("./Lab/labcontroller")
const Testdetail=require("./Test/testcontroller")
const bookdetails=require("./Booking/bookcontroller")
const paymentdetails=require("./Payment/paymentcontroller")
const resultdetail=require("./Result/resultcontroller")
const Taskdetail=require("./Task/taskregcontroller")
const Productdetail=require("./Product/productcontroller")



Router.post('/addpatient',patient.upload,patient.addpatient)
// Router.post('/viewdetails',product.viewbyname)
// Router.post('/viewpatient',patient.upload,patient.addpatient)
Router.post('/viewpatient',patient.viewpatient)
Router.post('/userlogin',patient.userlogin)
Router.post('/approvepatient/:id',patient.approvepatient)
Router.get('/viewUserById/:id',patient.viewUserById)
Router.post('/updateUser/:id',patient.updatepatientprofile)
Router.post('/viewbookingdetailsByUser/:id',patient.viewbookingdetailsByUser)




Router.post('/addlab',Labdetail.addlab)
Router.get('/approvelab/:id',Labdetail.approvelab)
Router.get('/viewalllab',Labdetail.viewalllab)
Router.get('/viewapproveddetail',Labdetail.viewapproved)
Router.post('/deletelab/:id',Labdetail.deletelab)
Router.post('/lablogin',Labdetail.lablogin)




Router.post('/addtest/:id',Testdetail.addtest)
Router.get('/viewtest',Testdetail.viewtestdetails)
Router.get('/viewTestById/:id',Testdetail.viewTestById)
Router.post('/deletetest',Testdetail.deletetest)
Router.get('/approvetest/:id',Testdetail.approvetest)
Router.post('/viewtestdetails',Testdetail.viewtestdetails)
Router.get('/viewapproved',Labdetail.viewapproved)
Router.get('/viewbookingdetails',Testdetail.viewbookingdetails)




Router.post('/addbook/:id',bookdetails.addbook)
Router.post('/viewbookingdetailsByLab/:id',bookdetails.viewbookingdetailsByLab)
Router.post('/viewbookingdetailsByUser/:id',bookdetails.viewbookingdetailsByUser)



Router.post('/addpayment/:id/:bid',paymentdetails.addpayment)



Router.post('/addresult/:id',resultdetail.addresult)
// Router.post('/viewResultByUser/:id',resultdetail.viewResultByUser)







module.exports=Router