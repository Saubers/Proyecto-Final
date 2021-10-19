import React, { useState } from "react"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions";



export default function UserDelete(){
const [id, setID] = useState(null)
const dispatch = useDispatch()  


    const handleSubmit = async (e) => {
        e.preventDefault(e);
        dispatch(deleteUser)
        
       
    }
    return (
        <div>
           
            <Button onClick={(e) => handleSubmit(e)} variant="danger">Delete user</Button>
            
        </div>
    )
}