import { useState } from "react";

const App=()=>{
const [count,setCount] =useState(0);
   const display=()=>{
        if (count==0){
           alert("Value cannot be decremented ")
        }
        else{
          setCount(count-1)
        }
   }
  return(
    <>
      <h1>Counter App</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <h1>{count}</h1>
      <button onClick={display}>Decrement</button>


    </>
  )
}

export default App;   