export default function Joker(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke =async()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
    }
    return(
        <div>
            <h3>joke</h3>
            <button onClick={getNewJoke}>Get a joke</button>
        </div>
    )
}