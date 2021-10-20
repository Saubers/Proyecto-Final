import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";

function CategoryDelete() {

    const dispatch = useDispatch();

    const [id, setID] = useState("");

    const categories = useSelector(state => state.allCategories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    function handleSelect(e) {
        setID({
            id: e.target.value
        })
    };

    function handleSubmit(e) {
        console.log(id)
        e.preventDefault(e);
        dispatch(deleteCategory(id))
        alert("Categoria eliminada")
        setID({
            id: ""
        })
    };

    const selectedCategory= categories?.find(el=> el._id=== id)

    console.log(id)
    console.log(selectedCategory)

    return (
        <div>
            <NavBar />
            <h1>Selecciona la categoria a eliminar</h1>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    {/* <legend>Select car to delete</legend> */}
                    <select required onChange={(e) => handleSelect(e)}>
                        <option disabled selected>Categorias</option>
                        {categories?.map((el) => (
                            <option value={el._id}>{el.name}</option>
                        ))}
                    </select>
                    {id.id && (
                        <h3><id><b>ID: </b></id>{id.id}</h3>

                    )}
                    <div>
                        <button type='submit'>Submit</button>
                        <Link to="/CategoryCRUD">
                            <button >Back</button>
                        </Link>
                    </div>
                </fieldset>
            </form>
        </div>

    )
}
export default CategoryDelete;