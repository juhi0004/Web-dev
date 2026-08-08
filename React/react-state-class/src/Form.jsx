import { useState } from "react";

export default function Form(){
    let [fullName,setFullName]=useState("");
    let [username,setUsername]=useState("");
    let handleNameChange=(event)=>{
        //console.log(event.target.value);
        setFullName(event.target.value);
    };

    let handleUsername=(event)=>{
        setUsername(event.target.value);
    };
    return(
        <form>
            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text" value={username} 
            onChange={handleUsername}
            id="username">
            </input>
            <br></br>
            <label htmlFor="fullName">FullName</label>
            <input placeholder="enter full name" type="text" value={fullName} 
            onChange={handleNameChange}
            id="username">
            </input>
            <button>Submit</button>
        </form>
    );
}