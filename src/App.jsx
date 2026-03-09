import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "./todoSlice";
const App=()=>{
  const [txtval,settxtval]=useState("");
  const  task= useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  console.log(task);

  let sno=0;
    const ans=task.map((key)=>{
      sno++;
      return(<>
      <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      </tr>
      
      </>)
    })
  return(
    <>

      <h1> To do App</h1>
      Enter task:<input type="text" value={txtval} onChange={(e)=>{settxtval(e.target.value)}}/>
      <button onClick={()=>{dispatch(addTask({work:txtval}))}}>Add</button>
      <hr/>
      <table border="1">
        <tr>
          <th>S.No.</th>
          <th>Your tasks</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default App;