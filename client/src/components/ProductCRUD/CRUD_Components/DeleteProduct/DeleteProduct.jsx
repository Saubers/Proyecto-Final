import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteCar, getCars } from '../../../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../NavBar/NavBar";
import styles from "./DeleteProduct.module.css"

export default function DeleteProduct() {

    const dispatch = useDispatch();

    const [id, setID] = useState("")

    const cars = useSelector(state => state.allCars)

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    function handleSelect(e) {
        setID(e.target.value)
    }

    function handleSubmit(e) {
        console.log(id)
        e.preventDefault(e);
        dispatch(DeleteCar(id))
        alert("Publicacion eliminada")
        setID("")
    };

    const selectedCar = cars?.find((el) => el._id === id);

    return (
        <div>
            <NavBar />
            <h1>Selecciona el auto a eliminar</h1>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <select className={styles.selectCategory} required onChange={(e) => handleSelect(e)}>
                    <option disabled selected>Autos</option>
                        {cars?.map((el) => (
                            <option value={el._id}>{el.name}</option>
                        ))}
                    </select>
                    {selectedCar && (
                        <div className={styles.General}>
                            <h3><b>Nombre: </b>{selectedCar.name}</h3>
                            <h4><b>ID: </b>{selectedCar._id}</h4>
                            <p><b>Descripcion: </b>{selectedCar.description}</p>
                            <p><b>Precio: </b>USD${selectedCar.price} - <b>Stock: </b>{selectedCar.stock}</p>
                        </div>
                    )}
                    <p />
                    <button className={styles.button3} type='submit'>Eliminar</button>
                    <Link to="/ProductCRUD">
                        <button className={styles.button3}>Volver</button>
                    </Link>
                </fieldset>
            </form>
        </div>

    )
}