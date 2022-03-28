import "./UserForm.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  FloatingLabel,
  Form,
  CloseButton,
  Nav,
} from "react-bootstrap";

function Register(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegister = async () => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + "/users", {
        firstname: name,
        lastname: surname,
        username: username,
        email: email,
        password: password,
      });
      toast.success("Registered successfully!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      try {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "/users/login",
          {
            username: username,
            email: email,
            password: password,
          }
        );
        dispatch(actions.login(response.data));
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      toast.info(" Error, some fields need to be completed.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Nav.Link className=" mx-1" onClick={() => handleShow(true)} to="#">
        UNITE
      </Nav.Link>

      <Modal
        show={show}
        {...props}
        aria-labelledby=""
        className=""
        onHide={handleClose}
      >
        <Modal.Body className="show-grid text-light backmodal">
          <div className="d-flex justify-content-between modal-body">
            <div>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="px-2 pt-2">
            <h2 className="modal-title text-dark fw-bold pb-4">
              Crea tu cuenta
            </h2>

            <div className="form-floating mb-3 labeltext">
              <FloatingLabel
                className="m-3 text-dark"
                controlId="Nombre"
                label="Nombre"
              >
                <Form.Control
                  className=" text-white border border-warning"
                  type="text"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                className="m-3 text-dark"
                controlId="Apellido"
                label="Apellido"
              >
                <Form.Control
                  className=" text-white border border-warning"
                  type="text"
                  placeholder="Last Name"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                className="m-3 text-dark"
                controlId="Username"
                label="Usuario"
              >
                <Form.Control
                  className=" text-white border border-warning"
                  type="text"
                  placeholder="usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                className="m-3 text-dark"
                controlId="Email"
                label="Correo"
              >
                <Form.Control
                  className=" text-white border border-warning"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                className="m-3 text-dark"
                controlId="Password"
                label="Contraseña"
              >
                <Form.Control
                  className=" text-white border border-warning"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="row g-2">
              <div className="d-grid gap-2 py-5">
                <Button
                  onClick={handleRegister}
                  className="btn btn-light fw-bold rounded-pill text-black border border-warning"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
