const express=require("express");
const app=express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");

app.use(express.urlencoded({ extended: true }));

main().then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}
app.get("/",(req,res)=>{
    res.send("I am root");
})

app.get("/testlisting",async(req,res)=>{
    let sampleListing= new Listing({
        title:"My new villa",
        description:"By the church",
        price:1330,
        location:"Calangute,Goa",
        country:"India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.listen(8080,()=>{
    console.log("server is listening");
})