const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/TaskRoutes.js");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;

//parses the JSON data and being send in the HTTP request,
// and the teaching assistant as the 'express.json()'
// middleware. The middleware reads the JSON data and creates
// a JavaScript object with all the data combined.
// This JavaScript object is then available in the req.body property,
// which is like the document handed to you by the teaching assistant.
app.use(express.json());


// CORS: Cross Origin Resource Sharing,  when you make a request from a 
// web page to a different domain it is considered as cross origin request
// So it is a mechanism that allow servers to specify when origin are 
// allowed to access its resources
app.use(cors());



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to mongoDB");
}).catch((error)=>{
    console.log("Error Occured");
})

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`);
})