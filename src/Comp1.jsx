import React from "react";
import Comp2 from "./Comp2";


const Comp1=({user})=>{
    <>
    <h2>
       Component 1
    </h2>
    < Comp2 user={user}/>
    </>
}

export default Comp1;