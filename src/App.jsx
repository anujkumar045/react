import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { UserLogin } from "./LoginContext";
const App=()=>{
  const {user}=useContext(UserLogin);
  return(
    <>
    <h1>Welcome to my App</h1>

    {user.auth ? <AuthApp/>:<UnAuthApp/>}
    </>
  )
}
export default App;