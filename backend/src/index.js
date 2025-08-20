import express from "express"
import authRoutes from "./routes/auth.route.js"
import { connectDb } from "./lib/db.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth/',authRoutes);


app.listen(PORT,()=>{
    connectDb();
    console.log("server started...")
})