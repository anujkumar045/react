import Cybrom from "./cybrom";
const student=[{
    "rollno":20,
    "name":"Anuj",
    "fees":60000
},
{
    "rollno":21,
    "name":"Anupam",
    "fees":60090
},
{
    "rollno":22,
    "name":"Varsha",
    "fees":60500
},
{
    "rollno":23,
    "name":"Neha",
    "fees":64000
},
{
    "rollno":24,
    "name":"Kiron",
    "fees":64000
}

]

const ans=student.map((key)=>{
  return(
    <tr>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.fees}</td>
    </tr>
  )

}
)
const App=()=>{
  return(
  <>
   <table border ="2">
    <tr>
      <th>Roll no</th>
      <th>Name</th>
      <th>Fees</th>
    </tr>
    {ans}
   </table>
   
   </>
  )
}
export default App;
