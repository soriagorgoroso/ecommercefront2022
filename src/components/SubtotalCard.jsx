import React from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/orders",
        headers: {
          Authorization: "Bearer " + loggedUser.token,
        },
        data: {
          user: loggedUser.sub,
          articles: articlesInCart,
        },
      });
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Error!");
      console.log(errorMessage);
    }
  };

  return (
    <Col>
      <div className="container containerCart containerCheckOut bg-light">
        <form action="" id="cart" className="">
          <div id="cart--summary">
            <div className="chargelist">
              <div className="charge">
                <div className="charge--description">Total Productos</div>
                <div className="charge--currency">$</div>
                <div className="charge--amount">{subtotal}</div>
              </div>
              <div className="charge">
                <div className="charge--description">Envio</div>
                <div className="charge--currency">$</div>
                <div className="charge--amount">
                  {articlesInCart.length >= 1 ? (envio = 150) : envio}
                </div>
              </div>
              <div className="charge">
                <div className="charge--description">IVA</div>
                <div className="charge--currency">$</div>
                <div className="charge--amount">{iva}</div>
              </div>
            </div>
            <div className="chargetotal">
              <div className="chargetotal--description">Total</div>
              <div className="charge--currency">$</div>
              <div className="chargetotal--amount">
                {subtotal + iva + envio}
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
                    className="button button--primary input-group-text bg-dark"
                    id="basic-addon3"
                  >
                    Aplicar codigo
                  </button>
                </div>
              </div>
            </div>
            <div className="controlset">
              <button
                id="confirmBtn"
                className="button button--primary bg-dark"
                type="submit"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </Col>
  );
}

export default SubtotalCard;
