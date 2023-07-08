import React from 'react'
import './OneService.css'
function OneService({el}) {
  return (
    <div>
        <ul>
    <li className="card">
     
            <img className="img" src={el.logo} />

        <div className="card-body">
           
                <div href="utilidata-national-governors-association-meeting">
                    <span className="pre-heading">{el.category}</span>
                    <div className="title">
                        <h3> this is the description about the company :{el.description}</h3>
                    </div>
                    <p className="meta">
                        <span className="author">Utilidata</span>
                        <span> | </span>
                    </p>
                </div>
    
            <div className="chips">
                <button className="chip">Delete</button>
                <button className="chip">Update</button>
            </div>
        </div>
    </li>
        
    </ul> 
    </div>
  )
}

export default OneService
