import React,{ useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import styles from './Login.module.css'
import ErrorMessage from './ErrorMessage';
import { Link, useHistory } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap';
import lg from '../../image/lg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, signin, userAdmin,googleSignin } from '../../../actions';
import { useEffect } from 'react';

import { GoogleLogin } from 'react-google-login';


const Login = () => {
    const [mail, setMail] = useState("")
    const [user, setUser] = useState('')
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const dispatch = useDispatch()
    const stateAdmin = useSelector((state) => state.userInfo)
    const handleSubmit = async (e) => {
        // e.preventDefault();
        const local = localStorage.getItem('userInfo')
        if(local){
            history.push('/home/catalogo')
        }
        dispatch(signin(mail, password))
        dispatch(userAdmin(mail, password))
        }
                    if(stateAdmin){
                        console.log('ENTRO')
                        handleSubmit()
                    }
                    const responseSuccessGoogle = (response) => {
                        dispatch(googleSignin(response.tokenId))
                        
                    }
                    
                    const responseErrorGoogle = (response) => {
                        console.log('ERR',response)
                    }
                    
                    return(
                        <div className={styles.loginContainer}>
            <div className={styles.imgdivd}>
                <img src={lg} alt="lg" width="500px" />
            </div>
            
            <div className={styles.login}>
                <form actions="/login" onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Direccion de mail</Form.Label>
                        <Form.Control
                        required
                        type='email'
                        value={mail}
                        placeholder='Ingresa tu mail'
                        onChange={(e) => setMail(e.target.value)}
                        />  
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                        required
                        type='password'
                        value={password}
                        placeholder='Ingresa tu contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                        />  
                    </Form.Group>
                    <Button type="submit" className={styles.btnsubt}>Iniciar sesión</Button>
                </form>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {success && <ErrorMessage variant="success">{success}</ErrorMessage>}
            {loading && <Loading />}
            <Row className="py-3">
       <Col>
      <Link to="/user/forgotPass">¿Has olvidado tu contraseña?</Link>
       </Col>
            </Row>
                <Row className="py-3">
                    <Col>
                    Nuevo usuario? <Link to="/user/register">Registrate aqui</Link>
                    </Col>
                </Row>
                <Link to ='/'>
                    <Button className={styles.btnsubt}>Volver</Button>
                </Link>
                <div>
                {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
                <GoogleLogin
                    class="g-signin2"
                    buttonText="Login"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
                </div>
        </div>
        
    );
    
};

export default Login;