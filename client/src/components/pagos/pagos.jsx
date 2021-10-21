import React,{useEffect} from "react";
import NavBar from '../NavBar/NavBar'
import { useSelector ,useDispatch} from "react-redux";
import {getOrderByUsuario} from '../../actions/index'
import StylePagos from '../pagos/pagos.module.css';
import {Link} from 'react-router-dom'



export default function Pagos() {
    const userInformacion = localStorage.getItem("userInformacion");
    const usuario = JSON.parse(userInformacion)
    const ticket =useSelector((state) => state.orders)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrderByUsuario(usuario._id))
    },[dispatch])

    let filter = ticket?.filter(element => element.state !== "Carrito")
    // console.log('filter', filter[0].user)
    let usuarioFiltrado = usuario
    return (<>
        <div>
            <NavBar />
            <div className={StylePagos.divcontainertotal}>
                {filter && filter.map(el => (
                    <div className={StylePagos.divcontainer1}>
                        
                        <div className={StylePagos.divcontainerticket}> 
                            <h5 className={StylePagos.titulousuariio}>Informacion de Usuario</h5>
                            <p>Nombre: {usuarioFiltrado.fullname} </p>
                            <p>Mail: {usuarioFiltrado.mail}</p> 
                            <p>Tel: {usuarioFiltrado.phone}</p>
                            <hr />
                        </div>
                        
                        <div>
                            <h5 className={StylePagos.titulousuariio}>Informacion de compra</h5>
                            <p>Estado de la Orden:{el.state}</p>
                            <p>Precio Total: {el.price}</p>
                        </div>
                        <p> {el.date}</p>
                        <p>ID de Orden: {el._id}</p>
                        <div>{el.publication.map(el1=>
                            <div>
                                <p>Marca : {el1.brand} </p>
                                <p>Nombre : {el1.name} </p>
                                <p>Modelo : {el1.model} </p>
                                <p>Precio Unico: {el1.price}</p>
                                <p>Cantidad Total: {el.cantidad}</p>
                                <Link to={'/home/Catalogo/' + el1._id}>
                            <button className={StylePagos.btndetalle}>Detalle</button>
                                </Link>
                            </div>
                            )}  
                            
                            </div>
                    </div>
                ))}
            </div>
        </div>
        
        </>
    )
}