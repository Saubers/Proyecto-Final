import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../../actions';
import NavBar from '../NavBar/NavBar'
import styles from '../Auth/Auth.module.css'

export default function Register () {
    const user = useSelector((state) => state.user);
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(userRegister(mail,password,fullname,phone))
        console.log("creado")
    }

   
    return (
        <div>
            <NavBar />
            <div className={styles.login}>
                <form action="/register" method="POST" onSubmit={handleSubmit} >
                    <label htmlFor='name'>Nombre completo</label>
                    <input type="name" name="fullname"  value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    <label  htmlFor='email'>Correo electrónico</label>
                    <input  type="email" name="mail"  value={mail} onChange={(e) => setMail(e.target.value)} />
                    <label htmlFor='password'>Contraseña</label>
                    <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor='phone'>Telefono</label>
                    <input type="phone" name="phone" value={phone}  onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit" >Registrar</button>
                    </form>
            </div>
        </div>
    )
}