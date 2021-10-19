import React, { useState } from "react"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../actions";



export default function UserDelete(){
    const id = localStorage.getItem('userID')
 console.log(id)
const dispatch = useDispatch()  


    const handleSubmit = async (e) => {
        e.preventDefault(e);
        dispatch(deleteUser(id))
        
       
    }
    return (
        <div>
           
            <Button onClick={(e) => handleSubmit(e)} variant="danger">Delete user</Button>
            
        </div>
    )
}