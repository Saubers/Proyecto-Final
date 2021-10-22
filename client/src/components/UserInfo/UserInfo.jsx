import React from 'react';
import NavBar from '../NavBar/NavBar';
import Styleinfo from '../UserInfo/UserInfo.module.css';
import UserDelete from '../ProfileInfo/ProfileDelete';

const UserInfo = () => {
    const userInformacion = localStorage.getItem("userInformacion");
    const usuario = JSON.parse(userInformacion)
    return (
        <div>
            <NavBar />
            <div className={Styleinfo.divcontainer}>
                <div>
                    <h4>Mis Datos</h4>
                    <br />
                    <div>
                        <h6>Datos de la cuenta</h6>
                        <div className={Styleinfo.divinfo}>
                            <label>Usuario</label>
                            <p>{usuario.fullname}</p>
                        </div>
                        <div className={Styleinfo.divinfo}>
                            <label>Email</label>
                            <p>{usuario.mail}</p>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <h6>Datos personales</h6>
                        <div className={Styleinfo.divinfo}>
                            <label>ID User</label>
                            <p>{usuario._id}</p>
                        </div>
                        <div className={Styleinfo.divinfo}>
                            <label>Telefono</label>
                            <p>{usuario.phone}</p>
                        </div>
                        <div className={Styleinfo.divinfo}>
                            <label>Estado</label>
                            <p>{usuario.state}</p>
                        </div>
                        <UserDelete />
                </div>
               
            </div>
        </div>
    )
}

export default UserInfo
