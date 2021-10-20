import {getOrderByID} from "../../../actions/index";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";

export default function OrderEdit(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOrderByID(props.match.params.id))
    },[dispatch],props.match.params.id)
    const OrderDetail = useSelector((state) => state.orderDetail)

    const [input, setInput] = useState({
        user: "",
        publication: "",
        price : "",
        state : ""
    })

    
    console.log(OrderDetail);
    return(
        <div>
             {
             OrderDetail && OrderDetail?.map(el=>{
                    return(
                        <div>
                            <h3>User Info</h3>
                            <div> Name: {el.user.fullname} Mail: {el.user.mail} Tel: {el.user.phone}</div>
                            <h3>Publication Info: </h3>
                            </div>
                        )})}
             <h3>Estado:</h3>
             <input type="text" value={input.state} name="state" placeholder="Estado" required />
            </div>
    )}
             
                
            