import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateCategory, getCategories } from "../../../actions/index"
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import Styles from "./CategoryUpdate.module.css"

function CategoryUpdate() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const [id, setID] = useState("");

    const categories = useSelector(state => state.allcategories);

    const [input, setInput] = useState({
        name: "",
        description: ""
    });

    function HandleSubmit() {
        dispatch(updateCategory(id, input))
        alert("CATEGORIA ACTUALIZADA")
        setInput({
            name: "",
            description: ""
        })
    };

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const selectedCategory = categories?.find((el) => el._id === id);

    function handleSelectID(e) {
        setID(
            e.target.value
        )
    }

    useEffect(() => {
        setInput({
            name: selectedCategory?.name,
            description: selectedCategory?.description
        });
    },)

    return (
        <div>
            <NavBar />
            <h1>Actualiza una categoria</h1>

            <form onSubmit={(e) => HandleSubmit(e)}>
                <div className={Styles.General}>
                    <div >
                        <p className={Styles.label}>Selecciona la categoria a editar</p>
                        <select className={Styles.selectCategory} required onChange={(e) => handleSelectID(e)}>
                            <option value="" selected disabled hidden>Categorias</option>
                            {categories?.map((el) => (
                                <option key={el._id} value={el._id}>{el.name}</option>
                            ))}
                        </select>
                    </div>

                    <div >
                        <label className={Styles.label}>Nombre:</label>
                        <input
                            className={Styles.inputActivity}
                            name="name"
                            value={input.name}
                            type='text'
                            placeholder="Nombre"
                            onChange={(e) => handleChange(e)}
                            required />
                    </div>

                    <div >
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
                </div>
                <Link to="/CategoryCRUD">
                    <button className={Styles.button3}>Volver</button>
                </Link>
                <button className={Styles.button3} type='submit'>Editar</button>
            </form>
        </div>
    )
}

export default CategoryUpdate;