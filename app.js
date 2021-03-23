var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var morgan = require('morgan')
var port = 3000;


app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'))


require('./config/db')       
const userRoute = require('./routes/users')

var useerRoute = require('./routes/users');


app.get("/",(req,res) => {
  res.sendFile(__dirname+ "/index.html")
});

app.use("/user",userRoute)
app.listen(port,()=>{
  console.log("server listening on port" + port);
});

