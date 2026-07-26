const express=require("express");
const app=express();
//app is an object 
//console.dir(app);

let port=3000; //8080

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// app.use((req,res)=>{
//     console.log(req);
//     console.log("request received");
//     console.log("hello world");
//     res.send("this is a basic response");
//     res.send({
//         name:"apple",
//         color:"red",
//     });
   
// });
 app.use((req,res)=>{
        console.log("request received");
        let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><li>pineapple</li></ul>";
        res.send(code);
        console.log("hello nodemon");
    });