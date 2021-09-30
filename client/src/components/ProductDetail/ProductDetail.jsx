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
            { 
                MyCar.length>0 ?
                <div>
                    <h1>{MyCar.brand} {MyCar.name}</h1>
                    <h3>{MyCar.category}</h3>
                    {/* <img src= {} alt= "image not found" width="600px" height="400px"/> */}
                    <h3>Price: {MyCar.price}</h3>
                    <h3>Stock: {MyCar.stock}</h3>
                    <h3>Features: {MyCar.features}</h3>
                    <p>Description: {MyCar.description}</p>
                </div> 
                        
                        : <div>
                            <h1>Loading...</h1>
                            </div>
            }
            <Link to= "/home">
                <button>Back</button>
            </Link>
        </div>
    )
}