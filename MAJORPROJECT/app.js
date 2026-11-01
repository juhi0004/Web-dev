const express=require("express");
const app=express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

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



// const validateListing =(req,res,next)=>{
//     let {error}=listingSchema.validate(req.body);
//     console.log(result);
//     if(error){
//         let errMsg=error.details.map((el)=>
//             el.message).join(",");
//          throw new ExpressError(404,errMsg);
//         }
       
//     else{
//         next();
//     }
// };

// const validateReview =(req,res,next)=>{
//     let {error}=reviewSchema.validate(req.body);
//     console.log(result);
//     if(error){
//         let errMsg=error.details.map((el)=>
//             el.message).join(",");
//          throw new ExpressError(404,errMsg);
//         }
       
//     else{
//         next();
//     }
// };

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUnitialized:false,
    cookie:{ 
        expires:Date.now()+1000*60*24*3, //three days
        maxAge:1000*60*60*24*3,
        httpOnly:true
    },
};
app.get("/",(req,res)=>{
    res.send("I am root");
})
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //login
passport.deserializeUser(User.deserializeUser()); //after logout

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
     res.locals.error=req.flash("error");
    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     });
//     let registeredUser=await User.register(fakeUser,"helloworld"); //helloworld is the password
//     res.send(registeredUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
//create route 
// app.post("/listings",async(req,res)=>{
//     //let {title,description,image,price,country,location}=req.body;
//     //let listing= req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//     //console.log(listing);
//     })



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

