import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
import {useLocalStorage} from '../../useStorage/useLocalStorage';
import {Link} from "react-router-dom";
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){
    // const idCar = useSelector((state)=> state.idCar)
    // const carrito = useSelector ((state)=> state.cart)
    // console.log("ACA",idCar);


    const [idAuto, setIdAuto] = useLocalStorage('auto')
    const [cantidad,setCantidad] = useState(0)
    console.log(idAuto)

    function handleClickSumar(){
        let sumar = cantidad + 1
        setCantidad(sumar)
    }

    function handleSelect(e) {
        setCantidad(
          e.target.value
        )
    }
    let unitario = 0;
    let priceTotal = 0;
    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h3>PRODUCTOS</h3>
            {/* {carrito.map(el => 
                <h3>{el}</h3>
                )} */}
                {idAuto && idAuto.map(el => {
                return(
                    <div key={el.id}>
                        <h1>{el?.brand},{el?.name}</h1>
                        <h2>{el?.price * cantidad}</h2>
                         {<img src={el.img} alt='Erorr' width="200x" height="200px"></img>}
                        <h4>{priceTotal = priceTotal +( el?.price * cantidad )}</h4>
                        <select onChange={(e)=>handleSelect(e)}> 
                        Cantidad
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        </select>
                        {/* <button onClick={()=> handleDelete(el)}>Boorar</button>
                        <div>
                        <button onClick={()=>handleClickSumar()}>+1</button>
                        <p>{cantidad}</p>
                        <button onClick={()=>handleClickRestar()}>-1</button>
                        </div> */}
                    </div>
                )
                })}


            <Link to= "/home">
                <button>Back</button>
            </Link>
            </div>
            )
}
