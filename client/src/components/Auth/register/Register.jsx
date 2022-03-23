import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useState} from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';

import ErrorMessage from '../login/ErrorMessage';
import Loading from '../login/Loading';
import styles from '../register/Register.module.css';
import registre from '../../image/registre.jpg';

export default function Register () {
    
    const [fullname, setFullname] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password.length<6 || password.length>25){
            setMessage('la contraseña debe tener entre 6 y 25 caracteres')
        } else{
            if(6>confirm_password.length || 25<confirm_password.length){
                setMessage('la contraseña debe tener entre 6 y 25 caracteres')
            }else {
                if(password !== confirm_password) {
                    setMessage('Passwords do not match')
                } else{
                    setMessage(null)
                    try{
                        const config = {
                            headers: {
                                "Content-type": "application/json"
                            }
                        }
                        setLoading(true)
                        const { data } = await axios.post("https://pf-car-shop.herokuapp.com/register", {
                            fullname,
                            mail,
                            password,
                            confirm_password,
                            phone,
                        }, config
                        );
                        setLoading(false);
                        localStorage.setItem("userInfo", JSON.stringify(data));
                        history.push("/home/catalogo");
                    } catch (error) {
                        setMessage("You should check all fields");
                    }
                }
            }
        }
    
    }
    return (
        <div className={styles.regContainer}>
            <div className={styles.imgdiv}>
                <img src={registre} alt="img" width="500px" />
            </div>
        <div className={styles.login}>
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
            <form actions="/login" onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                    required
                    type='text'
                    value={fullname}
                    placeholder='Enter your full name'
                    onChange={(e) => setFullname(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Mail address</Form.Label>
                    <Form.Control
                    required
                    type='email'
                    value={mail}
                    placeholder='Enter your mail'
                    onChange={(e) => setMail(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    required
                    type='password'
                    max= {25}
                    min= {6}
                    value={password}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    required
                    type='password'
                    max= {25}
                    min= {6}
                    value={confirm_password}
                    placeholder='Confirm your password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />  
                </Form.Group>
                <Form.Group controlId='formBasicPhone'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    required
                    type='phone'
                    value={phone}
                    placeholder='Phone number'
                    onChange={(e) => setPhone(e.target.value)}
                    />  
                </Form.Group>

                <Button type="submit" className={styles.btn} onClick={(e) => handleSubmit(e)}>Register</Button>
                <Row className="py-3">
                    <Col>
                    You already have an account ? <Link to="/user/login">Login Here</Link>
                    </Col>
                </Row>
                <Link to ='/'>
                <Button className={styles.btn}>Back home</Button>
                </Link>
            </form>
            </div>
    </div>
    )
}