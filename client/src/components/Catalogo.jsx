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
function handleFiltroPrecio(evento){
    ev.preventDefault();
    dispatch(/*filtradoPrecio actions de filtrado Precio*/(evento.target.value))
    setcurrentPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
} 
function handleFitroTraccion(evento){
    dispatch (/*filtradoTraccion actions de filtrado Traccion*/(evento.target.value))
    setcurrentPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
}
function handleFitroTransmision(evento){
    dispatch (/*filtradoTransmision actions de filtrado Transmision*/(evento.target.value))
    setcurrentPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
}
function handleFitroAño(evento){
    dispatch (/*filtradoAño actions de filtrado Año*/(evento.target.value))
    setcurrentPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
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
    <select onChange = {ev => hadleFiltroKm(evento)} >
        <option value ='All'>Todos</option>
        <option value ='0'>0Km</option>
        <option value='10-40'>10km - 40km</option>
        <option value='40-80'>40km - 80km</option>
        <option value='80-110'>80km - 110</option>
        <option value='110-150'>110km - 150km</option>
        <option value='150'>150km+</option>
    </select>
    {/* SELECT DE PRECIO*/}
    <select onChange = {ev => handleFiltroPrecio(evento)} >
        <option value ='All'>Todos</option>
        <option value ='0-500'>0$ - 500.000$</option>
        <option value='500-13m'>500.000$ - 1.300.000$</option>
        <option value='13m-18m'>1.300.000$ - 1.800.000$</option>
        <option value='18m-23m'>1.800.000$ - 2.300.000$</option>
        <option value='23m-3m'>2.300.000$ - 3.000.000$</option>
        <option value='3m'>3.000.000$+</option>
    </select>
    {/* SELECT DE TRACCION */}
    <select onChange = {ev => handleFitroTraccion(evento)} >
        <option value ='All'>Todos</option>
        <option value ='4x2'>4x2</option>
        <option value='4x4'>4x4</option>
    </select>
    {/* SELECT DE TRANSMISION */}
    <select onChange = {ev => handleFitroTransmision(evento)} >
        <option value ='All'>Todos</option>
        <option value ='Manual'>Manual</option>
        <option value='Automatico'>Automatico</option>
    </select>
    {/* SELECT DE AÑO */}
    <select onChange = {ev => handleFitroAño(evento)} >
        <option value ='All'>Todos</option>
        <option value ='-2000'>-2000</option>
        <option value='2000-2005'>2000-2005</option>
        <option value ='2005-2010'>2005-2010</option>
        <option value ='2010-2015'>2010-2015</option>
        <option value ='2015+'>2015+</option>
    </select>
</div>
)
{/* MOSTRAMOS CARDS y link para que muestre los detalles de cada auto
    <Link to= {'/home/' + el.id}>
    <Card marca={el.marca} name ={el.name} imagen={el.img} description={el.description}
    features={el.features} categories={el.categories}  />
</Link> */}
}