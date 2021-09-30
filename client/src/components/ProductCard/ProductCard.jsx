import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';

const ProductCard = ({name,img,model,brand,description}) =>{

    return(
    <div className={styleCars.containerproduct}>
        <div>
            <h1>{model}{brand}{name}</h1>
        </div>
        <div>
            <img className={styleCars.imgstyle} src={img} alt="img" />
        </div>
        <div>
            {description}
        </div>
    </div>
    );
};

export default ProductCard;