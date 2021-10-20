import React from 'react';
import styleNav from '../NavBar/NavBar.module.css';
import logocarrito from '../image/carrito.png';
import nuevologo from '../image/nuevologo.png';
import { useSelector } from 'react-redux';
import MenuDesp from './MenuDesp/MenuDesp';


const NavBar = () => {
  const userSignin = useSelector((state) => state.userInfo)
const local = localStorage.getItem('userInfo')
const isAdmin = localStorage.getItem('userAdmin')




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
            <li>
  <MenuDesp/></li>
                  )  : (<li><a className={styleNav.logout} href='/user/login'>Login</a></li>)}
  {isAdmin === '"admin"' ? (
             <div className='dropdown'>
               <button  type="button" class="btn btn-light"><a className={styleNav.container} href="/CRUD">Admin</a></button>
             </div>
           ): null}
                <a href="/home/compra"><img src={logocarrito} alt="carrito" width="40px" /></a>
                
         
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;