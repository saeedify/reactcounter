import './App.css';
import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);

  const increase = () => {
    setNumber(number+1)
  }

  const decrease = () => {
    setNumber(number-1)
  }

  const reset = () => {
    setNumber(0)
  }

  return (
    <div className="App">
      <button onClick={decrease}>Decrease</button>
      <h1>{number}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}



export default App;
