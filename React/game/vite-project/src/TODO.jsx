import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TODO(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),},]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask= ()=>{
        setTodos((prevTodos)=>{
            return[...prevTodos,{task:newTodo,id:uuidv4()}]
        })
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo=(id)=>{
      
       setTodos(todos.filter((todo)=> todo.id!=id));
    };
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks to do </h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
