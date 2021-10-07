import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector,  } from "react-redux";
import CartProduct from '../Cart/CartProduct/CartProduct'
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
import {useLocalStorage} from '../../useStorage/useLocalStorage'
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){
    const dispatch = useDispatch()
    console.log("aca",props.match.params);
    const idCar = useSelector((state)=> state.idCar)
    const carrito = useSelector ((state)=> state.cart)
    console.log("ACA",idCar);


    const [idAuto, setIdAuto] = useLocalStorage('idItem',{})

    console.log(idAuto)

    const [input , setInput] = useState({
        publication: "",
        price:"",
        state:""
    })
    console.log(carrito);


    function handleClick (e){
        e.preventDefault(e);
        dispatch(postCart(input))
    }

    function  handleDelete(el) {
       setIdAuto([ idAuto.filter(auto => auto !== el)])
    }


    let priceTotal = 0;
    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h1>Compras</h1>
                {idAuto && idAuto.map(el => {
                return(
                    <div>
                        <CartProduct name={el.name} price={el.price} img={el.img} brand={el.brand}/>
                        {/* <h1>{el?.brand},{el?.name}</h1>
                        <h2>{el?.price}</h2> */}
                         {/*<img src={el.img[0]} alt='Erorr' width="200x" height="200px"></img>*/}
                        {/* <h4>{priceTotal = priceTotal + el?.price}</h4> */}
                        <button onClick={()=> handleDelete(el)}>Boorar</button>

                    </div>
                )
                })}


            <Link to= "/home">
                <button>Back</button>
            </Link>
        </div>
    )
}