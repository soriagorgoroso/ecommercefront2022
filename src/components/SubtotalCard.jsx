import React, { useState } from "react";
import { Row, Col, Accordion, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import "../pages/Cart.css";
import AdditionalOrderInfo from "./AdditionalOrderInfo";

function SubtotalCard({ articlesInCart, done, setDone }) {
  const loggedUser = useSelector((state) => state.user);
  //const [discountCode, setDiscountCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  let subtotal = articlesInCart.reduce(
    (total, article) => total + article.price * article.quantity,
    0
  );
  const iva = subtotal * 0.22;
  let envio = 0;

  //Función que quita las keys "category" y "image" a cada artículo antes de enviar la orden.

  const filteredArticles = articlesInCart.map((article) =>
    Object.keys(article).reduce((accumulator, key) => {
      if (key === "name" || key === "price" || key === "quantity") {
        accumulator[key] = article[key];
      }
      return accumulator;
    }, {})
  );

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(filteredArticles);

    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/orders`,

        headers: {
          Authorization: "Bearer " + loggedUser.token,
        },
        data: {
          user: loggedUser.sub,
          articles: filteredArticles,
        },
      });
      const toggleLoader = () => {
        setDone(undefined);
        setTimeout(() => {
          console.log("Procesando pedido");
          setDone(true);
        }, 5000);
      };
      toggleLoader();

      console.log(response.data);
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };

  return (
    <Col xs={12} lg={6}>
      <div className="bg-light mt-4 p-4">
        <div id="cart--summary">
          <div className="subtotal-container">
            <div className="charge">
              <div className="charge--description">Total Productos</div>
              <div className="charge--amount">US$ {subtotal}</div>
            </div>
            <div className="charge">
              <div className="charge--description">Envio</div>
              <div className="charge--amount">
                US$ {articlesInCart.length >= 1 ? (envio = 10) : envio}
              </div>
            </div>
            <div className="charge pb-0">
              <div className="charge--description">IVA</div>
              <div className="charge--amount">US$ {iva}</div>
            </div>
          </div>
          <div className="chargetotal fw-bold pb-3">
            <div className="chargetotal--description">Total</div>
            <div className="chargetotal--amount">
              <span>US$ {subtotal + envio + iva}</span>
            </div>
          </div>
        </div>
        <div id="cart--controls">
          <div className="promotioncontrols">
            <div className="controlset">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control button button--secondary"
                  id="discount-code"
                  aria-describedby="basic-addon3"
                  // onChange={(event) => {
                  //   setDiscountCode(event.target.value);
                  //   console.log(discountCode);
                  // }}
                />
                <button
                  className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                  id="basic-addon3"
                  // onClick={() => {
                  //   discountCode === "HackBier2022"
                  //     ? setTotal(total * 0.8)
                  //     : console.log(discountCode);
                  // }}
                >
                  Aplicar codigo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdditionalOrderInfo />

      <div className="bg-light p-4">
        <div className="controlset mt-2">
          <button
            id="confirmBtn"
            className="btn btn-dark text-center rounded-0 fw-bold"
            type="submit"
            onClick={handleSubmit}
          >
            Confirmar compra
          </button>
        </div>
      </div>
    </Col>
  );
}

export default SubtotalCard;
