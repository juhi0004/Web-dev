const express=require("express");
const app=express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js");

app.use(express.urlencoded({ extended: true }));

main().then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("I am root");
})

const validateListing =(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    console.log(result);
    if(error){
        let errMsg=error.details.map((el)=>
            el.message).join(",");
         throw new ExpressError(404,errMsg);
        }
       
    else{
        next();
    }
};

//index route
app.get("/listings",wrapAsync(async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    }));

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id", wrapAsync(async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});

}));

//create route 
// app.post("/listings",async(req,res)=>{
//     //let {title,description,image,price,country,location}=req.body;
//     //let listing= req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//     //console.log(listing);
//     })

app.post("/listings",validateListing, wrapAsync(async (req, res) => {
    
    
    const newListing = new Listing(req.body.listing);
    // if(!newListing.description){
    //     throw new ExpressError(400,"Description is missing");
    // }
    // if(!newListing.title){
    //     throw new ExpressError(400,"Title is missing");
    // }
    // if(!newListing.location){
    //     throw new ExpressError(400,"Location is missing");
    // }
    // if(!newListing.price){
    //     throw new ExpressError(400,"Price is missing");
    // }
    await newListing.save();
    res.redirect("/listings");
       
}));

//edit route
app.get("/listings/:id/edit",validateListing,wrapAsync(async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// app.get("/testlisting",async(req,res)=>{
//     let sampleListing= new Listing({
//         title:"My new villa",
//         description:"By the church",
//         price:1330,
//         location:"Calangute,Goa",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });


app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//delete route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

app.all("/*splat",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});

app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wroong!!"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{message});
})

app.listen(8080,()=>{
    console.log("server is listening");
})