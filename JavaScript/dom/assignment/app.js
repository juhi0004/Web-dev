let one=document.querySelector("div");
one.addEventListener("mouseout", function(){
    console.log("the mouse is out of div");
});

let inp=document.querySelector("input");
inp=addEventListener("keypress", function(){
    console.log("the key is pressed");
    alert("you are pressing the key");
});

let scr=document.querySelector('p');
scr=addEventListener("Scroll", function(){
    console.log("we are scrolling");
    
});