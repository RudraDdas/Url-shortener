require('dotenv').config({path:'./.env'})
const mongoose = require("mongoose")


mongoose.connect(process.env.DB)
.then(()=>{
    console.log("conection successfull to db")
})
.catch((e)=>{
   console.log(`unsuccess full ${e}`)
})