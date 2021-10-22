import React from 'react';
import styles from '../Carousel/Carousel.module.css'
import Carousel from 'nuka-carousel';

export default function Component_Carousel( props ) {
  if(Array.isArray(props.photos)){
    return(
      <div>
      <Carousel>
      {props.photos.map((p)=> {
        return <img key={p} className={styles.image} src= {p} alt= "not found" />
      })}
        </Carousel>
        </div>
      )
    }else return  <img className={styles.image} src= "" alt= "not found" />
  }
