import logo from './logo.svg';
import React,{useState} from 'react';

function App() {
  
 const [count, setCount] = useState(1);
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count +1) }>Increment</button>
      <button onClick={()=>setCount(count -1) }>Decrement</button>
    </center>
  );
}

export default App;
