import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { forgotPassword, resetPassword } from '../../../actions';

const ForgotPass = () => {

    const [mail, setMail] = useState('')
const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(forgotPassword(mail))
 

 }
 
 
 return (
     <div>
                        <form actions="/login" onSubmit={handleSubmit}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Recupera tu contraseña</Form.Label>
                        <Form.Control
                        required
                        type='email'
                        value={mail}
                        placeholder='Ingresa tu mail'
                        onChange={(e) => setMail(e.target.value)}
                        />  
                    </Form.Group>
                    
                    </form>
                    <Button type="submit" onClick={(e) => handleSubmit(e)} variant="success">Enviar mail</Button>
                    <div>
                    <Link to ='/'>
                <Button variant='danger'>Volver</Button>
                </Link>
                    </div>
     </div>
 )
}

export default ForgotPass;