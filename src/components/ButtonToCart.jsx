import React from "react";
import "./singleArticle.css";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function ButtonToCart({ article }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [num, setNum] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNum = () => {
    setNum((num) => num + 1);
  };

  const takeNum = () => {
    if (num > 1) {
      setNum((num) => num - 1);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      addToCart({
        name: article.name,
        price: article.price,
        quantity: Number(num),
        category: article.category,
        image: article.image,
      })
    );
    setNum(1);
    handleShow();
  };

  return (
    <div className="to-cart-form my-4">
      <div className="d-flex justify-content-start align-items-center">
        <div className="me-2">
          <div className="input-group">
            {num === 1 ? (
              <button
                className="btn text-center rounded-0 fw-bold input-group-text bg-secondary"
                onClick={(ev) => ev.preventDefault()}
                disabled
              >
                -
              </button>
            ) : (
              <button
                className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                onClick={takeNum}
              >
                -
              </button>
            )}
            <span className="text-center rounded-0 fw-bold input-group-text">
              {num}
            </span>
            <button
              className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
              onClick={addNum}
            >
              +
            </button>
          </div>
        </div>
        <div className="ms-2">
          <button
            className="btn btn-dark text-center rounded-0 fw-bold"
            variant="outline-dark rounded-0"
            type="submit"
            onClick={handleSubmit}
          >
            AGREGAR A MI CARRITO
          </button>
        </div>
      </div>
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
              <div className="containerLogo">
                <img
                  src="/img/logos/logosinfondo.png"
                  alt="LogoHackBier"
                  className="navBarImg"
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center m-4">
            <a
              href="/carrito"
              className="btn btn-dark text-center rounded-0 mb-2 fw-bold"
            >
              Ir al carrito
            </a>
            <a
              href="/"
              className="btn btn-dark text-center rounded-0 mt-2 fw-bold"
            >
              Seguir comprando
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ButtonToCart;
