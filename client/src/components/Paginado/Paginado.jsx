import React from 'react';
import stylePaginado from '../Paginado/Paginado.module.css';

const Paginado = ({AllProducts,productsXpage, paginado}) => {
    const NumberPage = []

    for(let i = 1; i <= Math.ceil(AllProducts/productsXpage);i++){
        NumberPage.push(i)
    }

    return(
        <div>
            <ul className={stylePaginado.ul}>
                {
                    NumberPage && NumberPage.map(num => (
                        <li className={stylePaginado.li}>
                            <a href="# " onClick={()=> paginado(num)}>{num}</a>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Paginado;