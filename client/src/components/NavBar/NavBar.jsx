import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logocarrito from '../image/carrito.png';
import nuevologo from '../image/nuevologo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
 
    return (
        <div className={styleNav.container}>
          <nav>
            <div>
                <img src={nuevologo} alt="logo" width="50px" />
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contactos">Contacts</a></li>
                <li><a href="/home/catalogo ">Our Catalog</a></li>
                <li><a href="# ">Payment Methods</a></li>
           
                <li><a className={styleNav.logout} 
                  onClick={localStorage.removeItem('userInfo')} href='/user/login'>Logout</a></li>
                <a href="/home/compra"><img src={logocarrito} alt="carrito" width="40px" /></a>
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;