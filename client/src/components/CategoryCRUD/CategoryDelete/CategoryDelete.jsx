import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import Styles from "./CategoryDelete.module.css"

function CategoryDelete() {

    const dispatch = useDispatch();

    const [id, setID] = useState("");

    const categories = useSelector(state => state.allcategories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    function handleSelect(e) {
        setID(
            e.target.value
        )
    };

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(deleteCategory(id))
        alert("Categoria eliminada")
        setID("")
    };

    const selectedCategory = categories?.find((el) => el._id === id);

    return (
        <div>
            <NavBar />
            <h1>Selecciona la categoria a eliminar</h1>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    {/* <legend>Select car to delete</legend> */}
                    <select className={Styles.selectCategory} required onChange={(e) => handleSelect(e)}>
                        <option disabled selected>Categorias</option>
                        {categories?.map((el) => (
                            <option value={el._id}>{el.name}</option>
                        ))}
                    </select>
                    {selectedCategory && (
                        <div className={Styles.General}>
                            <h3><b>Nombre: </b>{selectedCategory.name}</h3>
                            <h4><b>ID: </b>{selectedCategory._id}</h4>
                            <p><b>Descripcion: </b>{selectedCategory.description}</p>
                        </div>
                    )}
                    <p />
                    <button className={Styles.button3} type='submit'>Borrar</button>
                    <Link to="/CategoryCRUD">
                        <button className={Styles.button3}>Volver</button>
                    </Link>
                </fieldset>
            </form>
        </div>

    )
}
export default CategoryDelete;