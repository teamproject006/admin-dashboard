import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";

import axios from "axios";
function App() {
  const [data,setData]=useState([])
  const [refresh,setRefresh]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:3004/api/services")
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  },[refresh])
  
  const deleteOne = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3004/api/services/${id}`)
    .then((res) => {console.log(res)})
    .catch((err) => console.log(err));
};


  return (
    <div >
      <AddService/>
      <AllServices data={data} deleteOne={deleteOne} />
    </div>
  );
}

export default App;
