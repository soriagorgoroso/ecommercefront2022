import React from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import "../pages/Cart.css";

function SubtotalCard({ articlesInCart }) {
  const loggedUser = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = React.useState("");

  let subtotal = articlesInCart.reduce(
    (total, article) => total + article.price * article.quantity,
    0
  );

  const iva = subtotal * 0.22;
  let envio = 0;
  //const total = subtotal + iva + envio;

  const filteredArticles = articlesInCart.map((article) =>
    // Object.keys(article).reduce((accumulator, key) => {
    //   if (key === "name" || key === "price" || key === "quantity") {
    //     accumulator[key] = article[key];
    //   }
    //   return accumulator;
    // }, {})
    {
      delete article.image;
      delete article.category;
      return article;
    }
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
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Error!");
      console.log(errorMessage);
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
              <span>US$ {subtotal + iva + envio}</span>
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
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
                <button
                  className="btn btn-dark text-center rounded-0 fw-bold input-group-text"
                  id="basic-addon3"
                >
                  Aplicar codigo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light mt-4 p-4">
        <form action="" id="payment-info">
          <label htmlFor="name-on-card" className="my-2">
            Nombre (tal como figura en la tarjeta)
          </label>
          <input
            type={"text"}
            className="form-control"
            key={"name-on-card"}
            name="name-on-card"
            value={""}
          ></input>
          <label htmlFor="card-number" className="my-2">
            Número de tarjeta
          </label>
          <input
            type={"text"}
            className="form-control"
            key={"card-number"}
            name={"card-number"}
            value={""}
          ></input>
          <label htmlFor="expiration-date" className="my-2">
            Fecha de expiración
          </label>
          <input
            type={"date"}
            className="form-control"
            key={"expiration-date"}
            name={"expiration-date"}
            value={""}
          ></input>
          <label htmlFor="security-number" className="my-2">
            Código de seguridad
          </label>
          <input
            type={"text"}
            className="form-control"
            key={"security-number"}
            name={"security-number"}
            value={""}
            placeholder="xxx"
          ></input>
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
        </form>
      </div>
    </Col>
  );
}

export default SubtotalCard;
