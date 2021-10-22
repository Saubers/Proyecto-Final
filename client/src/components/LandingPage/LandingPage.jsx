import stylesLanding from '../LandingPage/LangingPage.module.css'
import React from 'react';
import Carousel from 'nuka-carousel';
import image1 from '../image/imgcarousellandin/image1.jpg';
import image2 from '../image/imgcarousellandin/image2.jpg';
import image3 from '../image/imgcarousellandin/image3.jpg';
import Servi from '../LandingPage/Servicios/Servi'
import Footer from '../LandingPage/Footer/Footer'
import NavBar from '../NavBar/NavBar';

export default function LandingPage({history}) {

return(
    
       <div className={stylesLanding.containergrid}>
           <header className={stylesLanding.header} class="header">
               <nav className={stylesLanding.containerdiv}>
                   
                   <div>
                       <NavBar />
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