import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getCarDetail, postProduct} from '../../actions/index'
import {useDispatch} from "react-redux";

export default function ProductCRUD(){

    const dispatch= useDispatch();

    const [input, setInput]= useState({
        brand:"",
        name:"",
        model:"",
        img:"",
        category:"",
        description:"",
        features_doors :"",
        features_engine_name : "",
        features_engine_cv : "" ,
        features_engine_torque : "",
        features_engine_combustion : "",
        features_transmission_manual : "",
        features_transmission_automatic : "",
        features_traction: "",
        features_mileage: "",
        price:""
    });
    
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        //console.log(input)
    };

    function handleSubmit(e){
        console.log(input)
        e.preventDefault(e);
        dispatch(postProduct(input))
        alert("¡PRODUCT ADDED!")
        setInput({
            brand:"",
            name:"",
            model:"",
            img:"",
            category:"",
            description:"",
            features_doors :"",
            features_engine_name : "",
            features_engine_cv : "" ,
            features_engine_torque : "",
            features_engine_combustion : "",
            features_transmission_manual : "",
            features_transmission_automatic : "",
            features_traction: "",
            features_mileage: "",
            price:""
    })};
        
    useEffect(() => {
        dispatch(getCarDetail());
      }, [dispatch]);

    return(
        <div>

        <h1>Enter New Car information</h1>

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
                <label>Modelo: </label>
                <input
                type="text"
                value= {input.model}
                name= "model"
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
                <label>Category: </label>
                <input
                type="text"
                value= {input.category}
                name= "category"
                onChange= {(e)=> handleChange(e)}
                />
            </div>

            <div>
                <label>Description: </label>
                <input
                type="text"
                value= {input.description}
                name= "description"
                onChange= {(e)=> handleChange(e)}
                />
            </div>
        {/* 
                
                    <div>
                <input
                type="text"
                value= {input.features}
                name= "features"
                onChange= {(e)=> handleChange(e)}
                />
            </div> */} 
            <div>
                <label>Price: </label>
                <input
                type="number"
                value= {input.price}
                name= "price"
                onChange= {(e)=> handleChange(e)}
                />
            </div>

                 <div>
                <h3>Features</h3>
                <label>Puertas:</label>
                <input
                type="text"
                value= {input.features_doors}
                name= "features_doors"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>
                <label>Nombre motor</label>
                <input
                type="text"
                value= {input.features_engine_name}
                name= "features_engine_name"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <label>Cv </label>
                <input
                type="text"
                value= {input.features_engine_cv}
                name= "features_engine_cv"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <label>Torque</label>
                <input
                type="text"
                value= {input.features_engine_torque}
                name= "features_engine_torque"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <label>Combustion</label>
                <input
                type="text"
                value= {input.features_engine_combustion}
                name= "features_engine_combustion"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>
                6
                <label>transmision</label>
                <h4>Manual</h4>
                <input
                type="text"
                value= {input.features_transmission_manual}
                name= "features_transmission_manual"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <h4>Automatica</h4>
                <input
                type="text"
                value= {input.features_transmission_automatic}
                name= "features_transmission_automatic"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <label>Traccion:</label>
                <input
                type="text"
                value= {input.features_traction}
                name= "features_traction"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>

                <label>Millage:</label>
                <input
                type="text"
                value= {input.features_mileage}
                name= "features_mileage"
                onChange= {(e)=> handleChange(e)}
                />
                </div>
                <div>
            
                 <label>Price:</label>
                <input
                type="text"
                value= {input.price}
                name= "price"
                onChange= {(e)=> handleChange(e)}
                />
                </div>


            <button type= "submit">Add Product</button>

                <Link to= "/home">
                    <button>Back</button>
                </Link>

            </form>
        </div>
    )
}