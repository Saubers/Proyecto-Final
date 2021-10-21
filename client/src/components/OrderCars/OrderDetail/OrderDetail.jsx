import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import {getOrderByID} from "../../../actions/index";
import {Link} from "react-router-dom";


export default function OrderDetail(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrderByID(props.match.params.id))
    },[dispatch],props.match.params.id)
    const OrderDetail = useSelector((state) => state.orderDetail)
    console.log('OrderDetail',OrderDetail)

    return(
    <div>
        {
            OrderDetail && OrderDetail?.map(el=>{
                    return(
                        <div>
                            <h3>Informacion de usuario</h3>
                            <div>Nombre: {el.user?.fullname} Mail: {el.user?.mail} Tel: {el.user?.phone}</div>
                            <h3>Informacion de la publicacion: </h3>
                            <div>{el.publication?.map(el1=>
                            <div>
                                <p>Marca: {el1.brand} Nombre : {el1.name} Modelo : {el1.model} Precio unico:  {el1.price}</p>
                                <Link to={'/home/Catalogo/' + el1._id}>
                            <button>Detalle</button>
                                </Link>
                            </div>
                            )}  
                            <h3>Cantidad Total: {el.cantidad}</h3>
                            </div>
                            <div>
                                <h2>Estado de la orden: {el.state}</h2>
                                <h2>Precio total: {el.price}</h2>
                            </div>
                            <p> {el.date}</p>
                            <p>Order: {el._id}</p>
                            <Link to={'/home/ADMIN/orders'}>
                            <button>Volver</button>
                                </Link>
                        </div>
                    ) }      
            )
        }
        </div>
    )
}
