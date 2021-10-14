import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logocarrito from '../image/carrito.png';
import nuevologo from '../image/nuevologo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import salir from '../image/salir.png';

const NavBar = () => {
  console.log("a",JSON.parse(localStorage.getItem('userInfo')))
  const userSignin = useSelector((state) => state.userInfo)
  console.log(userSignin)


  

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
                <a href="/home/compra"><img src={logocarrito} alt="carrito" width="40px" /></a>
                { userSignin ? ( <div className={styleNav.userdiv}>
             <h3>User:{userSignin.fullname}</h3>
             <h3>Email:{userSignin.mail}</h3>
            <li><a className={styleNav.logout} 
            onClick={localStorage.removeItem('userInfo')} href='/user/login'><img src={salir} width="20px"></img></a></li>
           </div>)  : (<li><a className={styleNav.logout} href='/user/login'>Login</a></li>)}
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;