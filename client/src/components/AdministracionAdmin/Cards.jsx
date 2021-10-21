import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {putAdmin , getAllUsers} from '../../actions/index'
import StyleUser from './Cards.module.css'
export default function Cards() {
    const dispatch = useDispatch()
    const [input , setInput] = useState({
        id:"",
        newState:""
    })

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])

    const AllUsers = useSelector((state) => state.usersAll)
   
    function handleAdmin(e , id) {
        setInput({
            ...input,
            id:id,
            newState:"admin"
        })
        e.preventDefault()
        dispatch(putAdmin(input))
    }
    function handleUser(e , id) {
        console.log(id);
        setInput({
            ...input,
            id:id,
            newState:"user"
        })
        e.preventDefault()
        dispatch(putAdmin(input))
    } 
    console.log(input);
    return(
         <div className={StyleUser.PROBANDO}>
             {
                 AllUsers?.map(el =>
                    <div className = {StyleUser.Card}>
                        <p>Nombre: {el.fullname}</p>
                        <p>Id: {el._id}</p>
                        <p>Estado: {el.state}</p>
                        {el.state === "admin"?
                        <button className={StyleUser.btnAdmin} onClick ={(e)=> handleUser(e, el._id)}>Cambiar estado a User</button>
                        :
                        <button className={StyleUser.btnAdmin} onClick ={(e)=> handleAdmin(e, el._id)}>Cambiar estado a Admin</button>
                        }
                    </div>
                )
             }
         </div>
    )
}
