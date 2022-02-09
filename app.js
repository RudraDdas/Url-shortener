const express = require("express")
const app = express()
const port = 8080
const path= require("path")
require("./db/connect")
const shortModel = require("./models/shortnerModel")

const publicPath = path.join(__dirname, "public")

app.set("view engine" , "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,res)=>{
    try {
        const allurls =await shortModel.find()
        
           res.render("index",{allurls:allurls})
        
    } catch (error) {
        console.log(error)
    }
})

app.post("/short" , async(req,res)=>{
try {
   const data= await new shortModel({main:req.body.full_url})
   await data.save()
   if(data){
       res.status(200).send({data})

   }
    
} catch (error) {
    console.log(error)
}

})


app.listen(port , ()=>{
    console.log("listening to the port " + port)
})

