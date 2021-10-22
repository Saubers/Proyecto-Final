import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail } from "../../../../actions";
import NavBar from "../../../NavBar/NavBar";
import Styles from "./ReadProductDetail.module.css";

export default function ReadProductDetail(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarDetail(props.match.params.id));
    },[dispatch])

    const car = useSelector((state) => state.carDetail)

    console.log(car)

    return (
        <div>
            <NavBar />
            <div>
                <h1>{car?.brand} {car?.name}</h1>
                <h3>Descripcion</h3>
                <p>{car?.description}</p>
                <hr/>
                <h5><b>Category: </b>{car?.category.name}</h5>
                <hr/>
                <h5><b>id: </b>{car?.id}</h5>
                <hr/>
                <h3>CARACTERISTICAS</h3>
                <hr/>
                <h4>Transmision</h4>
                <p><b>Manual: </b>{car?.features.transmission.manual}</p>
                <p><b>Automatica: </b>{car?.features.transmission.automatic}</p>
                <hr/>
                <p><b>Puertas: </b>{car?.features.doors}</p>
                <hr/>
                <h4>Motor</h4>
                <p><b>Nombre: </b>{car?.features.engine[0].name}</p>
                <p><b>Cv: </b>{car?.features.engine[0].cv}</p>
                <p><b>Torque: </b>{car?.features.engine[0].torque}</p>
                <p><b>Combustion: </b>{car?.features.engine[0].combustion}</p>
                <hr/>
                <p><b>Traccion: </b>{car?.features.traction}</p>
                <p><b>Kilometraje: </b>{car?.features.mileage}</p>
                <hr/>
                <h4><b>Precio: </b>${car?.price}</h4>
                <h4><b>Stock: </b>{car?.stock}</h4>

            </div>
            <Link to='/ProductCRUD/ReadProduct'>
                <button className={Styles.button3}>Volver</button>
            </Link>
        </div>
    )
}