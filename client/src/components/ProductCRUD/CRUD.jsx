import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function CRUD() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Link to='CRUD/CreateProduct'><h1>.Create</h1></Link>
            <Link to='/home/Catalogo'><h1>.Read</h1></Link>
            <Link to='CRUD/UpdateProduct'><h1>.Update</h1></Link>
            <Link to='CRUD/DeleteProduct'><h1>.Delete</h1></Link>
            <Link to='/home'>
                <button>Back</button>
            </Link>
        </div>
    )
}