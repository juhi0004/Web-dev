let newElement=document.createElement('p');
newElement.innerText="hey, Im red!";
document.querySelector('body').append(newElement);
newElement.classList.add('red');


let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I am in a div";
para2.innerText="me too!!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);