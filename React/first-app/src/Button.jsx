function printHello(){
    console.log("hello world!!!");
}

function printBye(){
    console.log("bye");
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!!</button>
            <p onClick={printBye}>this para is for evet demo</p>
        </div>
    );
}