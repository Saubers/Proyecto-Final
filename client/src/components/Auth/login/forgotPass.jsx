import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword, resetPassword } from "../../../actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ForgotPass = () => {
  const [mail, setMail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [resetLink, setResetLink] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(mail));
  };

  const submitToken = (e) => {
      e.preventDefault();
      dispatch(resetPassword(newPass, resetLink))
  }
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  return (
    <div>
      <Modal isOpen={modal1} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Confirmar datos</ModalHeader>
        <ModalBody>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            required
            type="password"
            value={newPass}
            placeholder="Ingresa tu nueva contraseña"
            onChange={(e) => setNewPass(e.target.value)}
          />
          <Form.Control
            required
            type="text"
            value={resetLink}
            placeholder="Ingresa el token enviado a tu mail"
            onChange={(e) => setResetLink(e.target.value)}
          />
        </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => submitToken(e) + toggle1(e)}>
            Enviar
          </Button>{" "}
          <Button color="secondary" onClick={toggle1}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <form actions="/login" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            value={mail}
            placeholder="Ingresa tu mail"
            onChange={(e) => setMail(e.target.value)}
          />
        </Form.Group>
      </form>
      <Button
        type="submit"
        onClick={((e) => handleSubmit(e) + toggle1())}
        variant="success"
      >
        Enviar mail
      </Button>
      <div>
        <Link to="/">
          <Button variant="danger">Volver</Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPass;
