import React from "react";

const Client = (props)=>{
      return <h3>{props.details.nom}  
        <button onClick={()=>props.OnDelete(props.details.id)}>X</button> 
      </h3>;
}

export default Client;