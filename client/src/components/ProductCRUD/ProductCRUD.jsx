import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {postProduct, getCars} from "../actions/index.js";
import {useDispatch, useSelector} from "react-redux";

export default function ProductCRUD(){

    const [input, setInput]= useState({
        brand:"",
        name:"",
        img:"",
        features:{}
    });
    
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })};
        
    return(
        <div>

            <h1>Enter new Car</h1>

            <form onSubmit= {(e)=> handleSubmit(e)}>

                <div>
                    <label>Brand: </label>
                    <input
                    type="text"
                    value= {input.brand}
                    name= "brand"
                    onChange= {(e)=> handleChange(e)}
                    />
                </div>

                <div>
                    <label>Name: </label>
                    <input
                    type="text"
                    value= {input.name}
                    name= "name"
                    onChange= {(e)=> handleChange(e)}
                    />
                </div>

                <div>
                    <label>Image: </label>
                    <input
                    type="text"
                    value= {input.img}
                    name= "img"
                    onChange= {(e)=> handleChange(e)}
                    />
                </div>

                <div>
                    <h3>Features</h3>
                    
                    <h4>Engine</h4>
                    <label>Petrol</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />
                    <label>Diesel</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />

                    <h4>transmission</h4>
                    <label>manual</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />
                    <label>automatic</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />

                    <label>traction</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />
                    <label>milage</label>
                    <input
                    type="text"
                    value= {input.features}
                    name= "features"
                    />
                </div>

            </form>

        </div>
    )
}

"transmission": {
    "manual":"5-6 speed",
     "automatic" : "6-7 speed DSG"
      },
 "traction" : "FWD",
  "milage": 14500
