import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Ff from '../../image/usuariofotologin.png';
import styledrop from '../MenuDesp/MenuDesp.module.css';
const MenuDesp = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userInformacion = localStorage.getItem("userInformacion");
  const usuario = JSON.parse(userInformacion)
  const local = localStorage.getItem('userInfo')
  const isAdmin = localStorage.getItem('userAdmin')
  const toggle = () => setDropdownOpen(prevState => !prevState);

const logoutFunct = () => {
      return localStorage.removeItem('userAdmin') + localStorage.removeItem('userInfo') + localStorage.removeItem('userInformacion')+ localStorage.removeItem('userID')
    }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={styledrop.divbtn} caret>
        {usuario && usuario ? <div className={styledrop.divname}>
            <img src={Ff}/>
            {usuario.fullname}
            </div> : <p>Login</p>}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="/user/profile">Settings</DropdownItem>
        <DropdownItem href="/ProductCRUD">Admin</DropdownItem>
        <DropdownItem href="/user/me">Me</DropdownItem>
        {isAdmin === '"admin"' && <DropdownItem href="/home/CrearCategoria">Crear Categoria</DropdownItem>}
        <DropdownItem href="/pagos">Ticket</DropdownItem>
        <DropdownItem onClick={() => logoutFunct()} href='/'>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuDesp;