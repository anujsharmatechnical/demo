const mongoose = require('mongoose')
const db = async () => {
    try{
        const conn = mongoose.connect("mongodb://localhost:27017/node",{useNewUrlParser:true , useUnifiedTopology:true,useCreateIndex: true, });
        console.log("database connected")

    }
    catch(e){
        console.log(e)

    }
}                                             