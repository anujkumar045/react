import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const[mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:3000/data";
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    
    const myDel=async(id)=>{
        let api=`http://localhost:3000/data/${id}`;
        const response= await axios.delete(api);
        alert("Data deleted !!");
        loadData();
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.age}</td>    
                <td>
                    <button onClick={() => navigate(`/myedit/${key.id}`)}>Edit</button>
                </td>
                <td>
                    <button onClick={()=>{myDel(key.id)}}>Delete</button>
                </td>           
            </tr>
            </>
        )
    }
)
        return(
        <>
        <h1>Display Page</h1>
        <hr />
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>City</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
             </tr>
             {ans}
        </table>
        </>
    )
}
export default Update;
