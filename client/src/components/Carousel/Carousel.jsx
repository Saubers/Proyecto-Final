import React from 'react';
import styles from '../Carousel/Carousel.module.css'
import Carousel from 'nuka-carousel';

export default function Component_Carousel( props ) {
  if(Array.isArray(props.photos)){
    return(
      <div>
      <Carousel>
      {props.photos.map((p)=> {
        return <img className={styles.image} src= {p} alt= "not found" />
      })}
        </Carousel>
        </div>
      )
    }else return  <img className={styles.image} src= "" alt= "not found" />
  }

//  export default function Carousel() {
//     return (
//         <div>
//       <Carousel >
//         <img src="https://image.freepik.com/vector-gratis/proximamente-fondo-diseno-spot-light_1017-25515.jpg" alt="not found"/>
//         <img className={styles.image} src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_5094a44b425b4953a52505a7018e410d.jpg" alt="not found"  /> 
//       </Carousel>
//       </div>
//     );
//   }
