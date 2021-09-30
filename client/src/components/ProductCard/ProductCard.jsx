import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';

const ProductCard = ({name,brand,img,id}) =>{
    return(
    <div className={styleCars.containerproduct}>
        <div>
            <img className={styleCars.imgstyle} src={img} alt="img" />
        </div>
        <div>
        <Link to= {"/home/" + id}>
            <img src={img} alt="img" />
        </Link>
        </div>
    </div>
    );
};

export default ProductCard;