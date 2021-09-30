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
    console.log(MyCar);
    return (
        <div>
                <div>
                    <h1>{MyCar.brand}</h1>
                     {/* <h3>{MyCar.category.name}</h3> */}
                    <img src= {MyCar.img} alt= "image not found" width="600px" height="400px"/>
                    <h2>Features</h2>
                    {/* <h3>Price: {MyCar.features.price}</h3>
                    <h3>Stock: {MyCar.features.stock}</h3>
                    <h3>traction: {MyCar.features.traction}</h3>
                    <h3>Description: {MyCar.description}</h3> */}
                </div>
            <Link to= "/home">
                <button>Back</button>
            </Link>
        </div>
    )
}