import React from "react";
import NavBar from '../NavBar/NavBar'
import styleHome from '../Home/Home.module.css'
import Component_Carousel from "../Carousel/Carousel";

export default function Home(){
const arrDemo= ["https://image.freepik.com/vector-gratis/proximamente-fondo-diseno-spot-light_1017-25515.jpg","https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190427-FORD-RANGER-LIMITED-2019-TEST-DRIVE-COLOMBIA-AA.jpg","https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_5094a44b425b4953a52505a7018e410d.jpg"]
return(
<div className = {styleHome.container}>
    <NavBar/>
    <div className = {styleHome.div2}>
    <h4 className={styleHome.text}>You can find your first 0km with us!</h4>
    <Component_Carousel  photos= {arrDemo} />
    </div>
</div>

)
}