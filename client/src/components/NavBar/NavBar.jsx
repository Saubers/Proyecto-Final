import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logocarrito from '../image/carrito.png';
import nuevologo from '../image/nuevologo.png';
import { useSelector } from 'react-redux';
import MenuDesp from './MenuDesp/MenuDesp';


const NavBar = () => {
  const userSignin = useSelector((state) => state.userInfo)
const local = localStorage.getItem('userInfo')





  return (
        <div className={styleNav.container}>
          <nav>
            <div>
                <img src={nuevologo} alt="logo" width="50px" />
            </div>
            <ul>{ !local && (
                <li><a href="/">Inicio</a></li>)}
                <li><a href="/contactos">Contacto</a></li>
                <li><a href="/home/catalogo ">Catalogo</a></li>
                <li><a href="# ">Metodos de Pago</a></li>

           { local ? (
            <li>
  <MenuDesp/></li>
                  )  : (<li><a className={styleNav.logout} href='/user/login'>Iniciar Sesion</a></li>)}
                <a href="/home/compra"><img src={logocarrito} alt="carrito" width="40px" /></a>
                
         
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;