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

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={styledrop.divbtn} caret>
        {usuario && usuario ? <div className={styledrop.divname}>
            <img src={Ff}/>
            {usuario.fullname}
            </div> : <p>Login</p>}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem Profile>Profile</DropdownItem>
        <DropdownItem href="/user/profile">/user/profile</DropdownItem>
        <DropdownItem href="/user/me">Me</DropdownItem>
        <DropdownItem href="/home/CrearCategoria">Crear Categoria</DropdownItem>
        <DropdownItem href="/pagos">Ticket</DropdownItem>
        <DropdownItem onClick={() => localStorage.removeItem('userAdmin') + localStorage.removeItem('userInfo')} href='/'>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuDesp;