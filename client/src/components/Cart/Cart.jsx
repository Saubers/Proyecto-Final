import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux";

import { useEffect, useState } from "react";
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){
    const dispatch = useDispatch()
    const carrito = useSelector((state)=> state.cart)
    const [input , setInput] = useState({
        publication: "",
        price:"",
        state:""
    })
    console.log(carrito);


    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h3>PRODUCTOS</h3>
            {carrito.map(el => el)}
            <Link to= "/home">
                <button>Back</button>
            </Link>
        </div>
    )
}