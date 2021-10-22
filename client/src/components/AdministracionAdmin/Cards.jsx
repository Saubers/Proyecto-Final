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
        if(input.id && input.newState){
        e.preventDefault()
        dispatch(putAdmin(input))
        window.location.reload()
    }else{
    alert('Vuelve a tocar el boton para confirmar')
}
}
    function handleUser(e , id) {
        console.log(id);
        setInput({
            ...input,
            id:id,
            newState:"user"
        })
        if(input.id && input.newState){
            e.preventDefault()
            dispatch(putAdmin(input))
            window.location.reload()
        }else{
        alert('Vuelve a tocar el boton para confirmar')
    }
    } 
    console.log(AllUsers);
    return(
         <div className={StyleUser.PROBANDO}>
             {
                 AllUsers?.map(el =>
                    <div className = {StyleUser.Card}>
                        <p>Nombre: {el.fullname}</p>
                        <p>Id: {el._id}</p>
                        <p>Estado: {el.state}</p>
                        {el.state === "user"?
                        <button className={StyleUser.btnAdmin} onClick ={(e)=> handleAdmin(e, el._id)}>Cambiar estado a Admin</button>
                        :
                        <button className={StyleUser.btnAdmin} onClick ={(e)=> handleUser(e, el._id)}>Cambiar estado a User</button>
                        }
                    </div>
                )
             }
         </div>
    )
}
