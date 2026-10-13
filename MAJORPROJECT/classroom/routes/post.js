const express=require("express");
const router=express.Router();

//index posts
router.get("/",(req,res)=>
{
    res.send("GET for posts");
})

//show posts
router.get("/:id",(req,res)=>{
    res.send("get for posts");
});


//post -posts
router.post("/",(req,res)=>{
    res.send("post for posts");
});


//delete posts
router.delete("/:id",(req,res)=>{
    res.send("delete for post id");
});

module.exports=router;