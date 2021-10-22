import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { getByName } from "../actions";
import styleSearch from '../SearchBar/SearchBar.module.css';
import { getNameCars } from '../../actions/index'
/* import { getBrandCars } from "../../actions/index"; */
import busqueda from '../image/buscar.jpg';

export default function SearchBar(){
const dispatch = useDispatch()
const [name,setName] = useState("")
/* const [brand, setBrand] = useState("") */

function handleInputChange(e){
    e.preventDefault();
    /* setBrand(e.target.value) */
    setName(e.target.value)
    
 
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCars(name))
/*     dispatch(getBrandCars(brand))
    setBrand("") */
    setName("") 
     
}


return(
    <div>
        <form onSubmit={e => handleSubmit(e)} className={styleSearch.styleform}>
            
                <div className={styleSearch.divinput}>
                    <button className={styleSearch.btnbuscar}><img src={busqueda} alt="buscar" width="50px"/></button>
                    <input className={styleSearch.inputbusqueda}
                    type ="text"
                    placeholder =' Buscar'
                    onChange ={e=> handleInputChange(e)}
                    value={name} 
                    />
                </div>
    
            
        </form>
    </div>
)
}