const express=require("express");
const app=express();
const port=3000;

app.get("/register",(req,res)=>{
    res.send("standard GET response");
});

app.post("/register",(req,res)=>{
    res.send("standard POST response");
});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});