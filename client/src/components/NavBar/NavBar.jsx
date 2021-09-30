import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logo from '../image/logo.png';

const NavBar = () => {
    return (
        <div className={styleNav.container}>
        <nav>
         <div class="logo">
            Car Shop
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="# ">Home</a></li>
            <li><a href="# ">About</a></li>
            <li><a href="# ">Services</a></li>
            <li><a href="# ">Gallery</a></li>
            <li><a href="# ">Feedback</a></li>
         </ul>
      </nav>
        </div>
    );
};

export default NavBar;