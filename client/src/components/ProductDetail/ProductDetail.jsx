import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail } from "../../actions/index";
import { useEffect } from "react";

export default function Detail(props){
    const dispatch= useDispatch()

    useEffect(()=> {
        dispatch(getCarDetail(props.match.params.id));
    },[dispatch, props.match.params.id])

    const MyCar= useSelector ((state)=> state.carDetail)
    /* const carCategories = useSelector((state) => state.categories) */
    console.log(MyCar);
    return (
        <div>
                <div>
                    <h1>{MyCar.brand} {MyCar.name}</h1>
                    {/* <h3>{carCategories.name}</h3> */}
                    <img src= {MyCar.img} alt= "not found" width="600px" height="400px"/>
                    <h3>Information</h3>
                    <h6>Mileage: {MyCar.features?.mileage}</h6>
                     <h6>Price: {MyCar.price}</h6>
                    <h6>traction: {MyCar.features?.traction}</h6>
                    <h6>Description: {MyCar.description}</h6>
                </div>
            <Link to= "/home/catalogo">
                <button>Back</button>
            </Link>
        </div>
    )
}