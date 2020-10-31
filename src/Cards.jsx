import React from "react";
import web from "../src/images/01.svg";
import {NavLink} from "react-router-dom";

function Cards(props) {
    console.log(props);
    return( 
        <>
 
        <div className=" cards col-md-4 col-10 mx-auto">
        <div className="card" >
  <img className="card-img-top" src={props.imgsrc} alt="props.imgsrc"/>
  <div className="card-body">
    <h4 className="card-title">{props.title}</h4>
    <p className="card-text">{props.sname}</p>
    <a className="mine" href={props.link} target="_blank"><button2>Watch now</button2></a>
  </div>
</div>

        </div>
    

       
       </>
       );
}

export default Cards;