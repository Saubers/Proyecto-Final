import React from 'react';
import styles from '../Carousel/Carousel.module.css'
import Carousel from 'nuka-carousel';

export default function Component() {
 
    return (
        <div>
      <Carousel >

        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="not found"/>
        <img className={styles.image} src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_5094a44b425b4953a52505a7018e410d.jpg" href="http://localhost:3000/home/6155d997d893878e3e4a62a0" alt="not found" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="not found"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt="not found"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt="not found"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt="not found"/>
      </Carousel>
      </div>
    );
  }
