import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {DeleteCar,getCars} from '../../actions/index'
import {useDispatch,useSelector} from "react-redux";

export default function DeletProduct(){
    const dispatch= useDispatch();
    const [id,setID] = useState("")
    const cars = useSelector(state => state.allCars)
    useEffect(()=>{
        dispatch(getCars());
    },[dispatch])

    function handleSelect(e) {
        setID({
            id : e.target.value
        })
    }

    function handleSubmit(e){
        console.log(id)
        e.preventDefault(e);
        dispatch(DeleteCar(id))
        alert("Publicacion eliminada")
        setID({
            id : ""
        })
    }
    return(
        <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <select required  onChange={(e)=>handleSelect(e)}>
                {cars.map((el)=> (
                    <option value={el._id}>{el.name}</option>
                ))}
        </select>
        {id.id && (
            <p>{id.id}</p>
    
    )}
    <button type='submit'>Submit</button>
        <Link to= "/home">
        <button >Back</button>
        </Link>
    </form>
    </div>

)}