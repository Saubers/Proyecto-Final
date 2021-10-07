import React from 'react';
import styleCars from '../ProductCard/ProductCard.module.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getCarDetail} from '../../actions/index';
import {useLocalStorage} from '../../useStorage/useLocalStorage'

const ProductCard = ({name,brand,img,price,model,mileage,_id}) =>{
    const dispatch = useDispatch()
    const [idAuto, setIdAuto] = useLocalStorage('idItem',[])
    
   async function addToCart(id){
      const idItem = await dispatch(getCarDetail(id))
     // console.log(idItem.payload)
      setIdAuto([...idAuto , idItem.payload])
        console.log('idItem en prdcard',idAuto)
    }
    return(
    <div className={styleCars.containerproduct}>
        <div className={styleCars.divimg}>
            <img className={styleCars.imgstyle} src={img} alt="img" /> 
        </div>
        <div className={styleCars.styledescri}>
            <p>USD${price}</p>
            <p>{model}-{mileage}km</p>
            <h3 className={styleCars.name}>{brand} {name} 
                <Link to= {'/home/' + _id}>
                    <button className={styleCars.btn}>Detalle</button>
                </Link>
                <button onClick = {() => addToCart(_id)}>Comprar</button> 
            </h3>
            
        </div>
        
    </div>
    );
};

export default ProductCard;