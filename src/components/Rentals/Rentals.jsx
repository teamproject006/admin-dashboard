import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RentService.css'
function Rentals() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/api/rental")
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
  {data.map((e)=>(
        
        <div className="card" key={e.id}>
  <div className="card-header">
    Rental date :{e.rentalDate}
  </div>
       
  <div className="card-body">
    <h4 className="card-title">User name</h4>
    <p className="card-text"style={{marginLeft:"20px"}}>{e.User.username}</p>
    <h4 className="card-title" style={{marginLeft:"200px"}}>Service</h4>
    <p className="card-text"style={{marginLeft:"20px"}}>{e.Service.category}</p>
    <h4 className="card-title" style={{marginLeft:"200px"}}>company Name</h4>
    <p className="card-text"style={{marginLeft:"20px"}}>{e.Service.companyName}</p>
    
  </div>
</div>
      ))}  
        </div>
  )
}

export default Rentals
