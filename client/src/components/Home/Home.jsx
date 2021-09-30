import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import NavBar from '../NavBar/NavBar'
import styleHome from '../Home/Home.module.css'

export default function Home(){

return(
<div className = {styleHome.container}>
    <NavBar/>
    <h1>Buy your first car</h1>
    <div>
        <h5>New 0km models</h5>
        {/*imagenes de autos 0km*/}
        <Link to = '/home/catalogo'><h6>Catalogo</h6></Link>
        <h6>Payment Methods</h6>
        {/*imagenes de visa mastercard y tatata*/}
        <h6>Branch offices</h6>
        {/*imagenes Maps*/}
        <Link to = '/contact'><h6>Contact</h6></Link>
        
    </div>
</div>
)
}