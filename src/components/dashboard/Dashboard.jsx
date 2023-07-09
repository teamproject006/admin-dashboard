import React from 'react'
import "./dashboard.css"
function Dashboard() {
  return (
<div class="dashboard">
<div class="card1">
<img className="logo" src ="https://res.cloudinary.com/dt7t7wjql/image/upload/v1688807217/kxf6sgh9fbs1hcfbklte.png"/>
<button class="button">
Add new service
<div class="hoverEffect">
<div>
</div>
</div>
</button> 
</div>
<div calassName="body1">
<div class="InputContainer">
  <input placeholder="Search.." class="input" type="text"/>
</div>
<div><button/>
 </div>
 <div class="w3-show-inline-block">
  <div class="w3-bar">
<div class="card2"> </div>
<div class="card2"> </div>
<div class="card2"> </div>
<div class="card2"> </div>
</div>
</div>
<div class="coolinput">
    <label for="input" class="text"> Description: </label>
    <input type="text" placeholder="Write here..." name="input" class="input"/>
</div>
</div>
</div>



  )
}

export default Dashboard