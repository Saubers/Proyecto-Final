import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import {getOrder,DeleteCartId, filterStatus, searchId } from "../../actions";
import {Link} from "react-router-dom";
import style from '../OrderCars/OrderCar.module.css'
import NavBar from '../NavBar/NavBar'
import borrar from '../image/eliminar.png'
import detalle from '../image/detalle.png'
import editar from '../image/editar.png'
export default function OrderCar(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrder())
    },[dispatch])
    const [input, setInput] = useState("")
    const OrderUser = useSelector((state) => state.orders)

    function handleDelete(el) {
        dispatch(DeleteCartId(el._id))
        window.location.reload()
        alert('Orden eliminada con exito')
    }

    function handleSelect(ev) {
        ev.preventDefault()
        dispatch(filterStatus(ev.target.value))
    }

    function handleChange(e) {
        setInput({
            ...input,
            input:e.target.value
        })
    }
    function handleClick(e) {
        if (!input) {
            alert('Tenes que ingresar una id existente')
        }
        e.preventDefault()
        dispatch(searchId(input))
        setInput({
            input:""
        })
    }
    function handleGetAll(e) {
        dispatch(getOrder())
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
            
            <input
             type="text"
             value={input.input}
             name="input"
             onChange = {(e) => handleChange(e)}
             placeholder="Id"
            ></input>
            <button onClick = {(e) => handleClick(e)}>Confirma la ID</button>
            <button onClick = {(e) => handleGetAll(e)}>Mostrar todos</button>
            </div>
            
            {OrderUser && OrderUser.map(el=>{
                return(
                <div className={style.ticket}>
                    <table>
                    <tr>
                    <th>Id de orden: {el._id}</th>
                    <th>{el.cantidad + ''}</th >
                    <th className={style.total}>{el.price}</th>
                    <th>{el.state}</th>
                    <div className={style.divbtn}>
                    <Link to={'/home/ADMIN/orders/' + el._id}>
                        <img src={detalle} alt="ima"/>
                    </Link>
                    <Link to={'/home/ADMIN/edit/' + el._id}>
                    <img src={editar} alt="ima"/>
                    </Link>
                    <Link>
                    <img src={borrar} cursor="selected" onClick={()=>handleDelete(el)} alt="ima"></img>
                    </Link>
                    </div>
                    </tr>
                    </table>
                    {/* <button onClick={()=>handleDelete(el)}>Eliminar ticket</button> */}
                </div>
            )})

            }

        </div>
    )
}