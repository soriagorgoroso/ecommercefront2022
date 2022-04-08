import { useEffect } from "react";
import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/modalActions";

function ModalMainPage(props) {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleModalHide = () => {
    dispatch(actions.hide());
  };
  // const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal}
        onHide={handleModalHide}
      >
        <Modal.Header
          className="border-dark "
          closeButton
          onClick={handleModalHide}
        >
          <Modal.Title id="contained-modal-title-vcenter text-center">
            <h1 className="ms-5">Gracias por ingresar!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="text-center mb-4">
              <h4>Bienvenido a nuestro e-commerce</h4>
              <p>
                Este es un proyecto realizado en el marco educativo del
                Boot-Camp de Hack Academy basado en la web de la Cerveceria Mala
                Fama
              </p>
              <p>
                Abajo te comento como ingresar como administrador o tambien
                podes crearte un usuario{" "}
              </p>
            </Row>
            <Row className="border border-dark rounded p-3">
              <Col className="me-1  rounded text-start">
                <h6 className="text-decoration-underline text-center">
                  Funcionalidades:
                </h6>
                <p>LogIn/LogOut</p>
                <p>Crear Usuario</p>
                <p>Agregar al carrito</p>
                <p>CheckOut</p>
              </Col>
              <Col className=" rounded text-start align-self-start">
                <p className="text-decoration-underline text-center">
                  Para poder ingresar como administrador
                </p>
                <p>
                  <span className="fw-bold">usuario:</span> admin@hackbier.com
                </p>
                <p>
                  <span className="fw-bold">contraseña:</span> admin
                </p>
              </Col>
            </Row>
            <Row className="mt-2 p-3 border border-dark rounded text-start">
              <p className="text-center">
                Tambien contamos con Panel de Administrador
              </p>
              <p></p>
              <p>usuario: admin@hackbier.com</p>
              <p>contraseña: admin</p>
              <a
                href="https://frontadmin-hackbier.vercel.app/"
                className="badge bg-dark text-wrap mt-3"
              >
                Click aqui
              </a>
            </Row>
            <Row className="pt-4">
              <a href="/proyecto" className="badge bg-dark text-wrap p-2">
                MAS INFORMACION SOBRE ESTE PROYECTO
              </a>{" "}
              <Col></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Button className="btn btn-dark rounded-0" onClick={handleModalHide}>
          {" "}
          Cerrar
        </Button>
      </Modal>
    </>
  );
}

export default ModalMainPage;
