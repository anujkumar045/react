import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/data";
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.age}</td>               
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
                <th>city</th>
                <th>age</th>
             </tr>
             {ans}
        </table>
        </>
    )
}
export default Display;
