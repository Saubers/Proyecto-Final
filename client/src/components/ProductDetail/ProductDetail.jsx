import React, { useState } from "react";
import styles from '../ProductDetail/ProductDetail.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail, getReview } from "../../actions/index";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Component_Carousel from "../Carousel/Carousel";
import { useLocalStorage } from '../../useStorage/useLocalStorage'
import Review from '../Review/Review'

export default function Detail(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarDetail(props.match.params.id));

    }, [dispatch, props.match.params.id])

    useEffect(() => {
        dispatch(getReview(props.match.params.id));

    }, [dispatch, props.match.params.id])

    const MyCar = useSelector((state) => state.carDetail)
    // const [Isbotton,setIsButton]  = useState(false)
    //ar ternario = false
    const review = useSelector((state) => state.review)

    let IdButton = props.match.params.id


console.log('REVIEW', review);
    const [idAuto, setIdAuto] = useLocalStorage('auto', [])


    const [Isbotton, setIsButton] = useLocalStorage('button', [])

    async function addToCart() {
        setIdAuto([...idAuto, MyCar])
        setIsButton([...Isbotton, MyCar.id])
    }
    const found = Isbotton.find(element => element === IdButton)
    /* const carCategories = useSelector((state) => state.categories) */
    return (
        <div>
            <NavBar />

            <div className={styles.container}>

                <div>
                    <h1 className={styles.name}>{MyCar?.brand} {MyCar?.name}</h1>

                    {MyCar?.category ? <h3>{MyCar?.category.name}</h3> : null}
                    <div className='car_detail_carousel'>
                        <Component_Carousel photos={MyCar?.img} />
                    </div>
                    <h3 className={styles.title}>About the car</h3>
                    <h6 className={styles.details}>Mileage: {MyCar?.features.mileage}km</h6>
                    <h6 className={styles.details}>traction: {MyCar?.features.traction}</h6>
                    <h6 className={styles.details}>Description: {MyCar?.description}</h6>
                </div>
                <Link to="/home/catalogo">
                    <button className={styles.button}>Back</button>
                </Link>

                {
                    found === IdButton ? <div>
                        Orden agregada al <Link to="/home/compra">carrito</Link>
                    </div>
                        :
                        <button onClick={() => addToCart(MyCar.id)} >Comprar</button>

                }
                <Review
                review={review}
                publication={MyCar}
                ></Review>
            </div>
        </div>
    )
}