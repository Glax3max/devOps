import express from "express"
import mongoose from "mongoose"

const app = express();

mongoose.connect("mongodb://database:27017/testdb")
        .then(()=> {
            console.log("DB connected")
        })
        .catch((err)=> {
            console.log(err);
        })

app.get("/",(req,res)=> {
    res.send("Docker Compose App Running");
})

app.get("/health",(req,res)=> {
    res.json({status:"ok"})
})

app.listen(3000,"0.0.0.0",()=> {
    console.log("Server is running on http://localhost:3000")
})