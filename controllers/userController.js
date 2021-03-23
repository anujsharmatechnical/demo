const {UserModel} = require('../models/index')
const Model = require('../models/index')
const user1 = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const {token} = require('morgan')
module.exports = {
    adduser : async(req,res) => {
        try{
       
          var myData = new user1({
            
           firstName:req.body.firstName,
           lastName:req.bodu.lastName

          });
          await myData.save();
          res.cookie("token",token)
          return res.send("user saved")
          }
          catch(e){
          console.log(e);
          return res.send('error occured123')
          }
    }
}