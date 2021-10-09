import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";

export default function UpdateProduct() {
    return (
        <div>
            <NavBar />
            <h1>Update car information</h1>
            <form>
                <fieldset>
                    <legend>Information update</legend>

                </fieldset>
                <Link to="/home">
                    <Button>Back</Button>
                </Link>
            </form>
        </div>
    )
}