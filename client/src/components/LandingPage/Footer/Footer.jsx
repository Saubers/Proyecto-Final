import React from 'react'
import styleFooter from '../Footer/Footer.module.css';
import logo from '../../image/nuevologo.png';
import face from '../../image/redes/facebook.png';
import insta from '../../image/redes/instagram.png';
import google from '../../image/redes/google.png';

const Footer = () => {
    return (
        <div className={styleFooter.containerfooter}>
            <div className={styleFooter.container1}>
                <img src={logo} alt="logo" width="50px"/>
                <div className={styleFooter.container12}>
                    <a href="# ">Autos nuevos 0Km</a>
                    <a href="# ">Usados nuevos</a>
                </div>
            </div>
            <div className={styleFooter.container2}>
                <a href="">Preguntas frecuentes</a>
                <a href="">Blog</a>
                <a href="">Quienes somos</a>
                <a href="">Concesonarias</a>
            </div>
            <div className={styleFooter.container3}>
                <p>Atención al cliente <br/>
                    Lun-Vie: 9:00 a 18:00 <br />
                    0220-420-0831 <br/>
                    henry@proyectofinal.com
                </p>
            </div>
            <div>
                <img src={face} alt="facebook" />
                <img src={insta} alt="facebook" />
                <img src={google} alt="facebook" />
            </div>
        </div>
    )
}

export default Footer
