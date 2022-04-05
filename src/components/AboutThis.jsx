import React from "react";
import { Nav, Offcanvas, Button, Col, Row } from "react-bootstrap";
import "./AboutThis.css";
import { useState } from "react";
function AboutThis({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="buttonUs" variant="danger" onClick={handleShow}>
        <span>PROYECTO</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=""></Offcanvas.Title>
        </Offcanvas.Header>
        <h1 className="tituloModal text-center">El equipo a cargo</h1>
        <Offcanvas.Body>
          <Row className="border border-3 mb-2">
            <Col className=" p-0 contenedor m-3  pe-1">
              <div>
                <img
                  src={`./img/facheros/DSC00375.jpg`}
                  alt="SSoria"
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
            </Col>
            <Col className="p-0 contenedorModal  mt-4 ">
              <ul className="listaModal">
                <li>
                  <Nav.Link
                    href="https://www.linkedin.com/in/soriagorgoroso/"
                    to
                    className="text-decoration-none modalDatos "
                  >
                    <img
                      src={"./img/icon/linkedin.png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className="  redesAboutUsModal">/soriagorgoroso</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/github.png"}
                      alt="GitHub"
                      className="iconAboutUsModal"
                      href="https://github.com/soriagorgoroso"
                    />
                    <span className=" redesAboutUsModal"> /soriagorgoroso</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className=" text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/gmail(2).png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className=" redesAboutUsModal">
                      soriagorgoroso@gmail.com
                    </span>
                  </Nav.Link>
                </li>
              </ul>
            </Col>
          </Row>{" "}
          <Row className="border border-3 mb-2">
            <Col className=" p-0 contenedor m-3  pe-1">
              <div>
                <img
                  src={`./img/facheros/DSC00609.jpg`}
                  alt=""
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
            </Col>
            <Col className="p-0 contenedorModal  mt-4 ">
              <ul className="listaModal">
                <li>
                  <Nav.Link
                    href="https://www.linkedin.com/in/f-n-marco/"
                    to
                    className="text-decoration-none modalDatos "
                  >
                    <img
                      src={"./img/icon/linkedin.png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className="  redesAboutUsModal">/f-n-marco</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/github.png"}
                      alt="GitHub"
                      className="iconAboutUsModal"
                      href="https://github.com/fnma88"
                    />
                    <span className=" redesAboutUsModal"> /fnma88</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className=" text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/gmail(2).png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className=" redesAboutUsModal">
                      fn.marcoarias@gmail.com{" "}
                    </span>
                  </Nav.Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="border border-3 mb-2">
            <Col className=" p-0 contenedor m-3  pe-1">
              <div>
                <img
                  src={`./img/facheros/DSC00375.jpg`}
                  alt="SSoria"
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
            </Col>
            <Col className="p-0 contenedorModal  mt-4 ">
              <ul className="listaModal">
                <li>
                  <Nav.Link
                    href="https://www.linkedin.com/in/soriagorgoroso/"
                    to
                    className="text-decoration-none modalDatos "
                  >
                    <img
                      src={"./img/icon/linkedin.png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className="  redesAboutUsModal">/soriagorgoroso</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/github.png"}
                      alt="GitHub"
                      className="iconAboutUsModal"
                      href="https://github.com/soriagorgoroso"
                    />
                    <span className=" redesAboutUsModal"> /soriagorgoroso</span>
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className=" text-decoration-none modalDatos ">
                    <img
                      src={"./img/icon/gmail(2).png"}
                      alt=""
                      className="iconAboutUsModal"
                    />
                    <span className=" redesAboutUsModal">
                      soriagorgoroso@gmail.com
                    </span>
                  </Nav.Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <div className="">
              <Nav.Link className="linkOffcanvasModal mx-1 " href="/proyecto">
                SOBRE EL PROYECTO
              </Nav.Link>
            </div>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default AboutThis;
