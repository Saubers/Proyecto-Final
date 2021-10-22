import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postProduct, getCategories } from '../../../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import styleCrudPost from './CreateProduct.module.css';
import NavBar from "../../../NavBar/NavBar";


function validate(input) {
    var valoresAceptados = /^[0-9]+$/;
    let errors = {};
    if (!input.model.match(valoresAceptados)) {
        errors.model = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.price.match(valoresAceptados)) {
        errors.price = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.features_doors.match(valoresAceptados)) {
        errors.model = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.features_engine_torque.match(valoresAceptados)) {
        errors.model = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.features_engine_torque.match(valoresAceptados)) {
        errors.features_engine_torque = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.features_mileage.match(valoresAceptados)) {
        errors.features_mileage = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else if (!input.stock.match(valoresAceptados)) {
        errors.stock = '*SOLO SE PUEDEN AGREGAR NUMEROS*'
    }
    else {
        errors.ok = true;
    }
    return errors
}


export default function CreateProduct() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.allcategories)

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const [errors, setErrors] = useState({})
    const [imageMessage, setImageMessage] = useState(null)
    const [image, setImage] = useState("")





    const [input, setInput] = useState({
        brand: "",
        name: "",
        model: "",
        img: "",
        category: "",
        description: "",
        features_doors: "",
        features_engine_name: "",
        features_engine_cv: "",
        features_engine_torque: "",
        features_engine_combustion: "",
        features_transmission_manual: "",
        features_transmission_automatic: "",
        features_traction: "",
        features_mileage: "",
        price: "",
        stock: "",
    });


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(postProduct(input))
        alert("¡PRODUCTO AÑADIDO!")
        /* setInput({
            brand: "",
            name: "",
            model: "",
            category: "",
            description: "",
            features_doors: "",
            features_engine_name: "",
            features_engine_cv: "",
            features_engine_torque: "",
            features_engine_combustion: "",
            features_transmission_manual: "",
            features_transmission_automatic: "",
            features_traction: "",
            features_mileage: "",
            price: "",
            stock: ""
        }) */
    };

    function handleSelect(e) {
        setInput({
            ...input,
            category: e.target.value
        })
    }

    /* const postDetails = (images) => {
        if (
            images === undefined
        ) {
            return setImageMessage("Select an image...")
        }
        setImageMessage(null);

        if (images.type === 'image/jpeg' || images.type === 'image/png' || images.type === 'image/jpg') {
            const data = new FormData();
            data.append('file', images)
            data.append('upload_preset', 'carshop')
            data.append('cloud_name', 'proyect-cloud')
            fetch("https://api.cloudinary.com/v1_1/proyect-cloud/image/upload", {
                method: "POST",
                body: data,
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                setImage(data.url.toString())
            }).catch((err) => {
                console.log(err)
            })
        } else {
            return setImageMessage("Select an image...")
        }
    } */


    return (
        <div>
            <NavBar />
            <h1>Agrega un nuevo auto</h1>
            <div className={styleCrudPost.General}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset >

                        <label className={styleCrudPost.label}>Marca: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                type="text"
                                value={input.brand}
                                name="brand"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                                required
                                placeholder="Marca"
                            />
                        </div>

                        <label className={styleCrudPost.label}>Nombre: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                placeholder='Titulo Publicacion/Nombre del auto'
                                className={styleCrudPost.inputActivity}
                                required
                            />
                        </div>

                        <label className={styleCrudPost.label}>Modelo: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                type="number"
                                value={input.model}
                                name="model"
                                onChange={(e) => handleChange(e)}
                                placeholder="Modelo"
                                required
                                className={styleCrudPost.inputActivity}
                            />
                            {errors.model && (
                                <p className="errors">{errors.model}</p>
                            )}
                        </div>

                        <label className={styleCrudPost.label}>Imagen: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                type="text"
                                name="img"
                                value={input.img}
                                placeholder="Link de imagen"
                                required
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                        </div>

                        <label className={styleCrudPost.label}>Categoria: </label>
                        <div className={styleCrudPost.subDiv}>
                            {/* <h5 className={styleCrudPost.label}>Eliga una categoria</h5> */}
                            <select required className={styleCrudPost.selectCategory} onChange={(e) => handleSelect(e)}>
                                <option disabled selected>Categorias</option>
                                {categories?.map((el) => (
                                    <option value={el._id}>{el.name}</option>
                                ))}
                            </select>
                        </div>

                        <label className={styleCrudPost.label}>Descripcion: </label>
                        <div className={styleCrudPost.subDiv}>
                            <textarea
                                required
                                type="text"
                                cols="80" rows="6"
                                value={input.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                                placeholder="Añada una pequeña descripcion del auto/Add a small description about the car"
                                className={styleCrudPost.textarea}
                            />
                        </div>

                        <label className={styleCrudPost.label}>Precio: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="number"
                                value={input.price}
                                name="price"
                                onChange={(e) => handleChange(e)}
                                placeholder='$$$$$$$$'
                                className={styleCrudPost.inputActivity}
                            />
                            {errors.price && (
                                <p className={styleCrudPost.errors}>{errors.price}</p>
                            )}
                        </div>

                    </fieldset>

                    <fieldset>
                        <h2 className={styleCrudPost.subtitle}>Caracteristicas</h2>

                        <label className={styleCrudPost.label}>Puertas: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="number"
                                value={input.features_doors}
                                name="features_doors"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                            {errors.features_doors && (
                                <p className={styleCrudPost.errors}>{errors.features_doors}</p>
                            )}
                        </div>

                        <label className={styleCrudPost.label}>Nombre del motor: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_name}
                                name="features_engine_name"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                        </div>

                        <label className={styleCrudPost.label}>Cv: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_cv}
                                name="features_engine_cv"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                            {errors.features_engine_cv && (
                                <p className={styleCrudPost.errors}>{errors.features_engine_cv}</p>
                            )}
                        </div>

                        <label className={styleCrudPost.label}>Torque: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_torque}
                                name="features_engine_torque"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                            {errors.features_torque && (
                                <p className={styleCrudPost.errors}>{input.features_engine_torque}</p>
                            )}
                        </div>

                        <label className={styleCrudPost.label}>Combustion: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_combustion}
                                name="features_engine_combustion"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudPost.inputActivity}
                            />
                        </div>

                        <div className={styleCrudPost.subDiv}>
                            <h2 className={styleCrudPost.subtitle}>Transmision</h2>
                            <label className={styleCrudPost.label}>Manual: </label>
                            <input
                                required
                                type="number"
                                value={input.features_transmission_manual}
                                name="features_transmission_manual"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro velocidades'
                                className={styleCrudPost.inputActivity}
                            />
                        </div>

                        <div className={styleCrudPost.subDiv}>
                            <label className={styleCrudPost.label}>Automatica: </label>
                            <input
                                required
                                type="number"
                                value={input.features_transmission_automatic}
                                name="features_transmission_automatic"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro velocidades'
                                className={styleCrudPost.inputActivity}
                            />
                        </div>

                        <label className={styleCrudPost.label}>Traccion: </label>
                        <div className={styleCrudPost.subDiv}>
                            <select
                                required
                                name="features_traction"
                                onChange={(e) => handleChange(e)}
                                placeholder='Tipo de traccion'
                                className={styleCrudPost.inputActivity}
                            >
                                <option defaultValue='AWD'> traccion </option>
                                <option value='AWD'> AWD</option>
                                <option value='RWD'> RWD</option>
                                <option value='FWD'> FWD</option>
                            </select>
                        </div>

                        <label className={styleCrudPost.label}>Kilometraje: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_mileage}
                                name="features_mileage"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro de Km totales'
                                className={styleCrudPost.inputActivity} />
                            {errors.features_mileage && (
                                <p className={styleCrudPost.errors}>{errors.features_mileage}</p>
                            )}
                        </div>

                        <label className={styleCrudPost.label}>Stock: </label>
                        <div className={styleCrudPost.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.stock}
                                name="stock"
                                onChange={(e) => handleChange(e)}
                                placeholder='Disponibles'
                                className={styleCrudPost.inputActivity} />
                            {errors.stock && (
                                <p className={styleCrudPost.errors}>{errors.stock}</p>
                            )}
                        </div>

                    </fieldset>
                    {
                        errors && (
                            <button className={styleCrudPost.button3} type='submit'>Agregar</button>
                        )
                    }
                    <Link to="/ProductCRUD">
                        <button className={styleCrudPost.button3}>Volver</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}