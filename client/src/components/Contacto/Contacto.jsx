import React from "react";
import NavBar from '../NavBar/NavBar'
import styleContact from '../Contacto/Contacto.module.css'

export default function Contact(){

return(
<div className = {styleContact.container}>
    <NavBar/>
    <h1>Contact us in:</h1>
    <div className= {styleHome.div2}>
    <h2>{iniciarMap()}</h2>
    </div>
</div>

)
}