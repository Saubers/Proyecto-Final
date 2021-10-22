import React, { useState } from "react";
import styles from '../ProductDetail/ProductDetail.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail, postCart } from "../../actions/index";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ComponentCarousel from "../Carousel/Carousel";
import { useLocalStorage } from '../../useStorage/useLocalStorage'
import { getReview, getOrderByUsuario } from '../../actions/index'


import Review from '../Review/Review'

export default function Detail(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarDetail(props.match.params.id));
    }, [dispatch, props.match.params.id])

    useEffect(() => {
        dispatch(getReview(props.match.params.id))
    }, [dispatch, props.match.params.id])


    const userInformacion = localStorage.getItem("userInformacion")
    const user = JSON.parse(userInformacion)

    useEffect(() => {
        dispatch(getOrderByUsuario(user?._id))
    }, [dispatch, user?._id])

    const idPublication = useSelector((state) => state.ordersId)
    const MyCar = useSelector((state) => state.carDetail)
    // const [Isbotton,setIsButton]  = useState(false)
    //ar ternario = false
    const verdadero = idPublication?.find(el => el === MyCar?.id)
    let IdButton = props.match.params.id

    const [carrito, setCarrito] = useState({
        user: user?._id,
        publication: props.match.params.id,
        cantidad: 1,
        price: 0,
        state: "Carrito"
    })

    const [idAuto, setIdAuto] = useLocalStorage('auto', [])

    const [allAuto, setAllAuto] = useLocalStorage('Allauto', [])

    const [Isbotton, setIsButton] = useLocalStorage('button', [])

    async function addToCart() {
        setAllAuto([...allAuto, MyCar])
        setIdAuto([...idAuto, {
            id: MyCar.id,
            brand: MyCar.brand,
            name: MyCar.name,
            img: MyCar.img,
            price: MyCar.price,
            stock: MyCar.stock,
            count: 0
        }])
        setIsButton([...Isbotton, MyCar.id])
        setCarrito({
            user: user?._id,
            publication: props.match.params.id,
            cantidad: 1,
            price: MyCar.price,
            state: "Carrito"
        })
        if (carrito.user && carrito.publication) {
            dispatch(postCart(carrito))
            alert('Agregado al carrito')
        }
    }
    const found = Isbotton.find(element => element === IdButton)
    return (
        <div>
            <NavBar />

            <div className={styles.containerprin}>

                <div className={styles.container}>
                    <div className='car_detail_carousel'>
                        <ComponentCarousel photos={MyCar?.img} width="90%" />
                        <hr />
                    </div>

                    <div>
                        <h3 className={styles.title}>Informacion </h3>
                        <p>{MyCar?.description}</p>
                        <hr />
                        <h3 className={styles.title}>Caracteristicas</h3>
                        <p><b>Puertas: </b>{MyCar?.features.doors}</p>
                        <p><b>Traccion: </b>{MyCar?.features.traction}</p>
                        <hr />
                        <h3 className={styles.title}>Motor</h3>
                        <p><b>Nombre: </b>{MyCar?.features.engine[0].name}</p>
                        <p><b>Combustion: </b>{MyCar?.features.engine[0].combustion}</p>
                        <p><b>Cv: </b>{MyCar?.features.engine[0].cv}</p>
                        <p><b>Torque: </b>{MyCar?.features.engine[0].torque}</p>
                        <hr />
                        <h3 className={styles.title}>Transmision</h3>
                        <p><b>Automatica: </b>{MyCar?.features.transmission.automatic}</p>
                        <p><b>Manual: </b>{MyCar?.features.transmission.manual}</p>
                        <hr />
                    </div>

                    <div>
                        <h3 className={styles.title}>Estados del auto</h3>
                        <p><b> Garantía de 6 meses: </b> <br />
                            Más de 30 ítems con garantía y mano de obra incluida.</p>
                        <p><b> Documentación al día: </b> <br />
                            Papeles al día, listo para ser transferido.</p>
                        <p><b> Calidad mecánica garantizada: </b> <br />
                            Cada vehículo pasa por una inspección de más de 280 puntos para que <br />
                            puedas estar 100% seguro de la calidad y seguridad de tu vehículo.</p>
                        <hr />
                    </div>

                    <div className={styles.review}>
                        {verdadero ?
                            MyCar && MyCar ? <Review
                                publication={MyCar}
                            ></Review>
                                : <div>Error</div>
                            : <div> Solo puedes comentar cuando compras el auto</div>
                        }
                    </div>
                </div>
                <div className={styles.containerdetail}>
                    <h3>{MyCar?.brand} {MyCar?.name}</h3>
                    <h3>${MyCar?.price}</h3>
                    <div>
                        <p>{MyCar?.features.traction} {MyCar?.features.mileage}km</p>
                    </div>

                    {
                        MyCar?.stock < 1 ?
                            <button className={styles.buttonStock}>Sin Stock</button>
                            :
                            found === IdButton ? <div>
                                Orden agregada al <Link to="/home/compra">Carrito</Link>
                            </div>
                                :
                                <button className={styles.button} onClick={() => addToCart(MyCar)} >Agregar al Carrito</button>
                    }
                    <br />
                    <Link to="/home/catalogo">
                        <button className={styles.buttonback}>Volver</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}