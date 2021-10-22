import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postCategory } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import Styles from "./CategoryCreate.module.css"

function CategoryCreate() {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        description: ""
    });

    function HandleSubmit() {
        dispatch(postCategory(input))
        alert("CATEGORIA AÑADIDA")
        setInput({
            name: "",
            description: ""
        })
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <NavBar />
            <div>
                <h1>Agrega una nueva categoria</h1>
            </div>
            <form onSubmit={(e) => HandleSubmit(e)}>
                {/* <legend>Categoria</legend> */}
                <div className={Styles.General}>
                    <h5 className={Styles.label}>Nombre</h5>
                    <input
                        className={Styles.inputActivity}
                        name="name"
                        value={input.name}
                        type='text'
                        placeholder="Nombre"
                        onChange={(e) => handleChange(e)}
                        required />
                    <p className={Styles.label}>Descripcion</p>
                    <textarea
                        className={Styles.inputActivity}
                        name="description"
                        value={input.description}
                        type='text'
                        cols="80" rows="6"
                        placeholder="Descripcion..."
                        onChange={(e) => handleChange(e)}
                        required />
                </div>
                <Link to="/CategoryCRUD">
                    <button className={Styles.button3}>Volver</button>
                </Link>
                <button className={Styles.button3} type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default CategoryCreate;