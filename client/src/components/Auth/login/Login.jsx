import React, { useState } from "react";
import styles from "./Login.module.css";
import ErrorMessage from "./ErrorMessage";
import { Link, useHistory } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import lg from "../../image/lg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signin, userAdmin, googleSignin } from "../../../actions";
import { GoogleLogin } from "react-google-login";
import ForgotPass from "./forgotPass";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Login = () => {
  const [mail, setMail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");
  const error = useSelector((state)=> state.error)
  const dispatch = useDispatch();
  const stateAdmin = useSelector((state) => state.userInfo);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signin(mail, password));
    dispatch(userAdmin(mail, password));
  };
  if (stateAdmin) {
    history.push("/home/catalogo");
  }
  const responseSuccessGoogle = (response) => {
    dispatch(googleSignin(response.tokenId));
  };

  const responseErrorGoogle = (response) => {
    console.log("ERR", response);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  
  return (
    <div className={styles.loginContainer}>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirmar datos</ModalHeader>
        <ModalBody>
          <label>Recuperar contraseña</label>
          <br />
          <ForgotPass />
          {/* <input type="email" placeholder="Ingresa tu mail" onChange={(e) => setMaill(e.target.value)} value={maill}></input> */}
        </ModalBody>
        
      </Modal>
      <div className={styles.imgdivd}>
        <img src={lg} alt="lg" width="500px" />
      </div>

      <div className={styles.login}>
        <form actions="/login" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Direccion de mail</Form.Label>
            <Form.Control
              required
              type="email"
              value={mail}
              placeholder="Ingresa tu mail"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className={styles.btnsubt}>
            Iniciar sesión
          </Button>
        </form>
        <div>
        </div>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <GoogleLogin
            class="g-signin2"
            buttonText="Login with google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        <Row className="py-3">
          <Col>
            <Button color="danger" onClick={toggle}>
              ¿Has olvidado tu contraseña?
            </Button>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            Nuevo usuario? <Link to="/user/register">Registrate aqui</Link>
          </Col>
        </Row>
        <Link to="/">
          <Button className={styles.btnsubt}>Volver</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
