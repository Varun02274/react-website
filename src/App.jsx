import './App.css';

import {useState} from "react";

function App(){

  const [x,SetX]=useState(0)

  function fib(x){
    if (x<=1){
      return x
    }
    return (fib(x-1)+fib(x-2))
  }

  return (
  <div className="counter">
    <p className="count">{fib(x)}</p>
    <button onClick={() => {SetX(x + 1)}}>                                       
      Click
    </button>
    <button onClick = {()=>SetX(0)}>Reset</button>
  </div>
);
}

export default App;
