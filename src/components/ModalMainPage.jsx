import { useEffect } from "react";
import React from "react";
import { Modal, Button } from "react-bootstrap";
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal}
        onHide={handleModalHide}
      >
        <Modal.Header closeButton onClick={handleModalHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Gracias por ingresar!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Gracias por ingresar!</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalHide}> Cerrar</Button>
        </Modal.Footer>
      </Modal>
      ;
    </>
  );
}

export default ModalMainPage;
