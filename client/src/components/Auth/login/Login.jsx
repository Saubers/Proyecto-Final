import React,{ useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import styles from './Login.module.css'
import ErrorMessage from './ErrorMessage';
import { Link, useHistory } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap';
import lg from '../../image/lg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, signin } from '../../../actions';
import { useEffect } from 'react';



const Login = () => {
    
    
    const [mail, setMail] = useState("")
    const [user, setUser] = useState('')
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const local = localStorage.getItem('userInfo')
        if(local){
            history.push('/home/catalogo')
        }

        
    dispatch(signin(mail, password))
    
    if(signin(mail) != mail || signin(password) !== password){
        setError("Your mail or password are wrong...")
       setTimeout(3000)
    }else{
        setLoading(true)
    }
    setLoading(false)
   
    }
        
    return(
        <div className={styles.loginContainer}>
            <div className={styles.imgdivd}>
                <img src={lg} alt="lg" width="500px" />
            </div>
            
            <div className={styles.login}>
                <form actions="/login" onSubmit={handleSubmit}>
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
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        required
                        type='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        />  
                    </Form.Group>
                    <Button type="submit" className={styles.btnsubt}>Login</Button>
                </form>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
                <Row className="py-3">
                    <Col>
                    New Customer ? <Link to="/user/register">Register Here</Link>
                    </Col>
                </Row>
                <Link to ='/'>
                <Button className={styles.btnsubt}>Back home</Button>
                </Link>
                </div>
        </div>
        
    );
};

export default Login;