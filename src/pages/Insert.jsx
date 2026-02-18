import { useState } from "react";
import axios from "axios";
const Insert=()=>{
const [input,setInput]=useState({});
const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
}
const handleSubmit=async()=>{
    let api= "http://localhost:3000/data" ;
    const response= await axios.post(api,input);
    console.log(input);
    alert("Data saved successfullly !!")
}
    return(
        <>
        <h1>Insert Data</h1>
        Enter name:<input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enter rollno:<input type="text" name="rollno" onChange={handleInput}/>
        <br/>
        Enter city:<input type="text" name="city" onChange={handleInput}/>
        <br/>
        Enter age:<input type="text" name="age" onChange={handleInput}/>       
        <br/>
        <button onClick={handleSubmit}>Save!!</button>
            
        </>
    )
}
export default Insert;
