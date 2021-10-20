import {getOrderByID} from "../../../actions/index";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";

export default function OrderEdit(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrderByID(props.match.params.id))
    },[dispatch],props.match.params.id)

    return(
        <div>
            probando
        </div>
    )
}