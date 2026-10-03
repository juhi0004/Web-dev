const mongoose= require("mongoose");
const Chat=require("./models/chats.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
  let allChats=[
    {
    from:"sarka",
    to:"juhi",
    msg:"get annonate",
    created_at: new Date(),
    },
    {
    from:"ayra",
    to:"igris",
    msg:"unblock me",
    created_at: new Date(),  
    },
    {
    from:"amit",
    to:"jake",
    msg:"this is a good movie",
    created_at: new Date(),  
    },
    {
    from:"yash",
    to:"nehaa",
    msg:"didiiiiiiiiiii",
    created_at: new Date(),  
    },
  ];
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
   Chat.insertMany(allChats);

 //await chat1.save();
}