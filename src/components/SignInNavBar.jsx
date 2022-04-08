import React from "react";
import { Nav, Modal, Form, Dropdown } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./NavBar.css";
import { useState } from "react";
import "./SignInNav.css";
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
    toast.success("Te loggeaste con éxito!", {
      position: "top-right",
      autoClose: 5000,
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
      console.log(response.data);
      dispatch(actions.login(response.data));

      loginSuccess();
      navigate("/");
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <Dropdown.Item>
        <Nav.Link
          className="buttonNavDos mx-1 "
          href="#pricing"
          onClick={handleShow}
        >
          INICIAR SESIÓN{" "}
        </Nav.Link>
      </Dropdown.Item>
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
            <h4
              className="modal-title text-dark text-center fw-bold pb-4"
              id="staticBackdropLabel"
            >
              Iniciar Sesion
            </h4>
            <Form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <Form.Control
                  name="email"
                  type="text"
                  className="form-control border border-light"
                  id="email"
                  placeholder="email"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Form.Label className="text-secondary " htmlFor="floatingInput">
                  Email
                </Form.Label>
              </div>
              <div className="form-floating">
                <Form.Control
                  name="password"
                  type="password"
                  className="form-control border border-light"
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

              <div className="row g-2 mt-2">
                <div className="d-grid gap-2 py-2">
                  <button
                    type="submit"
                    className="btn btn-dark fw-bold rounded d-grid"
                  >
                    <ToastContainer />
                    Siguiente
                  </button>
                </div>
              </div>
            </Form>

            <div className="d-flex flex-row justify-content-center align-items-center">
              <hr className="w-25"></hr>
              <span className="mx-2">o</span>
              <hr className="w-25"></hr>
            </div>

            <div className="text-center mt-2">
              <a className="d-grid " href="/checkin">
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
