import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteCar, getCars } from '../../../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../NavBar/NavBar";

export default function DeleteProduct() {
    const dispatch = useDispatch();
    const [id, setID] = useState("")
    const cars = useSelector(state => state.allCars)
    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    function handleSelect(e) {
        setID({
            id: e.target.value
        })
    }

    function handleSubmit(e) {
        console.log(id)
        e.preventDefault(e);
        dispatch(DeleteCar(id))
        alert("Publicacion eliminada")
        setID({
            id: ""
        })
    }
    return (
        <div>
            <NavBar />
            <h1>Car delete</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Select car to delete</legend>
                    <select required onChange={(e) => handleSelect(e)}>
                        {cars.map((el) => (
                            <option value={el._id}>{el.name}</option>
                        ))}
                    </select>
                    {id.id && (
                        <p>{id.id}</p>

                    )}
                    <button type='submit'>Submit</button>
                    <Link to="/home">
                        <button >Back</button>
                    </Link>
                </fieldset>
            </form>
        </div>

    )
}