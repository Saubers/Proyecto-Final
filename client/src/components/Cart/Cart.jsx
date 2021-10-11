import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
import {useLocalStorage} from '../../useStorage/useLocalStorage';
import {Link} from "react-router-dom";
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){
    // const idCar = useSelector((state)=> state.idCar)
    //const carrito = useSelector ((state)=> state.cart)
    // console.log("ACA",idCar);

    const [price,setPrice] = useState(0)
    const [idAuto, setIdAuto] = useLocalStorage('auto')
    const [cantidad,setCantidad] = useState(0)
    //console.log(idAuto)

    // function handleClickSumar(id){
    //     // var sumaAuto = idAuto.filter(el => el.id === id)
    //     // const numero = sumaAuto.map(el => el.number + 1)
    //     // setIdAuto([
    //     //     ...idAuto,
    //     //      idAuto.number = numero])
    // }
    // function handleClickRestar(){
    //     let sumar = cantidad - 1
    //     setCantidad(sumar)
    // }
    // function handleDelete(){
    //     window.localStorage.clear();
    // }

    // function handleSelect(e,precio) {
    //     console.log('precio', precio)
    //     setCantidad(
    //       e.target.value
    //     )
    // }


   
    let [amount, setAmount] = useState([])
    const [Isbotton, setIsButton] = useState('')

    let [priceTotal, setpriceTotal] = useState('')
    function sumarCar(idCar){
        const found = amount.find(element => element.id === idCar.id)
        // console.log('found',found)
        // console.log('iDcar',idCar)
        if(found?.id !== idCar.id){
            setAmount([...amount,{
                id: idCar.id,
                brand: idCar.brand,
                name :idCar.name,
                price : idCar.price,
                cantidad : 1
            }])
            setpriceTotal(parseInt(idCar.price) * parseInt(idCar.cantidad))
        }
        else{
             amount.forEach(element =>{
                 if(element.id === idCar.id){
                   element.cantidad =  element.cantidad + 1
                   setpriceTotal(parseInt(element.price) * parseInt(element.cantidad))
                 }
            })
            console.log(amount)
        }
    }





    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h3>PRODUCTOS</h3>
                {idAuto && idAuto?.map(el => {
                 //   console.log('hola', el.number);
                return(
                    <div key={el.id}>
                        <h1>{el?.brand},{el?.name}</h1>
                        <h2>{el?.price} X {el.number} = {el?.price * el.number}</h2>
                         {<img src={el.img[0]} alt='Erorr' width="200x" height="200px"></img>}
                        <h4>{priceTotal = priceTotal +( el?.price * cantidad )}</h4>
                        <select onChange={(e)=>handleSelect(e,el.price)}> 
                        Cantidad
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        </select>
                        <button onClick={()=> handleDelete()}>BORRA TODO</button>
                        <div>
                        <button onClick={()=>handleClickSumar(el.id)}>+1</button>
                        <button onClick={()=>handleClickRestar()}>-1</button>
                        <h3>----------------------</h3>
                        </div>
                    </div>
            )
                })}
                <h3>TICKET</h3>
                <div>
                    <h3>----------------------</h3>
                    {
                        amount && amount.map(item=>{
                            {}
                    return(
                        <tr >
                    <ul>{item.brand} {item.name} {item.price} {item.cantidad}</ul>
                        </tr>
                   )})
                }

                {
                    <div>
                    <h6>----------------------</h6>
                       <h4>{priceTotal}</h4>
                     </div>
                  }
                </div>
            <Link to= "/home/catalogo">
                <button>Back</button>
            </Link>
            </div>
            )
        
}
