import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import { Col, Row, Container } from "react-bootstrap";
import SubtotalCard from "./SubtotalCard";
import Loader from "./Loader";
function ShoppingCart() {
  const articlesInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);

  return (
    <Container>
      {/* <Row className="">
          <div className="container bg-transparent d-flex justify-content-around">
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
        </Row> */}
      {!done ? (
        <Loader />
      ) : (
        <>
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
              <div className="bg-light mt-4 p-4">
                {articlesInCart.length === 0 ? (
                  <div className="text-center">
                    <h2 className="mb-4">
                      Tu carrito tiene sed. Dale cerveza.
                    </h2>
                    <div>
                      <a
                        href="/"
                        className="btn btn-dark text-center rounded-0 fw-bold"
                      >
                        Ir a la tienda
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="cart-title">Tu carrito</h2>

                    <div id="cart--items">
                      <div className="itemlist">
                        {articlesInCart.map((article) => (
                          <div key={article.id} className="item">
                            <img
                              src={`/img/photos/${article.category}/${article.image}`}
                              alt={article.name}
                              className="img-thumbnail"
                            ></img>

                            <div className="article-name mx-2 pb-2">
                              <h5>{article.name}</h5>
                            </div>

                            <div className="interior-row d-flex flex-row justify-content-center align-items-center">
                              <div className="article-price input-group mb-3 ">
                                <span className="rounded-0 px-2">
                                  US$ {article.price}
                                </span>
                              </div>

                              <div className="article-quantity-container px-2 input-group mb-3">
                                {article.quantity === 1 ? (
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
                                    onClick={(ev) => {
                                      ev.preventDefault();
                                      dispatch(
                                        addToCart({
                                          name: article.name,
                                          price: article.price,
                                          quantity: -1,
                                          category: article.category,
                                          image: article.image,
                                        })
                                      );
                                    }}
                                  >
                                    -
                                  </button>
                                )}
                                <span className="text-center rounded-0 fw-bold input-group-text">
                                  {article.quantity}
                                </span>
                                <button
                                  className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    dispatch(
                                      addToCart({
                                        name: article.name,
                                        price: article.price,
                                        quantity: 1,
                                        category: article.category,
                                        image: article.image,
                                      })
                                    );
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="article-total pb-3">
                              <span className="fw-bold">
                                US$ {article.price * article.quantity}
                              </span>
                            </div>

                            <div className="delete-article-btn pb-3 fs-5">
                              <button
                                className="btn btn-light fw-bold"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  dispatch(
                                    deleteFromCart({
                                      name: article.name,
                                      price: article.price,
                                      quantity: article.quantity,
                                      category: article.category,
                                      image: article.image,
                                    })
                                  );
                                }}
                              >
                                <label
                                  htmlFor="itemremove1"
                                  className="toggle-label"
                                  style={{ color: "black" }}
                                ></label>
                              </button>
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
                  </>
                )}
              </div>
            </Col>
            <SubtotalCard
              articlesInCart={articlesInCart}
              done={done}
              setDone={setDone}
            />
          </Row>
        </>
      )}
    </Container>
  );
}

export default ShoppingCart;
