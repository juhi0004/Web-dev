function handleFormSubmit(event){
    event.prevenDefault();
    console.log("form was submitted");
}

export default function Form(){
    return (
        <form>
            <input placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}