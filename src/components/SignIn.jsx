import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Offcanvas,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import "./NavBar.css";
import { useState } from "react";

import "../pages/Login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import Register from "./Register";

function SignIn() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/users/login",
        {
          username: data,
          password: password,
        }
      );
      dispatch(actions.login(response.data));
      navigate("/home");
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <Nav.Link className=" mx-1 " href="#pricing" onClick={handleShow}>
        INICIA SESION
      </Nav.Link>
      <Modal
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        show={show}
        onHide={handleClose}
        className=""
      >
        <Modal.Body className="modal-content p-3 d-inline-block">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
          <div className="p-0 d-flex justify-content-center modal-body">
            <div>
              <div className="containerLogo">
                <img
                  src="/img/logos/logosinfondo.png"
                  alt="LogoHackBier"
                  className="navBarImg"
                />
              </div>
            </div>
          </div>
          <div className="px-2 pt-2">
            <h2 className="modal-title  fw-bold pb-4" id="staticBackdropLabel">
              Ingresa !{" "}
            </h2>
            <Form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <Form.Control
                  name="username"
                  type="text"
                  className="form-control border border-warning"
                  id="username"
                  placeholder="Username"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Form.Label className="text-secondary " htmlFor="floatingInput">
                  Usuario
                </Form.Label>
              </div>
              <div className="form-floating">
                <Form.Control
                  name="password"
                  type="password"
                  className="form-control border border-warning"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Label
                  className="text-secondary "
                  htmlFor="floatingPassword"
                >
                  Constraseña
                </Form.Label>
              </div>

              <div className="row g-2">
                <div className="d-grid gap-2 py-5">
                  <button
                    type="submit"
                    className="btn fw-bold rounded-pill text-black border border-warning"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </Form>

            <a
              className="btn fw-bold rounded-pill border border-warning text-black"
              href="/checkin"
            >
              Registrate
            </a>
          </div>
          <p className="text-danger fs-5 w-100 text-center ">{errorMessage}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
