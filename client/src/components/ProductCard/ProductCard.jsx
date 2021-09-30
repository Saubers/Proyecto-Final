import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';

const ProductCard = ({name,img,model,brand,price}) =>{

    return(
    <div className={styleCars.containerproduct}>
        <div>
            <img className={styleCars.imgstyle} src={img} alt="img" />
        </div>
        <div>
            <p>{price}</p>
            <h1>{model}{brand}{name}</h1>
        </div>
    </div>
    );
};

export default ProductCard;