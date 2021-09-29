import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { getByName } from "../actions";
export default function SearchBar(){
const dispatch = useDispatch()
const [name,setName] = useState("")

function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value)
    console.log(name)
}

function handleSubmit(e){
    e.preventDefault()
    
    setName("") 
}

return(
    <div >
        <form onSubmit={e => handleSubmit(e)}>
            <input
            type ="text"
            placeholder ='Busqueda por nombre'
            onChange ={e=> handleInputChange(e)}
            />
            <button type = 'submit'> Buscar</button>
        </form>
    </div>
)
}