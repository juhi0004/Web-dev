import{ useState } from "react";

export default function LudoBoard(){
    let[moves,setMoves]=useState({blue:0, red:0, yellow:0, green:0});
    //let [count,setCount]=useState(0);

    let updateBlue = () =>{
        //moves.blue+=1;
        console.log(moves.blue);
        setMoves({...moves,blue:moves.blue+1});
    };

        return (
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}}>+1</button>
                <p>Green Moves={moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Red Moves={moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    );
}