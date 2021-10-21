import {getOrderByID} from "../../../actions/index";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import NavBar from '../../NavBar/NavBar'
import {putCart} from '../../../actions/index'

export default function OrderEdit(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrderByID(props.match.params.id))
    },[dispatch],props.match.params.id)
    const OrderDetail = useSelector((state) => state.orderDetail)
    const userInformacion = localStorage.getItem("userInformacion");
    const usuario = JSON.parse(userInformacion)
    const [input, setInput] = useState({
        idUsuario: usuario?._id,
        idOrder:"",
        idItem: [],
        price : "",
        newState : ""
    })
    console.log('OrderDetail',OrderDetail)
    function handleChange(e) {
        setInput({
            ...input,
            idUsuario: usuario?._id,
            idItem:OrderDetail[0].publication.map((e) => e._id),
            idOrder:OrderDetail[0]._id,
            price : OrderDetail[0].price,
            cantidad : OrderDetail[0].cantidad,
            newState: e.target.value
        })
    }
    function handleClick(e) {
        e.preventDefault(e);
        dispatch(putCart(input))
        alert("¡ESTADO CAMBIADO!")
    }
    
    return(
        <div>
            <NavBar />
             {
             OrderDetail && OrderDetail?.map(el=>{
                    return(
                    <div>
                            <h3>Informacion de usuario</h3>
                            <div>Nombre: {el.user.fullname} Mail: {el.user.mail} Tel: {el.user.phone}</div>
                            <h3>Informacion de la publicacion: </h3>
                        <div>
                            <h3>Estado de la orden: {el.state}</h3>
                            <p>Precio total: {el.price}</p>
                        </div>
                        <p> {el.date}</p>
                        <p>Order: {el._id}</p>
                        <p>-------------------</p>
                        <div>{el.publication.map(el1=>
                            <div>
                                <p>Marca: {el1.brand} </p>
                                <p>Nombre: {el1.name} </p>
                                <p>Modelo: {el1.model} </p>
                                <p>Precio unico: {el1.price} </p>
                                <p>-------------------------</p>
                            </div>
                            )}  
                            <h3>Precio total: {el.price}</h3>
                </div>
             <h3>Estado:</h3>
             <select onClick={(e) => handleChange(e)}>
                 <option value="En proceso">En proceso</option>
                 <option value="Completa">Completada</option>
                 <option value="Cancelada">Cancelada</option>
             </select>
             <button onClick={(e) => handleClick(e)}>Cambiar estado</button>
            </div> 
            )})}
            </div>)}