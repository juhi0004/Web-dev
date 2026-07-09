// console.log("hello world");
// console.log("hello bhawana");
// let a=5;
// let b=3;
// console.log("sum is: ",a+b);
// let pencilPrice=10;
// let erasorPrice=5;
// // let output="the total price is: "+ (pencilPrice+erasorPrice)+" Rupees";
// let output=`the total price is : ${a+b} Rupees`;
// console.log(output);

const student={
    name:"aman",
    marks:95,
    prop:67,
    getName:function(){
        console.log(this);
        return this.name; //student
    },
    getMarks: ()=>{
        console.log(this);
        return this.marks; //window
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this) //student
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this) //window
        },2000);
    }
};
