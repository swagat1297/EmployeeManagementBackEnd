const config = require('./mongoDbConfig');
const mongoose = require('mongoose'); 
mongoose.connect("mongodb://localhost:27017/employeeDashBoard", {useNewUrlParser: true}).then(() =>{
    console.log("connection established success");
}).catch( (error) =>{
    console.log("failed to connect database",error);
})


