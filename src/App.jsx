import { useMemo, useState } from "react";
const App=()=>{
  const [add,setAdd]=useState(0);
  const [minus,setMinus]=useState(100);
  function myCalculation(){
    console.log("*****");
    return add*2;
  }
  const myMultival=useMemo(myCalculation,[add]);
  return(
    <>
    <h1>Welcome</h1>
    <button onClick={()=>{setAdd(add+1)}}>Addition</button>
    <button onClick={()=>{setMinus(minus-1)}}>Substraction</button>
    <h2>My Addition :{add}</h2>
    <h2>My Substraction :{minus}</h2>
    <h1>My Multi : {myMultival}</h1>
    </>
  )
}
export default App;