// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// require("dotenv").config({path: './env'});//first way 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' }); // second way

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port:- ${PORT}`);
    })
})
.catch((err)=>{
    console.error("MongoDB connection error: ", err);
    process.exit(1); // exit application in case of error
})






/*
First Approach

import express from "express"; 
const app = express();  
(async()=>{  //by iffi
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.error("MongoDB connection error: ", error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error;
    }
})()

*/