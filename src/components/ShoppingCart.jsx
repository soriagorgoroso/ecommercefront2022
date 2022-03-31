import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import SubtotalCard from "./SubtotalCard";
function ShoppingCart() {
  const articlesInCart = useSelector((state) => state.cart);

  return (
    <Container>
      <div className="">
        <Row className="">
          <div className="container containerCart bg-transparent d-flex justify-content-around">
            <button
              id="resetBtn"
              type="Button"
              className="button button--primary px-4 py-2 bg-dark"
            >
              Volver
            </button>
            <button
              id="resetBtn"
              type="Button"
              className="button button--primary px-4 py-2 bg-dark"
            >
              Mi Carrito
            </button>
            <button
              id="resetBtn"
              type="Button"
              className="button button--primary px-4 py-2 bg-dark"
            >
              Envio
            </button>
            <button
              id="resetBtn"
              type="Button"
              className="button button--primary px-4 py-2 bg-dark"
            >
              Pago
            </button>
          </div>
        </Row>
        <Row>
          <Col className="">
            <div className="container containerCart bg-light ">
              <form action="" id="cart">
                <div id="cart--items">
                  <div className="itemlist">
                    {articlesInCart.map((article) => (
                      <div className="item d-flex flex-row justify-content-around align-items-center">
                        {/* <div className="item--controls">
                          <label
                            htmlFor="itemremove1"
                            className="toggle-label"
                          ></label>
                        </div> */}
                        <img
                          src={`/img/photos/${article.category}/${article.image}`}
                          alt={article.name}
                          className="img-thumbnail"
                          style={{ width: "20%" }}
                        ></img>

                        <div className="item--name pb-2">
                          <h5>{article.name}</h5>
                        </div>
                        <div>
                          <div className="input-group mb-3 ">
                            <span className="button--primary input-group-text px-4 bg-dark">
                              $ {article.price}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="input-group mb-3">
                            <button className="button--primary input-group-text bg-dark">
                              -
                            </button>
                            <span className="button--primary input-group-text bg-dark">
                              {article.quantity}
                            </span>
                            <button className="button--primary input-group-text bg-dark">
                              +
                            </button>
                          </div>
                        </div>

                        <div className="pb-3">
                          <span>$ {article.price * article.quantity}</span>
                        </div>
                        <div className="pb-3 fs-5">
                          <label
                            htmlFor="itemremove1"
                            className="toggle-label"
                            style={{ color: "black" }}
                          ></label>
                        </div>

                        {/* <div className="item--controls">
                          <label
                            htmlFor="itemremove1"
                            className="toggle-label"
                          ></label>
                        </div> */}
                      </div>
                    ))}

                    <input
                      className="remove-item"
                      type="checkbox"
                      id="itemremove2"
                    />

                    <input
                      className="remove-item"
                      type="checkbox"
                      id="itemremove3"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <SubtotalCard articlesInCart={articlesInCart} />
        </Row>
      </div>
    </Container>
  );
}

export default ShoppingCart;
