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
            history.push("/home")
        }
    }, [history])

return(
    
       <div>
           <header className={stylesLanding.header}>
               <nav className={stylesLanding.containerdiv}>
                   <div>
                       <img src={Nuevologo} alt="img" width="50px"/>
                   </div>
                   <div>
                       <ul className={stylesLanding.ulli}>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/contactos">Contacts</a></li>
                            <li><a href="/home/catalogo ">Our Catalog</a></li>
                            <li><a href="# ">Payment Methods</a></li>
                        </ul>
                   </div>
                   <div>
                       <img src={usuario} alt="usuario" width="50px" />
                   </div>
               </nav>
           </header>
            <section>
                <Carousel>
                    <img src={image1} alt="img" height="700px"/>
                    <img src={image2} alt="img" height="700px"/>
                    <img src={image3} alt="img" height="700px"/>
                </Carousel>
                <div className={stylesLanding.cajabotones}>
                    <div className={stylesLanding.jj}>
                        <h2 className={stylesLanding.h2sly}>We can help you to find your favourite car!</h2>
                        <div>
                            <Link to ='/user/login'>
                                <button className={stylesLanding.btn}>LOGIN</button>
                            </Link>
                            <Link to='/user/register'>
                                <button className={stylesLanding.btn}>REGISTER</button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Servi/>
            </section>
            <footer>
                <Footer/>
            </footer>
       </div>
       
      )
      
}