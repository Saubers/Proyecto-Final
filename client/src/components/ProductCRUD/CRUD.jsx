import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styleCRUD from './CRUD.module.css'

export default function CRUD() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <crud>
                <ul>
                    <li>
                        <Link to='CRUD/CreateProduct'><h1>Create</h1></Link>
                    </li>
                    <li>
                        <Link to='/home/Catalogo'><h1>Read</h1></Link>
                    </li>
                    <li>
                        <Link to='CRUD/UpdateProduct'><h1>Update</h1></Link>
                    </li>
                    <li>
                        <Link to='CRUD/DeleteProduct'><h1>Delete</h1></Link>
                    </li> 
                </ul>
            </crud>
        </div>
    )
}