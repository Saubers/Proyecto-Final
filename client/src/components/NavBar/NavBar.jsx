import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logocarrito from '../image/carrito.png';
import nuevologo from '../image/nuevologo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import salir from '../image/salir.png';
import { userAdmin } from '../../actions';
import { useState } from 'react';

const NavBar = () => {
  const userSignin = useSelector((state) => state.userInfo)
  console.log(userSignin)
const local = localStorage.getItem('userInfo')
const [isAdmin, setIsAdmin] = useState(false)

const dispatch = useDispatch()

dispatch(userAdmin(isAdmin))

  return (
        <div className={styleNav.container}>
          <nav>
            <div>
                <img src={nuevologo} alt="logo" width="50px" />
            </div>
            <ul>{ !local && (
                <li><a href="/">Home</a></li>)}
                <li><a href="/contactos">Contacts</a></li>
                <li><a href="/home/catalogo ">Our Catalog</a></li>
                <li><a href="# ">Payment Methods</a></li>


           { local ? (
  <li><a className={styleNav.logout} 
  onClick={() => localStorage.removeItem('userInfo')} href='/'>Logout</a></li>
                  )  : (<li><a className={styleNav.logout} href='/user/login'>Login</a></li>)}
 
               { local && (<a href="/home/compra"><img src={logocarrito} alt="carrito" width="40px" /></a>)}
                { local && ( <div className={styleNav.userdiv}>
             <h3>User:{userSignin?.fullname}</h3>
             <h3>Email:{userSignin?.mail}</h3>
           </div>)  }
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;