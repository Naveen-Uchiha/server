const express= require('express');  
const dotenv=require('dotenv')

//load env files
//config()method help to path for env
dotenv.config({path:'./config/config.env'})

const app=express();
const PORT=process.env.PORT || 6969

app.listen(PORT,console.log(`Server is running at Port Number ${PORT}`))