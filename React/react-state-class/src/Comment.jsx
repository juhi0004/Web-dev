import {useState} from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let[comments,setComments]=useState([{
        username:"@sk",
        remarks:"great job",
        rating:4
    }]);
    let addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    };

    return( <>
        <div>
            <h3>All comments</h3>
            <div className="comment">
                <span>{comments[0].remarks}</span>
                &nbsp;
                <span>(rating={comments[0].rating})</span>
                &nbsp;
                <span>-{comments[0].username}</span>
            </div>
        </div>
        <CommentsForm addNewComment={addNewComment}/>
        </>
    )
}