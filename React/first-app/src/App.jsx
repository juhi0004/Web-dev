import "./App.css"
import Title from "./Title.jsx"

function Description(){
  return <h1>I am a description component</h1>;
}
function App() {
  
  return (
    <div>
      <h1>this is my div component</h1>
      <Title/>
      <p>2*2 ={2*2}</p>
      <Description/>
    </div>
  );
    
}

export default App
