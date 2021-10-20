import React, { useState } from "react";
import styles from '../ProductDetail/ProductDetail.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail,postCart } from "../../actions/index";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Component_Carousel from "../Carousel/Carousel";
import { useLocalStorage } from '../../useStorage/useLocalStorage'
import {getReview, getOrderByUsuario} from '../../actions/index'


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

    useEffect (()=>{
            dispatch(getOrderByUsuario(user._id))
    }, [dispatch,user._id ])

    const idPublication = useSelector ((state) => state.ordersId)
    const MyCar = useSelector((state) => state.carDetail)
    // const [Isbotton,setIsButton]  = useState(false)
    //ar ternario = false
    const verdadero = idPublication?.find(el => el === MyCar?.id)
    let IdButton = props.match.params.id


    const [carrito, setCarrito] = useState({
        user:user?._id,
        publication: props.match.params.id,
        cantidad : 1,
        price:  0,
        state:"Carrito"
    })

    const [idAuto, setIdAuto] = useLocalStorage('auto', [])


    const [Isbotton, setIsButton] = useLocalStorage('button', [])

    
    async function addToCart() {
        setIdAuto([...idAuto, MyCar])
        setIsButton([...Isbotton, MyCar.id])
        setCarrito({
            user:user?._id,
            publication: props.match.params.id,
            cantidad : 1,
            price:  MyCar.id,
            state:"Carrito" 
        })
        if(carrito.user && carrito.publication){
         //   dispatch(postCart(carrito))
           // alert('Agregado al carrito')
        }
    }
    const found = Isbotton.find(element => element === IdButton)
    /* const carCategories = useSelector((state) => state.categories) */
    return (
        <div>
            <NavBar />

            <div className={styles.containerprin}>

                <div className={styles.container}>
                    {/* <h1 className={styles.name}>{MyCar?.brand} {MyCar?.name}</h1>

                    {MyCar?.category ? <h3>{MyCar?.category.name}</h3> : null} */}
                    <div className='car_detail_carousel'>
                        <Component_Carousel photos={MyCar?.img} width="90%"/>
                    </div>
                    <hr />
                    <h3 className={styles.title}>Estados del auto</h3>
                    <div>
                        <div>
                            <div>
                                <p>Garantía de 6 meses:</p>
                                <p>Más de 30 ítems con garantía y mano de obra incluida.</p>
                            </div>
                            <div>
                                <p>Documentación al día:</p>
                                <p>Papeles al día, listo para ser transferido.</p>
                            </div>
                            <div>
                                <p>Calidad mecánica garantizada:</p>
                                <p>Cada vehículo pasa por una inspección de más de 280 puntos para que <br /> puedas estar 100% seguro de la calidad y seguridad de tu vehículo.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.review}> 
                    { verdadero ?
                         MyCar && MyCar? <Review
                        publication={MyCar}
                        ></Review>
                        : <div>error</div> 
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
                    MyCar?.stock<1?
                    <button className={styles.buttonStock}>Sin Stock</button>
                    :
                    found === IdButton ? <div>
                        Orden agregada al <Link to="/home/compra">carrito</Link>
                    </div>
                        :
                        <button className={styles.button} onClick={() => addToCart(MyCar)} >Comprar</button>
                } 
                    <br />
                    <Link to="/home/catalogo">
                        <button className={styles.buttonback}>Back</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}