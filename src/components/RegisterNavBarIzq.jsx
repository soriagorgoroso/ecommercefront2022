import "./UserForm.css";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import actions from "../redux/userActions";

import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

import {
  Modal,
  Button,
  FloatingLabel,
  Form,
  Nav,
  Col,
  Row,
} from "react-bootstrap";

function Register(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [warning, setWarning] = React.useState(null);
  const [formFields, setFormFields] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    address: "",
    telephone: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in formFields) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/users`,
        // headers: {
        //   Authorization: "Bearer " + userLogged.token,
        // },
        data: formFields,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    const response2 = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/tokens`,
      data: {
        email: formFields.email,
        password: formFields.password,
      },
    });
    if (response2.status === 200) {
      dispatch(actions.login(response2.data));
      navigate("/");
    } else {
      setWarning(response2.data.msg);
    }
  };

  return (
    <>
      <button
        className="btn btn-dark fw-bold rounded"
        onClick={() => handleShow(true)}
        to="#"
      >
        Registrate{" "}
      </button>

      <Modal
        show={show}
        {...props}
        aria-labelledby=""
        className=""
        onHide={handleClose}
      >
        <Modal.Body className="show-grid text-light backmodal">
          <div className="d-flex justify-content-between modal-body">
            <div className="p-0 d-flex justify-content-center modal-body">
              <div className="containerLogo p-0">
                <img
                  src="/img/logos/logosinfondo.png"
                  alt="LogoHackBier"
                  className="navBarImg"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn-close btn-close-dark"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
          <div className="px-2 pt-2">
            <h2 className="modal-title text-dark fw-bold pb-4 text-center">
              Crea tu cuenta
            </h2>

            <Form
              onSubmit={handleSubmit}
              className="form-floating mb-3 labeltext"
            >
              <Row>
                <Col>
                  {" "}
                  <FloatingLabel
                    className="m-3 text-dark"
                    controlId="Nombre"
                    label="Nombre"
                  >
                    <Form.Control
                      className=" text-dark border border-warning"
                      type="text"
                      placeholder="First Name"
                      value={formFields.firstname}
                      onChange={(ev) =>
                        setFormFields({
                          ...formFields,
                          firstname: ev.target.value,
                        })
                      }
                    />
                  </FloatingLabel>
                  {/* Nombre */}
                  <FloatingLabel
                    className="m-3 text-dark"
                    controlId="Apellido"
                    label="Apellido"
                  >
                    <Form.Control
                      className=" text-dark border border-warning"
                      type="text"
                      placeholder="Last Name"
                      value={formFields.lastname}
                      onChange={(ev) =>
                        setFormFields({
                          ...formFields,
                          lastname: ev.target.value,
                        })
                      }
                    />
                  </FloatingLabel>
                  {/* Apellido */}
                </Col>
                <Col>
                  {" "}
                  <FloatingLabel
                    className="m-3 text-dark"
                    controlId="Username"
                    label="Usuario"
                  >
                    <Form.Control
                      className=" text-dark border border-warning"
                      type="text"
                      placeholder="usuario"
                      value={formFields.username}
                      onChange={(ev) =>
                        setFormFields({
                          ...formFields,
                          username: ev.target.value,
                        })
                      }
                    />
                  </FloatingLabel>
                  {/* Usuario */}
                  <FloatingLabel
                    className="m-3 text-dark"
                    controlId="telephone"
                    label="Telefono"
                  >
                    <Form.Control
                      className=" text-dark border border-warning"
                      type="text"
                      placeholder="telephone"
                      onChange={(ev) =>
                        setFormFields({
                          ...formFields,
                          telephone: ev.target.value,
                        })
                      }
                      value={formFields.telephone}
                    />
                  </FloatingLabel>
                  {/* Telefono */}
                </Col>
              </Row>
              <Row></Row>

              <FloatingLabel
                className="m-3 text-dark"
                controlId="address"
                label="Direccion"
              >
                <Form.Control
                  className=" text-dark border border-warning"
                  type="text"
                  placeholder="Direcion"
                  onChange={(ev) =>
                    setFormFields({ ...formFields, address: ev.target.value })
                  }
                  value={formFields.addres}
                />
              </FloatingLabel>
              {/* Direccion */}

              <FloatingLabel
                className="m-3 text-dark"
                controlId="Email"
                label="Correo"
              >
                <Form.Control
                  className=" text-dark border border-warning"
                  placeholder="Email"
                  value={formFields.email}
                  onChange={(ev) =>
                    setFormFields({ ...formFields, email: ev.target.value })
                  }
                />
              </FloatingLabel>
              {/* Email */}

              <FloatingLabel
                className="m-3 text-dark"
                controlId="Password"
                label="Contraseña"
              >
                <Form.Control
                  className=" text-dark border border-warning"
                  type="password"
                  placeholder="Password"
                  value={formFields.password}
                  onChange={(ev) =>
                    setFormFields({ ...formFields, password: ev.target.value })
                  }
                />
                <span className="text-dark ">
                  *Datos protegidos y asegurados
                  <i className="ps-2 fa-solid fa-lock"></i>
                </span>
              </FloatingLabel>
              {/* Password */}

              <div className="row g-2">
                <div className=" d-grid gap-2 py-5">
                  <Button
                    type="submit"
                    className="btn btn-white bg-white fw-bold text-black border border-warning"
                  >
                    Siguiente
                  </Button>
                </div>
                <div>{warning && <p>{warning}</p>}</div>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
