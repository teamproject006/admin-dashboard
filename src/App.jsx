import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";
import './components/Dashboard/Dashboard.css'
import axios from "axios";
import UpdateService from "./components/UpdateService/UpdateService.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Rentals from "./components/Rentals/Rentals.jsx";
import './App.css'
function App() {
  const [data,setData]=useState([])
  const [oneData,setOneData]=useState([])
  const [refresh,setRefresh]=useState(false)
  const [serch,setSerch]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3004/api/services")
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  },[refresh])
  
  const deleteOne = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3004/api/services/${id}`)
    .then(() => setRefresh(!refresh))
    .catch((err) => console.log(err));
};
const getOne = (id) => {
  axios.get(`http://localhost:3004/api/services/${id}`)
  .then((res) =>
  setOneData([res.data]))
  .catch((err) => console.log(err));
};
const filtered = (input) => { 
  const  fil=data.filter((e) => {return e.category===input})
  console.log("hi",fil)
  setData(fil)
 
} 
   
  return (
    <div className="app" >
      <BrowserRouter>
      <div className="dashboard">
    {/* **********start the parant div************/}
<div className="parent">

    {/* **********start the div1************/}
<div className="div1">
    <div className="card1">
<img className="logo" src ="https://res.cloudinary.com/dt7t7wjql/image/upload/v1688807217/kxf6sgh9fbs1hcfbklte.png" alt=""/>
<Link to={"/add"} > <button className="button">
Add new service
<div className="hoverEffect">
<div>
</div>
</div>
</button> </Link>
<Link to={"/"} > <button className="button">
All Services<div className="hoverEffect">
<div>
</div>
</div>
</button> </Link><br />
<Link to={"/rent"} > <button className="button">
Rentels<div className="hoverEffect">
<div>
</div>
</div>
</button> </Link>
      </div> 
</div>
    {/* **********end the div1************/}
    {/* **********start the div2************/}

<div className="div2">
<div className="body1">
<div className="InputContainer">
  <input placeholder="Search.." className="input" type="text" onChange={(e)=>{setSerch(e.target.value)}} value={serch}/>
  <button className="serch" onClick={()=>filtered(serch)}>serch</button>
</div>

</div>
     </div>
    {/* **********end the div2************/}
      {/*************the star of the div3 ***************** */}
<div className="div3">
      <Routes>
      <Route path="/" element={<AllServices data={data} deleteOne={deleteOne} getOne={getOne} oneData={oneData} setRefresh={setRefresh} refresh={refresh} />} /> 
       <Route path="/add" element={<AddService/>} /> 
      <Route path="/update" element={<UpdateService oneData={oneData}/>}/> 
      <Route path="/rent" element={<Rentals />}/> 

      </Routes>

     </div>
      {/*************the end of the div3 ***************** */}
  
</div>
{/* the end of div paeant*/}
</div>

      </BrowserRouter>
    </div>
  );
}

export default App;
