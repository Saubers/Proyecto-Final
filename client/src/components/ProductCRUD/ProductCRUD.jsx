import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ProductCRUD.module.css"


export default function CRUD() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1 className={styles.title}>Administracion de productos</h1>
            <crud>
                <ul>
                    <li>
                        <Link to='/ProductCRUD/CreateProduct'><h1>CREAR</h1></Link>
                    </li>
                    <li>
                        <Link to='/ProductCRUD/ReadProduct'><h1>LEER</h1></Link>
                    </li>
                    <li>
                        <Link to='/ProductCRUD/UpdateProduct'><h1>ACTUALIZAR</h1></Link>
                    </li>
                    <li>
                        <Link to='/ProductCRUD/DeleteProduct'><h1>BORRAR</h1></Link>
                    </li>
                </ul>
            </crud>
        </div>
    )
}