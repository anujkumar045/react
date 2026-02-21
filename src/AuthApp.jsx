import { useContext } from "react";
import { UserLogin } from "./LoginContext";

const AuthApp=()=>{
    const {user,logout} =useContext(UserLogin);
    return(
        <>
        <h1>Auth App</h1>
        <h2>Welcome {user.name}</h2>
         <button onClick={logout}>Logout</button>
        </>
    )
}

export default AuthApp;