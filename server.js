const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routs");
require("./config/checkConnection");

// router.patch('/:id',(req, res, next) =>{
//     try{
//         const id = req.params.id;
//         const update = req.body;
//     }catch(error){
//         console.log(error.message);
//     }
// })
app.use(function(error, req, res, next){
    let response = {
        success: false,
        message:"Internal server error",
        message:err.message
    };
    res.json(response);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use(cors());
app.use('/', router);
app.listen(process.env.port || 3000, () => {
    console.log("Listening to PORT 3000");
});
