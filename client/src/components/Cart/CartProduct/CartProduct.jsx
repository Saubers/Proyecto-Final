import React from 'react'
import StyleCartProduct from '../CartProduct/CartProduct.module.css';
const CartProduct = ({name,img,price,brand}) => {
    return (
        <div StyleCartProduct={StyleCartProduct.container}>
            <div>
                <img src={img} alt="img" width="150px"/>
            </div>
            <div>
                <h2>Name:</h2>
                <h2>{brand}{name}</h2>
            </div>
            <div>
                <h3>Price:</h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default CartProduct
