import express from "express";
const app = express();

app.use(express.json());

app.get("/health",(req,res)=> {
    console.log("hello")
    return res.json({Status:"Working"})
})

app.listen(3001,()=> {
    console.log("Server is running http://localhost:3000")
})

