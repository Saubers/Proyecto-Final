import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire'

export default function Auth(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        console.log(email)
    }

    return (
        <div>
            <div>
                <label htmlFor='email'>Correo electrónico</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Contraseña</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={submit}>Iniciar sesion</button>
            </div>
        </div>
    )
}