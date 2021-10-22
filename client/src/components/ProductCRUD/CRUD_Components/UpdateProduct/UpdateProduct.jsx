import React, { useState, useEffect } from "react";
import { getCars, putProduct, getCategories } from '../../../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import styleCrudUpdate from './UpdateProduct.module.css';
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";


/* function validate(input) {
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
 */

export default function UpdateProduct() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    const categories = useSelector(state => state.allcategories)

    const cars = useSelector(state => state.allCars)

    const [errors, setErrors] = useState({})

    // const [imageMessage, setImageMessage] = useState(null)

    // const [image, setImage] = useState("")

    const [id, setID] = useState("")

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
        stock: ""
    });


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        /* setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        })) */
    };

    function handleSubmit(e) {
        e.preventDefault(e);
        dispatch(putProduct(id, input))
        alert("¡PRODUCTO ACTUALIZADO!")
        /* setInput({
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
            stock: ""
        }) */
    };

    function handleSelect(e) {
        setInput({
            ...input,
            category: e.target.value
        })
    }

    const selectedCar = cars?.find((el) => el._id === id)

    function handleSelectID(e) {
        setID(
            e.target.value
        )

    }

    useEffect(() => {
        setInput({
            brand: selectedCar?.brand,
            name: selectedCar?.name,
            model: selectedCar?.model,
            img: selectedCar?.img[0],
            category: selectedCar?.category.name,
            description: selectedCar?.description,
            features_doors: selectedCar?.features.doors,
            features_engine_name: selectedCar?.features.engine[0].name,
            features_engine_cv: selectedCar?.features.engine[0].cv,
            features_engine_torque: selectedCar?.features.engine[0].torque,
            features_engine_combustion: selectedCar?.features.engine[0].combustion,
            features_transmission_manual: selectedCar?.features.transmission.manual,
            features_transmission_automatic: selectedCar?.features.transmission.automatic,
            features_traction: selectedCar?.features.traction,
            features_mileage: selectedCar?.features.mileage,
            price: selectedCar?.price,
            stock: selectedCar?.stock
        });
    }, [id])

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
            <h1>Actualiza la informacion del auto</h1>
            <div className={styleCrudUpdate.General}>

                <h2 className={styleCrudUpdate.subtitle}>Selecciona un auto</h2>
                <select required
                    className={styleCrudUpdate.selectCategory}
                    onChange={(e) => handleSelectID(e)}>
                    <option disabled selected>Autos</option>
                    {cars?.map((el) => (
                        <option value={el._id}>{el.name}</option>
                    ))}
                </select>

                {/* <h2 className={styleCrudUpdate.subtitle}>Enter new car information</h2> */}

                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset >
                        <label className={styleCrudUpdate.label}>Marca: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                type="text"
                                value={input.brand}
                                name="brand"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                                required
                                placeholder="Marca"
                            />
                        </div>

                        <label className={styleCrudUpdate.label}>Nombre: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                                placeholder='Titulo Publicacion/Nombre del auto'
                                className={styleCrudUpdate.inputActivity}
                                required
                            />
                        </div>
                        <label className={styleCrudUpdate.label}>Modelo: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                type="text"
                                value={input.model}
                                name="model"
                                onChange={(e) => handleChange(e)}
                                placeholder="Modelo"
                                required
                                className={styleCrudUpdate.inputActivity}
                            />
                            {errors.model && (
                                <p className="errors">{errors.model}</p>
                            )}
                        </div>

                        <label className={styleCrudUpdate.label}>Imagen: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                type="text"
                                name="img"
                                value={input.img}
                                placeholder="Link de imagen"
                                required
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />

                        </div>

                        <label className={styleCrudUpdate.label}>Categoria: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            {/* <h5 className={styleCrudUpdate.label}>Eliga una categoria</h5> */}
                            <select required
                                className={styleCrudUpdate.selectCategory}
                                onChange={(e) => handleSelect(e)}>
                                <option disabled selected>Categorias</option>
                                {categories?.map((el) => (
                                    <option value={el._id}>{el.name}</option>
                                ))}

                            </select>

                        </div>

                        <label className={styleCrudUpdate.label}>Descripcion: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <textarea
                                required
                                type="text"
                                cols="80" rows="6"
                                value={input.description}
                                name="description"
                                onChange={(e) => handleChange(e)}
                                placeholder="Añada una pequeña descripcion del auto/Add a small description about the car"
                                className={styleCrudUpdate.textarea}
                            />
                        </div>
                        <label className={styleCrudUpdate.label}>Price: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="number"
                                value={input.price}
                                name="price"
                                onChange={(e) => handleChange(e)}
                                placeholder='$$$$$$$$'
                                className={styleCrudUpdate.inputActivity}
                            />
                            {errors.price && (
                                <p className={styleCrudUpdate.errors}>{errors.price}</p>
                            )}
                        </div>
                        <label className={styleCrudUpdate.label}>Stock: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.stock}
                                name="stock"
                                onChange={(e) => handleChange(e)}
                                placeholder='Disponibles'
                                className={styleCrudUpdate.inputActivity} />
                            {errors.stock && (
                                <p className={styleCrudUpdate.errors}>{errors.stock}</p>
                            )}
                        </div>
                    </fieldset>

                    <fieldset>
                        <h2 className={styleCrudUpdate.subtitle}>Caracteristicas</h2>

                        <label className={styleCrudUpdate.label}>Puertas: </label>
                        <div className={styleCrudUpdate.subDiv}>

                            <input
                                required
                                type="text"
                                value={input.features_doors}
                                name="features_doors"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />
                            {errors.features_doors && (
                                <p className={styleCrudUpdate.errors}>{errors.features_doors}</p>
                            )}
                        </div>
                        <label className={styleCrudUpdate.label}>Nombre del motor:</label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_name}
                                name="features_engine_name"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />
                        </div>

                        <label className={styleCrudUpdate.label}>Cv: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_cv}
                                name="features_engine_cv"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />
                            {errors.features_engine_cv && (
                                <p className={styleCrudUpdate.errors}>{errors.features_engine_cv}</p>
                            )}
                        </div>

                        <label className={styleCrudUpdate.label}>Torque: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_torque}
                                name="features_engine_torque"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />
                            {errors.features_torque && (
                                <p className={styleCrudUpdate.errors}>{input.features_engine_torque}</p>
                            )}
                        </div>
                        <label className={styleCrudUpdate.label}>Combustion: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_engine_combustion}
                                name="features_engine_combustion"
                                onChange={(e) => handleChange(e)}
                                className={styleCrudUpdate.inputActivity}
                            />
                        </div>

                        <div className={styleCrudUpdate.subDiv}>
                            <h2 className={styleCrudUpdate.subtitle}>Transmision </h2>
                            <label className={styleCrudUpdate.label}>Manual: </label>
                            <input
                                required
                                type="text"
                                value={input.features_transmission_manual}
                                name="features_transmission_manual"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro velocidades'
                                className={styleCrudUpdate.inputActivity}
                            />
                        </div>

                        <div className={styleCrudUpdate.subDiv}>
                            <label className={styleCrudUpdate.label}>Automatica: </label>
                            <input
                                required
                                type="text"
                                value={input.features_transmission_automatic}
                                name="features_transmission_automatic"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro velocidades'
                                className={styleCrudUpdate.inputActivity}
                            />
                        </div>

                        <label className={styleCrudUpdate.label}>Traccion: </label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_traction}
                                name="features_traction"
                                onChange={(e) => handleChange(e)}
                                placeholder='Tipo de traccion'
                                className={styleCrudUpdate.inputActivity}
                            />
                        </div>

                        <label className={styleCrudUpdate.label}>Kilometraje:</label>
                        <div className={styleCrudUpdate.subDiv}>
                            <input
                                required
                                type="text"
                                value={input.features_mileage}
                                name="features_mileage"
                                onChange={(e) => handleChange(e)}
                                placeholder='Nro de Km totales'
                                className={styleCrudUpdate.inputActivity} />
                            {errors.features_mileage && (
                                <p className={styleCrudUpdate.errors}>{errors.features_mileage}</p>
                            )}
                        </div>

                    </fieldset>
                    {
                        errors && (
                            <button className={styleCrudUpdate.button3} type='submit'>Actualizar</button>
                        )
                    }
                    <Link to="/ProductCRUD">
                        <button className={styleCrudUpdate.button3}>Volver</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}