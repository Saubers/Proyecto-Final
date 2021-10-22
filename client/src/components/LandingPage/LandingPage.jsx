import stylesLanding from '../LandingPage/LangingPage.module.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Nuevologo from '../image/nuevologo.png';
import usuario from '../image/usuario.png';
import Carousel from 'nuka-carousel';
import image1 from '../image/imgcarousellandin/image1.jpg';
import image2 from '../image/imgcarousellandin/image2.jpg';
import image3 from '../image/imgcarousellandin/image3.jpg';
import Servi from '../LandingPage/Servicios/Servi'
import Footer from '../LandingPage/Footer/Footer'

export default function LandingPage({history}) {

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
 
        if(userInfo) {
            history.push("/home/catalogo")
        }
    }, [history])

return(
    
       <div className={stylesLanding.containergrid}>
           <header className={stylesLanding.header} class="header">
               <nav className={stylesLanding.containerdiv}>
                   <div>
                       <img src={Nuevologo} alt="img" width="50px"/>
                   </div>
                   <div>
                       <ul className={stylesLanding.ulli}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/contactos">Contacto</a></li>
                            <li><a href="/home/catalogo ">Catalogo</a></li>
                            <li><a href="# ">Metodos de Pago</a></li>
                            <li><a href='/user/login'>Iniciar Sesion</a></li>
                        </ul>
                   </div>
               </nav>
           </header>
            <section class="section">
                <Carousel>
                    <img src={image1} alt="img" height="700px"/>
                    <img src={image2} alt="img" height="700px"/>
                    <img src={image3} alt="img" height="700px"/>
                </Carousel>
            </section>
            <section class="section2">
                <Servi/>
            </section>
            <footer class="footer">
                <Footer/>
            </footer>
       </div>
       
      )
      
}