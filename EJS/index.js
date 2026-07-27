const express=require("express");
const app=express();
const path=require("path");
const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    //res.send("this is home");
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal});
});

app.get("/ig/:username",(req,res)=>{
    const instaData=require("./data.json");
    console.log(instaData);
    // const followers=["adam","steve","bhaaaf"];
    let { username } =req.params;
    const data=instaData[username];
    // console.log(username);
    res.render("instagram.ejs",{data});
});