const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema); //class
const Employee = mongoose.model("Employee", userSchema);

User.insertMany([
    {name:"Tony",email:"tony@gmail.com",age: 23},
    {name:"Peter",email:"peter@gmail.com",age: 15},
    {name:"Bruce",email:"bruce@gmail.com",age: 26},
]).then((res)=>{
    console.log(res);
});

// const user1= new User(
//     {
//         name:"Adam",
//         email:"adam@gmail.com",
//         age: 65,
//     }
// );

// //to save the document
// user1.save(); //asynchronous function which returns a promise

// const user2= new User(
//     {
//         name:"Eve",
//         email:"eve@gmail.com",
//         age: 56,
//     }
// );

// //to save the document
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });