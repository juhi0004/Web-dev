const express = require("express");
const app=express();
const mongoose= require("mongoose");
const path=require("path");
const Chat=require("./models/chats.js");
const methodOverride= require("method-override");
const ExpressError=require("./ExpressError");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
//to parse data
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   let chat1= new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send your assignments",
//     created_at: new Date(),
// });

//  await chat1.save();
}


app.get("/",(req,res)=>{
    res.send("root is working");
});

app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    //console.log(chats);
    res.render("index.ejs",{chats});
})

//new chat 
app.get("/chats/new",(req,res)=>{
    throw new ExpressError(404,"page not found!!");
    res.render("new.ejs");
})

app.post("/chats", async (req, res) => {
    try {
        let { from, to, msg } = req.body;

        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });

        await newChat.save();

        console.log("Chat was saved");
        res.redirect("/chats");

    } catch (err) {
        console.log(err);
        res.send("Error saving chat");
    }
});

//NEW- Show route
app.get("/chats/:id",async(req,res,next)=>{
    let {id} =req.params;
    let chat = await Chat.findById(id);
    res.render("edit.js",{chat});
    if(!chat){
       next(new ExpressError(404,"chat not found")) ;
    }
    res.render("edit.js",{chat});
});

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat= await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg},
        {runValidators:true,new:true}
    );
    res.redirect("/chats");
});

//delete route
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

//error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="some error occured"}=err;
    res.status(status).send(message);
})
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});