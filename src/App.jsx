import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,recDel,taskComp,taskIncomp,editDataSave} from "./todoSlice";
const App=()=>{
  const [txtval,settxtval]=useState("");
  const [btnStatus,setBtnStatus]=useState(true);
  const [taskId,settaskId]=useState("");
  const  task= useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  console.log(task);

  let sno=0;
    const ans=task.map((key)=>{
      sno++;
      return(<>
      <tr>
      <td>{sno}</td>
      <td>{key.complete ?(
        <>
        <span style={{color:'red',textDecoration:'line-through'}}>{key.work}</span>
        </> ):(
          <>
          {key.work}
          </>
        )
      }</td>
      <td>
        <button onClick={()=>dispatch(recDel({id:key.id}))}>Delete</button>
      </td>
      <td>
        <button onClick={()=>dispatch(taskComp({id:key.id}))}>Complete</button>
      </td>
      <td>
        <button onClick={()=>dispatch(taskIncomp({id:key.id}))}>Incomplete</button>
      </td>
      <td>
        <button onClick={()=>{myEdit(key.work,key.id)}}>Edit</button>
      </td>
      
      </tr>
      
      </>)
    })
  return(
    <>

      <h1> To do App</h1>
      Enter task:<input type="text" value={txtval} onChange={(e)=>{settxtval(e.target.value)}}/>
      {btnStatus ? (<>
        <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtval}))}}>Add</button>

      </>):
      (<>
             <button onClick={myEditSave}>Save</button>
      </>)}
      <hr/>
      <table border="1">
        <tr>
          <th>S.No.</th>
          <th>Your tasks</th>
          <th colSpan={3}>Actions</th>
          
        </tr>
        {ans}
      </table>
    </>
  )
}

export default App;