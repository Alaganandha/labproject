const express=require("express")
const app=express()
const bodyparser=require ("body-parser")
app.use(bodyparser.json())
const cors=require('cors')
app.use(cors())

const Router=require("./router")
app.use("/",Router)
app.use(express.static(`${__dirname}/uploads`));
app.use(bodyparser.urlencoded({ extended: true }))

const db=require('./database')

app.listen(4001, function(){
    console.log("server started")
})