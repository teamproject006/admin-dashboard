import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";

import axios from "axios";
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
  .then((res) =>setOneData(res.data))
  .catch((err) => console.log(err));
};

  return (
    <div >
      <AddService/>
      <AllServices data={data} deleteOne={deleteOne} getOne={getOne} />
      {console.log(oneData)}
    </div>
  );
}

export default App;
