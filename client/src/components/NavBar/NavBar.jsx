import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logo from '../image/logo.png';

const NavBar = () => {
    return (
        <div className={styleNav.container}>
            <nav className={styleNav.navstyle}>
                <div>
                    <img src={logo} alt="logo" width="50px"/>
                </div>
              
                <div className={styleNav.divli}>
                    <li><a className={styleNav.styleA} href="# ">New Cars</a></li>
                    <li><a className={styleNav.styleA}href="# ">Use Cars</a></li>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;