import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postCategory } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";

function CategoryCreate() {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        description: ""
    });

    function HandleSubmit(e) {
        e.preventDefault(e);
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
                <fieldset>
                    {/* <legend>Categoria</legend> */}
                    <div>
                        <label>Nombre:</label>
                        <input name="name"
                            value={input.name}
                            type='text'
                            placeholder="Nombre"
                            onChange={(e) => handleChange(e)}
                            required />
                    </div>
                    <div>
                        <p>Descripcion</p>
                        <textarea name="description"
                            value={input.description}
                            type='text'
                            cols="80" rows="6"
                            placeholder="Descripcion..."
                            onChange={(e) => handleChange(e)}
                            required />
                    </div>
                </fieldset>
                <Link to="/CategoryCRUD">
                    <button>Volver</button>
                </Link>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default CategoryCreate;