import React from "react"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteUser } from "../../actions";



export default function UserDelete(){
    const id = localStorage.getItem('userID')
    const history = useHistory();
    const logoutFunct = () => {
        return localStorage.removeItem('userAdmin') + localStorage.removeItem('userInfo') + localStorage.removeItem('userInformacion')+ localStorage.removeItem('userID')
      }

const dispatch = useDispatch()  
const userState = useSelector((state) => state.userState)
const isAdmin = localStorage.getItem('userAdmin')
console.log(userState)
    const handleSubmit = async (e) => {
        e.preventDefault(e);
        dispatch(deleteUser(id))

        if(userState){
            localStorage.removeItem('userAdmin')
            localStorage.setItem('userAdmin', userState.data)
            logoutFunct()
            history.push('/')
            
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