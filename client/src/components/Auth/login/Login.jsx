import React, { useState } from "react";
import Loading from "./Loading";
import styles from "./Login.module.css";
import ErrorMessage from "./ErrorMessage";
import { Link, useHistory } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import lg from "../../image/lg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signin, userAdmin, googleSignin } from "../../../actions";
import { GoogleLogin } from "react-google-login";
import ForgotPass from './forgotPass'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = () => {
  const [mail, setMail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
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

  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);
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
        <ModalFooter>
          {/* <Button color="primary" onClick={(e)=> handleSubmitt(e),toggle1}>Enviar email</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

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
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success && <ErrorMessage variant="success">{success}</ErrorMessage>}
        {loading && <Loading />}
        <Row className="py-3">
          <Col>
          <Button color="danger" onClick={toggle}>¿Has olvidado tu contraseña?</Button>
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
        <div>
          {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
          <GoogleLogin
            class="g-signin2"
            buttonText="Login"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
