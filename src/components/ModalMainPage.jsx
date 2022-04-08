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
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Gracias por ingresar!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
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
                className="badge bg-dark text-wrap"
              >
                Click aqui
              </a>
            </Row>
            <Row className="pt-4">
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
