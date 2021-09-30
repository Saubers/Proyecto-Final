import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import NavBar from '../NavBar/NavBar'
import styleHome from '../Home/Home.module.css'

export default function Home(){

return(
<div className = {styleHome.container}>
    <NavBar/>
</div>

)
}