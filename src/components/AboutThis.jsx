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
          <Row className="border border-3 mb-4 mx-1">
            <Col className=" p-0 contenedor m-3 me-5 text-center pe-1">
              <div>
                <img
                  src={`./img/facheros/FotoCV.jpeg`}
                  alt="SSoria"
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
              <span className="fw-bold">Gonzalo Barg</span>
            </Col>
            <Col className="p-0 contenedorModal  mt-4  d-flex align-items-center justify-content-evenly">
              <Nav.Link
                href="https://www.linkedin.com/in/gonzalo-barg/"
                to
                className="text-decoration-none modalDatos "
              >
                <img
                  src={"./img/icon/linkedin.png"}
                  alt=""
                  className="iconAboutUsModal me-2"
                />
              </Nav.Link>
              <Nav.Link className="text-decoration-none modalDatos ">
                <img
                  src={"./img/icon/github.png"}
                  alt="GitHub"
                  className="iconAboutUsModal me-2"
                  href="https://github.com/gonzabarg/"
                  to
                />
              </Nav.Link>
            </Col>
          </Row>{" "}
          <Row className="border border-3 mb-4 mx-1">
            <Col className=" p-0 contenedor m-3 me-5 text-center pe-1">
              <div>
                <img
                  src={`./img/facheros/DSC00609.jpg`}
                  alt=""
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
              <span className="fw-bold">Fernando Marco</span>
            </Col>
            <Col className="p-0 contenedorModal  mt-4 d-flex align-items-center justify-content-evenly">
              <Nav.Link
                href="https://www.linkedin.com/in/f-n-marco/"
                to
                className="text-decoration-none modalDatos "
              >
                <img
                  src={"./img/icon/linkedin.png"}
                  alt=""
                  className="iconAboutUsModal me-2"
                />
              </Nav.Link>
              <Nav.Link className="text-decoration-none modalDatos ">
                <img
                  src={"./img/icon/github.png"}
                  alt="GitHub"
                  className="iconAboutUsModal me-2"
                  href="https://github.com/fnma88"
                />
              </Nav.Link>
            </Col>
          </Row>
          <Row className="border border-3 mb-4 mx-1">
            <Col className=" p-0 contenedor m-3 me-5 text-center pe-1">
              <div>
                <img
                  src={`./img/facheros/DSC00375.jpg`}
                  alt="SSoria"
                  className="photoAboutUsmodal mx-auto object-fit"
                />
              </div>
              <span className="fw-bold">Sebastian Soria</span>
            </Col>
            <Col className="p-0 contenedorModal  mt-4 d-flex align-items-center justify-content-evenly">
              <Nav.Link
                href="https://www.linkedin.com/in/soriagorgoroso/"
                to
                className="text-decoration-none modalDatos "
              >
                <img
                  src={"./img/icon/linkedin.png"}
                  alt=""
                  className="iconAboutUsModal me-2"
                />
              </Nav.Link>
              <Nav.Link className="text-decoration-none modalDatos ">
                <img
                  src={"./img/icon/github.png"}
                  alt="GitHub"
                  className="iconAboutUsModal me-2"
                  href="https://github.com/soriagorgoroso"
                />
                <span className=" redesAboutUsModal "> </span>
              </Nav.Link>
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
