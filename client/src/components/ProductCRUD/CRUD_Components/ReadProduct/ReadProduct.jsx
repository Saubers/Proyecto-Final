import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { getCars } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../NavBar/NavBar";
import Styles from "./ReadProduct.module.css"

export default function ReadProduct() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [])

    const cars = useSelector(state => state.allCars);

    return (
        <div>
            <NavBar />
            <div>
                <h1>Autos</h1>
                <hr />
                {cars?.map((el) =>
                    <div>
                        <Link to={'/ProductCRUD/ReadProduct/' + el._id}>
                            <h3>{el.name}</h3>
                        </Link>
                        <h5>{el._id}</h5>


                        <hr />
                    </div>
                )}
            </div>
            <Link to="/ProductCRUD">
                <button className={Styles.button3}>Volver</button>
            </Link>
        </div>
    )
}