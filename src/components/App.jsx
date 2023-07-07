import React, { useEffect, useState } from 'react'
import damyy from './damyy'
import AllServices from './AllServices.jsx'
import AddService from './AddService/AddService.jsx'
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    setData(damyy)
  },[])

  return (
    <div>
      <AddService/>
      helow world
      <AllServices data={data}/>
    </div>
  )
}

export default App

