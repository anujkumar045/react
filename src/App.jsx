import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Decrement, Increment } from "./counterslice";

const App=()=>{
  const myval=useSelector(state=>state.mycounter.count);
  const dispatch =useDispatch();
  return(
    <>
    <h1>Welcome</h1>
    <button onClick={()=>{dispatch(Increment)}}>Increment</button>
    <h1>myval</h1>
    <button onClick={()=>{dispatch(Decrement)}}>Decrement</button>
    
    </>
  )
}
export default App;
