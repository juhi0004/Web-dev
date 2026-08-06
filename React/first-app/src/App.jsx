// import "./App.css"
import Title from "./Title.jsx";
import Button from "./Button";
import Form from"./Form.jsx";
function Description(){
  return <h1>I am a description component</h1>;
}
function App() {
  
  return (
    <div>
      <h1>this is my div component</h1>
      <Title/>
      <Button />
      <Description/>
      <Form/>
    </div>
  );
    
}

export default App; 
