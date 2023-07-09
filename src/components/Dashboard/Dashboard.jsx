import React from 'react'
import './Dashboard.css'
function Dashboard() {
  return (
<div className="dashboard">
    {/* **********start the parant div************/}
<div className="parent">

    {/* **********start the div1************/}
<div className="div1">
    <div className="card1">
<img className="logo" src ="https://res.cloudinary.com/dt7t7wjql/image/upload/v1688807217/kxf6sgh9fbs1hcfbklte.png" alt=''/>
<button className="button">
Add new service
<div className="hoverEffect">
<div>
</div>
</div>
</button> 
      </div> 
</div>
    {/* **********end the div1************/}
    {/* **********start the div2************/}

<div className="div2">
<div className="body1">
<div className="InputContainer">
  <input placeholder="Search.." className="input" type="text"/>
</div>

</div>
     </div>
    {/* **********end the div2************/}
      {/*************the star of the div3 ***************** */}
<div className="div3">

     </div>
      {/*************the end of the div3 ***************** */}
</div>
{/* the end of div paeant*/}
</div>



  )
}

export default Dashboard