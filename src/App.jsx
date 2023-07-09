import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";

import axios from "axios";
import UpdateService from "./components/UpdateService/UpdateService.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [data,setData]=useState([])
  const [oneData,setOneData]=useState([])
  const [refresh,setRefresh]=useState(false)
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
  .then((res) =>setOneData([res.data]))
  .catch((err) => console.log(err));
};

  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<AllServices data={data} deleteOne={deleteOne} getOne={getOne} oneData={oneData} setRefresh={setRefresh} refresh={refresh} />} /> 
       <Route path="/add" element={<AddService/>} /> 
      <Route path="/update" element={<UpdateService oneData={oneData}/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
