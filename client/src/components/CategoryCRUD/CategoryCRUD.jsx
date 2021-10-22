import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styleCRUD from './CategoryCRUD.module.css'

export default function CategoryCRUD() {
    return (
        <div>
           
                <NavBar />
            
            <h1 className={styleCRUD.title}>Administracion de categorias</h1>
            <hr />
            <div className={styleCRUD.divto}>
                <ul className={styleCRUD.ultamaño}>
                    <li className={styleCRUD.li1}>
                        <Link to="/CategoryCRUD/CrearCategoria"><h1>CREAR</h1></Link>
                    </li>
                    <li className={styleCRUD.li2}>
                        <Link to="/CategoryCRUD/CategoryRead"><h1>LEER</h1></Link>
                    </li>
                    <li className={styleCRUD.li3}>
                        <Link to="/CategoryCRUD/CategoryUpdate"><h1>ACTUALIZAR</h1></Link>
                    </li>
                    <li className={styleCRUD.li4}>
                        <Link to="/CategoryCRUD/CategoryDelete"><h1>BORRAR</h1></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}