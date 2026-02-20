import { UserContext } from "./MyContext";
import { useContext } from "react";

const Cybrom=()=>{
    const {name,setName}=useContext(UserContext);
    return(
        <>
        <h1>Welcome to Cybrom :{name}</h1>
        <button onClick={()=>{setName("Akash")}}>Click here</button>
        </>
    )
}
export default Cybrom;