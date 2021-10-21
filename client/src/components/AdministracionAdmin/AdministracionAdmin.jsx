import { useDispatch  } from "react-redux";
import {putAdmin} from '../../actions/index'
import { useState } from "react";
import NavBar from '../NavBar/NavBar'

export default function AdministracionAdmin() {
    const dispatch = useDispatch()
    const [input , setInput] = useState({
        id:"",
        newBan:"",
        newState:""
    })

    function handleState(e) {
        console.log(e.target.value);
        setInput({
            ...input,
            newState:e.target.value
        })
    }
    function handleBan(e) {
        console.log(e.target.value);
        setInput({
            ...input,
            newBan:e.target.value
        })
    }
    function handleId(e) {
        setInput({
            ...input,
            id:e.target.value
        })
        console.log(input);
    }
    function handleClick(e) {
        e.preventDefault()
        dispatch(putAdmin(input))
    }
    
    return(
        <div>
            <NavBar/>
            <div>
            <input 
            name="id"
            value={input.id}
            type='text'
            placeholder="Id exacto"
            onChange={(e) => handleId(e)}
            required 
            ></input>
            <select onChange={(e) => handleState(e)}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <select onChange={(e) => handleBan(e)}>
                <option value="true">Banearlo</option>
                <option value="false">DesBanearlo</option>
            </select>
            </div>
            <div>
                <button onClick={(e) => handleClick(e)}></button>
            </div>
        </div>
    )
} 