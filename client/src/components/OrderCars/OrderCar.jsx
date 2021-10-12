import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import {getOrder, getOrderByUsuario,DeleteCartId } from "../../actions";
import {Link} from "react-router-dom";
import style from '../OrderCars/OrderCar.module.css'
import NavBar from '../NavBar/NavBar'

export default function OrderCar(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrder())
    },[dispatch])
    const OrderUser = useSelector((state) => state.orders)
    console.log(OrderUser)

    function handleDelete(el) {
        dispatch(DeleteCartId(el._id))
        //window.location.reload()
        //alert('Orden eliminada con exito')
    }
    return(
        <div className={style.body}>
            <NavBar/>
            <div>Todas las ordenes</div>
            {OrderUser && OrderUser.map(el=>{
                return(
                <div key={el._id} className={style.ticket}>
                    <table>
                    <tr>
                    <th>{el.cantidad + ''}</th >
                    <th className={style.total}>{el.price}</th>
                    <th>{el.state}</th>
                    </tr>
                    </table>
                    {/* <button onClick={()=>handleDelete(el)}>Eliminar ticket</button> */}
                </div>
            )})

            }

        </div>
    )
}