import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postCategory } from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";

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
                <h1 align="center">Enter the new category information</h1>
            </div>
            <form onSubmit={(e) => HandleSubmit(e)}>
                <fieldset align="center">
                    <legend>Categoria</legend>
                    <div>
                        <label>Nombre:</label>
                        <input name="name"
                            value={input.name}
                            placeholder="Nombre"
                            onChange={(e) => handleChange(e)}
                            required />
                    </div>
                    <div>
                        <p>Descripcion</p>
                        <textarea name="description"
                            value={input.description}
                            cols="80" rows="6"
                            placeholder="Descripcion..."
                            onChange={(e) => handleChange(e)}
                            required></textarea>
                    </div>
                </fieldset>
                <Link to="/home">
                    <button>Volver</button>
                </Link>
            </form>
        </div>
    )
}

export default CategoryCreate;