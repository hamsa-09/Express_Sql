import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoute.js';
import {errorHandler} from "./middlewares/errorHandler.js";
dotenv.config();

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json())

app.use("/api/user",userRoutes)

app.use(errorHandler);

sequelize.sync({alter:true})
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server running in the port ${port}`)
    })
})
.catch((err)=>console.log("Db sync err:",err));
