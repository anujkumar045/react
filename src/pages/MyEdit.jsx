import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const MyEdit=()=>{
    const [mydata,setMydata] =useState({});
    const {id}=useParams();
    const loadData=async()=>{
        let api=`http://localhost:3000/data/${id}`;
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
    console.log(mydata);
}
const handleSubmit=async()=>{
    let api=`http://localhost:3000/data/${id}`;
    const response= await axios.put(api,mydata);
    alert("Updated successfully!!!")
}
return(
    <>
     Enter name:<input type="text" name="name" value={mydata.name} onChange={handleInput}/>
        <br/>
        Enter rollno:<input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
        <br/>
        Enter city:<input type="text" name="city" value={mydata.city} onChange={handleInput}/>
        <br/>
        Enter age:<input type="text" name="age" value={mydata.age} onChange={handleInput}/>       
        <br/>
        <button onClick={handleSubmit}>Save!!</button>
    </>
)
}
export default MyEdit;