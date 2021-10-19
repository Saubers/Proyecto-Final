import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styleCRUD from './ProductCRUD.module.css'

export default function CRUD() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <crud>
                <h1>Administracion de autos</h1>
                <ul>
                    <li>
                        <Link to='ProductCRUD/CreateProduct'><h1>Create</h1></Link>
                    </li>
                    <li>
                        <Link to='ProductCRUD/ReadProduct'><h1>Read</h1></Link>
                    </li>
                    <li>
                        <Link to='ProductCRUD/UpdateProduct'><h1>Update</h1></Link>
                    </li>
                    <li>
                        <Link to='ProductCRUD/DeleteProduct'><h1>Delete</h1></Link>
                    </li>
                </ul>
            </crud>
        </div>
    )
}