import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { forgotPassword, resetPassword } from '../../../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ForgotPass = () => {

    const [mail, setMail] = useState('')
const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(forgotPassword(mail))
 }
 const [modal1, setModal1] = useState(false);

 const toggle1 = () => setModal1(!modal1);


 return (
     <div>
         <Modal isOpen={modal1} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Confirmar datos</ModalHeader>
        <ModalBody>
          <label>Nueva contraseña</label>
          <input type="password"></input>
          <br />
          <hr />
          <label>Token</label>
          <input type="text"></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle1}>
            Enviar
          </Button>{" "}
          <Button color="secondary" onClick={toggle1}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
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
                    <Button type="submit" onClick={(e) => handleSubmit(e),toggle1} variant="success">Enviar mail</Button>
                    <div>
                    <Link to ='/'>
                <Button variant='danger'>Volver</Button>
                </Link>
                    </div>
     </div>
 )
}

export default ForgotPass;