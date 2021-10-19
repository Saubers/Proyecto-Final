import React, { useState } from "react"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions";



export default function UserDelete(){
const [id, setID] = useState(null)
const dispatch = useDispatch()  

const lookID = async (e) =>{
    setID({
        id: e.target.value
    })
}
    const handleSubmit = async (e) => {
        e.preventDefault(e);
        if(lookID){
        console.log(id)
        dispatch(deleteUser(id))
        alert("Usuario eliminado")
        setID({
            id:""
        })
    } else{
        return "cant find the user"
    }
    }
    return (
        <div>
           
            <Button onClick={(e) => handleSubmit(e)} variant="danger">Delete user</Button>
            
        </div>
    )
}