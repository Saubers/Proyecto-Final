import React from "react";
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import Paginado from '../Paginado/Paginado'
import ProductCard from '../ProductCard/ProductCard'
import NavBar from '../NavBar/NavBar'
// import {filtradoMotor} from '../actions';
// import Card from './Card';
// import Paginado from "./Paginado";

export default function Catalogo(){
 const dispatch = useDispatch()
 const AllProducts = useSelector((state) => state.allCars)
 const [order , setOrder] = useState("")

//PIGINADO
const [ page, setPage ] = useState(1);//La pagina actual arranca en 1
const [productsXpage] = useState(4)//productos por pagina
const [order, setOrder] = useState("")
const EndProduct = page * productsXpage;
const StartProduct = EndProduct - productsXpage;
const ProductViewsXPage = AllProducts.slice(StartProduct, EndProduct);

const paginado = (NumberPage) => {
    setPage(NumberPage);
}

function handleFitroEngine(evento){
    dispatch(/*filtradoMotor* actions de filtradomotor */(evento.target.value))
}
function hadleFiltroKm(evento){
    dispatch (/*filtradoKm actions de filtrado km*/(evento.target.value))
}
function handleFilterPrice(evento){
    evento.preventDefault();
    dispatch(/*filtradoPrecio actions de filtrado Precio*/(evento.target.value))
    setPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
} 
function handleFilterTraction(evento){
    dispatch (/*filtradoTraccion actions de filtrado Traccion*/(evento.target.value))
    setPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
}
function handleFilterTransmission(evento){
    dispatch (/*filtradoTransmision actions de filtrado Transmision*/(evento.target.value))
    setPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
}
function handleFilterAge(evento){
    dispatch (/*filtradoAño actions de filtrado Año*/(evento.target.value))
    setPage(1);
    setOrder(`Ordenado ${evento.target.value}`)
}
return (
<div className ='container'>
    <NavBar/>
    {/* BOTON VOLVER */}
    <Link to = '/home'><button className = 'home'>Volver</button></Link>
    {/* SEARCHBAR */}
    <SearchBar/>
    {/* SELECT DE MOTOR*/}
    <select onChange = {ev => handleFitroEngine(ev)} >
        <option value ='All'>All</option>
        <option value ='1.6'>1.6</option>
        <option value ='1.8T'>1.8T</option>
        <option value ='2.0'>2.0</option>
        <option value ='2.0T'>2.0T</option>
        <option value ='2.5'>2.5</option>
        <option value ='3.0'>3.0</option>
    </select>
    {/* SELECT DE KM*/}
    <select onChange = {ev => hadleFiltroKm(ev)} >
        <option value ='All'>All</option>
        <option value ='0'>0Km</option>
        <option value ='0-10'>0km - 10km</option>
        <option value ='10-40'>10km - 40km</option>
        <option value ='40-80'>40km - 80km</option>
        <option value ='80-110'>80km - 110</option>
        <option value ='110-150'>110km - 150km</option>
        <option value ='+150'>+150km</option>
    </select>
    {/* SELECT DE PRECIO*/}
    <select onChange = {ev => handleFilterPrice(ev)} >
        <option value ='All'>None</option>
        <option value ='max'>$$++</option>
        <option value ='min'>$$--</option>
    </select>
    {/* SELECT DE TRACCION */}
    <select onChange = {ev => handleFilterTraction(ev)} >
        <option value ='All'>All</option>
        <option value ='FWD'>FWD</option>
        <option value ='RWD'>RWD</option>
        <option value ='AWD'>AWD</option>
    </select>
    {/* SELECT DE TRANSMISION */}
    <select onChange = {ev => handleFilterTransmission(ev)} >
        <option value ='All'>All</option>
        <option value ='Manual'>Manual</option>
        <option value ='Automatic'>Automatic</option>
    </select>
    {/* SELECT DE AÑO */}
    <select onChange = {ev => handleFilterAge(ev)} >
        <option value ='All'>All</option>
        <option value ='-2000'>-2000</option>
        <option value ='2000-2005'>2000-2005</option>
        <option value ='2006-2010'>2006-2010</option>
        <option value ='2011-2015'>2011-2015</option>
        <option value ='2016-2020'>2016-2020</option>
        <option value ='+2021'>+2021</option>
    </select>
    <div>
        <Paginado
            AllProducts={AllProducts.length}
            paginado={paginado}//const paginado linea °n 21
            productsXpage={productsXpage}
        />
    </div>

    <div>
        {
            ProductViewsXPage && ProductViewsXPage.map(el => {
                return(
                    <div>
                        <ProductCard
                            name={el.name}
                            img={el.img}
                            marca={el.marca}
                        />
                    </div>
                )
            })
        }
    </div>
    
</div>
)
  //  {/* SELECT DE CATEGORIAS */} // FALTA LA BD DE CATEGORIAS

/* MOSTRAMOS CARDS y link para que muestre los detalles de cada auto
    <Link to= {'/home/' + el.id}>
    <Card marca={el.marca} name ={el.name} imagen={el.img} description={el.description}
    features={el.features} categories={el.categories}  />
</Link> */
    }