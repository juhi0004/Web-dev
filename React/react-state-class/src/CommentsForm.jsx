import { useState } from "react";

export default function CommentsForm(addNewComment){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }

    let handleSubmit=(event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
    }

    return(
        <div>This is a comment form
            <h4>Give a comment</h4>
            <form OnSubmit={handleSubmit}>
                <label htmlFor="username">Username</label> &nbsp;
                <input placeholder="username"
                 type="text" 
                 value={formData.username} 
                 onChange={handleInputChange}
                 id="username"
                 name="username"/>
                <br></br><br></br>
                <label htmlFor="Remarks">Remarks</label>&nbsp;
                <textarea value={formData.remarks}
                 placeholder="Remarks" 
                 onChange={handleInputChange}
                 name="remarks">
                id="Remarks"
                 </textarea>
                <br></br><br></br>
                <label htmlFor="Rating">Ratings</label>&nbsp;
                <input placeholder="rating" 
                type="number"
                 min={1} max={5}
                 value={formData.rating} 
                 onChange={handleInputChange}
                 id="Rating"
                 name="rating"
                 />
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    );
}