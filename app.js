const express = require("express")
const app = express()
const port = 8080
const path= require("path")
require("./db/connect")

const publicPath = path.join(__dirname, "public")

app.set("view engine" , "ejs")
app.use(express.static("public", ))

app.get("/",(req,res)=>{
   res.render("index")


})

app.get("/short" , (req,res)=>{

})


app.listen(port , ()=>{
    console.log("listening to the port " + port)
})

