const express=require("express");
const app=express();

app.use((req,res,next)=>{
    // let {query}=req.query;
    // console.log(query);
    console.log("hi iam a middleware");
    //res.send("middleware finished");
    next();
    console.log("this is after next");
});

app.use((req,res,next)=>{
    // let {query}=req.query;
    // console.log(query);
    console.log("hi iam 2nd middleware");
    //res.send("middleware finished");
    next();
});

app.get("/random",(req,res)=>{
    res.send("hi, ia m root.");
});


//middle
app.get("/",(req,res)=>{
    res.send();
})

app.listen(8080,()=>{
    console.log("server is started");
});