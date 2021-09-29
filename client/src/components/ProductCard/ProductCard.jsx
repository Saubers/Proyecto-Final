import React from 'react';

const ProductCard = ({name,marca,img,id}) =>{
    return(
    <div>
        <div>
            <h1>{name}</h1>
            <h3>{marca}</h3>
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