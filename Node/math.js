const sum=(a,b)=> a+b;
const mul=(a,b)=> a*b;
const g=9.8;
//exports pii=3.14;
module.exports.sub=(a,b)=> a-b;
//module.exports=123;

let obj={
    sum:sum,
    mul:mul,
    g:g,
    
};

module.exports=obj;

//or 
//  module.exports={
//     sum:sum,
//     mul:mul,
//     g:g,
//     pii:pii,
//  }