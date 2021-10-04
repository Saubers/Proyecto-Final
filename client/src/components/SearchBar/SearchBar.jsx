import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { getByName } from "../actions";
import styleSearch from '../SearchBar/SearchBar.module.css';
import {getCarDetail, getNameCars} from '../../actions/index'
import { getBrandCars } from "../../actions/index";

export default function SearchBar(){
const dispatch = useDispatch()
const [name,setName] = useState("")
const [brand, setBrand] = useState("")

function handleInputChange(e){
    e.preventDefault();
    setBrand(e.target.value)
    setName(e.target.value)
    
 
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCars(name))
    dispatch(getBrandCars(brand))
    setBrand("")
    setName("") 
     
}


return(
    <div className={styleSearch.containerSearch}>
        <form onSubmit={e => handleSubmit(e)} className={styleSearch.styleform}>
            <div className={styleSearch.divprin}>
                <div className={styleSearch.divsecu}>
                    <h2 className={styleSearch.h2}>Search for your ideal car</h2>
                </div>
                <div>
                    <input className={styleSearch.inputbusqueda}
                    type ="text"
                    placeholder ='Busqueda por nombre'
                    onChange ={e=> handleInputChange(e)}
                    value={name} 
                    />
                    <button className={styleSearch.btn} type = 'submit'>Search</button>
                </div>
                
            </div>
            
        </form>
    </div>
)
}