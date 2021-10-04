import React from "react";
import NavBar from '../NavBar/NavBar'
import styleHome from '../Home/Home.module.css'
import Component from "../Carousel/Carousel";

export default function Home(){

return(
<div className = {styleHome.container}>
    <NavBar/>
    <div className = {styleHome.div2}>
    <h4 className={styleHome.text}>You can find your first 0km with us!</h4>
    <Component />
    </div>
</div>

)
}