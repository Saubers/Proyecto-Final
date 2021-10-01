import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';

const ProductCard = ({name,brand,img,_id}) =>{
    return(
    <div className={styleCars.containerproduct}>
        <div>
            <h3 className={styleCars.name}>{brand} {name}</h3>
            <img className={styleCars.imgstyle} src={img} alt="img" /> 
        </div>
    </div>
    );
};

export default ProductCard;