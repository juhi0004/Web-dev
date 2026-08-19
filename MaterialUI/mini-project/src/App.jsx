import Button from '@mui/material/Button';
//import './App.css'

function App() {
  let handleClick=()=>{
    console.log("button was clicked");
  }
  return(
    <>
    <h1>this is a new project</h1>
    <Button variant="contained" onClick={handleClick}>Hello</Button>

    </>
  );
}

export default App;
