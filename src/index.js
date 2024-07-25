//require('dotenv').config()
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})

import connectDB from "./db/index.js";
import { app } from "./app.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running at http://localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("error",err);
})
