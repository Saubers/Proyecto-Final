import React from "react";
import NavBar from '../NavBar/NavBar'
import styleHome from '../Home/Home.module.css'

export default function Home(){

return(
<div className = {styleHome.container}>
    <NavBar/>
    <div className= {styleHome.div2}>
    <h1>Concessionaire</h1>
    <h4>You are looking for a 0km car, we will advise you to tell us your budget $-$</h4>
    
    </div>
</div>

)
}