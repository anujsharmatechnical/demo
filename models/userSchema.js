var mongoose = require('mongoose')
var nameSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    token:{
        type:String
    }
});
module.exports = mongoose.model("user1",nameSchema);