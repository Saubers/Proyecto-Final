import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { getByName } from "../actions";
import styleSearch from '../SearchBar/SearchBar.module.css';
import {getNameCars} from '../../actions/index'

export default function SearchBar(){
const dispatch = useDispatch()
const [name,setName] = useState("")

function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value)
 
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCars(name))
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