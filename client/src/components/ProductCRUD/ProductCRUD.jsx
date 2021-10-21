import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ProductCRUD.module.css"


export default function CRUD() {
    return (
        <div>
            <NavBar />
            <h1 className={styles.title}>Administracion de productos</h1>
            <div className={styles.divto}>
                <ul className={styles.ultamaño}>
                    <li className={styles.li1}>
                        <Link to='/ProductCRUD/CreateProduct'><h1>CREAR</h1></Link>
                    </li>
                    <li className={styles.li2}>
                        <Link to='/ProductCRUD/ReadProduct'><h1>LEER</h1></Link>
                    </li>
                    <li className={styles.li3}>
                        <Link to='/ProductCRUD/UpdateProduct'><h1>ACTUALIZAR</h1></Link>
                    </li>
                    <li className={styles.li4}>
                        <Link to='/ProductCRUD/DeleteProduct'><h1>BORRAR</h1></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}