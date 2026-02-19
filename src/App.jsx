import Comp1 from "./Comp1";
import { useState } from "react";
import { createContext } from "react";
const MyContext=createContext(); 
const App=()=>{
  const[user,setuser]=useState("Anuj");
  return(
    <>
    <h1>Welcome :{user}</h1>
    <MyContext.Provider value={user}>
    <Comp1 />
    </MyContext.Provider>
    </>
  )
}
export default App;
export {MyContext};