function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}


savetoDb("apna college",
    ()=>{
    console.log("success:your data was saved");
    savetoDb("hello world",
        ()=>{
            console.log("success2:data was saved");
    },
        ()=>{
            console.log("failure2:weak connection");
    }
);
},()=>{
    console.log("failure:weak connection. data not saved");
}
);