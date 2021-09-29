import React from 'react';

const Paginado = ({AllProducts,productsXpage, paginado}) => {
    const NumberPage = []

    for(let i = 1; i <= Math.ceil(AllProducts/productsXpage);i++){
        NumberPage.push(i)
    }

    return(
        <div>
            <ul>
                {
                    NumberPage && NumberPage.map(num => (
                        <li>
                            <a href="# " onClick={()=> paginado(num)}>{num}</a>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Paginado;