const express = require("express");
const app=express();
const mongoose= require("mongoose");
const path=require("path");
const Chat=require("./models/chats.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  let chat1= new Chat({
    from:"neha",
    to:"priya",
    msg:"send your assignments",
    created_at: new Date(),
});

 await chat1.save();
}


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});