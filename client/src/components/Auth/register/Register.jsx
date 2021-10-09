import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useState} from 'react';
import { Form, Row } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { userRegister } from '../../../actions';
import NavBar from '../../NavBar/NavBar'
import ErrorMessage from '../login/ErrorMessage';
import Loading from '../login/Loading';
import styles from '../register/Register.module.css';

export default function Register () {
    const dispatch = useDispatch()
    
    const [fullname, setFullname] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
    if(password !== confirm_password) {
        setMessage('Passwords do not match')
    } else {
    setMessage(null)
    try{
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    setLoading(true)
    const { data } = await axios.post("http://localhost:3002/register", {
        fullname,
        mail,
        password,
        confirm_password,
        phone
}, config
);

setLoading(false);
localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
    setError(error.response.data.message);
    }
    }
    
    }

    function handleChange(e){
    e.preventDefault()

    }
   
    return (
        <div className={styles.loginContainer}>
        <div className={styles.login}>
        {error && <ErrorMessage variant='danger'></ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
            <form actions="/login" onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                    type='text'
                    value={fullname}
                    placeholder='Confirm your password'
                    onChange={(e) => setFullname(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Mail address</Form.Label>
                    <Form.Control
                    type='email'
                    value={mail}
                    placeholder='Enter your mail'
                    onChange={(e) => setMail(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type='password'
                    value={password}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type='password'
                    value={confirm_password}
                    placeholder='Confirm your password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicPhone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    type='phone'
                    value={phone}
                    placeholder='Phone number'
                    onChange={(e) => setPhone(e.target.value)}
                    />  
                </Form.Group>

                <Button type="submit">Register</Button>
            </form>
            
            </div>
    </div>
    )
}