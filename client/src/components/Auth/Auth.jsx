import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../../actions';
import NavBar from '../NavBar/NavBar'
import styles from '../Auth/Auth.module.css'

export default function Register () {
    const user = useSelector((state) => state.user);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(userRegister(email,password,name,phone,lastName))
        console.log("creado")
    }

   
    return (
        <div>
            <NavBar />
            <div className={styles.login}>
                <form action="/register" method="POST" onSubmit={handleSubmit} >
                    <label htmlFor='name'>Nombre</label>
                    <input type="name" name="name"  value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor='lastname'>Apellido</label>
                    <input  type="lastname" name="lastName"  value={lastName} onChange={(e) => setlastName(e.target.value)} />
                    <label  htmlFor='email'>Correo electrónico</label>
                    <input  type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
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