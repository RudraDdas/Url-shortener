const mongoose=require("mongoose")
const shortid=require("shortid")

const shortSChema = new mongoose.Schema({
    main:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:shortid.generate
    }
})

const shortModel = new mongoose.model("url",shortSChema)
module.exports=shortModel