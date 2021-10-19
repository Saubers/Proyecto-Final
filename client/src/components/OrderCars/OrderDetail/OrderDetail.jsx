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
            OrderDetail && OrderDetail.map(el=>{
                    return(
                        <div>
                            <h3>User Info</h3>
                            <div> Name: {el.user.fullname} Mail: {el.user.mail} Tel: {el.user.phone}</div>
                            <h3>Publication Info: </h3>
                            <div>{el.publication.map(el1=>
                            <div>
                                <p>Marca : {el1.brand} Nombre : {el1.name} Modelo : {el1.model} Unit price  : {el1.price}</p>
                                <Link to={'/home/Catalogo/' + el1._id}>
                            <button>Detalle</button>
                                </Link>
                            </div>
                            )}  
                            <h3>Total quantity: {el.cantidad}</h3>
                            </div>
                            <div>
                                <h2> Order Status :{el.state}</h2>
                                <h2>Total Price : {el.price}</h2>
                            </div>
                            <p> {el.date}</p>
                            <p>Order : {el._id}</p>
                        </div>
                    ) }      
            )
        }
        </div>
    )
}
