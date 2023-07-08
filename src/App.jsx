import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";
import damyy from './damyy.js'
import axios from "axios";
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/api/services")
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div >
      <AddService/>
      <AllServices data={data}/>

    </div>
  );
}

export default App;
