import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';

const ProductCard = ({name,brand,img,price,model,mileage}) =>{
    return(
    <div className={styleCars.containerproduct}>
        <div className={styleCars.divimg}>
            <img className={styleCars.imgstyle} src={img} alt="img" /> 
        </div>
        <div className={styleCars.styledescri}>
            <p>${price}</p>
            <p>{model}-{mileage}km</p>
            <h3 className={styleCars.name}>{brand} {name}</h3>
        </div>
    </div>
    );
};

export default ProductCard;