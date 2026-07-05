let todo=[];
let req=prompt("please enter your request ");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("--------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,logo[i]);
        }
        console.log("---------");
    }else if(req=="add"){
       let task= prompt("please enter the task u want to add: ");
       todo.push(task);
       console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("please enter the task index");
        todo.splice(idx,1);
    }else{
        console.log("wrong request");
    }

    req=prompt("enter your task options");
}