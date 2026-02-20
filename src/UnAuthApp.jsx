import { useState } from "react"; 
import { useContext } from "react";
import { UserLogin } from "./LoginContext";

const UnAuthApp=()=>{
    const [txtval,setTxtval]=useState("");
    const {login} =useContext(UserLogin);
    return(
        <>
        <h1>Auth App</h1>
        Enter name:<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
        <button onClick={()=>{login(txtval)}}>Login</button>
        </>
    )
}

export default  UnAuthApp;