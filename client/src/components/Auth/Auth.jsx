import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../../actions';
import NavBar from '../NavBar/NavBar'
import styles from '../Auth/Auth.module.css'

export default function Register () {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        fullname: '',
        mail: '',
        phone: '',
        password: ''
    })
    



    function handleSubmit(e){
        e.preventDefault()
        dispatch(userRegister(user))
        console.log(user)
    }

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }
   
    return (
        <div>
            <NavBar />
            <div className={styles.login}>
                <form action="/register" method="POST" onSubmit={(e) =>handleSubmit(e)} >
                    <label htmlFor='name'>Nombre completo</label>
                    <input type="name" name="fullname"  value={user.fullname} onChange={(e) => handleChange(e)} />
                    <label  htmlFor='email'>Correo electrónico</label>
                    <input  type="email" name="mail"  value={user.mail} onChange={(e) => handleChange(e)} />
                    <label htmlFor='password'>Contraseña</label>
                    <input type="password" name="password"  value={user.password} onChange={(e) => handleChange(e)} />
                    <label htmlFor='phone'>Telefono</label>
                    <input type="phone" name="phone" value={user.phone}  onChange={(e) => handleChange(e)} />
                    <button type="submit" >Registrar</button>
                    </form>
            </div>
        </div>
    )
}