import React from "react";
import Comp3 from "./Comp3";

const Comp2=({user})=>{
    <>
    <h2>
       Component 2
    </h2>
    < Comp3 user={user}/>
    </>
}

export default Comp2;