const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const Listing= require("../models/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//index route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
    }));

//new route
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
router.get("/:id", wrapAsync(async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});

}));

router.post("/",validateListing, wrapAsync(async (req, res) => {
    
    
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
router.get("/:id/edit",validateListing,wrapAsync(async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports=router;