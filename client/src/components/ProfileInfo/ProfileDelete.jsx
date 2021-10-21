import React from "react"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions";



export default function UserDelete(){
    const id = localStorage.getItem('userID')
    
const dispatch = useDispatch()  
const userState = useSelector((state) => state.userState)

console.log(userState)
    const handleSubmit = async (e) => {
        e.preventDefault(e);
        dispatch(deleteUser(id))
        if(userState){
            localStorage.setItem('userAdmin', userState.data)
        } else {
            return "No se pudo borrar el usuario..."
        }
       
    }
    return (
        <div>
           
            <Button onClick={(e) => handleSubmit(e)} variant="danger">Borrar Usuario</Button>
            
        </div>
    )
}