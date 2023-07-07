import { useEffect, useState } from "react";
import AddService from "./components/AddService/AddService.jsx";
import AllServices from "./components/AllServices/AllServices.jsx";
import damyy from './damyy.js'
import UpdateService from "./components/UpdateService/UpdateService.jsx";
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    setData(damyy)
    console.log(data)
  },[])
  return (
    <div >
      {/* <AddService/> */}
      <AllServices data={data}/>
      <UpdateService/>
    </div>
  );
}

export default App;
