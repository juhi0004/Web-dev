const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

// app.use((req,res,next)=>{
//     // let {query}=req.query;
//     // console.log(query);
//     console.log("hi iam a middleware");
//     //res.send("middleware finished");
//     next();
//     console.log("this is after next");
// });

// app.use((req,res,next)=>{
//     // let {query}=req.query;
//     // console.log(query);
//     console.log("hi iam 2nd middleware");
//     //res.send("middleware finished");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log(req.method);
//     next();
// });

// app.use("/random",(req,res,next)=>{
//     console.log("I am only for random");
//     next();
// });

// app.use("/api",(req,res,next)=>{
//     let {token}= req.query;
//     if(token==="giveaccess"){
//         next();
//     }else{
       
//     }
    
// });

const checkToken =(req,res,next)=>{
    let {token}= req.query;
    if(token==="giveaccess"){
        next();
    }else{
        throw new ExpressError(401,"ACCESS DENIED!");
    }
    
};

app.use((err,req,res,next)=>{
    console.log("----ERROR-----");
    next();
})
app.get("/err",(req,res)=>{
    absc=absc;
})

// app.use((req,res)=>{
//     res.status(404).send("page not found");
// });

app.get("/admin",(res,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden");
})

app.get("/random",(req,res)=>{
    res.send("hi, ia m root.");
});

app.get("/api",checkToken,(req,res)=>{
    res.send("some data");
})

//middle
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(8080,()=>{
    console.log("server is started");
});