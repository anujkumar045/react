import { useContext } from "react";
import { UserContext } from "./App";
const Bhopal=()=>{
    const user= useContext(UserContext)
    return(
    <h2>Welcome to bhopal :{user}</h2>
    )
}

export default Bhopal;