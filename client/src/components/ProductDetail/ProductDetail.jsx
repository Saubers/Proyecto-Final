import React from "react";
import styles from '../ProductDetail/ProductDetail.module.css'
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail } from "../../actions/index";
import { useEffect } from "react";
import NavBar from '../NavBar/NavBar'
export default function Detail(props){
    const dispatch= useDispatch()

    useEffect(()=> {
        dispatch(getCarDetail(props.match.params.id));
    },[dispatch, props.match.params.id])

    const MyCar= useSelector ((state)=> state.carDetail)
    /* const carCategories = useSelector((state) => state.categories) */
    console.log(MyCar);
    return (
        
        <div className={styles.container}>
            <NavBar/>
        
                <div>
                    <h1 className={styles.name}>{MyCar.brand} {MyCar.name}</h1>
                    {/* <h3>{carCategories.name}</h3> */}
                    <img className={styles.img} src={MyCar.img} alt= "not found"/>
                    <h3 className={styles.title}>About the car</h3>
                    <h6 className={styles.details}>Mileage: {MyCar.features?.mileage}km</h6>
                    <h6 className={styles.details}>traction: {MyCar.features?.traction}</h6>
                    <h6 className={styles.details}>Description: {MyCar.description}</h6>
                </div>
            <Link to= "/home/catalogo">
                <button className={styles.button}>Back</button>
            </Link>
        </div>
    )
}