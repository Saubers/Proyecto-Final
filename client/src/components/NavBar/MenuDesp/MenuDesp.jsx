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
            </div> : <p>Iniciar Sesion</p>}
      </DropdownToggle>
      <DropdownMenu>
        {isAdmin === '"admin"' && <DropdownItem href="/ProductCRUD">Administrar Productos</DropdownItem>}
        {isAdmin === '"admin"' && <DropdownItem href="/CategoryCRUD">Administrar Categorias</DropdownItem>}
        {isAdmin === '"admin"' && <DropdownItem href="/home/ADMIN/Administracion">Administrar cuentas</DropdownItem>}
        {isAdmin === '"admin"' && <DropdownItem href="/home/ADMIN/orders">Ordenes de usuarios</DropdownItem>}
        {isAdmin === '"admin"' &&  <DropdownItem  href='/home/ADMIN/orders' >Administrar Ordenes</DropdownItem>}
        <DropdownItem href="/user/me">Mi Cuenta</DropdownItem>
        <DropdownItem href="/pagos">Ticket</DropdownItem>
        <DropdownItem onClick={() => logoutFunct()} href='/'>Cerrar Sesion</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuDesp;