import React from "react";
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
// import {filtradoMotor} from '../actions';
// import Card from './Card';
// import Paginado from "./Paginado";

export default function Catalogo(){
 const dispatch = useDispatch()



 function handleFitroMotor(evento){
    dispatch(/*filtradoMotor* actions de filtradomotor */(evento.target.value))
}
function hadleFiltroKm(evento){
    dispatch (/*filtradoKm actions de filtrado km*/(evento.target.value))
}
return (
<div className ='container'>
    {/* BOTON VOLVER */}
    <Link to = '/home'><button className = 'home'>Volver</button></Link>
    {/* SEARCHBAR */}
    <SearchBar/>
    {/* SELECT DE MOTOR*/}
    <select onChange = {ev => handleFitroMotor(evento)} >
        <option value ='All'>Todos</option>
        <option value ='1.6'>1.6</option>
        <option value='1.8T'>1.8T</option>
        <option value='2.0'>2.0</option>
        <option value='2.0T'>2.0T</option>
        <option value='2.5'>2.5</option>
        <option value='3.0'>3.0</option>
    </select>
    {/* SELECT DE KM*/}
    <select onChange = {ev => handleFitroKm(evento)} >
        <option value ='All'>Todos</option>
        <option value ='0'>0Km</option>
        <option value='10-40'>10km - 40km</option>
        <option value='40-80'>40km - 80km</option>
        <option value='80-110'>80km - 110</option>
        <option value='110-150'>110km - 150km</option>
        <option value='150'>150km+</option>
    </select>
    {/* SELECT DE PRECIO*/}
    <select onChange = {ev => handleFitroPrecio(evento)} >
        <option value ='All'>Todos</option>
        <option value ='0'>0Km</option>
        <option value='10-40'>10km - 40km</option>
        <option value='40-80'>40km - 80km</option>
        <option value='80-110'>80km - 110</option>
        <option value='110-150'>110km - 150km</option>
        <option value='150'>150km+</option>
    </select>
</div>
)
{/* MOSTRAMOS CARDS y link para que muestre los detalles de cada auto
    <Link to= {'/home/' + el.id}>
    <Card marca={el.marca} name ={el.name} imagen={el.img} description={el.description}
    features={el.features} categories={el.categories}  />
</Link> */}
}