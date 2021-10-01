import React from 'react';
import style from '../Paginado/Paginado.module.css';

const Paginado = ({AllProducts,productsXpage, paginado}) => {
    const NumberPage = []

    for(let i = 1; i <= Math.ceil(AllProducts/productsXpage);i++){
        NumberPage.push(i)
    }

    return(
        <div className={style.pagination}>
      
                {
                    NumberPage.length === 1 ? null : NumberPage.map(num => (
                        <button className={style.button} onClick={()=> paginado(num)}>{num} </button> 
                        // <a href="# " className={style.button} onClick={()=> paginado(num)}>{num}</a>
                    ))
                }
        
        </div>
    );
};

export default Paginado;