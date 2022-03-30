import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "./Cart.css";
import { Col, Row, Container } from "react-bootstrap";
function Cart(handlerTotal) {
  return (
    <>
      <NavBar />
      <Container>
        <div className="wrapper">
          <Row>
            {" "}
            <div className="container containerCar">
              <button
                id="resetBtn"
                type="Button"
                className="button button--primary"
              >
                Volver{" "}
              </button>
              <button
                id="resetBtn"
                type="Button"
                className="button button--primary"
              >
                Mi Carrito
              </button>
              <button
                id="resetBtn"
                type="Button"
                className="button button--primary"
              >
                Envio
              </button>
              <button
                id="resetBtn"
                type="Button"
                className="button button--primary"
              >
                Pago
              </button>
            </div>
          </Row>
          <Row>
            <Col>
              <div className="container containerCar">
                <form action="" id="cart">
                  <div id="cart--items">
                    <div className="itemlist">
                      <input
                        className="remove-item"
                        type="checkbox"
                        id="itemremove1"
                      />

                      <div className="item">
                        <div className="item--description">Una chebecha </div>
                        <div>
                          <div class="input-group mb-3">
                            <span class="button--primary input-group-text">
                              $
                            </span>

                            <span class="button--primary input-group-text">
                              5.00
                            </span>
                            <button className="button--primary input-group-text">
                              -
                            </button>
                            <button className="button--primary input-group-text">
                              +
                            </button>
                            <span class="button--primary input-group-text">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="item--summary">
                          <input
                            id="item1"
                            className="showhideflag"
                            type="checkbox"
                            checked="checked"
                          />

                          <div className="chargetotal">
                            <div className="chargetotal--description">
                              Total
                            </div>
                            <div className="chargetotal--currency">USD</div>
                            <div className="chargetotal--amount">300.00</div>
                          </div>
                        </div>
                        <div className="item--controls">
                          <label
                            for="itemremove1"
                            className="toggle-label"
                          ></label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item--description">Una chebecha </div>
                        <div>
                          <div class="input-group mb-3">
                            <span class="button--primary input-group-text">
                              $
                            </span>

                            <span class="button--primary input-group-text">
                              5.00
                            </span>
                            <button className="button--primary input-group-text">
                              -
                            </button>
                            <button className="button--primary input-group-text">
                              +
                            </button>
                            <span class="button--primary input-group-text">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="item--summary">
                          <input
                            id="item1"
                            className="showhideflag"
                            type="checkbox"
                            checked="checked"
                          />

                          <div className="chargetotal">
                            <div className="chargetotal--description">
                              Total
                            </div>
                            <div className="chargetotal--currency">USD</div>
                            <div className="chargetotal--amount">300.00</div>
                          </div>
                        </div>
                        <div className="item--controls">
                          <label
                            for="itemremove1"
                            className="toggle-label"
                          ></label>
                        </div>
                      </div>
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
                    <div className="item">
                      <div className="item--description">Una chebecha </div>
                      <div>
                        <div class="input-group mb-3">
                          <span class="button--primary input-group-text">
                            $
                          </span>

                          <span class="button--primary input-group-text">
                            5.00
                          </span>
                          <button className="button--primary input-group-text">
                            -
                          </button>
                          <button className="button--primary input-group-text">
                            +
                          </button>
                          <span class="button--primary input-group-text">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="item--summary">
                        <input
                          id="item1"
                          className="showhideflag"
                          type="checkbox"
                          checked="checked"
                        />

                        <div className="chargetotal">
                          <div className="chargetotal--description">Total</div>
                          <div className="chargetotal--currency">USD</div>
                          <div className="chargetotal--amount">300.00</div>
                        </div>
                      </div>
                      <div className="item--controls">
                        <label
                          for="itemremove1"
                          className="toggle-label"
                        ></label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col>
              <div className="container containerCar mt-5 containerCheckOut">
                <form action="" id="cart" className="">
                  <div id="cart--summary">
                    <div className="chargelist">
                      <div className="charge">
                        <div className="charge--description">
                          Total Productos{" "}
                        </div>
                        <div className="charge--currency">Usd $</div>
                        <div className="charge--amount">300.00</div>
                      </div>
                      <div className="charge">
                        <div className="charge--description">Envio</div>
                        <div className="charge--currency">Usd $</div>
                        <div className="charge--amount">300.00</div>
                      </div>
                      <div className="charge">
                        <div className="charge--description">IVA</div>
                        <div className="charge--currency">Usd $</div>
                        <div className="charge--amount">300.00</div>
                      </div>
                    </div>
                    <div className="chargetotal">
                      <div className="chargetotal--description">Total</div>
                      <div className="charge--currency">Usd $</div>
                      <div className="chargetotal--amount">900.00</div>
                    </div>
                  </div>
                  <div id="cart--controls">
                    <div className="promotioncontrols">
                      <div className="controlset">
                        <div class="input-group mb-3">
                          <span
                            className="button button--primary input-group-text"
                            id="basic-addon3"
                          >
                            Aplicar codigo
                          </span>
                          <input
                            type="text"
                            className="form-control button button--secondary"
                            id="basic-url"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="controlset">
                      <button
                        id="confirmBtn"
                        className="button button--primary"
                        type="button"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
