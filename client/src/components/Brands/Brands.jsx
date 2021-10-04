import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getBrandCars } from "../../actions";

export default function Brands(){
    const dispatch = useDispatch()
    const [brand, setBrand] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setBrand(e.target.value)
     
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBrandCars(brand))
        setBrand("") 
    }

    return(
        <div>
            
        </div>
    )
}