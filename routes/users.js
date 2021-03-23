var express = require('express');
var router = express.Router();
const user = require('../models/userSchema')
const userController = require('../controllers/userController')
/* GET users listing. */
router.post('/adduser',userController.adduser)


module.exports = router;
