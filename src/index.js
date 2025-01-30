// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// require("dotenv").config({path: './env'});//first way 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: './env' }); // second way

connectDB();






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