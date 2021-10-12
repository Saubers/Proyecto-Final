import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import {getOrder, getOrderByUsuario   } from "../../actions";
import {Link} from "react-router-dom";

export default function OrderCar(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrder())
    },[dispatch])
    const OrderUser = useSelector((state) => state.orders)
    console.log(OrderUser)
    return(
        <div>
            <div>Todas las ordenes</div>
            {OrderUser && OrderUser.map(el=>{
                <div>
                    <h1></h1>
                </div>
            })

            }

        </div>
    )
}