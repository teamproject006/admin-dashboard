import React from "react";
import "./OneService.css";
function OneService({ el }) {
  return (
    <div>
      <ul>
    <li className="card">
        <div  className="featured-image" >
        <img id="imag"  src={el.logo} alt="logo"/>
        </div>
        <div className="card-body">
            <header>
                <div href="utilidata-national-governors-association-meeting">
                    <span className="pre-heading">{el.category}</span>
                    <div >
                        <h3>this is the description{el.description}</h3>
                    </div>
                    <p className="meta">
                        <span className="author">Utilidata</span>
                        <span>|</span>
                        <time className="updated" dateTime="" itemProp="datePublished">July 27, 2017</time>
                    </p>
                </div>
            </header>
            <div className="chips">
                <button className="chip">Show</button>
                <button className="chip">Update</button>
                <button className="chip">Delete</button>
            </div>
        </div>
    </li>
        
    </ul>
    </div>
  );
}

export default OneService;
