let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let deleteBtn= document.createElement("button");
    deleteBtn.innerText="delete";
    deleteBtn.classList.add("delete");
    item.appendChild(deleteBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();

    }else{
        console.log("dont delete");
    }
});

// let deleteBtns=document.querySelectorAll(".delete");
// for(deleteBtn of deleteBtns ){
//     deleteBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }