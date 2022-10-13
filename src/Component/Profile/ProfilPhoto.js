import React from "react";
import PropTypes  from "prop-types";
const Pro = (props) =>{
    const handleName =() => {
        alert(`My name is ${props.fullName}`)}
    return(
        <>
         {
            handleName()
         }
         <div>
            <img src={props.children} alt=" pict"/>
         </div>
        <div style={{backgroundColor: "black",width:300,color:"white", textAlign: "right",margintop:"0"}}>
        <div > My fullName is :{props.fullName} </div>
         <p> bio:{props.bio}</p>
        <div>profession:{props.profession}</div>
        </div>
   
    
        </>
    )
}
Pro.defaultProps = {
    fullName: "Adji",
    bio: "Adobe XD",
    profession:"dev",
    
  }

export default Pro;