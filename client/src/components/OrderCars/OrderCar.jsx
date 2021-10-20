import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import {getOrder, getOrderByUsuario,DeleteCartId, filterStatus } from "../../actions";
import {Link} from "react-router-dom";
import style from '../OrderCars/OrderCar.module.css'
import NavBar from '../NavBar/NavBar'
import OrderDetail from './OrderDetail/OrderDetail.jsx'
export default function OrderCar(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrder())
    },[dispatch])
    const [order, setOrder] = useState("")
    const OrderUser = useSelector((state) => state.orders)
    console.log(OrderUser)

    function handleDelete(el) {
        dispatch(DeleteCartId(el._id))
        window.location.reload()
        alert('Orden eliminada con exito')
    }

    function handleSelect(ev) {
        ev.preventDefault()
        dispatch(filterStatus(ev.target.value))
    }
    return(
        <div className={style.body}>
            <NavBar/>
            <div>Todas las ordenes</div>
            <div>
            <label>Fitrado</label>
                        <select onChange={ev => handleSelect(ev)}>
                        <option value="carrito">En el carrito</option>
                        <option value="proceso">En Proceso</option>
                        <option value="cancelada">Cancelada</option>
                        <option value="completa">Completa</option>
                        </select>
            </div>
            {OrderUser && OrderUser.map(el=>{
                return(
                <div className={style.ticket}>
                    <table>
                    <tr>
                    <th>id odrder : {el._id}</th>
                    <th>{el.cantidad + ''}</th >
                    <th className={style.total}>{el.price}</th>
                    <th>{el.state}</th>
                    <Link to={'/home/ADMIN/orders/' + el._id}>
                        <button>Detalle</button>
                    </Link>
                    <Link to={'/home/ADMIN/orders/edit'}>
                        <button>Modificar</button>
                    </Link>
                    <button onClick={()=>handleDelete(el)}>Eliminar Ticket</button>
                    </tr>
                    </table>
                    {/* <button onClick={()=>handleDelete(el)}>Eliminar ticket</button> */}
                </div>
            )})

            }

        </div>
    )
}