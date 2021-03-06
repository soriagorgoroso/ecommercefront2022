import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Nav, Modal, Form } from "react-bootstrap";
import "./NavBar.css";
import { useState } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";
import RegisterNavBarIzq from "./RegisterNavBarIzq";

function SignIn() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSuccess = () =>
    toast.success("Ingresaste con éxito!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/tokens`,
        data: { email: data, password: password },
      });
      dispatch(actions.login(response.data));
      navigate("/");
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <Nav.Link
        className="registerButton mx-1 "
        href="#pricing"
        onClick={handleShow}
      >
        INICIA SESION
      </Nav.Link>
      <Modal
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        show={show}
        onHide={handleClose}
        className="t"
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
              <div className="">
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
              Iniciar Sesion
            </h2>
            <Form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  className="form-control border border-dark"
                  id="email"
                  placeholder="email"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Form.Label className="text-dark " htmlFor="floatingInput">
                  Email
                </Form.Label>
              </div>
              <div className="form-floating">
                <Form.Control
                  name="password"
                  type="password"
                  className="form-control border border-dark"
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
                    className="btn fw-bold  text-black border border-dark"
                    onClick={() => loginSuccess()}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <ToastContainer />
            </Form>
            <div className="text-center">
              <a
                className="btn fw-bold  border border-dark text-black p-0 d-grid "
                href="/checkin"
              >
                <RegisterNavBarIzq />
              </a>
            </div>
          </div>
          <p className="text-danger fs-5 w-100 text-center ">{errorMessage}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
