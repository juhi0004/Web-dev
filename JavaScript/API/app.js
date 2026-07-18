let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});

let url="https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log("error: ",err);
//     });

// async function getFacts(){
//     try{
//     let res=await fetch(url);
//     let data= await res.json();
//     console.log(data);
//     }
//     catch(e){
//         console.log("error, ",e);
//     }
//     console.log("bye");
    
// }

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error- ",e);
        return "no fact found";
    }
}