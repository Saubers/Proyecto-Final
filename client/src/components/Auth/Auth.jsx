import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../../actions';
import NavBar from '../NavBar/NavBar'
import styles from '../Auth/Auth.module.css'

export default function Register () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(userRegister())
   },[dispatch])

   const user = useSelector((state) => state.user)

    const submit = async () => {
       
    }

    return (
        <div>
            <NavBar />
            <div className={styles.login}>
                <form action="/register" method="POST">
            <label htmlFor='name'>Nombre</label>
                <input required type="name" id="name" onChange={(e) => setName(e.target.value)} />
                <label htmlFor='lastname'>Apellido</label>
                <input required type="lastname" id="lastname" onChange={(e) => setlastName(e.target.value)} />
                <label  htmlFor='email'>Correo electrónico</label>
                <input required type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Contraseña</label>
                <input required type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor='phone'>Telefono</label>
                <input required type="phone" id="phone" onChange={(e) => setPhone(e.target.value)} />
                </form>
                <button type="submit" onClick={submit}>Registrar</button>
            </div>
        </div>
    )
}