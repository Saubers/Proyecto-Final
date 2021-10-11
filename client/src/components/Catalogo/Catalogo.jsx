import React,{useEffect} from "react";
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import Paginado from '../Paginado/Paginado'
import ProductCard from '../ProductCard/ProductCard'
import NavBar from '../NavBar/NavBar'
import styleCatalogo from '../Catalogo/Catalogo.module.css';
import { getCars } from "../../actions/index";
import recargar from '../image/reload.png';
import {filterPrice, filterTraction,filterKm,filterAge ,filterTransmission} from '../../actions/index';

// import Card from './Card';
// import Paginado from "./Paginado";

export default function Catalogo(){
const dispatch = useDispatch()
const AllProducts = useSelector((state) => state.cars)


useEffect(()=>{
    dispatch(getCars())
},[dispatch])

//PAGINADO
const [ page, setPage ] = useState(1);//La pagina actual arranca en 1
const [productsXpage] = useState(6)//productos por pagina
const [order, setOrder] = useState("")
// const [engine , setEngine] = useState("")
const EndProduct = page * productsXpage;
const StartProduct = EndProduct - productsXpage;
const ProductViewsXPage = AllProducts.slice(StartProduct, EndProduct);


/////



const paginado = (NumberPage) => {
    setPage(NumberPage);
}

function handleClick(e){
    e.preventDefault();
    dispatch(getCars())
    setPage(1)
}

function hadleFiltroKm(evento){
    dispatch (filterKm(evento.target.value))
}
function handleFilterPrice(e){
    e.preventDefault();
    dispatch(filterPrice(e.target.value))
    setPage(1);
    setOrder(e.target.value)
} 
function handleFilterTraction(evento){
    dispatch (filterTraction(evento.target.value))
    setPage(1);
    setOrder(order,`Ordenado ${evento.target.value}`)
}
function handleFilterTransmission(evento){
    evento.preventDefault();
    dispatch (filterTransmission(evento.target.value))
    setPage(1);
    setOrder(order,`Ordenado ${evento.target.value}`)
}
function handleFilterAge(evento){
    dispatch (filterAge(evento.target.value))
    setPage(1);
    setOrder(order,`Ordenado ${evento.target.value}`)
}
return (
<div className ='container'>
    <NavBar/>
    <div>
        <img className={styleCatalogo.vantaimg} src="https://www.purcellvilletireandauto.com/images/banner-areas.jpg" alt="foto" />
        <h2 className={styleCatalogo.venta}>Venta de auto</h2>
    </div>
    
        {/* SELECT DE KM*/}
    <div className={styleCatalogo.divtotal}>
        <div className={styleCatalogo.divfiltros}>
        <button className={styleCatalogo.btnreload} onClick={e=>handleClick(e) }><img width="50px" src={recargar}></img> </button>
        <br />
        {/* BOTON VOLVER */}
        <Link to = '/home'><button className = 'home'>Volver</button></Link>
            <div className={styleCatalogo.divfilter}>
                <label>KILOMETRAJE</label>
                <select onChange = {ev => hadleFiltroKm(ev)} className={styleCatalogo.btnfilter}>
                    <option value ='All'>All</option>
                    <option value ='0'>0Km</option>
                    <option value ='0-10'>0km - 10km</option>
                    <option value ='10-40'>10km - 40km</option>
                    <option value ='40-80'>40km - 80km</option>
                    <option value ='80-110'>80km - 110</option>
                    <option value ='110-150'>110km - 150km</option>
                    <option value ='+150'>+150km</option>
                </select>
            </div>
            
            {/* SELECT DE PRECIO*/}
            <div className={styleCatalogo.divfilter}>
                <label>PRECIO</label>
                <select onChange = {e => handleFilterPrice(e)} className={styleCatalogo.btnfilter}>
                    <option value ='max'>$$++</option>
                    <option value ='min'>$$--</option>
                </select>
            </div>
                
            {/* SELECT DE TRACCION */}
            <div className={styleCatalogo.divfilter}>
                <label>TRACCION</label>
                <select onChange = {ev => handleFilterTraction(ev)} className={styleCatalogo.btnfilter}>
                    <option value ='All'>All</option>
                    <option value ='FWD'>FWD</option>
                    <option value ='RWD'>RWD</option>
                    <option value ='AWD'>AWD</option>
                </select>
            </div>
            
            {/* SELECT DE TRANSMISION */}
            <div className={styleCatalogo.divfilter}>
                <label>TRANSMISION</label>
                <select onChange = {ev => handleFilterTransmission(ev)} className={styleCatalogo.btnfilter}>
                    <option value ='All'>All</option>
                    <option value ='manual'>Manual</option>
                    <option value ='automatic'>Automatic</option>
                </select>
            </div>
            
            {/* SELECT DE AÑO */}
            <div className={styleCatalogo.divfilter}>
                <label>AÑO</label>
                <select onChange = {ev => handleFilterAge(ev)} className={styleCatalogo.btnfilter}>
                    <option value ='All'>All</option>
                    <option value ='-2000'>-2000</option>
                    <option value ='2000-2005'>2000-2005</option>
                    <option value ='2006-2010'>2006-2010</option>
                    <option value ='2011-2015'>2011-2015</option>
                    <option value ='2016-2020'>2016-2020</option>
                    <option value ='+2021'>+2021</option>
                </select>
            </div>
        </div>

        <div className={styleCatalogo.containerdiv}>
            <div className={styleCatalogo.divSearch}>
                <SearchBar/>
            </div>
            {
                
                ProductViewsXPage.length === 0 ?
                <h2>No hay autos que cumplan su criterio de busqueda</h2>            
                :  ProductViewsXPage.map(el => {
                    return(
                        
                        <div className={styleCatalogo.containercar}>
                        
                            <ProductCard
                                name={el.name}
                                img={el.img[0]}
                                model={el.model}
                                brand={el.brand}
                                description={el.description}
                                price={el.price}
                                mileage={el.features?.mileage}
                                _id={el._id}
                                />
                        </div>
                    
                    )
                })
                
            }
        </div>
    </div>
    <div >
        <Paginado
            AllProducts={AllProducts.length}
            paginado={paginado}//const paginado linea °n 21
            productsXpage={productsXpage}
        />
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