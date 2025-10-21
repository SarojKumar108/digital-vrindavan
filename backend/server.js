import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// connect db
connectDB();

// Test route
app.get("/",(req,res)=>{
    res.send("Digital vrindan is on the way");
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});