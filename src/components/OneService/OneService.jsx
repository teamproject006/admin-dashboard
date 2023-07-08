import React from 'react'
import './OneService.css'
import axios from 'axios';
function OneService({el,deleteOne}) {
    const getOne = (id) => {
        axios.get(`http://localhost:3004/api/services/${id}`)
        .then(() =>console.log(id))
        .catch((err) => console.log(err));
    };
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
                <button className="chip" onClick={()=>deleteOne(el.id)}>Delete</button>
                <button className="chip" onClick={()=>getOne(el.id)}>Update</button>
            </div>
        </div>
    </li>
        
    </ul> 
    </div>
  )
}

export default OneService
