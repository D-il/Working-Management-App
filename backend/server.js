const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

app.use(cors()); 
app.use(bodyparser.json());

const PORT = 2000;
app.listen(PORT,()=>{console.log(`App is running on port : ${PORT}`)});


mongoose.connect("mongodb+srv://Dhananji:workappDil@workapp.ptrvxpc.mongodb.net/WorkApp")
    .then(() => {
        console.log("MongoDB Connection is Successful!")
    })
    .catch((err) => {
        console.log("MongoDB Connection is Unsuccessful!",err)
    })