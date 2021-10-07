import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){

    const dispatch = useDispatch()
    console.log("aca",props.match.params);
    const idCar = useSelector((state)=> state.idCar)
    const carrito = useSelector ((state)=> state.cart)
    console.log("ACA",idCar);
    const [input , setInput] = useState({
        idItem:[], // id de cada auto
        price:"",
        state:"",
    })

    useEffect(()=> {
    dispatch(getUserOrder("615ddad7a2f1e29dfd685e19"));
    },[dispatch, "615ddad7a2f1e29dfd685e19"])

    function handleClick (e){
        e.preventDefault(e);
        dispatch(postCart(input))
    }
    
    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h3>PRODUCTOS</h3>
            {/* {carrito.map(el => 
                <h3>{el}</h3>
                )} */}
            <Link to= "/home">
                <button>Back</button>
            </Link>
                <button onClick ={e => handleClick(e)}>Confirmar compra</button>
        </div>
    )
}