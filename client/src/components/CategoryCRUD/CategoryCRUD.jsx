import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styleCRUD from './CategoryCRUD.module.css'

export default function CategoryCRUD() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1 className={styleCRUD.title}>Administracion de categorias</h1>
            <crud>
                <ul>
                    <li>
                        <Link to="/CategoryCRUD/CrearCategoria"><h1>CREAR</h1></Link>
                    </li>
                    <li>
                        <Link to="/CategoryCRUD/CategoryRead"><h1>LEER</h1></Link>
                    </li>
                    <li>
                        <Link to="/CategoryCRUD/CategoryUpdate"><h1>ACTUALIZAR</h1></Link>
                    </li>
                    <li>
                        <Link to="/CategoryCRUD/CategoryDelete"><h1>BORRAR</h1></Link>
                    </li>
                </ul>
            </crud>
        </div>
    )
}