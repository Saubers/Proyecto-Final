import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styleNav.container}>
        <nav>
         <div className={styleNav.logo}>
            Car Shop
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
             <li><a href="/home">Home</a></li>
            <li><a href="/contactos">Contacts</a></li>
            <li><a href="/home/catalogo ">Our Catalog</a></li>
            <li><a href="# ">Payment Methods</a></li>
            <li><a href="# ">Branch Office</a></li>
            <li><a href="/home/Catalogo/compra">Carrito</a></li>
         </ul>
      </nav>
        </div>
    );
};

export default NavBar;