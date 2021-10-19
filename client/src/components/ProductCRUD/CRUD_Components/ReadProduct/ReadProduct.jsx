import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCars } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../NavBar/NavBar";

export default function ReadProduct() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    const cars = useSelector(state => state.allCars);

    console.log(cars)

    return (
        <div>
            <NavBar />
            <div>
                <h1>Autos</h1>
                {/* <p>&nbsp;</p> */}
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
                <button>Volver</button>
            </Link>
        </div>
    )
}